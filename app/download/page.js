'use client';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, rgba(240,185,11,0.1) 0%, rgba(14,203,129,0.05) 100%)', padding: '80px 32px', textAlign: 'center', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Trade Crypto<br />On Any Device
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '36px' }}>
            Download the BINANCE app for iOS and Android, or use our desktop application for the full professional trading experience.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
            {[
              { platform: 'iOS', icon: '🍎', desc: 'App Store', badge: '4.8 ★' },
              { platform: 'Android', icon: '▶', desc: 'Google Play', badge: '4.7 ★' },
              { platform: 'Desktop', icon: '💻', desc: 'Windows / Mac', badge: 'Free' },
            ].map(dl => (
              <div key={dl.platform} className="card" style={{ textAlign: 'center', padding: '24px 16px', cursor: 'pointer', transition: 'all 0.2s' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{dl.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>{dl.platform}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{dl.desc}</div>
                <span className="badge badge-yellow">{dl.badge}</span>
                <button className="btn btn-primary btn-full btn-sm" style={{ marginTop: '12px' }}>Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 32px' }}>
        {/* Features */}
        <h2 style={{ fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>Why Download BINANCE App?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {[
            { icon: '🔔', title: 'Instant Alerts', desc: 'Get real-time push notifications for price alerts, order fills, and security events.' },
            { icon: '📊', title: 'Advanced Charts', desc: 'Full TradingView integration with 100+ technical indicators on mobile.' },
            { icon: '🔐', title: 'Biometric Login', desc: 'Secure and fast login with Face ID or fingerprint authentication.' },
            { icon: '💸', title: 'Quick Transfer', desc: 'Send and receive crypto instantly with just a few taps.' },
            { icon: '🌙', title: 'Dark Mode', desc: 'Premium dark interface optimized for all screen sizes and conditions.' },
            { icon: '🌍', title: 'Multi-Currency', desc: 'View balances in 30+ local currencies with live conversion rates.' },
          ].map(f => (
            <div key={f.title} className="card">
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{f.icon}</div>
              <h3 style={{ fontWeight: 600, marginBottom: '6px' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* API Section */}
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Developer API</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
            Build trading bots and automated strategies using our REST and WebSocket APIs.
          </p>
          <Link href="/developers" className="btn btn-outline">View API Docs →</Link>
        </div>
      </div>
    </div>
  );
}
