'use client';
import { useState } from 'react';
import Link from 'next/link';
import { p2pOrders } from '@/lib/mockData';

export default function P2PPage() {
  const [side, setSide] = useState('buy');
  const [asset, setAsset] = useState('USDT');
  const [fiat, setFiat] = useState('INR');
  const [payMethod, setPayMethod] = useState('All');

  const assets = ['USDT', 'BTC', 'ETH', 'BNB', 'SOL'];
  const payMethods = ['All', 'UPI', 'Bank Transfer', 'PayTM', 'PhonePe', 'IMPS'];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)', padding: '24px 32px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>P2P Trading</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Buy and sell crypto directly with other users</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link href="/orders" className="btn btn-secondary btn-sm">My Orders</Link>
              <button className="btn btn-secondary btn-sm">+ Post Ad</button>
            </div>
          </div>

          {/* Buy/Sell Toggle */}
          <div style={{ display: 'flex', gap: '0', marginTop: '20px', borderBottom: '1px solid var(--border-default)' }}>
            {['buy', 'sell'].map(s => (
              <button
                key={s}
                onClick={() => setSide(s)}
                style={{
                  padding: '12px 24px', fontSize: '15px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  color: side === s ? (s === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)') : 'var(--text-muted)',
                  borderBottom: side === s ? `2px solid ${s === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)'}` : '2px solid transparent',
                  textTransform: 'capitalize',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '24px 32px' }}>
        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Asset */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {assets.map(a => (
              <button key={a} onClick={() => setAsset(a)} className={`filter-chip ${asset === a ? 'active' : ''}`}>{a}</button>
            ))}
          </div>

          <div style={{ width: '1px', height: '24px', background: 'var(--border-default)' }} />

          {/* Fiat */}
          <select value={fiat} onChange={e => setFiat(e.target.value)} className="select" style={{ height: '32px', fontSize: '13px' }}>
            {['INR', 'USD', 'EUR', 'GBP', 'AED'].map(f => <option key={f}>{f}</option>)}
          </select>

          {/* Amount */}
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 12px', height: '32px', gap: '8px' }}>
            <input type="number" placeholder="Enter amount" style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'inherit', width: '140px' }} />
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{fiat}</span>
          </div>

          {/* Payment */}
          <select value={payMethod} onChange={e => setPayMethod(e.target.value)} className="select" style={{ height: '32px', fontSize: '13px' }}>
            {payMethods.map(p => <option key={p}>{p}</option>)}
          </select>

          <button className="btn btn-primary btn-sm" style={{ marginLeft: 'auto' }}>🔍 Search</button>
        </div>

        {/* P2P Table */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Advertisers</th>
                <th style={{ textAlign: 'right' }}>Price</th>
                <th style={{ textAlign: 'right' }}>Available</th>
                <th style={{ textAlign: 'right' }} className="hide-mobile">Order Limit</th>
                <th className="hide-mobile">Payment Method</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {p2pOrders.map((order, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="avatar" style={{ width: '36px', height: '36px', fontSize: '14px' }}>
                        {order.merchant.charAt(0)}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontWeight: 600, fontSize: '14px' }}>{order.merchant}</span>
                          {order.verified && <span style={{ color: 'var(--color-positive)', fontSize: '12px' }}>✓</span>}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', gap: '8px' }}>
                          <span>{order.trades} orders</span>
                          <span style={{ color: order.completionRate > 98 ? 'var(--color-positive)' : 'var(--text-muted)' }}>{order.completionRate}%</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          {Array.from({ length: 5 }, (_, si) => (
                            <span key={si} style={{ color: si < Math.floor(order.rating / 20) ? 'var(--brand-yellow)' : 'var(--bg-hover)', fontSize: '10px' }}>★</span>
                          ))}
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{order.rating}%</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, fontSize: '18px', color: 'var(--brand-yellow)', fontVariantNumeric: 'tabular-nums' }}>
                      ₹{order.price.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>INR</div>
                  </td>
                  <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                    <div style={{ fontWeight: 500 }}>{order.available}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{asset}</div>
                  </td>
                  <td style={{ textAlign: 'right' }} className="hide-mobile">
                    <div style={{ fontSize: '13px' }}>{order.minOrder}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>~ {order.maxOrder}</div>
                  </td>
                  <td className="hide-mobile">
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {order.payment.map(p => (
                        <span key={p} style={{ padding: '2px 8px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '4px', fontSize: '11px', color: 'var(--color-positive)', whiteSpace: 'nowrap' }}>{p}</span>
                      ))}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Link
                      href="/login"
                      className={`btn btn-sm ${side === 'buy' ? 'btn-positive' : 'btn-negative'}`}
                      style={{ fontWeight: 600, minWidth: '70px' }}
                    >
                      {side === 'buy' ? 'Buy' : 'Sell'} {asset}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px' }}>
          {[
            { icon: '🔒', title: 'Escrow Protection', desc: 'All trades are protected by our secure escrow system. Crypto is held safely until payment is confirmed.' },
            { icon: '🚫', title: 'Zero Fees', desc: 'No trading fees on P2P. Advertisers set their own prices and profit from the spread.' },
            { icon: '💬', title: '24/7 Support', desc: 'Our customer support team is available around the clock to help resolve any trading disputes.' },
          ].map(card => (
            <div key={card.title} className="card">
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{card.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{card.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
