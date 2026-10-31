import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FiMenu, FiCalendar, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = ({ onToggleSidebar }) => {
  const { user } = useAuth();

  const todayStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const getRoleBadge = (role) => {
    switch (role) {
      case 'hr':
        return <span className="badge bg-primary text-white px-3 py-1 rounded-pill fw-medium">HR Administrator</span>;
      case 'manager':
        return <span className="badge bg-info-subtle text-primary border px-3 py-1 rounded-pill fw-medium">Team Manager</span>;
      default:
        return <span className="badge bg-light text-secondary border px-3 py-1 rounded-pill fw-medium">Staff Employee</span>;
    }
  };

  return (
    <header className="navbar-top px-4 py-2 d-flex align-items-center justify-content-between shadow-none">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-light d-lg-none p-2 rounded-3 border"
          onClick={onToggleSidebar}
          aria-label="Toggle Navigation"
        >
          <FiMenu size={18} />
        </button>
        <div>
          <h6 className="mb-0 fw-semibold text-dark" style={{ letterSpacing: '-0.02em', fontSize: '1.05rem' }}>
            StaffSync
          </h6>
          <span className="text-muted d-none d-sm-inline" style={{ fontSize: '0.74rem' }}>
            Workforce Management Suite
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        {/* Current Date Display */}
        <div className="d-none d-md-flex align-items-center gap-2 text-muted px-3 py-1 rounded-pill" style={{ backgroundColor: '#f0f0f2', fontSize: '0.8rem' }}>
          <FiCalendar style={{ color: '#0066cc' }} />
          <span>{todayStr}</span>
        </div>

        {/* User Role Badge */}
        {getRoleBadge(user?.role)}

        {/* User Profile Pill */}
        <Link
          to="/profile"
          className="d-flex align-items-center gap-2 text-decoration-none text-dark p-1 px-2 rounded-pill transition-all"
          style={{ backgroundColor: '#f5f5f7', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <img
            src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=0066cc&color=fff`}
            alt={user?.name}
            className="rounded-circle object-fit-cover"
            width="26"
            height="26"
          />
          <span className="small fw-medium d-none d-sm-inline text-dark" style={{ fontSize: '0.82rem' }}>
            {user?.name?.split(' ')[0] || 'Profile'}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
