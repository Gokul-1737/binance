'use client';
import { useState } from 'react';
import Link from 'next/link';
import { newsArticles } from '@/lib/mockData';

const categoryIcon = { Bitcoin: '₿', Ethereum: 'Ξ', Regulation: '⚖️', DeFi: '🏦', NFT: '🎨', Exchange: '🔄', Altcoin: '🪙', General: '📰' };
const newsExtended = [
  ...newsArticles,
  { id: 5, title: 'DeFi Total Value Locked Surges Past $150 Billion', category: 'DeFi', excerpt: 'Decentralized finance protocols see massive inflows as institutional investors discover yield opportunities in on-chain lending and liquidity pools.', author: 'Jessica Liu', date: 'Oct 2, 2026', readTime: '5 min', hot: true },
  { id: 6, title: 'New Crypto Tax Framework Proposed in India', category: 'Regulation', excerpt: 'The Indian Finance Ministry has proposed a new framework for cryptocurrency taxation that could significantly impact how traders report their gains.', author: 'Priya Sharma', date: 'Oct 1, 2026', readTime: '4 min', hot: false },
  { id: 7, title: 'Solana Processes 1 Million TPS in Stress Test', category: 'Altcoin', excerpt: 'Solana blockchain achieves a historic milestone in performance testing, demonstrating its potential as a high-throughput alternative to Ethereum.', author: 'Alex Turner', date: 'Sep 30, 2026', readTime: '3 min', hot: true },
  { id: 8, title: "Bitcoin ETF Inflows Hit Record $2.1B in Single Day", category: 'Bitcoin', excerpt: "Spot Bitcoin ETFs continue to attract unprecedented institutional capital, with daily inflows breaking all previous records amid growing mainstream adoption.", author: 'Michael Zhang', date: 'Sep 29, 2026', readTime: '4 min', hot: true },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Bitcoin', 'Ethereum', 'DeFi', 'Regulation', 'Altcoin', 'Exchange', 'NFT'];

  const filtered = activeCategory === 'All' ? newsExtended : newsExtended.filter(a => a.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '32px' }}>
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.02em' }}>Crypto News</h1>
          <p style={{ color: 'var(--text-muted)' }}>Stay informed with the latest cryptocurrency news and market insights</p>
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}>
              {categoryIcon[cat] && <span>{categoryIcon[cat]} </span>}{cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
          {/* Main News Feed */}
          <div>
            {/* Featured */}
            {activeCategory === 'All' && (
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ background: 'linear-gradient(135deg, #F7931A33, #F0B90B11)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', minHeight: '240px' }}>
                  {categoryIcon[newsExtended[0]?.category] || '📰'}
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span className="badge badge-red">🔥 Hot</span>
                    <span className="badge badge-blue">{newsExtended[0]?.category}</span>
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3, marginBottom: '10px' }}>{newsExtended[0]?.title}</h2>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>{newsExtended[0]?.excerpt}</p>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    👤 {newsExtended[0]?.author} · {newsExtended[0]?.date} · ⏱️ {newsExtended[0]?.readTime} read
                  </div>
                  <Link href="/news" className="btn btn-primary btn-sm">Read Full Story →</Link>
                </div>
              </div>
            )}

            {/* Article List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(activeCategory === 'All' ? filtered.slice(1) : filtered).map(article => (
                <Link key={article.id} href="/news" style={{ textDecoration: 'none' }}>
                  <div className="card card-hover" style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', padding: '16px' }}>
                    <div style={{ background: 'var(--bg-elevated)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', minHeight: '80px' }}>
                      {categoryIcon[article.category] || '📰'}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span className="badge badge-blue" style={{ fontSize: '10px' }}>{article.category}</span>
                        {article.hot && <span className="badge badge-red" style={{ fontSize: '10px' }}>🔥 Hot</span>}
                      </div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4, marginBottom: '6px', color: 'var(--text-primary)' }}>{article.title}</h3>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '8px' }}>{article.excerpt}</p>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {article.author} · {article.date} · {article.readTime} read
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Search */}
            <div className="search-bar" style={{ width: '100%' }}>
              <span>🔍</span>
              <input type="text" placeholder="Search news..." />
            </div>

            {/* Trending */}
            <div className="card">
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px' }}>🔥 Trending</h3>
              {newsExtended.filter(n => n.hot).slice(0, 4).map((article, i) => (
                <div key={article.id} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: i < 2 ? '1px solid var(--border-default)' : 'none' }}>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-disabled)', flexShrink: 0, width: '24px' }}>{i + 1}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-primary)', marginBottom: '4px' }}>{article.title}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{article.readTime} read · {article.category}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe */}
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(240,185,11,0.1), rgba(14,203,129,0.05))', border: '1px solid rgba(240,185,11,0.2)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>📬 Newsletter</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.5 }}>
                Get the top crypto news delivered to your inbox every morning.
              </p>
              <input type="email" className="input" placeholder="Enter your email" style={{ marginBottom: '10px' }} />
              <button className="btn btn-primary btn-full btn-sm">Subscribe Free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
