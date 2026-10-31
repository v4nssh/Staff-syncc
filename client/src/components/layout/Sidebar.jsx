import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  FiGrid,
  FiUsers,
  FiClock,
  FiCalendar,
  FiBell,
  FiBookOpen,
  FiUser,
  FiLogOut,
  FiX,
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: FiGrid },
    { name: 'Employees', path: '/employees', icon: FiUsers },
    { name: 'Attendance', path: '/attendance', icon: FiClock },
    { name: 'Leaves', path: '/leaves', icon: FiCalendar },
    { name: 'Announcements', path: '/announcements', icon: FiBell },
    { name: 'Training', path: '/training', icon: FiBookOpen },
    { name: 'My Profile', path: '/profile', icon: FiUser },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-index-backdrop d-lg-none"
          onClick={onClose}
        />
      )}

      <aside
        className={`sidebar text-white d-flex flex-column justify-content-between p-3 ${
          isOpen ? 'show' : ''
        }`}
      >
        <div>
          {/* Brand header */}
          <div className="d-flex align-items-center justify-content-between px-2 py-3 mb-3 border-bottom border-secondary border-opacity-10">
            <div className="d-flex align-items-center gap-2">
              <div className="brand-logo-icon">
                <span>SS</span>
              </div>
              <div>
                <h6 className="fw-semibold mb-0 text-white" style={{ letterSpacing: '-0.02em', fontSize: '0.98rem' }}>
                  StaffSync
                </h6>
                <span className="text-secondary" style={{ fontSize: '0.7rem' }}>
                  HRMS Enterprise
                </span>
              </div>
            </div>
            <button
              className="btn btn-link text-white p-0 d-lg-none"
              onClick={onClose}
              aria-label="Close Navigation"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Navigation link list */}
          <nav className="d-flex flex-column gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar-nav-item d-flex align-items-center gap-3 px-3 py-2 text-decoration-none ${
                      isActive ? 'active-nav-item' : ''
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer session info */}
        <div className="pt-3 border-top border-secondary border-opacity-10">
          <div className="d-flex align-items-center justify-content-between px-2 mb-3">
            <div className="d-flex align-items-center gap-2 overflow-hidden">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=0066cc&color=fff`}
                alt={user?.name}
                className="rounded-circle flex-shrink-0"
                width="32"
                height="32"
              />
              <div className="overflow-hidden">
                <p className="mb-0 text-white small fw-medium text-truncate" style={{ fontSize: '0.82rem' }}>
                  {user?.name}
                </p>
                <p className="mb-0 text-secondary text-truncate" style={{ fontSize: '0.7rem' }}>
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={logout}
            className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2 border-opacity-25"
            style={{ borderRadius: '9999px', fontSize: '0.82rem', padding: '7px 14px' }}
          >
            <FiLogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
