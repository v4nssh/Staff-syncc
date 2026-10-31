# StaffSync Frontend Client Application

StaffSync's web client is a responsive, single-page enterprise dashboard built with React 19, Vite, Bootstrap 5, and Recharts.

---

## 🎨 Tech Stack & Architecture

- **UI Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: Bootstrap 5 + Custom Design Tokens (`index.css`)
- **Navigation**: React Router DOM v7
- **Analytics Visualizations**: Recharts
- **Icons**: React Icons (Feather Icons pack)
- **HTTP Client**: Axios with centralized JWT Bearer interceptor

---

## 📂 Directory Structure

```
client/
├── public/                 # Static assets (favicon, branding)
├── src/
│   ├── api/
│   │   └── axios.js        # Axios instance configured with JWT interceptors
│   ├── components/
│   │   ├── common/         # StatCard, ProtectedRoute, LoadingSpinner
│   │   └── layout/         # Top Navbar, Collapsible Sidebar, Layout
│   ├── context/
│   │   └── AuthContext.jsx # Global auth state, session storage, permissions
│   ├── pages/
│   │   ├── Login.jsx       # Auth portal with fast role switcher
│   │   ├── Dashboard.jsx   # Metrics, attendance trends, quick punch widget
│   │   ├── Employees.jsx   # Workforce directory, CRUD, profile modal
│   │   ├── Attendance.jsx  # Digital punch terminal, attendance registers
│   │   ├── Leaves.jsx      # Leave workflow & approval management
│   │   ├── Announcements.jsx # Corporate notice board
│   │   ├── Training.jsx    # Learning catalog & enrollment tracking
│   │   ├── Profile.jsx     # Personal profile & password security
│   │   └── NotFound.jsx    # 404 handler
│   ├── App.jsx             # Route definitions and layout nesting
│   ├── index.css           # Navy Blue design system & CSS variables
│   └── main.jsx            # Application entrypoint
├── package.json
└── vite.config.js
```

---

## 🚀 Development Scripts

```bash
# Install client dependencies
npm install

# Start Vite local development server (HMR enabled)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run Oxlint static analysis
npm run lint
```

---

## 🔐 Authentication & Route Guards

Protected routes are wrapped with `<ProtectedRoute />`. Unauthorized access attempts redirect to `/login` while preserving intended destination state. Roles are evaluated via `AuthContext`:
- `hr`: Full administrative access
- `manager`: Operational oversight & approvals
- `employee`: Self-service employee portal
