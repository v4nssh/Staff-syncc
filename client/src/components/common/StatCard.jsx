import React from 'react';

const StatCard = ({
  title,
  value,
  icon: Icon,
  color = 'primary',
  subtitle,
  badgeText,
  badgeType = 'light',
}) => {
  const colorMap = {
    primary: {
      bg: 'rgba(0, 102, 204, 0.08)',
      text: '#0066cc',
      border: 'rgba(0, 102, 204, 0.15)',
    },
    success: {
      bg: 'rgba(52, 199, 89, 0.1)',
      text: '#28a745',
      border: 'rgba(52, 199, 89, 0.2)',
    },
    warning: {
      bg: 'rgba(255, 149, 0, 0.1)',
      text: '#d97706',
      border: 'rgba(255, 149, 0, 0.2)',
    },
    danger: {
      bg: 'rgba(255, 59, 48, 0.1)',
      text: '#dc2626',
      border: 'rgba(255, 59, 48, 0.2)',
    },
    info: {
      bg: 'rgba(0, 102, 204, 0.08)',
      text: '#0066cc',
      border: 'rgba(0, 102, 204, 0.15)',
    },
    purple: {
      bg: 'rgba(175, 82, 222, 0.1)',
      text: '#9333ea',
      border: 'rgba(175, 82, 222, 0.2)',
    },
  };

  const scheme = colorMap[color] || colorMap.primary;

  return (
    <div className="card h-100 stat-card">
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="small text-muted fw-medium text-uppercase tracking-wider" style={{ fontSize: '0.74rem' }}>
            {title}
          </span>
          {Icon && (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: scheme.bg,
                color: scheme.text,
              }}
            >
              <Icon size={20} />
            </div>
          )}
        </div>

        <div>
          <h2 className="fw-semibold mb-1" style={{ fontSize: '2.1rem', letterSpacing: '-0.03em', color: '#1d1d1f' }}>
            {value}
          </h2>
          {(subtitle || badgeText) && (
            <div className="d-flex align-items-center gap-2 mt-2">
              {badgeText && (
                <span className="badge bg-light text-secondary border px-2 py-1" style={{ borderRadius: '9999px', fontSize: '0.7rem' }}>
                  {badgeText}
                </span>
              )}
              {subtitle && <span className="small text-muted" style={{ fontSize: '0.8rem' }}>{subtitle}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
