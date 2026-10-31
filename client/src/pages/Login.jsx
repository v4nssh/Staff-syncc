import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FiLock,
  FiMail,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiUserCheck,
} from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Authentication failed. Please verify credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSelectDemo = async (demoEmail) => {
    setEmail(demoEmail);
    setPassword('Password123!');
    setError('');
    setLoading(true);
    try {
      await login(demoEmail, 'Password123!');
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Authentication failed. Please verify credentials or ensure database is seeded.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3 p-md-4" style={{ backgroundColor: '#f5f5f7' }}>
      <div
        className="card border-0 overflow-hidden w-100"
        style={{
          maxWidth: '960px',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.06)',
          backgroundColor: '#ffffff'
        }}
      >
        <div className="row g-0">
          {/* Left Apple Editorial Dark Tile */}
          <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between" style={{ backgroundColor: '#1d1d1f', color: '#ffffff' }}>
            <div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="brand-logo-icon" style={{ backgroundColor: '#0066cc', width: '34px', height: '34px', borderRadius: '10px' }}>
                  <span className="fw-semibold">SS</span>
                </div>
                <div>
                  <h5 className="fw-semibold mb-0 text-white" style={{ letterSpacing: '-0.02em', fontSize: '1.05rem' }}>
                    StaffSync
                  </h5>
                  <span className="text-secondary" style={{ fontSize: '0.74rem' }}>
                    Enterprise HRMS
                  </span>
                </div>
              </div>

              <h3 className="fw-semibold text-white mb-3" style={{ letterSpacing: '-0.028em', lineHeight: '1.2' }}>
                Workforce operations, perfectly synchronized.
              </h3>
              <p className="text-secondary small mb-4" style={{ color: '#86868b', lineHeight: '1.5' }}>
                A refined human resource management suite for biometric attendance, leave approvals, workforce directory, and talent development.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-2">
                  <FiCheckCircle style={{ color: '#2997ff', marginTop: '3px', flexShrink: 0 }} />
                  <span className="small text-light" style={{ fontSize: '0.85rem' }}>Three-tier access for HR, Managers & Staff</span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <FiCheckCircle style={{ color: '#2997ff', marginTop: '3px', flexShrink: 0 }} />
                  <span className="small text-light" style={{ fontSize: '0.85rem' }}>Automated shift calculation & punctuality tags</span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <FiCheckCircle style={{ color: '#2997ff', marginTop: '3px', flexShrink: 0 }} />
                  <span className="small text-light" style={{ fontSize: '0.85rem' }}>Executive analytics & department distribution</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-top border-secondary border-opacity-10 small" style={{ color: '#6e6e73', fontSize: '0.74rem' }}>
              StaffSync Enterprise HRMS &bull; Cloud Edition
            </div>
          </div>

          {/* Right Clean Login Portal */}
          <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center" style={{ backgroundColor: '#ffffff' }}>
            <div className="mb-4">
              <h4 className="fw-semibold mb-1" style={{ letterSpacing: '-0.02em', color: '#1d1d1f' }}>
                Sign in to your portal
              </h4>
              <p className="text-muted small mb-0" style={{ fontSize: '0.86rem' }}>
                Enter your work credentials or choose an evaluation role below.
              </p>
            </div>

            {/* Quick Demo Selector Chips */}
            <div className="mb-4 p-3 rounded-4" style={{ backgroundColor: '#f5f5f7', border: '1px solid rgba(0,0,0,0.04)' }}>
              <span className="d-block small fw-medium text-muted text-uppercase mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.04em' }}>
                One-Click Sandbox Login:
              </span>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectDemo('admin@staffsync.com')}
                  className="btn btn-sm d-flex align-items-center gap-1 px-3 py-1"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    color: '#0066cc',
                    fontWeight: 500
                  }}
                >
                  <FiShield size={12} />
                  <span>HR Admin</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectDemo('manager@staffsync.com')}
                  className="btn btn-sm d-flex align-items-center gap-1 px-3 py-1"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    color: '#1d1d1f',
                    fontWeight: 500
                  }}
                >
                  <FiUserCheck size={12} />
                  <span>Manager</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectDemo('employee@staffsync.com')}
                  className="btn btn-sm d-flex align-items-center gap-1 px-3 py-1"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    color: '#1d1d1f',
                    fontWeight: 500
                  }}
                >
                  <FiUserCheck size={12} />
                  <span>Employee</span>
                </button>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger py-2 px-3 small mb-3 rounded-3" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-medium text-muted" style={{ fontSize: '0.8rem' }}>Work Email</label>
                <div className="input-group">
                  <span className="input-group-text bg-light text-muted border-end-0" style={{ borderRadius: '12px 0 0 12px' }}>
                    <FiMail />
                  </span>
                  <input
                    type="email"
                    className="form-control border-start-0 ps-0"
                    style={{ borderRadius: '0 12px 12px 0' }}
                    placeholder="e.g. admin@staffsync.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <label className="form-label small fw-medium text-muted mb-0" style={{ fontSize: '0.8rem' }}>Password</label>
                  <span className="small text-muted" style={{ fontSize: '0.75rem' }}>
                    Demo: <code>Password123!</code>
                  </span>
                </div>
                <div className="input-group">
                  <span className="input-group-text bg-light text-muted border-end-0" style={{ borderRadius: '12px 0 0 12px' }}>
                    <FiLock />
                  </span>
                  <input
                    type="password"
                    className="form-control border-start-0 ps-0"
                    style={{ borderRadius: '0 12px 12px 0' }}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: '#0066cc',
                  borderColor: '#0066cc',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  height: '44px'
                }}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
