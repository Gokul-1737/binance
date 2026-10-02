'use client';
import { useState } from 'react';
import Link from 'next/link';
import { transactions } from '@/lib/mockData';

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState('Deposits');

  const statusColor = { Completed: 'badge-green', Pending: 'badge-yellow', Failed: 'badge-red' };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Transaction History</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>View all your deposits, withdrawals and transfers</p>
        </div>

        <div className="tabs">
          {['Deposits', 'Withdrawals', 'Transfers', 'Conversions'].map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <select className="select"><option>All Assets</option><option>BTC</option><option>ETH</option><option>USDT</option></select>
          <select className="select"><option>All Status</option><option>Completed</option><option>Pending</option><option>Failed</option></select>
          <input type="date" className="input" style={{ width: '160px' }} />
          <span style={{ color: 'var(--text-muted)', alignSelf: 'center' }}>to</span>
          <input type="date" className="input" style={{ width: '160px' }} />
          <button className="btn btn-secondary btn-sm" style={{ marginLeft: 'auto' }}>Export</button>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Asset</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                  <th style={{ textAlign: 'center' }}>Status</th>
                  <th className="hide-mobile">Transaction ID</th>
                  <th style={{ textAlign: 'center' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr key={i}>
                    <td style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{tx.date}</td>
                    <td>
                      <span className={`badge ${tx.type === 'Deposit' ? 'badge-green' : 'badge-red'}`}>
                        {tx.type === 'Deposit' ? '⬇️' : '⬆️'} {tx.type}
                      </span>
                    </td>
                    <td style={{ fontWeight: 600 }}>{tx.asset}</td>
                    <td style={{ textAlign: 'right', fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: tx.type === 'Deposit' ? 'var(--color-positive)' : 'var(--color-negative)' }}>
                      {tx.type === 'Deposit' ? '+' : '-'}{tx.amount.toLocaleString()}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge ${statusColor[tx.status]}`}>{tx.status}</span>
                    </td>
                    <td className="hide-mobile">
                      <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)' }}>
                        {tx.txId.slice(0, 20)}...
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button className="btn btn-sm btn-ghost" style={{ fontSize: '11px' }}>View →</button>
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
