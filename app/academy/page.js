'use client';
import { useState } from 'react';
import Link from 'next/link';
import { academyArticles } from '@/lib/mockData';

const categories = ['All', 'Beginner', 'Trading', 'Blockchain', 'DeFi', 'Web3', 'Security'];
const categoryIcons = { All: '📚', Beginner: '🌱', Trading: '📈', Blockchain: '⛓️', DeFi: '🏦', Web3: '🌐', Security: '🔒' };

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = academyArticles.filter(a =>
    (activeCategory === 'All' || a.category === activeCategory) &&
    (!search || a.title.toLowerCase().includes(search.toLowerCase()))
  );

  const diffColor = { Beginner: 'badge-green', Intermediate: 'badge-yellow', Advanced: 'badge-red' };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, rgba(240,185,11,0.1) 0%, rgba(30,155,240,0.05) 100%)', borderBottom: '1px solid var(--border-default)', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="badge badge-yellow" style={{ marginBottom: '16px', display: 'inline-flex' }}>📚 BINANCE Academy</div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Learn Crypto</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '28px' }}>
            From blockchain basics to advanced trading strategies — everything you need to master cryptocurrency.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '10px', padding: '12px 20px', maxWidth: '500px', margin: '0 auto' }}>
            <span style={{ fontSize: '18px' }}>🔍</span>
            <input type="text" placeholder="Search articles, guides, tutorials..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '15px', fontFamily: 'inherit' }} />
          </div>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <span>📝 350+ Articles</span>
            <span>🎥 120+ Videos</span>
            <span>🌍 30+ Languages</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '32px' }}>
        {/* Categories */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              style={{ padding: '8px 16px', fontSize: '14px' }}>
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        {activeCategory === 'All' && !search && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Featured Article</h2>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ background: 'linear-gradient(135deg, #F7931A22, #F0B90B11)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px', minHeight: '280px' }}>₿</div>
              <div style={{ padding: '32px' }}>
                <span className="badge badge-green" style={{ marginBottom: '12px', display: 'inline-flex' }}>Beginner</span>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                  What is Bitcoin? A Complete Beginner&apos;s Guide for 2026
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Bitcoin is the world&apos;s first decentralized digital currency. Learn how it works, why it was created, and how you can buy your first Bitcoin today.
                </p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  <span>⏱️ 8 min read</span>
                  <span>👤 Sarah Chen</span>
                  <span>📅 Oct 2, 2026</span>
                </div>
                <Link href="/academy/bitcoin-guide" className="btn btn-primary">Read Article →</Link>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>
            {activeCategory === 'All' ? 'All Articles' : activeCategory} {search && `— "${search}"`}
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '10px' }}>({filtered.length})</span>
          </h2>
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {filtered.map(article => (
                <Link key={article.id} href={`/academy/${article.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card card-hover">
                    <div style={{ marginBottom: '12px' }}>
                      <span className={`badge ${diffColor[article.difficulty]}`}>{article.difficulty}</span>
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4, marginBottom: '10px', color: 'var(--text-primary)' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
                      <span>{categoryIcons[article.category]} {article.category}</span>
                      <span>⏱️ {article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <div className="empty-state-title">No articles found</div>
              <div className="empty-state-desc">Try a different search term or category</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
