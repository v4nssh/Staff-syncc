const mongoose = require('mongoose');
const dns = require('dns');

// Configure reliable DNS servers for Windows Node.js SRV resolution
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {}

// Resilient URI sanitizer to handle unencoded special characters in credentials
const sanitizeMongoUri = (rawUri) => {
  if (!rawUri || typeof rawUri !== 'string') return rawUri;
  const trimmed = rawUri.trim();

  // Match protocol, username, password (may contain unescaped chars like @ or #), host, and path
  const match = trimmed.match(/^(mongodb(?:\+srv)?:\/\/)([^:]+):(.+)@([^@/?]+)(\/?.*)$/);
  if (!match) return trimmed;

  const proto = match[1];
  const user = encodeURIComponent(decodeURIComponent(match[2]));
  const pass = encodeURIComponent(decodeURIComponent(match[3]));
  const host = match[4];
  let rest = match[5] || '';

  // Append database name and default parameters if omitted
  if (rest === '' || rest === '/') {
    rest = '/staffsync?retryWrites=true&w=majority';
  } else if (!rest.includes('?') && !rest.startsWith('/?')) {
    rest = `${rest}?retryWrites=true&w=majority`;
  }

  return `${proto}${user}:${pass}@${host}${rest}`;
};

// Cache database connection across serverless invocations
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  const rawUri =
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    'mongodb://127.0.0.1:27017/staffsync';

  const mongoUri = sanitizeMongoUri(rawUri);

  // Return active connection if already established
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // If a connection promise is currently in progress, wait for it
  if (!cached.promise) {
    const isSrv = mongoUri.startsWith('mongodb+srv://');
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      ...(isSrv ? { tls: true } : {}),
    };

    cached.promise = mongoose
      .connect(mongoUri, opts)
      .then((mongooseInstance) => {
        console.log(
          `[MongoDB Connected]: ${mongooseInstance.connection.host}/${mongooseInstance.connection.name}`
        );
        return mongooseInstance;
      })
      .catch((err) => {
        cached.promise = null;
        console.error(`[MongoDB Connection Error]: ${err.message}`);
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};

module.exports = connectDB;
module.exports.sanitizeMongoUri = sanitizeMongoUri;
