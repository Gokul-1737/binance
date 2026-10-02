'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const refCode = 'binance784621';
  const refLink = `https://binance.com/join?ref=${refCode}`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const stats = [
    { label: 'Total Referrals', value: '14', icon: '👥' },
    { label: 'Active Traders', value: '8', icon: '📈' },
    { label: 'Commission Earned', value: '$342.80', icon: '💰' },
    { label: 'This Month', value: '$84.20', icon: '📅' },
  ];

  const friends = [
    { name: 'friend_****@gmail.com', joined: '2026-08-15', trades: 234, earned: '$84.20', status: 'Active' },
    { name: 'user_****@yahoo.com', joined: '2026-07-22', trades: 156, earned: '$56.40', status: 'Active' },
    { name: 'anon_****@hotmail.com', joined: '2026-06-10', trades: 89, earned: '$32.10', status: 'Active' },
    { name: 'trader_****@gmail.com', joined: '2026-05-03', trades: 45, earned: '$18.50', status: 'Inactive' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, rgba(240,185,11,0.12) 0%, rgba(14,203,129,0.06) 100%)', borderBottom: '1px solid var(--border-default)', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎁</div>
          <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>Refer & Earn</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
            Invite friends to trade on BINANCE and earn up to <span style={{ color: 'var(--brand-yellow)', fontWeight: 700 }}>40% commission</span> on their trading fees — forever.
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Default Commission', value: '20%' },
              { label: 'With High Volume', value: 'Up to 40%' },
              { label: 'Commission Period', value: 'Lifetime' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--brand-yellow)' }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {stats.map(s => (
            <div key={s.label} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand-yellow)', marginBottom: '4px' }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Referral Code */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>Your Referral Link</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>Referral Code</label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '12px 16px', gap: '12px' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '18px', color: 'var(--brand-yellow)', letterSpacing: '0.05em', flex: 1 }}>{refCode}</span>
                <button onClick={() => handleCopy(refCode)} className="btn btn-sm btn-secondary">{copied ? '✓ Copied' : 'Copy'}</button>
              </div>
            </div>
            <div>
              <label style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>Referral Link</label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '12px 16px', gap: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{refLink}</span>
                <button onClick={() => handleCopy(refLink)} className="btn btn-sm btn-secondary">Copy</button>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            {['📱 WhatsApp', '🐦 Twitter/X', '📘 Facebook', '📧 Email'].map(s => (
              <button key={s} className="btn btn-sm btn-secondary">{s}</button>
            ))}
          </div>
        </div>

        {/* Commission Settings */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Commission Split</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '16px' }}>
            You can optionally share up to 80% of your commission with your referrals to attract more traders.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>You keep</span>
                <span style={{ color: 'var(--brand-yellow)', fontWeight: 600 }}>20%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '20%', background: 'var(--brand-yellow)' }} />
              </div>
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>+</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Referral gets</span>
                <span style={{ color: 'var(--color-positive)', fontWeight: 600 }}>0%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill progress-fill-green" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Referrals Table */}
        <div className="card">
          <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>My Referrals ({friends.length})</h2>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th style={{ textAlign: 'center' }}>Joined</th>
                  <th style={{ textAlign: 'right' }}>Trades</th>
                  <th style={{ textAlign: 'right' }}>Earned by You</th>
                  <th style={{ textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {friends.map((f, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: 'monospace', fontSize: '13px' }}>{f.name}</td>
                    <td style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px' }}>{f.joined}</td>
                    <td style={{ textAlign: 'right' }}>{f.trades}</td>
                    <td style={{ textAlign: 'right', color: 'var(--color-positive)', fontWeight: 600 }}>{f.earned}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge ${f.status === 'Active' ? 'badge-green' : 'badge-gray'}`}>{f.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
