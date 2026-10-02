'use client';
import { useState } from 'react';
import Link from 'next/link';
import { walletAssets } from '@/lib/mockData';

const coinColors = {
  BTC: '#F7931A', ETH: '#627EEA', BNB: '#F0B90B', SOL: '#9945FF',
  XRP: '#00AAE4', ADA: '#3CC8C8', DOGE: '#C2A633', USDT: '#26A17B',
};

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showSmall, setShowSmall] = useState(false);

  const totalBalance = walletAssets.reduce((s, a) => s + a.value, 0);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '32px' }}>
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>Wallet Overview</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <span>Portfolio value is estimated</span>
          </div>
        </div>

        {/* Balance Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'Total Balance', value: `$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: `≈ ₹${(totalBalance * 83.5).toLocaleString()}`, icon: '💼', color: 'var(--brand-yellow)' },
            { label: "Today's PNL", value: '+$1,842.30', sub: '+1.52%', icon: '📈', color: 'var(--color-positive)' },
            { label: 'Available', value: `$${(totalBalance * 0.82).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: '82% of total', icon: '✅', color: 'var(--color-info)' },
            { label: 'In Orders', value: `$${(totalBalance * 0.18).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, sub: '18% of total', icon: '⏳', color: 'var(--text-muted)' },
          ].map(card => (
            <div key={card.label} className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{card.label}</span>
                <span style={{ fontSize: '20px' }}>{card.icon}</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: card.color, fontVariantNumeric: 'tabular-nums', marginBottom: '4px' }}>{card.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {[
            { label: 'Deposit', icon: '⬇️', color: 'var(--color-positive)' },
            { label: 'Withdraw', icon: '⬆️', color: 'var(--color-negative)' },
            { label: 'Transfer', icon: '↔️', color: 'var(--color-info)' },
            { label: 'Buy Crypto', icon: '💳', href: '/buy', color: 'var(--brand-yellow)' },
            { label: 'Convert', icon: '🔄', color: 'var(--text-secondary)' },
            { label: 'Earn', icon: '💰', href: '/earn', color: '#9945FF' },
          ].map(action => (
            <Link key={action.label} href={action.href || '#'} style={{
              display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
              background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px',
              textDecoration: 'none', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500,
              transition: 'all 0.15s', cursor: 'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = action.color; e.currentTarget.style.background = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.background = 'var(--bg-card)'; }}
            >
              <span style={{ fontSize: '18px' }}>{action.icon}</span>
              <span>{action.label}</span>
            </Link>
          ))}
        </div>

        {/* Tabs */}
        <div className="tabs">
          {['Overview', 'Spot', 'Funding', 'Futures', 'Earn'].map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        {/* Asset Table */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border-default)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '15px', fontWeight: 600 }}>Assets</span>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <input type="checkbox" checked={showSmall} onChange={e => setShowSmall(e.target.checked)} style={{ accentColor: 'var(--brand-yellow)' }} />
                Hide small balances
              </label>
            </div>
            <div className="search-bar" style={{ width: '200px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>🔍</span>
              <input type="text" placeholder="Search coin" />
            </div>
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th style={{ textAlign: 'right' }}>Total Balance</th>
                  <th style={{ textAlign: 'right' }}>Available</th>
                  <th style={{ textAlign: 'right' }} className="hide-mobile">In Order</th>
                  <th style={{ textAlign: 'right' }}>Value (USD)</th>
                  <th style={{ textAlign: 'right' }} className="hide-mobile">24h Change</th>
                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {walletAssets.map(asset => {
                  const isPos = asset.change >= 0;
                  return (
                    <tr key={asset.asset}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div
                            style={{ width: 32, height: 32, borderRadius: '50%', background: `${coinColors[asset.asset] || '#F0B90B'}20`, color: coinColors[asset.asset] || '#F0B90B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', border: `1px solid ${coinColors[asset.asset] || '#F0B90B'}30`, flexShrink: 0 }}
                          >{asset.asset.charAt(0)}</div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{asset.asset}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{asset.asset === 'BTC' ? 'Bitcoin' : asset.asset === 'ETH' ? 'Ethereum' : asset.asset === 'BNB' ? 'BNB' : asset.asset === 'SOL' ? 'Solana' : asset.asset}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>
                        {asset.balance.toLocaleString('en-US', { maximumFractionDigits: 6 })}
                      </td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: 'var(--text-secondary)' }}>
                        {asset.available.toLocaleString('en-US', { maximumFractionDigits: 6 })}
                      </td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: 'var(--text-muted)' }} className="hide-mobile">
                        {asset.inOrder.toLocaleString('en-US', { maximumFractionDigits: 6 })}
                      </td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>
                        ${asset.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td style={{ textAlign: 'right' }} className="hide-mobile">
                        <span className={isPos ? 'change-positive' : 'change-negative'}>
                          {isPos ? '+' : ''}{asset.change.toFixed(2)}%
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                          <button className="btn btn-sm btn-secondary">Deposit</button>
                          <button className="btn btn-sm btn-secondary">Withdraw</button>
                          <Link href={`/trade/${asset.asset}_USDT`} className="btn btn-sm btn-outline">Trade</Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item"><span className="mobile-nav-icon">🏠</span><span>Home</span></Link>
        <Link href="/markets" className="mobile-nav-item"><span className="mobile-nav-icon">📊</span><span>Markets</span></Link>
        <Link href="/trade/BTC_USDT" className="mobile-nav-item"><span className="mobile-nav-icon">📈</span><span>Trade</span></Link>
        <Link href="/futures" className="mobile-nav-item"><span className="mobile-nav-icon">⚡</span><span>Futures</span></Link>
        <Link href="/wallet" className="mobile-nav-item active"><span className="mobile-nav-icon">👛</span><span>Assets</span></Link>
      </div>
    </div>
  );
}
