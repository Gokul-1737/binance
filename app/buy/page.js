'use client';
import { useState } from 'react';
import Link from 'next/link';

const coinColors = { BTC: '#F7931A', ETH: '#627EEA', BNB: '#F0B90B', SOL: '#9945FF', USDT: '#26A17B' };

export default function BuyPage() {
  const [payAmount, setPayAmount] = useState('');
  const [payCurrency, setPayCurrency] = useState('INR');
  const [receiveCrypto, setReceiveCrypto] = useState('BTC');
  const [payMethod, setPayMethod] = useState('Card');

  const rates = { BTC: 67842.50, ETH: 3521.80, BNB: 578.40, SOL: 182.35, USDT: 1.00 };
  const inrRate = 83.5;
  const receiveAmount = payAmount ? (parseFloat(payAmount) / inrRate / rates[receiveCrypto]).toFixed(8) : '';

  const popularAssets = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$67,842.50', change: '+2.34%', pos: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,521.80', change: '+1.87%', pos: true },
    { symbol: 'BNB', name: 'BNB', price: '$578.40', change: '-0.92%', pos: false },
    { symbol: 'SOL', name: 'Solana', price: '$182.35', change: '+4.21%', pos: true },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Page Header */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)', padding: '24px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>Buy Crypto</h1>
          <p style={{ color: 'var(--text-muted)' }}>Purchase cryptocurrency quickly and securely</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px', display: 'grid', gridTemplateColumns: '1fr 440px', gap: '32px', alignItems: 'start' }}>
        {/* Left: Info */}
        <div>
          {/* Popular Assets */}
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Popular Assets</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px' }}>
            {popularAssets.map(asset => (
              <button
                key={asset.symbol}
                onClick={() => setReceiveCrypto(asset.symbol)}
                style={{
                  background: receiveCrypto === asset.symbol ? 'var(--brand-yellow-dim)' : 'var(--bg-card)',
                  border: `1px solid ${receiveCrypto === asset.symbol ? 'var(--brand-yellow)' : 'var(--border-default)'}`,
                  borderRadius: '8px', padding: '16px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s', fontFamily: 'inherit',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `${coinColors[asset.symbol] || '#F0B90B'}20`, color: coinColors[asset.symbol] || '#F0B90B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', border: `1px solid ${coinColors[asset.symbol] || '#F0B90B'}30` }}>
                    {asset.symbol.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>{asset.symbol}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{asset.name}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>{asset.price}</div>
                    <div style={{ fontSize: '12px', color: asset.pos ? 'var(--color-positive)' : 'var(--color-negative)' }}>{asset.change}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Payment Methods Info */}
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Payment Methods</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {[
              { icon: '💳', title: 'Credit / Debit Card', desc: 'Instant purchase with Visa or Mastercard. Fees apply.', fee: '1.8%' },
              { icon: '🏦', title: 'Bank Transfer (IMPS/NEFT)', desc: 'Lower fees. Processing time: 1-2 hours.', fee: '0.5%' },
              { icon: '🤝', title: 'P2P Trading', desc: 'Buy directly from other users. Zero platform fees.', fee: '0%' },
            ].map(method => (
              <div key={method.title} style={{ background: 'var(--bg-card)', border: `1px solid ${payMethod === method.title ? 'var(--brand-yellow)' : 'var(--border-default)'}`, borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'all 0.15s' }}
                onClick={() => setPayMethod(method.title)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>{method.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, marginBottom: '2px' }}>{method.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{method.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Fee</div>
                    <div style={{ fontWeight: 600, color: method.fee === '0%' ? 'var(--color-positive)' : 'var(--brand-yellow)' }}>{method.fee}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>How to Buy</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { step: '1', title: 'Create your account', desc: 'Sign up for free in under 2 minutes' },
              { step: '2', title: 'Verify your identity', desc: 'Complete KYC to unlock all features' },
              { step: '3', title: 'Add payment method', desc: 'Link your bank account or card' },
              { step: '4', title: 'Buy crypto', desc: 'Enter amount and confirm purchase' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--brand-yellow)', color: 'var(--bg-darkest)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>{item.step}</div>
                  {i < 3 && <div style={{ width: '2px', flex: 1, background: 'var(--border-default)', minHeight: '20px', marginTop: '4px' }} />}
                </div>
                <div style={{ paddingBottom: '4px' }}>
                  <div style={{ fontWeight: 600, marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Buy Widget */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '24px', position: 'sticky', top: '80px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px' }}>Buy Crypto</h2>

          {/* You Pay */}
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>You Pay</label>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '0 12px', height: '56px', gap: '12px' }}>
              <input
                type="number"
                placeholder="0"
                value={payAmount}
                onChange={e => setPayAmount(e.target.value)}
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '20px', fontWeight: 600, fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' }}
              />
              <select value={payCurrency} onChange={e => setPayCurrency(e.target.value)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '6px', color: 'var(--text-primary)', padding: '4px 8px', fontSize: '14px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', outline: 'none' }}>
                {['INR', 'USD', 'EUR', 'GBP'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Swap Icon */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px' }}>⇅</div>
          </div>

          {/* You Receive */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>You Receive (estimated)</label>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '0 12px', height: '56px', gap: '12px' }}>
              <input
                type="text"
                readOnly
                value={receiveAmount}
                placeholder="0.00000000"
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '20px', fontWeight: 600, fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' }}
              />
              <select value={receiveCrypto} onChange={e => setReceiveCrypto(e.target.value)} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '6px', color: 'var(--text-primary)', padding: '4px 8px', fontSize: '14px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', outline: 'none' }}>
                {Object.keys(rates).map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Rate info */}
          {payAmount && (
            <div style={{ background: 'var(--bg-elevated)', borderRadius: '6px', padding: '12px', marginBottom: '16px', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Rate</span>
                <span>1 {receiveCrypto} = ₹{(rates[receiveCrypto] * inrRate).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Fee (1.8%)</span>
                <span>₹{(parseFloat(payAmount || 0) * 0.018).toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-default)', paddingTop: '6px', fontWeight: 600 }}>
                <span>You&apos;ll pay</span>
                <span style={{ color: 'var(--brand-yellow)' }}>₹{(parseFloat(payAmount || 0) * 1.018).toFixed(2)}</span>
              </div>
            </div>
          )}

          <Link href="/register" className="btn btn-primary btn-full btn-lg" style={{ marginBottom: '12px', textAlign: 'center', display: 'flex', justifyContent: 'center', borderRadius: '8px' }}>
            Buy {receiveCrypto} Now
          </Link>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
            By continuing, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}
