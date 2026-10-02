'use client';
import Link from 'next/link';

export default function AccountPage() {
  const sections = [
    { icon: '👤', label: 'Profile', href: '/account', desc: 'Personal info, username' },
    { icon: '🔒', label: 'Security', href: '/account/security', desc: '2FA, password, devices' },
    { icon: '💳', label: 'Payment Methods', href: '/account', desc: 'Bank accounts, cards' },
    { icon: '🔔', label: 'Notifications', href: '/notifications', desc: 'Alerts and preferences' },
    { icon: '🔑', label: 'API Management', href: '/developers', desc: 'API keys and access' },
    { icon: '📋', label: 'Activity Log', href: '/account', desc: 'Recent account activity' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '32px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '24px' }}>
        
        {/* Sidebar */}
        <div>
          {/* Profile Card */}
          <div className="card" style={{ marginBottom: '16px', textAlign: 'center' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--brand-yellow-dim)', border: '3px solid var(--brand-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '28px', color: 'var(--brand-yellow)', margin: '0 auto 12px' }}>M</div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>Mahen User</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '8px' }}>mahen@example.com</div>
            <span className="badge badge-yellow">VIP 0</span>
            <div style={{ marginTop: '12px', padding: '10px', background: 'var(--bg-elevated)', borderRadius: '6px', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>UID</span>
                <span style={{ fontFamily: 'monospace' }}>784621934</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>KYC Level</span>
                <span style={{ color: 'var(--color-positive)', fontWeight: 600 }}>✓ Verified</span>
              </div>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="sidebar" style={{ borderRadius: '8px', padding: '8px 0' }}>
            {sections.map(s => (
              <Link key={s.label} href={s.href} className="sidebar-item" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '18px' }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 500 }}>{s.label}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Identity Verification */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Identity Verification</h2>
              <span className="badge badge-green">✓ Verified</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { level: 'Level 1', title: 'Email Verified', status: 'done', benefit: 'Deposit & Withdraw' },
                { level: 'Level 2', title: 'ID Verified', status: 'done', benefit: 'Increased limits' },
                { level: 'Level 3', title: 'Advanced KYC', status: 'pending', benefit: 'Unlimited access' },
              ].map(l => (
                <div key={l.level} style={{ background: 'var(--bg-elevated)', borderRadius: '8px', padding: '16px', border: `1px solid ${l.status === 'done' ? 'var(--color-positive)' : 'var(--border-default)'}` }}>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>{l.level}</div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>{l.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>{l.benefit}</div>
                  {l.status === 'done' ? (
                    <span style={{ fontSize: '12px', color: 'var(--color-positive)', fontWeight: 600 }}>✓ Completed</span>
                  ) : (
                    <Link href="/verify" className="btn btn-sm btn-primary">Complete →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Security Score */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Security Score</h2>
              <Link href="/account/security" style={{ color: 'var(--brand-yellow)', fontSize: '13px', textDecoration: 'none' }}>Improve →</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
              <div style={{ position: 'relative', width: 80, height: 80 }}>
                <svg viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="40" cy="40" r="32" fill="none" stroke="var(--bg-elevated)" strokeWidth="8" />
                  <circle cx="40" cy="40" r="32" fill="none" stroke="var(--color-positive)" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 32 * 0.78} ${2 * Math.PI * 32}`} strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800, color: 'var(--color-positive)' }}>78%</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>Good Security Level</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Enable Advanced Verification to reach 100%</div>
                <div className="progress-bar" style={{ marginTop: '10px' }}>
                  <div className="progress-fill progress-fill-green" style={{ width: '78%' }} />
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {[
                { label: 'Email 2FA', done: true }, { label: 'Phone Number', done: true },
                { label: 'Google Authenticator', done: false }, { label: 'Anti-Phishing Code', done: true },
                { label: 'Passkey', done: false }, { label: 'Device Management', done: true },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', padding: '6px 0' }}>
                  <span style={{ color: item.done ? 'var(--color-positive)' : 'var(--text-disabled)' }}>{item.done ? '✓' : '○'}</span>
                  <span style={{ color: item.done ? 'var(--text-secondary)' : 'var(--text-muted)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="card">
            <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Account Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                { label: 'Username', value: 'mahenuser', edit: true },
                { label: 'Email', value: 'mahen@example.com', edit: true },
                { label: 'Phone', value: '+91 98765 43210', edit: true },
                { label: 'Country', value: 'India', edit: false },
                { label: 'Account Created', value: '2024-01-15', edit: false },
                { label: 'Last Login', value: '2026-10-02 16:23', edit: false },
              ].map(field => (
                <div key={field.label} style={{ padding: '12px', background: 'var(--bg-elevated)', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>{field.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 500 }}>{field.value}</span>
                    {field.edit && <button style={{ background: 'none', border: 'none', color: 'var(--brand-yellow)', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit' }}>Edit</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Recent Activity</h2>
            {[
              { action: 'Login', device: 'Chrome on Windows', location: 'Mumbai, India', time: '2026-10-02 16:23', status: 'success' },
              { action: 'Withdrawal', device: 'API', location: 'System', time: '2026-10-01 15:30', status: 'success' },
              { action: 'Login', device: 'Safari on iPhone', location: 'Mumbai, India', time: '2026-09-30 10:15', status: 'success' },
              { action: 'Failed Login', device: 'Chrome on Windows', location: 'Unknown', time: '2026-09-29 22:45', status: 'failed' },
            ].map((act, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: i < 3 ? '1px solid var(--border-default)' : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: act.status === 'success' ? 'var(--color-positive-dim)' : 'var(--color-negative-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                  {act.status === 'success' ? '✅' : '⚠️'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: '14px' }}>{act.action}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{act.device} · {act.location}</div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{act.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
