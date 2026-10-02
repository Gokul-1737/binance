'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { orderBookAsks, orderBookBids, recentTrades } from '@/lib/mockData';

const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W'];

function FakeFuturesChart() {
  const bars = Array.from({ length: 80 }, (_, i) => {
    const base = 67500 + Math.sin(i * 0.2) * 2000 + i * 10;
    const open = base + (Math.random() - 0.5) * 500;
    const close = open + (Math.random() - 0.47) * 400;
    const high = Math.max(open, close) + Math.random() * 200;
    const low = Math.min(open, close) - Math.random() * 200;
    return { open, close, high, low };
  });
  const min = Math.min(...bars.map(b => b.low));
  const max = Math.max(...bars.map(b => b.high));
  const range = max - min;
  const W = 900, H = 320;
  const barW = W / bars.length - 1;

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      {[0.2, 0.4, 0.6, 0.8].map(p => (
        <line key={p} x1={0} y1={H * p} x2={W} y2={H * p} stroke="#2B3139" strokeWidth="0.5" />
      ))}
      {bars.map((bar, i) => {
        const x = i * (barW + 1);
        const isUp = bar.close >= bar.open;
        const color = isUp ? '#0ECB81' : '#F6465D';
        const bodyTop = H - ((Math.max(bar.open, bar.close) - min) / range) * H;
        const bodyBot = H - ((Math.min(bar.open, bar.close) - min) / range) * H;
        const wickTop = H - ((bar.high - min) / range) * H;
        const wickBot = H - ((bar.low - min) / range) * H;
        return (
          <g key={i}>
            <line x1={x + barW / 2} y1={wickTop} x2={x + barW / 2} y2={wickBot} stroke={color} strokeWidth="1" />
            <rect x={x} y={bodyTop} width={barW} height={Math.max(bodyBot - bodyTop, 1)} fill={color} opacity="0.9" />
          </g>
        );
      })}
    </svg>
  );
}

export default function FuturesPage() {
  const [activeTf, setActiveTf] = useState('1H');
  const [leverage, setLeverage] = useState(10);
  const [margin, setMargin] = useState('Cross');
  const [orderSide, setOrderSide] = useState('buy');
  const [orderType, setOrderType] = useState('Limit');
  const [price, setPrice] = useState('67842.50');
  const [size, setSize] = useState('');
  const [markPrice, setMarkPrice] = useState(67845.20);
  const [activeTab, setActiveTab] = useState('Positions');

  useEffect(() => {
    const interval = setInterval(() => {
      setMarkPrice(p => p + (Math.random() - 0.48) * 12);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const positions = [
    { symbol: 'BTCUSDT', size: '0.100', side: 'Long', entry: '66,500.00', mark: markPrice.toFixed(2), liq: '58,200.00', margin: '663.50', pnl: ((markPrice - 66500) * 0.1).toFixed(2), roe: (((markPrice - 66500) * 0.1) / 663.50 * 100).toFixed(2) },
    { symbol: 'ETHUSDT', size: '2.000', side: 'Short', entry: '3,600.00', mark: '3,521.80', liq: '3,950.00', margin: '720.00', pnl: '156.40', roe: '21.72' },
  ];

  return (
    <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', background: 'var(--bg-darkest)', overflow: 'hidden' }}>

      {/* Top Bar */}
      <div style={{ background: 'var(--bg-main)', borderBottom: '1px solid var(--border-default)', padding: '0 16px', height: '52px', display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0, overflowX: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F7931A22', color: '#F7931A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', border: '1px solid #F7931A44' }}>₿</div>
          <span style={{ fontWeight: 700, fontSize: '15px' }}>BTCUSDT</span>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)', background: 'var(--bg-elevated)', padding: '2px 6px', borderRadius: '4px' }}>Perpetual</span>
        </div>

        {[
          { label: 'Mark Price', value: `$${markPrice.toFixed(2)}`, color: 'var(--color-positive)' },
          { label: 'Index Price', value: '$67,840.15', color: 'var(--text-primary)' },
          { label: 'Funding Rate', value: '0.0100%', color: 'var(--color-positive)' },
          { label: 'Countdown', value: '07:23:15', color: 'var(--text-secondary)' },
          { label: '24h Change', value: '+2.34%', color: 'var(--color-positive)' },
          { label: '24h High', value: '$68,500.00', color: 'var(--text-primary)' },
          { label: '24h Low', value: '$66,100.00', color: 'var(--text-primary)' },
          { label: '24h Volume', value: '28.5K BTC', color: 'var(--text-primary)' },
        ].map(stat => (
          <div key={stat.label} style={{ flexShrink: 0 }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{stat.label}</div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: stat.color, fontVariantNumeric: 'tabular-nums' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 280px 240px', overflow: 'hidden' }}>

        {/* Left: Chart */}
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border-default)', overflow: 'hidden' }}>
          <div className="chart-toolbar">
            {timeframes.map(tf => (
              <button key={tf} className={`chart-time-btn ${activeTf === tf ? 'active' : ''}`} onClick={() => setActiveTf(tf)}>{tf}</button>
            ))}
            <div style={{ width: '1px', height: '16px', background: 'var(--border-default)', margin: '0 4px' }} />
            <button className="chart-time-btn">📊 Indicators</button>
            <button className="chart-time-btn" style={{ marginLeft: 'auto' }}>⛶</button>
          </div>

          <div style={{ flex: 1, padding: '8px', overflow: 'hidden' }}>
            <FakeFuturesChart />
          </div>

          {/* Volume */}
          <div style={{ height: '50px', padding: '0 8px 4px', display: 'flex', alignItems: 'flex-end', gap: '1px', borderTop: '1px solid var(--border-default)' }}>
            {Array.from({ length: 80 }, (_, i) => {
              const h = Math.random() * 40 + 5;
              const isUp = Math.random() > 0.45;
              return <div key={i} style={{ flex: 1, height: `${h}%`, background: isUp ? 'rgba(14,203,129,0.4)' : 'rgba(246,70,93,0.4)', borderRadius: '1px' }} />;
            })}
          </div>

          {/* Bottom Panel */}
          <div style={{ borderTop: '1px solid var(--border-default)', background: 'var(--bg-main)', minHeight: '160px', flexShrink: 0 }}>
            <div style={{ display: 'flex', padding: '0 12px', borderBottom: '1px solid var(--border-default)', overflowX: 'auto' }}>
              {['Positions(2)', 'Open Orders', 'Order History', 'Transaction History', 'Asset'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.split('(')[0])}
                  style={{
                    padding: '10px 12px', fontSize: '12px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer',
                    color: activeTab === tab.split('(')[0] ? 'var(--brand-yellow)' : 'var(--text-muted)',
                    borderBottom: activeTab === tab.split('(')[0] ? '2px solid var(--brand-yellow)' : '2px solid transparent',
                    fontFamily: 'inherit', whiteSpace: 'nowrap',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Positions' && (
              <div style={{ overflowX: 'auto' }}>
                <table className="data-table" style={{ fontSize: '11px' }}>
                  <thead>
                    <tr>
                      {['Symbol', 'Size', 'Entry Price', 'Mark Price', 'Liq. Price', 'Margin', 'Unrealized PNL', 'ROE %', 'Actions'].map(h => (
                        <th key={h} style={{ fontSize: '10px', padding: '6px 8px' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((pos, i) => {
                      const pnlVal = parseFloat(pos.pnl);
                      return (
                        <tr key={i}>
                          <td style={{ padding: '6px 8px' }}>
                            <div style={{ fontWeight: 600 }}>{pos.symbol}</div>
                            <span style={{ color: pos.side === 'Long' ? 'var(--color-positive)' : 'var(--color-negative)', fontSize: '10px' }}>
                              {pos.side} {leverage}x
                            </span>
                          </td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums' }}>{pos.size}</td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums' }}>{pos.entry}</td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums' }}>{pos.mark}</td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums', color: 'var(--color-negative)' }}>{pos.liq}</td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums' }}>{pos.margin}</td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums' }}>
                            <span style={{ color: pnlVal >= 0 ? 'var(--color-positive)' : 'var(--color-negative)', fontWeight: 600 }}>
                              {pnlVal >= 0 ? '+' : ''}{pos.pnl} USDT
                            </span>
                          </td>
                          <td style={{ padding: '6px 8px', fontVariantNumeric: 'tabular-nums' }}>
                            <span style={{ color: parseFloat(pos.roe) >= 0 ? 'var(--color-positive)' : 'var(--color-negative)' }}>
                              {parseFloat(pos.roe) >= 0 ? '+' : ''}{pos.roe}%
                            </span>
                          </td>
                          <td style={{ padding: '6px 8px' }}>
                            <button className="btn btn-sm btn-negative">Close</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Center: Order Book */}
        <div style={{ borderRight: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-default)', fontSize: '13px', fontWeight: 600 }}>Order Book</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '4px 12px', fontSize: '10px', color: 'var(--text-muted)' }}>
            <span>Price</span><span style={{ textAlign: 'right' }}>Size</span><span style={{ textAlign: 'right' }}>Total</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {orderBookAsks.slice().reverse().map((o, i) => (
              <div key={i} className="order-row">
                <span style={{ color: 'var(--color-negative)', fontSize: '11px', fontVariantNumeric: 'tabular-nums' }}>{o.price.toLocaleString()}</span>
                <span style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '11px' }}>{o.amount.toFixed(3)}</span>
                <span style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '11px' }}>{o.total.toFixed(0)}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '6px 12px', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', background: 'var(--bg-darkest)', textAlign: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-positive)', fontVariantNumeric: 'tabular-nums' }}>
              ${markPrice.toFixed(2)}
            </span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {orderBookBids.map((o, i) => (
              <div key={i} className="order-row">
                <span style={{ color: 'var(--color-positive)', fontSize: '11px', fontVariantNumeric: 'tabular-nums' }}>{o.price.toLocaleString()}</span>
                <span style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '11px' }}>{o.amount.toFixed(3)}</span>
                <span style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '11px' }}>{o.total.toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Order Form */}
        <div style={{ overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* Leverage & Margin */}
          <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-default)', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={() => setMargin(m => m === 'Cross' ? 'Isolated' : 'Cross')}
              style={{ flex: 1, padding: '5px', fontSize: '11px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '4px', color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {margin}
            </button>
            <button
              style={{ flex: 1, padding: '5px', fontSize: '11px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '4px', color: 'var(--brand-yellow)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 }}
            >
              {leverage}x
            </button>
          </div>

          {/* Leverage Slider */}
          <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-default)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span>Leverage</span><span style={{ color: 'var(--brand-yellow)', fontWeight: 600 }}>{leverage}x</span>
            </div>
            <input
              type="range" min="1" max="125" value={leverage}
              onChange={e => setLeverage(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--brand-yellow)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>
              {['1x', '25x', '50x', '75x', '125x'].map(l => <span key={l}>{l}</span>)}
            </div>
          </div>

          {/* Buy/Sell Toggle */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-default)', flexShrink: 0 }}>
            <button onClick={() => setOrderSide('buy')} style={{ flex: 1, padding: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit', background: orderSide === 'buy' ? 'rgba(14,203,129,0.12)' : 'transparent', color: orderSide === 'buy' ? 'var(--color-positive)' : 'var(--text-muted)', borderBottom: orderSide === 'buy' ? '2px solid var(--color-positive)' : '2px solid transparent' }}>
              Buy/Long
            </button>
            <button onClick={() => setOrderSide('sell')} style={{ flex: 1, padding: '10px', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit', background: orderSide === 'sell' ? 'rgba(246,70,93,0.12)' : 'transparent', color: orderSide === 'sell' ? 'var(--color-negative)' : 'var(--text-muted)', borderBottom: orderSide === 'sell' ? '2px solid var(--color-negative)' : '2px solid transparent' }}>
              Sell/Short
            </button>
          </div>

          <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Order Type */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {['Limit', 'Market', 'Stop'].map(t => (
                <button key={t} onClick={() => setOrderType(t)} style={{ flex: 1, padding: '5px', fontSize: '11px', background: orderType === t ? 'var(--bg-hover)' : 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '4px', color: orderType === t ? 'var(--text-primary)' : 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>{t}</button>
              ))}
            </div>

            <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Available</span><span style={{ color: 'var(--text-primary)' }}>0.00 USDT</span>
            </div>

            {orderType !== 'Market' && (
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 10px', height: '36px' }}>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '12px', fontFamily: 'inherit' }} placeholder="Price" />
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>USDT</span>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 10px', height: '36px' }}>
              <input type="number" value={size} onChange={e => setSize(e.target.value)} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '12px', fontFamily: 'inherit' }} placeholder="Size(BTC)" />
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>BTC</span>
            </div>

            <div className="pct-slider">
              {[10, 25, 50, 75, 100].map(p => <button key={p} className="pct-btn" style={{ fontSize: '10px' }}>{p}%</button>)}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 10px', height: '36px' }}>
              <input type="text" readOnly style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'inherit' }} placeholder="Cost(USDT)" />
            </div>

            <button className={`btn btn-full ${orderSide === 'buy' ? 'btn-positive' : 'btn-negative'}`} style={{ fontWeight: 700, fontSize: '13px' }}>
              {orderSide === 'buy' ? 'Buy/Long' : 'Sell/Short'}
            </button>

            {/* Risk Stats */}
            <div style={{ background: 'var(--bg-elevated)', borderRadius: '6px', padding: '10px', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'Cost', value: '--' },
                { label: 'Max Open', value: '--' },
                { label: 'Liq. Price', value: '--' },
                { label: 'Spread', value: '$4.00' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
