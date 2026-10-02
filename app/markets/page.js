'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { cryptoAssets } from '@/lib/mockData';

const coinColors = {
  BTC: '#F7931A', ETH: '#627EEA', BNB: '#F0B90B', SOL: '#9945FF',
  XRP: '#00AAE4', ADA: '#3CC8C8', DOGE: '#C2A633', AVAX: '#E84142',
  DOT: '#E6007A', LINK: '#2A5ADA', MATIC: '#8247E5', UNI: '#FF007A',
  LTC: '#BFBBBB', XLM: '#7D00FF', TRX: '#FF060A',
};

export default function MarketsPage() {
  const [activeTab, setActiveTab] = useState('Spot');
  const [activeQuote, setActiveQuote] = useState('USDT');
  const [search, setSearch] = useState('');
  const [sortCol, setSortCol] = useState('volume24h');
  const [sortDir, setSortDir] = useState('desc');

  const filteredAssets = useMemo(() => {
    let assets = [...cryptoAssets];
    if (search) {
      assets = assets.filter(a =>
        a.symbol.toLowerCase().includes(search.toLowerCase()) ||
        a.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    assets.sort((a, b) => {
      const val = sortDir === 'asc' ? 1 : -1;
      return (a[sortCol] > b[sortCol] ? 1 : -1) * val;
    });
    return assets;
  }, [search, sortCol, sortDir]);

  const handleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('desc'); }
  };

  const SortIcon = ({ col }) => (
    <span style={{ fontSize: '10px', marginLeft: '4px', opacity: sortCol === col ? 1 : 0.3 }}>
      {sortCol === col && sortDir === 'asc' ? '▲' : '▼'}
    </span>
  );

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Page Header */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)', padding: '24px 32px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Markets</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Real-time cryptocurrency prices and market data</p>

          {/* Market Stats */}
          <div style={{ display: 'flex', gap: '32px', marginTop: '20px', flexWrap: 'wrap' }}>
            {[
              { label: 'Global Market Cap', value: '$2.54T', change: '+1.82%', pos: true },
              { label: '24h Volume', value: '$98.5B', change: '+5.3%', pos: true },
              { label: 'BTC Dominance', value: '52.4%', change: '-0.3%', pos: false },
              { label: 'ETH Dominance', value: '16.8%', change: '+0.2%', pos: true },
              { label: 'Active Cryptos', value: '22,500+', change: '', pos: true },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700 }}>{stat.value}</span>
                  {stat.change && (
                    <span style={{ fontSize: '12px', color: stat.pos ? 'var(--color-positive)' : 'var(--color-negative)', fontWeight: 500 }}>
                      {stat.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '24px 32px' }}>
        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {['Favorites', 'Spot', 'Futures', 'New Listings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                {tab === 'Favorites' ? '⭐ ' : ''}{tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="search-bar" style={{ width: '260px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>🔍</span>
            <input
              type="text"
              placeholder="Search coin name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Quote Filter */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['USDT', 'USDC', 'BTC', 'ETH', 'BNB'].map(q => (
            <button
              key={q}
              onClick={() => setActiveQuote(q)}
              className={`filter-chip ${activeQuote === q ? 'active' : ''}`}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: 40, paddingLeft: '16px' }}>#</th>
                  <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
                    Name <SortIcon col="name" />
                  </th>
                  <th style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => handleSort('price')}>
                    Price <SortIcon col="price" />
                  </th>
                  <th style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => handleSort('change24h')}>
                    24h Change <SortIcon col="change24h" />
                  </th>
                  <th style={{ textAlign: 'right' }} className="hide-mobile">24h High</th>
                  <th style={{ textAlign: 'right' }} className="hide-mobile">24h Low</th>
                  <th style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => handleSort('volume24h')} className="hide-tablet">
                    Volume <SortIcon col="volume24h" />
                  </th>
                  <th style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => handleSort('marketCap')} className="hide-tablet">
                    Market Cap <SortIcon col="marketCap" />
                  </th>
                  <th style={{ textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset, i) => {
                  const isPos = asset.change24h >= 0;
                  return (
                    <tr key={asset.id}>
                      <td style={{ color: 'var(--text-muted)', paddingLeft: '16px' }}>{i + 1}</td>
                      <td>
                        <Link href={`/markets/${asset.id}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                          <div
                            className="coin-icon"
                            style={{ background: `${coinColors[asset.symbol] || '#F0B90B'}20`, color: coinColors[asset.symbol] || '#F0B90B', border: `1px solid ${coinColors[asset.symbol] || '#F0B90B'}30` }}
                          >
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{asset.symbol}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{asset.name}</div>
                          </div>
                        </Link>
                      </td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>
                        ${asset.price.toLocaleString('en-US', { minimumFractionDigits: asset.price < 1 ? 4 : 2, maximumFractionDigits: asset.price < 1 ? 4 : 2 })}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <span className={isPos ? 'change-positive' : 'change-negative'}>
                          {isPos ? '+' : ''}{asset.change24h.toFixed(2)}%
                        </span>
                      </td>
                      <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }} className="hide-mobile">
                        ${asset.high24h.toLocaleString()}
                      </td>
                      <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }} className="hide-mobile">
                        ${asset.low24h.toLocaleString()}
                      </td>
                      <td style={{ textAlign: 'right', color: 'var(--text-muted)' }} className="hide-tablet">
                        ${(asset.volume24h / 1e9).toFixed(2)}B
                      </td>
                      <td style={{ textAlign: 'right', color: 'var(--text-muted)' }} className="hide-tablet">
                        ${(asset.marketCap / 1e9).toFixed(1)}B
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <Link href={`/trade/${asset.symbol}_USDT`} className="btn btn-sm btn-outline">
                          Trade
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredAssets.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <div className="empty-state-title">No results found</div>
              <div className="empty-state-desc">Try a different search term</div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><span className="mobile-nav-icon">🏠</span><span>Home</span></Link>
        <Link href="/markets" className="mobile-nav-item active"><span className="mobile-nav-icon">📊</span><span>Markets</span></Link>
        <Link href="/trade/BTC_USDT" className="mobile-nav-item"><span className="mobile-nav-icon">📈</span><span>Trade</span></Link>
        <Link href="/futures" className="mobile-nav-item"><span className="mobile-nav-icon">⚡</span><span>Futures</span></Link>
        <Link href="/wallet" className="mobile-nav-item"><span className="mobile-nav-icon">👛</span><span>Assets</span></Link>
      </div>
    </div>
  );
}
