'use client';
import Link from 'next/link';
import { feeStructure } from '@/lib/mockData';

export default function FeesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)', padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>Fee Schedule</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
            Transparent, competitive fees. No hidden charges. Reduce your fees by holding BNB or increasing your trading volume.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px' }}>
        {/* Fee Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { icon: '💰', label: 'Spot Trading', value: '0.1%', note: 'Base fee' },
            { icon: '⚡', label: 'Futures Trading', value: '0.02%', note: 'Maker fee' },
            { icon: '🤝', label: 'P2P Trading', value: '0%', note: 'Zero fees' },
            { icon: '💎', label: 'With BNB', value: '-25%', note: 'Discount' },
          ].map(f => (
            <div key={f.label} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{f.icon}</div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--brand-yellow)', letterSpacing: '-0.02em', marginBottom: '4px' }}>{f.value}</div>
              <div style={{ fontWeight: 600, marginBottom: '2px' }}>{f.label}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{f.note}</div>
            </div>
          ))}
        </div>

        {/* Spot Trading Fees */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Spot Trading Fees</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>
            Fees are based on your 30-day trading volume and BNB balance. Pay with BNB to get a 25% discount.
          </p>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>VIP Level</th>
                  <th style={{ textAlign: 'right' }}>30d Volume (BTC)</th>
                  <th style={{ textAlign: 'right' }}>BNB Balance</th>
                  <th style={{ textAlign: 'right' }}>Maker</th>
                  <th style={{ textAlign: 'right' }}>Taker</th>
                  <th style={{ textAlign: 'right' }}>Maker (BNB)</th>
                  <th style={{ textAlign: 'right' }}>Taker (BNB)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.spot.map((tier, i) => (
                  <tr key={i} style={{ background: tier.level === 'VIP 0' ? 'rgba(240,185,11,0.04)' : 'transparent' }}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {tier.level === 'VIP 0' && <span className="badge badge-yellow">Current</span>}
                        <span style={{ fontWeight: 600 }}>{tier.level}</span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{tier.volume}</td>
                    <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{tier.bnb}</td>
                    <td style={{ textAlign: 'right', color: 'var(--color-positive)', fontWeight: 500 }}>{tier.maker}</td>
                    <td style={{ textAlign: 'right', fontWeight: 500 }}>{tier.taker}</td>
                    <td style={{ textAlign: 'right', color: 'var(--color-positive)', fontWeight: 500 }}>{tier.makerBnb}</td>
                    <td style={{ textAlign: 'right', color: 'var(--color-positive)', fontWeight: 500 }}>{tier.takerBnb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Futures Trading Fees */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Futures Trading Fees</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>USDT-Margined and COIN-Margined Perpetual Contracts</p>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>VIP Level</th>
                  <th style={{ textAlign: 'right' }}>30d Volume (USDT)</th>
                  <th style={{ textAlign: 'right' }}>Maker</th>
                  <th style={{ textAlign: 'right' }}>Taker</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.futures.map((tier, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{tier.level}</td>
                    <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{tier.volume}</td>
                    <td style={{ textAlign: 'right', color: 'var(--color-positive)', fontWeight: 500 }}>{tier.maker}</td>
                    <td style={{ textAlign: 'right', fontWeight: 500 }}>{tier.taker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deposit/Withdrawal */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Deposit & Withdrawal Fees</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>Network fees vary based on blockchain congestion</p>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th style={{ textAlign: 'center' }}>Deposit Fee</th>
                  <th style={{ textAlign: 'right' }}>Withdrawal Fee</th>
                  <th style={{ textAlign: 'right' }}>Min Withdrawal</th>
                  <th style={{ textAlign: 'right' }}>Network</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { asset: 'BTC', deposit: 'Free', withdrawal: '0.0001 BTC', min: '0.001 BTC', network: 'Bitcoin' },
                  { asset: 'ETH', deposit: 'Free', withdrawal: '0.001 ETH', min: '0.01 ETH', network: 'ERC-20' },
                  { asset: 'USDT', deposit: 'Free', withdrawal: '1 USDT', min: '10 USDT', network: 'TRC-20' },
                  { asset: 'BNB', deposit: 'Free', withdrawal: '0.02 BNB', min: '0.1 BNB', network: 'BEP-20' },
                  { asset: 'SOL', deposit: 'Free', withdrawal: '0.01 SOL', min: '0.1 SOL', network: 'Solana' },
                ].map(fee => (
                  <tr key={fee.asset}>
                    <td style={{ fontWeight: 600 }}>{fee.asset}</td>
                    <td style={{ textAlign: 'center', color: 'var(--color-positive)', fontWeight: 600 }}>{fee.deposit}</td>
                    <td style={{ textAlign: 'right' }}>{fee.withdrawal}</td>
                    <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{fee.min}</td>
                    <td style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '12px' }}>{fee.network}</td>
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
