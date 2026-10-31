# StaffSync REST API Backend

StaffSync's backend is a modular Node.js and Express.js RESTful service powered by MongoDB and Mongoose.

---

## 🛠️ Architecture & Core Dependencies

- **Runtime**: Node.js >= 18
- **Web Framework**: Express.js 4.x
- **Database & ODM**: MongoDB Atlas / Local MongoDB with Mongoose 8.x
- **Authentication**: JSON Web Tokens (`jsonwebtoken`) & `bcryptjs`
- **Security**: CORS headers, environment isolation, input sanitization

---

## 📂 Directory Layout

```
server/
├── config/
│   └── db.js               # Resilient Mongoose connection handler
├── controllers/            # Controller business logic
│   ├── authController.js
│   ├── employeeController.js
│   ├── attendanceController.js
│   ├── leaveController.js
│   ├── announcementController.js
│   ├── trainingController.js
│   └── dashboardController.js
├── middleware/
│   ├── authMiddleware.js   # JWT verification & RBAC authorization
│   └── errorMiddleware.js  # Global error & 404 handlers
├── models/                 # Mongoose schemas & data validations
│   ├── User.js
│   ├── Attendance.js
│   ├── Leave.js
│   ├── Announcement.js
│   ├── Training.js
│   └── TrainingEnrollment.js
├── routes/                 # Express route definitions
├── seed.js                 # Database seeder with sample workforce
└── server.js               # Express application entrypoint
```

---

## 📡 REST API Reference

### Authentication (`/api/auth`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Public | Authenticate user and issue JWT |
| `GET` | `/api/auth/me` | Private | Retrieve authenticated session profile |
| `PUT` | `/api/auth/profile` | Private | Update user profile and competencies |
| `PUT` | `/api/auth/password` | Private | Update account password |
| `GET` | `/api/auth/demo-credentials`| Public | Fetch demo credentials for sandbox evaluation |

### Workforce Management (`/api/employees`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/employees` | Private | List all employees (salary filtered by role) |
| `GET` | `/api/employees/:id` | Private | Get single employee profile |
| `POST` | `/api/employees` | HR Only | Create new workforce personnel record |
| `PUT` | `/api/employees/:id` | HR Only | Update employee details |
| `PATCH`| `/api/employees/:id/toggle-status` | HR Only | Activate/deactivate account |

### Biometric Attendance (`/api/attendance`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/attendance/today` | Private | Get current shift punch status |
| `POST` | `/api/attendance/punch-in` | Private | Record shift start timestamp |
| `POST` | `/api/attendance/punch-out` | Private | Record shift end & calculate hours |
| `GET` | `/api/attendance/my-history`| Private | Get personal 60-day attendance history |
| `GET` | `/api/attendance` | HR/Manager | Retrieve company-wide attendance log |
| `POST` | `/api/attendance/manual` | HR Only | Record manual attendance entry |

### Leaves & Time-Off (`/api/leaves`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/leaves/my-leaves` | Private | Get authenticated user's leaves |
| `POST` | `/api/leaves` | Private | Submit leave request |
| `DELETE`| `/api/leaves/:id` | Private | Cancel pending leave request |
| `GET` | `/api/leaves` | HR/Manager | Retrieve organization leave requests |
| `PATCH`| `/api/leaves/:id/review` | HR/Manager | Approve or reject leave request |

### Corporate Announcements (`/api/announcements`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/announcements` | Private | View active company broadcasts |
| `POST` | `/api/announcements` | HR Only | Publish corporate announcement |
| `PUT` | `/api/announcements/:id` | HR Only | Edit announcement details |
| `DELETE`| `/api/announcements/:id`| HR Only | Delete announcement |

### Training & Learning (`/api/training`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/training` | Private | Browse all active training programs |
| `POST` | `/api/training` | HR Only | Create new training course |
| `POST` | `/api/training/:id/enroll` | Private | Enroll in course |
| `GET` | `/api/training/my-enrollments` | Private | View personal enrolled courses |
| `PATCH`| `/api/training/enrollments/:id`| Private | Update course completion status |

### Dashboard Analytics (`/api/dashboard`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/dashboard/stats` | Private | Consolidated KPIs, Recharts trends & summaries |

---

## ⚡ Local Setup

```bash
# Install server dependencies
npm install

# Populate MongoDB with initial sample data
npm run seed

# Run in watch mode
npm run dev

# Run in production mode
npm start
```

