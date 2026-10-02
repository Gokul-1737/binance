'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SecurityPage() {
  const [twoFaEnabled, setTwoFaEnabled] = useState(true);
  const [phoneEnabled, setPhoneEnabled] = useState(true);

  const securityItems = [
    { icon: '📱', title: 'Google Authenticator (2FA)', desc: 'Use Google Authenticator app for two-factor authentication. Strongly recommended.', status: twoFaEnabled, key: 'totp', risk: 'High Protection' },
    { icon: '🔑', title: 'Passkey', desc: 'Use biometric or hardware key for passwordless login and withdrawals.', status: false, key: 'passkey', risk: 'Highest Protection' },
    { icon: '📧', title: 'Email Verification', desc: 'Email code verification for login and withdrawals.', status: true, key: 'email', risk: 'Medium Protection' },
    { icon: '📞', title: 'Phone Number', desc: 'SMS verification for login and sensitive operations.', status: phoneEnabled, key: 'phone', risk: 'Medium Protection' },
    { icon: '🛡️', title: 'Anti-Phishing Code', desc: 'A unique code added to all BINANCE emails to verify authenticity.', status: true, key: 'antiphish', risk: 'Protection' },
    { icon: '💻', title: 'Device Management', desc: 'View and manage all devices that have accessed your account.', status: null, key: 'device', risk: null },
    { icon: '📋', title: 'Login Activity', desc: 'Review recent login history and active sessions.', status: null, key: 'activity', risk: null },
    { icon: '🔐', title: 'Withdrawal Whitelist', desc: 'Only allow withdrawals to pre-approved wallet addresses.', status: false, key: 'whitelist', risk: 'High Protection' },
  ];

  const devices = [
    { name: 'Chrome on Windows', location: 'Mumbai, India', time: '2026-10-02 16:23', current: true },
    { name: 'Safari on iPhone', location: 'Mumbai, India', time: '2026-09-30 10:15', current: false },
    { name: 'BINANCE App (Android)', location: 'Pune, India', time: '2026-09-28 14:30', current: false },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <Link href="/account" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}>← Account</Link>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>Security Center</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>Manage your account security settings</p>

        {/* Security Score */}
        <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, rgba(14,203,129,0.08) 0%, rgba(30,155,240,0.05) 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
              <svg viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="40" cy="40" r="32" fill="none" stroke="var(--bg-elevated)" strokeWidth="8" />
                <circle cx="40" cy="40" r="32" fill="none" stroke="var(--color-positive)" strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 32 * 0.78} ${2 * Math.PI * 32}`} strokeLinecap="round" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800, color: 'var(--color-positive)' }}>78%</div>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>Security Score: Good</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '10px' }}>Enable Passkey and Withdrawal Whitelist to reach 100%</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="badge badge-green">✓ 2FA Active</span>
                <span className="badge badge-green">✓ Email Verified</span>
                <span className="badge badge-gray">○ Passkey Missing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {securityItems.map(item => (
            <div key={item.key} className="security-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                <div className="security-icon">{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <span style={{ fontWeight: 600, fontSize: '15px' }}>{item.title}</span>
                    {item.risk && <span className="badge badge-blue" style={{ fontSize: '10px' }}>{item.risk}</span>}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                {item.status !== null ? (
                  <>
                    <span style={{ fontSize: '13px', color: item.status ? 'var(--color-positive)' : 'var(--text-disabled)', fontWeight: 500 }}>
                      {item.status ? 'Enabled' : 'Disabled'}
                    </span>
                    <button
                      className={`btn btn-sm ${item.status ? 'btn-secondary' : 'btn-primary'}`}
                      onClick={() => {
                        if (item.key === 'totp') setTwoFaEnabled(!twoFaEnabled);
                        if (item.key === 'phone') setPhoneEnabled(!phoneEnabled);
                      }}
                    >
                      {item.status ? 'Manage' : 'Enable'}
                    </button>
                  </>
                ) : (
                  <button className="btn btn-sm btn-secondary">View</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Device Management */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Active Devices</h2>
          {devices.map((device, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: i < devices.length - 1 ? '1px solid var(--border-default)' : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: '8px', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                {device.name.includes('iPhone') ? '📱' : device.name.includes('Android') ? '📱' : '💻'}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontWeight: 500 }}>{device.name}</span>
                  {device.current && <span className="badge badge-green" style={{ fontSize: '10px' }}>Current</span>}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{device.location} · {device.time}</div>
              </div>
              {!device.current && (
                <button className="btn btn-sm btn-negative">Remove</button>
              )}
            </div>
          ))}
        </div>

        {/* Change Password */}
        <div className="card">
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Change Password</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            {['Current Password', 'New Password', 'Confirm New Password'].map(label => (
              <div key={label} className="input-group">
                <label className="input-label">{label}</label>
                <input type="password" className="input" placeholder="••••••••" />
              </div>
            ))}
            <button className="btn btn-primary" style={{ width: 'fit-content' }}>Update Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
