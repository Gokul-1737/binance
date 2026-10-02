'use client';
import Link from 'next/link';

export default function AboutPage() {
  const timeline = [
    { year: '2017', event: 'Founded by Changpeng Zhao (CZ) and Yi He' },
    { year: '2018', event: 'Becomes the world\'s largest crypto exchange by trading volume' },
    { year: '2019', event: 'Launches Binance Smart Chain (BSC)' },
    { year: '2020', event: 'Introduces DeFi trading and staking products' },
    { year: '2021', event: 'NFT marketplace launched; 100M users milestone' },
    { year: '2022', event: 'Expands into 180+ countries with local P2P support' },
    { year: '2023', event: 'Launches Web3 wallet and on-chain trading features' },
    { year: '2024', event: 'Introduces AI-powered trading tools and signals' },
    { year: '2025', event: '200M+ registered users; $100B+ daily volume' },
    { year: '2026', event: 'Continues global expansion and regulatory compliance' },
  ];

  const leadership = [
    { name: 'Alex Chen', role: 'Chief Executive Officer', bio: 'Former Goldman Sachs quant trader with 15 years in fintech' },
    { name: 'Sarah Kim', role: 'Chief Technology Officer', bio: 'Ex-Google engineer, blockchain infrastructure pioneer' },
    { name: 'Marcus Rivera', role: 'Chief Product Officer', bio: 'Product veteran from Coinbase and Robinhood' },
    { name: 'Priya Patel', role: 'Chief Compliance Officer', bio: 'Former SEC attorney, regulatory compliance expert' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, rgba(240,185,11,0.1) 0%, rgba(14,203,129,0.05) 100%)', padding: '80px 32px', textAlign: 'center', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ color: 'var(--brand-yellow)', fontSize: '40px' }}>◆</span>
            <span style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-0.03em' }}>BINANCE</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Building the Future<br />of Finance
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.7, marginBottom: '32px' }}>
            BINANCE is the world&apos;s leading cryptocurrency exchange. We believe in the freedom of money and aim to make crypto accessible to everyone.
          </p>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: '100M+', label: 'Registered Users' },
              { value: '$76B+', label: '24h Volume' },
              { value: '180+', label: 'Countries' },
              { value: '350+', label: 'Crypto Assets' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--brand-yellow)' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 32px' }}>
        {/* Mission */}
        <div className="card" style={{ marginBottom: '32px', textAlign: 'center', padding: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Our Mission</h2>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
            &ldquo;To increase the freedom of money globally. We believe by spreading this freedom, we can significantly improve lives around the world.&rdquo;
          </p>
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { icon: '🔒', title: 'Security First', desc: 'User asset security is our #1 priority. SAFU fund, multi-sig wallets, and continuous audits.' },
              { icon: '🌍', title: 'Global Access', desc: 'We believe everyone deserves access to financial services, regardless of where they live.' },
              { icon: '💡', title: 'Innovation', desc: 'Continuously building new products and features to improve the trading experience.' },
              { icon: '🤝', title: 'User Trust', desc: 'Transparent operations, regular proof-of-reserves, and open communication with our community.' },
              { icon: '⚡', title: 'Speed', desc: 'Processing 1.4 million orders per second with near-zero downtime.' },
              { icon: '🌱', title: 'Sustainability', desc: 'Committed to reducing our environmental impact and supporting green blockchain initiatives.' },
            ].map(v => (
              <div key={v.title} className="card">
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{v.icon}</div>
                <h3 style={{ fontWeight: 600, marginBottom: '6px' }}>{v.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Leadership Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {leadership.map(person => (
              <div key={person.name} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brand-yellow-dim)', border: '2px solid var(--brand-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '24px', color: 'var(--brand-yellow)', margin: '0 auto 12px' }}>
                  {person.name.charAt(0)}
                </div>
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>{person.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--brand-yellow)', marginBottom: '8px', fontWeight: 500 }}>{person.role}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{person.bio}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>Our Journey</h2>
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            <div style={{ position: 'absolute', left: '10px', top: 0, bottom: 0, width: '2px', background: 'var(--border-default)' }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: '24px' }}>
                <div style={{ position: 'absolute', left: '-27px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--brand-yellow)', border: '3px solid var(--bg-main)' }} />
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: 800, color: 'var(--brand-yellow)', fontSize: '15px', flexShrink: 0 }}>{item.year}</span>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-default)', padding: '48px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Join our team</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>We&apos;re hiring across all departments. Help us build the future of finance.</p>
        <Link href="/careers" className="btn btn-primary btn-lg">View Open Positions</Link>
      </div>
    </div>
  );
}
