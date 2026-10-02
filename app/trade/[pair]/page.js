'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cryptoAssets, orderBookAsks, orderBookBids, recentTrades } from '@/lib/mockData';

const coinColors = {
  BTC: '#F7931A', ETH: '#627EEA', BNB: '#F0B90B', SOL: '#9945FF',
  XRP: '#00AAE4', ADA: '#3CC8C8', DOGE: '#C2A633', AVAX: '#E84142',
};

const timeframes = ['1m', '5m', '15m', '30m', '1H', '4H', '1D', '1W', '1M'];

function FakeChart({ pair }) {
  const bars = Array.from({ length: 60 }, (_, i) => {
    const base = 67000 + Math.sin(i * 0.3) * 1500;
    const open = base + (Math.random() - 0.5) * 400;
    const close = open + (Math.random() - 0.48) * 300;
    const high = Math.max(open, close) + Math.random() * 150;
    const low = Math.min(open, close) - Math.random() * 150;
    return { open, close, high, low, vol: Math.random() * 100 + 20 };
  });
  const min = Math.min(...bars.map(b => b.low));
  const max = Math.max(...bars.map(b => b.high));
  const range = max - min;
  const W = 800, H = 300;
  const barW = W / bars.length - 1;

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map(p => (
        <line key={p} x1={0} y1={H * p} x2={W} y2={H * p} stroke="var(--border-default)" strokeWidth="0.5" />
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
            <rect x={x} y={bodyTop} width={barW} height={Math.max(bodyBot - bodyTop, 1)} fill={color} />
          </g>
        );
      })}
    </svg>
  );
}

function OrderBook({ asks, bids, currentPrice }) {
  const maxTotal = Math.max(...[...asks, ...bids].map(o => o.total));
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>Order Book</div>
      </div>
      {/* Column Headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '4px 12px', fontSize: '11px', color: 'var(--text-muted)' }}>
        <span>Price(USDT)</span><span style={{ textAlign: 'right' }}>Amount(BTC)</span><span style={{ textAlign: 'right' }}>Total</span>
      </div>
      {/* Asks */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {asks.slice().reverse().map((order, i) => (
          <div key={i} className="order-row" style={{ position: 'relative' }}>
            <div className="depth-bar depth-bar-ask" style={{ width: `${(order.total / maxTotal) * 100}%` }} />
            <span style={{ color: 'var(--color-negative)', fontVariantNumeric: 'tabular-nums', fontSize: '12px', zIndex: 1 }}>{order.price.toLocaleString()}</span>
            <span style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '12px', zIndex: 1 }}>{order.amount.toFixed(3)}</span>
            <span style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '12px', zIndex: 1 }}>{order.total.toFixed(0)}</span>
          </div>
        ))}
      </div>
      {/* Spread */}
      <div style={{ padding: '8px 12px', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', background: 'var(--bg-darkest)', textAlign: 'center' }}>
        <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-positive)', fontVariantNumeric: 'tabular-nums' }}>
          ${currentPrice.toLocaleString()}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '8px' }}>≈ ₹5,662,345</span>
      </div>
      {/* Bids */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {bids.map((order, i) => (
          <div key={i} className="order-row" style={{ position: 'relative' }}>
            <div className="depth-bar depth-bar-bid" style={{ width: `${(order.total / maxTotal) * 100}%` }} />
            <span style={{ color: 'var(--color-positive)', fontVariantNumeric: 'tabular-nums', fontSize: '12px', zIndex: 1 }}>{order.price.toLocaleString()}</span>
            <span style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '12px', zIndex: 1 }}>{order.amount.toFixed(3)}</span>
            <span style={{ textAlign: 'right', color: 'var(--text-muted)', fontSize: '12px', zIndex: 1 }}>{order.total.toFixed(0)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderForm({ side, symbol }) {
  const [orderType, setOrderType] = useState('Limit');
  const [price, setPrice] = useState('67842.50');
  const [amount, setAmount] = useState('');
  const [pct, setPct] = useState(0);
  const availableUsdt = 15234.56;
  const availableBtc = 0.4932;

  const handlePct = (p) => {
    setPct(p);
    if (side === 'buy') setAmount(((availableUsdt * p / 100) / parseFloat(price || 1)).toFixed(6));
    else setAmount((availableBtc * p / 100).toFixed(6));
  };

  const total = parseFloat(price || 0) * parseFloat(amount || 0);

  return (
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex', marginBottom: '12px', background: 'var(--bg-elevated)', borderRadius: '6px', padding: '2px' }}>
        {['Limit', 'Market', 'Stop Limit'].map(t => (
          <button
            key={t}
            onClick={() => setOrderType(t)}
            style={{
              flex: 1, padding: '6px 4px', fontSize: '11px', fontWeight: 500, borderRadius: '4px',
              background: orderType === t ? 'var(--bg-hover)' : 'transparent',
              color: orderType === t ? 'var(--text-primary)' : 'var(--text-muted)',
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
        <span>Available</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
          {side === 'buy' ? `${availableUsdt.toLocaleString()} USDT` : `${availableBtc} BTC`}
        </span>
      </div>

      {orderType !== 'Market' && (
        <div className="input-group" style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 12px', height: '40px' }}>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' }}
              placeholder="Price"
            />
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>USDT</span>
          </div>
        </div>
      )}

      <div className="input-group" style={{ marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 12px', height: '40px' }}>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' }}
            placeholder="Amount"
          />
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>{symbol}</span>
        </div>
      </div>

      {/* Percentage */}
      <div className="pct-slider">
        {[25, 50, 75, 100].map(p => (
          <button key={p} onClick={() => handlePct(p)} className={`pct-btn ${pct === p ? 'active' : ''}`}>{p}%</button>
        ))}
      </div>

      {/* Total */}
      <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-input)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0 12px', height: '40px', marginBottom: '12px' }}>
        <input
          type="text"
          value={total > 0 ? total.toFixed(2) : ''}
          readOnly
          style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '13px', fontFamily: 'inherit', fontVariantNumeric: 'tabular-nums' }}
          placeholder="Total"
        />
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>USDT</span>
      </div>

      <button
        className={`btn ${side === 'buy' ? 'btn-positive' : 'btn-negative'} btn-full`}
        style={{ fontWeight: 700, fontSize: '14px' }}
      >
        {side === 'buy' ? `Buy ${symbol}` : `Sell ${symbol}`}
      </button>
    </div>
  );
}

export default function TradePage({ params }) {
  const pairParam = params?.pair || 'BTC_USDT';
  const [base, quote] = pairParam.split('_');
  const [activeTf, setActiveTf] = useState('1H');
  const [orderSide, setOrderSide] = useState('buy');
  const [activeBottom, setActiveBottom] = useState('Open Orders');
  const [price, setPrice] = useState(67842.50);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(p => p + (Math.random() - 0.48) * 10);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const asset = cryptoAssets.find(a => a.symbol === base) || cryptoAssets[0];
  const isPos = asset.change24h >= 0;

  return (
    <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', background: 'var(--bg-darkest)', overflow: 'hidden' }}>

      {/* Top Bar */}
      <div style={{ background: 'var(--bg-main)', borderBottom: '1px solid var(--border-default)', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '24px', height: '52px', flexShrink: 0, overflowX: 'auto' }}>
        {/* Pair Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div className="coin-icon coin-icon-sm" style={{ background: `${coinColors[base] || '#F0B90B'}20`, color: coinColors[base] || '#F0B90B' }}>
            {base?.charAt(0)}
          </div>
          <span style={{ fontWeight: 700, fontSize: '16px' }}>{base}/{quote}</span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--bg-elevated)', padding: '2px 6px', borderRadius: '4px' }}>Spot</span>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: isPos ? 'var(--color-positive)' : 'var(--color-negative)', fontVariantNumeric: 'tabular-nums' }}>
              ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
          {[
            { label: '24h Change', value: `${isPos ? '+' : ''}${asset.change24h.toFixed(2)}%`, color: isPos ? 'var(--color-positive)' : 'var(--color-negative)' },
            { label: '24h High', value: `$${asset.high24h.toLocaleString()}`, color: 'var(--text-primary)' },
            { label: '24h Low', value: `$${asset.low24h.toLocaleString()}`, color: 'var(--text-primary)' },
            { label: '24h Volume', value: `${(asset.volume24h / 1e9).toFixed(2)}B`, color: 'var(--text-primary)' },
            { label: '24h Volume(USDT)', value: `${((asset.volume24h * asset.price) / 1e9).toFixed(2)}B`, color: 'var(--text-primary)' },
          ].map(stat => (
            <div key={stat.label} style={{ flexShrink: 0 }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{stat.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: stat.color, fontVariantNumeric: 'tabular-nums' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 280px 220px', overflow: 'hidden' }}>

        {/* Left: Chart + Orders */}
        <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border-default)', overflow: 'hidden' }}>
          {/* Chart Toolbar */}
          <div className="chart-toolbar">
            {timeframes.map(tf => (
              <button
                key={tf}
                className={`chart-time-btn ${activeTf === tf ? 'active' : ''}`}
                onClick={() => setActiveTf(tf)}
              >
                {tf}
              </button>
            ))}
            <div style={{ width: '1px', height: '16px', background: 'var(--border-default)', margin: '0 4px' }} />
            <button className="chart-time-btn">📊 Indicators</button>
            <button className="chart-time-btn">⊞</button>
            <button className="chart-time-btn">✏️</button>
            <button className="chart-time-btn" style={{ marginLeft: 'auto' }}>⛶</button>
          </div>

          {/* Chart */}
          <div style={{ flex: 1, padding: '8px', overflowX: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '11px', color: 'var(--text-muted)', zIndex: 2, lineHeight: 1.6 }}>
              <div>O: <span style={{ color: 'var(--text-primary)' }}>67,234.50</span></div>
              <div>H: <span style={{ color: 'var(--color-positive)' }}>68,500.00</span></div>
              <div>L: <span style={{ color: 'var(--color-negative)' }}>66,100.00</span></div>
              <div>C: <span style={{ color: 'var(--text-primary)' }}>{price.toFixed(2)}</span></div>
            </div>
            <FakeChart pair={pairParam} />
          </div>

          {/* Volume bars */}
          <div style={{ height: '60px', padding: '0 8px 8px', display: 'flex', alignItems: 'flex-end', gap: '1px', borderTop: '1px solid var(--border-default)' }}>
            {Array.from({ length: 60 }, (_, i) => {
              const h = Math.random() * 50 + 5;
              const isUp = Math.random() > 0.45;
              return <div key={i} style={{ flex: 1, height: `${h}%`, background: isUp ? 'rgba(14,203,129,0.5)' : 'rgba(246,70,93,0.5)', borderRadius: '1px' }} />;
            })}
          </div>

          {/* Bottom Tabs */}
          <div style={{ borderTop: '1px solid var(--border-default)', background: 'var(--bg-main)', flexShrink: 0 }}>
            <div style={{ display: 'flex', padding: '0 12px', borderBottom: '1px solid var(--border-default)' }}>
              {['Open Orders', 'Order History', 'Trade History', 'Funds'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveBottom(tab)}
                  style={{
                    padding: '10px 12px', fontSize: '12px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer',
                    color: activeBottom === tab ? 'var(--brand-yellow)' : 'var(--text-muted)',
                    borderBottom: activeBottom === tab ? '2px solid var(--brand-yellow)' : '2px solid transparent',
                    fontFamily: 'inherit', transition: 'color 0.15s',
                  }}
                >
                  {tab}
                </button>
              ))}
              <Link href="/login" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', fontSize: '12px', color: 'var(--brand-yellow)', textDecoration: 'none' }}>
                Log in or Register →
              </Link>
            </div>
            <div style={{ padding: '12px', minHeight: '80px' }}>
              <div className="empty-state" style={{ padding: '20px' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>No open orders</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Order Book */}
        <div style={{ borderRight: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <OrderBook asks={orderBookAsks} bids={orderBookBids} currentPrice={price} />
        </div>

        {/* Right: Order Form */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Buy/Sell Toggle */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-default)', flexShrink: 0 }}>
            <button
              onClick={() => setOrderSide('buy')}
              style={{
                flex: 1, padding: '12px', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                background: orderSide === 'buy' ? 'rgba(14,203,129,0.12)' : 'transparent',
                color: orderSide === 'buy' ? 'var(--color-positive)' : 'var(--text-muted)',
                borderBottom: orderSide === 'buy' ? '2px solid var(--color-positive)' : '2px solid transparent',
              }}
            >
              Buy
            </button>
            <button
              onClick={() => setOrderSide('sell')}
              style={{
                flex: 1, padding: '12px', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                background: orderSide === 'sell' ? 'rgba(246,70,93,0.12)' : 'transparent',
                color: orderSide === 'sell' ? 'var(--color-negative)' : 'var(--text-muted)',
                borderBottom: orderSide === 'sell' ? '2px solid var(--color-negative)' : '2px solid transparent',
              }}
            >
              Sell
            </button>
          </div>

          <div style={{ overflow: 'auto', flex: 1 }}>
            <OrderForm side={orderSide} symbol={base} />

            {/* Recent Trades */}
            <div style={{ borderTop: '1px solid var(--border-default)', padding: '8px 0' }}>
              <div style={{ padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Recent Trades</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '4px 12px', fontSize: '10px', color: 'var(--text-muted)' }}>
                <span>Price</span><span style={{ textAlign: 'center' }}>Amount</span><span style={{ textAlign: 'right' }}>Time</span>
              </div>
              {recentTrades.slice(0, 8).map((t, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '2px 12px', fontSize: '11px', fontVariantNumeric: 'tabular-nums' }}>
                  <span style={{ color: t.side === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)' }}>{t.price.toLocaleString()}</span>
                  <span style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>{t.amount.toFixed(3)}</span>
                  <span style={{ textAlign: 'right', color: 'var(--text-muted)' }}>{t.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
