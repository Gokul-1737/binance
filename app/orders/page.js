'use client';
import { useState } from 'react';
import Link from 'next/link';
import { openOrders, orderHistory, transactions } from '@/lib/mockData';

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('Open Orders');
  const [filterPair, setFilterPair] = useState('All');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Orders</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>Manage your trading orders and history</p>
        </div>

        <div className="tabs">
          {['Open Orders', 'Order History', 'Trade History', 'P2P Orders', 'Convert History'].map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}{tab === 'Open Orders' && openOrders.length > 0 && <span style={{ marginLeft: '6px', background: 'var(--brand-yellow)', color: 'var(--bg-darkest)', borderRadius: '10px', padding: '1px 6px', fontSize: '10px', fontWeight: 700 }}>{openOrders.length}</span>}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-bar" style={{ width: '200px' }}>
            <span style={{ fontSize: '13px' }}>🔍</span>
            <input type="text" placeholder="Search pair..." />
          </div>
          <select className="select" value={filterPair} onChange={e => setFilterPair(e.target.value)}>
            <option>All</option>
            <option>BTC/USDT</option>
            <option>ETH/USDT</option>
            <option>BNB/USDT</option>
          </select>
          <select className="select">
            <option>All Types</option>
            <option>Limit</option>
            <option>Market</option>
            <option>Stop Limit</option>
          </select>
          <select className="select">
            <option>All Sides</option>
            <option>Buy</option>
            <option>Sell</option>
          </select>
          <input type="date" className="input" style={{ width: '160px' }} />
          <button className="btn btn-secondary btn-sm" style={{ marginLeft: 'auto' }}>Export CSV</button>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
          {activeTab === 'Open Orders' && (
            <>
              {openOrders.length > 0 ? (
                <div className="table-wrapper">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Pair</th>
                        <th>Type</th>
                        <th>Side</th>
                        <th style={{ textAlign: 'right' }}>Price</th>
                        <th style={{ textAlign: 'right' }}>Amount</th>
                        <th style={{ textAlign: 'right' }}>Filled</th>
                        <th style={{ textAlign: 'right' }}>Total</th>
                        <th style={{ textAlign: 'center' }}>Status</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {openOrders.map(order => (
                        <tr key={order.id}>
                          <td style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '11px' }}>{order.id}</td>
                          <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{order.date}</td>
                          <td style={{ fontWeight: 600 }}>{order.pair}</td>
                          <td><span className="badge badge-blue">{order.type}</span></td>
                          <td>
                            <span className={`badge ${order.side === 'Buy' ? 'badge-green' : 'badge-red'}`}>{order.side}</span>
                          </td>
                          <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>${order.price.toLocaleString()}</td>
                          <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{order.amount}</td>
                          <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: 'var(--color-positive)' }}>{order.filled}</td>
                          <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>${order.total.toLocaleString()}</td>
                          <td style={{ textAlign: 'center' }}>
                            <span className={`badge ${order.status === 'Open' ? 'badge-yellow' : 'badge-blue'}`}>{order.status}</span>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <button className="btn btn-sm btn-negative">Cancel</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="empty-state">
                  <div className="empty-state-icon">📋</div>
                  <div className="empty-state-title">No Open Orders</div>
                  <div className="empty-state-desc">You have no open orders. Start trading to see orders here.</div>
                  <Link href="/trade/BTC_USDT" className="btn btn-primary">Start Trading</Link>
                </div>
              )}
            </>
          )}

          {activeTab === 'Order History' && (
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Pair</th>
                    <th>Type</th>
                    <th>Side</th>
                    <th style={{ textAlign: 'right' }}>Price</th>
                    <th style={{ textAlign: 'right' }}>Filled</th>
                    <th style={{ textAlign: 'right' }}>Total</th>
                    <th style={{ textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map(order => (
                    <tr key={order.id}>
                      <td style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '11px' }}>{order.id}</td>
                      <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{order.date}</td>
                      <td style={{ fontWeight: 600 }}>{order.pair}</td>
                      <td><span className="badge badge-blue">{order.type}</span></td>
                      <td><span className={`badge ${order.side === 'Buy' ? 'badge-green' : 'badge-red'}`}>{order.side}</span></td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>${order.price.toLocaleString()}</td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{order.filled}/{order.amount}</td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>${order.total.toLocaleString()}</td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`badge ${order.status === 'Filled' ? 'badge-green' : order.status === 'Cancelled' ? 'badge-gray' : 'badge-yellow'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {(activeTab === 'Trade History' || activeTab === 'P2P Orders' || activeTab === 'Convert History') && (
            <div className="empty-state">
              <div className="empty-state-icon">📊</div>
              <div className="empty-state-title">No {activeTab}</div>
              <div className="empty-state-desc">Your {activeTab.toLowerCase()} will appear here once you start trading.</div>
              <Link href="/trade/BTC_USDT" className="btn btn-primary">Start Trading</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
