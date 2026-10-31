<div align="center">

# ⚡ StaffSync
### Enterprise Human Resource Management & Workforce Synchronization Suite

[![React 19](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_8-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

<p align="center">
  A production-grade, full-stack Human Resource Management System (HRMS) engineered to modernize personnel operations, biometric attendance logging, tiered absence approvals, corporate broadcasts, and employee professional development.
</p>

</div>

---

## 📌 Architectural Overview

```
                      ┌─────────────────────────────────────────┐
                      │           Client Applications           │
                      │   React 19 SPA • Vite • Bootstrap 5     │
                      └────────────────────┬────────────────────┘
                                           │ HTTP / HTTPS (JWT)
                                           ▼
                      ┌─────────────────────────────────────────┐
                      │          Express.js REST API            │
                      │      CORS • Auth & Error Middleware     │
                      └───────┬─────────────┬─────────────┬─────┘
                              │             │             │
                ┌─────────────▼──┐   ┌──────▼──────┐   ┌──▼─────────────┐
                │ Authentication │   │ Attendance  │   │ Leave & L&D    │
                │  & Roles RBAC  │   │ & Reporting │   │ Workflows      │
                └─────────────┬──┘   └──────┬──────┘   └──┬─────────────┘
                              │             │             │
                              └─────────────┼─────────────┘
                                            │ Mongoose ODM
                                            ▼
                      ┌─────────────────────────────────────────┐
                      │           MongoDB Database              │
                      │  Users • Attendance • Leaves • Courses  │
                      └─────────────────────────────────────────┘
```

---

## ✨ Key Enterprise Capabilities

### 1. Granular Role-Based Access Control (RBAC)
- **Three-Tier Role Hierarchy**: Dedicated experiences and permission sets for **HR Administrator**, **Team Manager**, and **Staff Employee**.
- **Cryptographic Security**: Passwords salted and hashed with `bcryptjs`. Session authorization verified through cryptographically signed JSON Web Tokens (JWT) with HTTP Bearer extraction.
- **Client Route Guards**: Protected client-side navigation (`ProtectedRoute`) combined with strict server-side middleware verification on every private endpoint.

### 2. Executive & Operational Dashboard
- **Consolidated Key Metrics**: Real-time aggregation of active employee count, daily attendance ratios, pending leave requests, and scheduled training initiatives.
- **Data Visualizations via Recharts**:
  - *Weekly Attendance Dynamics*: Interactive bar chart tracking Present, Late, and Absent personnel across the preceding 7 days.
  - *Workforce Department Distribution*: Responsive doughnut chart depicting headcount breakdown across Engineering, Product Design, Marketing, Sales, and Human Resources.
- **Live Biometric Shift Punch Widget**: Instant shift punch-in/out terminal displaying real-time clock, shift status, and elapsed work hours.

### 3. Workforce Directory & Talent Profiles
- **Centralized Employee Registry**: Instant search across names, job titles, and email addresses with multi-dimensional filtering by Department, Role, and Employment Status.
- **Role-Gated Compensation Visibility**: Sensitive salary metrics are automatically excluded by backend query projection unless requested by HR Administrators or self-profile queries.
- **Personnel CRUD & Lifecycle Management**: Modal-driven creation, profile modifications, emergency contact records, competency tags, and non-destructive account deactivation safeguards.

### 4. Digital Attendance & Shift Tracking
- **Automated Punctuality & Shift Hours**:
  - Real-time work duration computation down to decimal precision.
  - Automatic flagging of late arrivals for check-ins recorded after 09:30 AM.
  - Intelligent shift classification into **Present**, **Late**, and **Half Day** (shifts under 4 hours).
- **Employee Personal Ledger**: Comprehensive 60-day individual attendance log with personal punctual rate and average shift hours.
- **Supervisory Attendance Register**: HR and Managers can inspect organization-wide logs filtered by specific calendar date, department, or status, with HR manual adjustment capabilities.

### 5. Absence & Leave Management
- **Self-Service Application**: Employees apply for Annual, Sick, Casual, Parental, or Unpaid leave with automated calendar day calculations and date boundary validations.
- **Two-Way Approval Workflow**: Team managers and HR administrators review, approve, or reject pending leaves with supervisory feedback notes.
- **Transparent Audit Trails**: Real-time status badges (*Pending*, *Approved*, *Rejected*) and self-cancellation for unreviewed requests.

### 6. Corporate Broadcasts & Notices
- **Company-Wide Notice Board**: Publish corporate announcements, policy revisions, operational updates, and upcoming company holidays.
- **Categorization & Severity Levels**: Filter by category (*General*, *Policy*, *Event*, *Urgent*, *Holiday*) with visual urgency badges (*Low*, *Medium*, *High*, *Urgent*).
- **Administrative Publishing Controls**: Restricted to HR administration for creating, editing, and deleting broadcast entries.

### 7. Learning & Development (L&D)
- **Course Catalog Management**: HR administrators publish upskilling programs detailing instructors, syllabus modules, delivery format (*Online*, *In-Person*, *Hybrid*), and enrollment capacities.
- **One-Click Enrollment & Tracking**: Employees register for open courses and track progress milestones from *Enrolled* to *In Progress* to *Completed* with verified completion timestamps.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Client** | React 19, Vite 8, Bootstrap 5, Custom CSS Variables, React Router 7, React Icons, Recharts, Axios |
| **Backend REST API** | Node.js (v18+), Express.js 4.x, JSON Web Tokens (jsonwebtoken), bcryptjs, CORS, Dotenv |
| **Database & ODM** | MongoDB Atlas / Local MongoDB, Mongoose 8.x |
| **Continuous Integration** | GitHub Actions (`.github/workflows/ci.yml`) |
| **Deployment Targets** | Vercel (Client SPA & Serverless Rewrites), Render (API Web Service), MongoDB Atlas (Cloud Cluster) |

---

## 📂 Repository Structure

```
StaffSync/
├── .github/
│   ├── workflows/              # GitHub Actions CI automation
│   │   └── ci.yml
│   ├── ISSUE_TEMPLATE/         # Bug report & feature request templates
│   └── pull_request_template.md
│
├── client/                     # React 19 Frontend Web Application
│   ├── public/                 # Favicon & brand SVG assets
│   ├── src/
│   │   ├── api/                # Axios instance & interceptors
│   │   ├── components/
│   │   │   ├── common/         # StatCard, ProtectedRoute, LoadingSpinner
│   │   │   └── layout/         # Top Navbar, Collapsible Sidebar, Layout
│   │   ├── context/            # Global AuthContext & session state
│   │   ├── pages/              # 8 Enterprise UI views & dashboards
│   │   ├── App.jsx             # Route manifest
│   │   ├── index.css           # Custom design tokens & Navy Blue theme
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Express.js REST API Backend
│   ├── config/
│   │   └── db.js               # Database connection lifecycle handler
│   ├── controllers/            # 7 Business logic controller modules
│   ├── middleware/             # Auth JWT verification & error handling
│   ├── models/                 # 6 Mongoose ODM data schemas
│   ├── routes/                 # Express route definitions
│   ├── seed.js                 # Database seeder with sample workforce
│   ├── server.js               # Server entrypoint
│   ├── .env.example
│   └── package.json
│
├── .env.example                # Unified environment reference
├── .gitignore
├── CONTRIBUTING.md             # Developer workflow & PR guidelines
├── LICENSE                     # MIT License
├── package.json                # Root orchestrator scripts
├── README.md                   # Project documentation
├── render.yaml                 # Render Blueprint configuration
├── SECURITY.md                 # Security & vulnerability reporting policy
└── vercel.json                 # Vercel deployment & rewrite rules
```

---

## ⚡ Quick Start Guide

### 1. Prerequisites
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **MongoDB**: Local MongoDB instance or free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/v4nssh/Staff-syncc.git
cd StaffSync

# Install root, backend, and frontend packages simultaneously
npm run install:all
```

### 3. Environment Configuration

**Backend (`server/.env`):**
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/staffsync
JWT_SECRET=your_jwt_secret_key_minimum_32_characters_here
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```
*(When using MongoDB Atlas, supply your cluster connection string in `MONGO_URI` or `MONGODB_URI`.)*

**Frontend (`client/.env`):**
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Seed Database
Initialize sample workforce records, historical attendance logs, leave records, announcements, and training courses:
```bash
npm run seed
```

### 5. Launch Development Environment
Run both backend and frontend servers:

```bash
# Terminal 1: Backend API (runs on http://localhost:5000)
npm run server

# Terminal 2: Frontend SPA (runs on http://localhost:5173)
npm run client
```

---

## 👥 Sandbox Evaluation Accounts

For immediate evaluation, the database seeder provides three pre-configured accounts:

| Role | Email Address | Default Password | Access Scope |
| :--- | :--- | :--- | :--- |
| **HR Administrator** | `admin@staffsync.com` | `Password123!` | Full administrative control: employee CRUD, status toggle, manual attendance adjustment, leave approvals, announcements, training creation |
| **Team Manager** | `manager@staffsync.com` | `Password123!` | Team management: review team leaves, attendance register inspection, corporate announcements, learning catalog |
| **Staff Employee** | `employee@staffsync.com` | `Password123!` | Self-service: digital punch in/out, personal history, leave applications, training enrollment, personal profile updates |

---

## 📡 REST API Reference

| Domain | Method | Endpoint | Access Level | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/auth/login` | Public | Authenticate user and issue JWT |
| | `GET` | `/api/auth/me` | Private | Retrieve current session profile |
| | `PUT` | `/api/auth/profile` | Private | Update personal profile details |
| | `PUT` | `/api/auth/password` | Private | Change account password |
| **Employees** | `GET` | `/api/employees` | Private | List employees (salary gated) |
| | `POST` | `/api/employees` | HR Only | Create employee record |
| | `PUT` | `/api/employees/:id` | HR Only | Update employee details |
| | `PATCH` | `/api/employees/:id/toggle-status` | HR Only | Toggle account status |
| **Attendance** | `GET` | `/api/attendance/today` | Private | Today's shift punch status |
| | `POST` | `/api/attendance/punch-in` | Private | Record shift start |
| | `POST` | `/api/attendance/punch-out` | Private | Record shift end |
| | `GET` | `/api/attendance/my-history` | Private | 60-day personal attendance log |
| | `GET` | `/api/attendance` | HR / Manager | Company attendance register |
| | `POST` | `/api/attendance/manual` | HR Only | Manual attendance entry |
| **Leaves** | `GET` | `/api/leaves/my-leaves` | Private | Personal leave requests |
| | `POST` | `/api/leaves` | Private | Submit leave application |
| | `GET` | `/api/leaves` | HR / Manager | All company leave requests |
| | `PATCH` | `/api/leaves/:id/review` | HR / Manager | Approve or reject request |
| **Announcements** | `GET` | `/api/announcements` | Private | List company announcements |
| | `POST` | `/api/announcements` | HR Only | Publish new announcement |
| | `DELETE` | `/api/announcements/:id` | HR Only | Delete announcement |
| **Training** | `GET` | `/api/training` | Private | List training courses |
| | `POST` | `/api/training` | HR Only | Create new training course |
| | `POST` | `/api/training/:id/enroll` | Private | Enroll in training program |
| | `GET` | `/api/training/my-enrollments` | Private | Personal enrollments |
| **Dashboard** | `GET` | `/api/dashboard/stats` | Private | Aggregated metrics & chart data |

---

## 🌐 Production Deployment

### Option A: Vercel (Full-Stack Monorepo)
1. Import this repository into [Vercel](https://vercel.com).
2. The included `vercel.json` automatically orchestrates frontend building and routing.
3. Configure the backend environment variables (`MONGO_URI`, `JWT_SECRET`, `NODE_ENV=production`) under **Project Settings > Environment Variables**.

### Option B: Split Cloud (Render + Vercel)
- **Backend on Render**: Connect repository and select `server` as the root directory. Build command: `npm install`, Start command: `npm start`. Add MongoDB Atlas URI in environment variables.
- **Frontend on Vercel**: Connect repository and select `client` as the root directory with Vite preset. Set `VITE_API_URL` to your live Render backend URL.

---

## 🔒 Security Architecture

- **Token-Based Stateless Auth**: JSON Web Tokens with strict 30-day lifecycle and Bearer authorization headers.
- **Password Salting**: `bcryptjs` hashing with 10 salt rounds before storage in MongoDB.
- **RBAC Middleware**: Strict role authorization at route level preventing privilege escalation.
- **Data Protection**: Sensitive compensation fields (`salary`) automatically projected out for unauthorized roles.
- **CORS Protection**: Restricted cross-origin resource sharing configured via environment variable `CLIENT_URL`.

---

## 📄 License & Maintainer

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full details.

Developed and maintained by **[Vansh Singh Yadav](https://github.com/v4nssh)**.
