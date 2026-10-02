'use client';
import { useState } from 'react';
import Link from 'next/link';
import { earnProducts } from '@/lib/mockData';

const coinColors = {
  BTC: '#F7931A', ETH: '#627EEA', BNB: '#F0B90B', SOL: '#9945FF',
  ADA: '#3CC8C8', LINK: '#2A5ADA', DOT: '#E6007A', USDT: '#26A17B',
};

export default function EarnPage() {
  const [activeTab, setActiveTab] = useState('Simple Earn');
  const [sortBy, setSortBy] = useState('apr');

  const totalEarned = 1284.56;
  const activeSubscriptions = 3;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, rgba(240,185,11,0.12) 0%, rgba(153,69,255,0.08) 100%)', borderBottom: '1px solid var(--border-default)', padding: '40px 32px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-yellow" style={{ marginBottom: '12px' }}>💰 Earn up to 22% APR</div>
              <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Make your crypto work for you
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
                Subscribe to Simple Earn, Staking, and DeFi products to earn passive income on your cryptocurrency holdings.
              </p>
              <div style={{ display: 'flex', gap: '32px', marginTop: '20px' }}>
                {[
                  { label: 'Total Earned', value: `$${totalEarned.toLocaleString()}`, color: 'var(--color-positive)' },
                  { label: 'Active Products', value: activeSubscriptions, color: 'var(--brand-yellow)' },
                  { label: 'Est. Annual Rewards', value: '$4,820', color: 'var(--color-info)' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '20px', minWidth: '240px' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Your Earn Balance</div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--brand-yellow)', marginBottom: '4px' }}>$24,182.40</div>
              <div style={{ fontSize: '12px', color: 'var(--color-positive)' }}>+$126.34 today</div>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { asset: 'BTC', amount: '0.1200', value: '$8,141' },
                  { asset: 'ETH', amount: '2.5000', value: '$8,805' },
                  { asset: 'USDT', amount: '7,236.40', value: '$7,236' },
                ].map(a => (
                  <div key={a.asset} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{a.asset}: {a.amount}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{a.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '24px 32px' }}>
        {/* Tabs */}
        <div className="tabs">
          {['Overview', 'Simple Earn', 'Staking', 'Launchpool', 'DeFi Staking', 'Dual Investment'].map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <div className="search-bar" style={{ width: '240px' }}>
            <span style={{ fontSize: '13px' }}>🔍</span>
            <input type="text" placeholder="Search coin" />
          </div>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="select">
            <option value="apr">Sort by: APR</option>
            <option value="duration">Sort by: Duration</option>
            <option value="popular">Sort by: Popular</option>
          </select>
          <div style={{ display: 'flex', gap: '6px', marginLeft: 'auto' }}>
            {['All', 'Low Risk', 'Medium Risk', 'High Risk'].map(f => (
              <button key={f} className="filter-chip">{f}</button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {earnProducts.map(product => (
            <div key={product.asset} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Top */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${coinColors[product.asset] || '#F0B90B'}20`, color: coinColors[product.asset] || '#F0B90B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', border: `1px solid ${coinColors[product.asset] || '#F0B90B'}30` }}>
                    {product.asset.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '16px' }}>{product.asset}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{product.type}</div>
                  </div>
                </div>
                <span className={`badge ${product.risk === 'Low' ? 'badge-green' : product.risk === 'Medium' ? 'badge-yellow' : 'badge-red'}`}>
                  {product.risk}
                </span>
              </div>

              {/* APR */}
              <div style={{ background: 'var(--bg-elevated)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>APR</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-positive)', letterSpacing: '-0.02em' }}>
                  {product.apr}
                </div>
              </div>

              {/* Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[
                  { label: 'Duration', value: product.duration },
                  { label: 'Minimum', value: product.minimum },
                ].map(d => (
                  <div key={d.label} style={{ background: 'var(--bg-elevated)', borderRadius: '6px', padding: '8px 10px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px' }}>{d.label}</div>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>{d.value}</div>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-full">Subscribe Now</button>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px' }}>
          {[
            { icon: '🔒', title: 'Secure & Transparent', desc: 'All earn products are fully audited and backed by our SAFU insurance fund.' },
            { icon: '⚡', title: 'Instant Redemption', desc: 'Flexible products can be redeemed at any time with no lock-up period.' },
            { icon: '📊', title: 'Real-Time Tracking', desc: 'Monitor your earnings in real-time from your dashboard.' },
          ].map(card => (
            <div key={card.title} className="card">
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{card.icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px' }}>{card.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
