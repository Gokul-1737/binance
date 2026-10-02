'use client';
import Link from 'next/link';

export default function DevelopersPage() {
  const endpoints = [
    { method: 'GET', path: '/api/v3/ticker/price', desc: 'Latest price for a symbol' },
    { method: 'GET', path: '/api/v3/depth', desc: 'Order book depth data' },
    { method: 'GET', path: '/api/v3/klines', desc: 'Kline/candlestick data' },
    { method: 'GET', path: '/api/v3/account', desc: 'Current account information' },
    { method: 'POST', path: '/api/v3/order', desc: 'Send in a new order' },
    { method: 'DELETE', path: '/api/v3/order', desc: 'Cancel an active order' },
    { method: 'GET', path: '/api/v3/openOrders', desc: 'Get all open orders' },
    { method: 'GET', path: '/api/v3/myTrades', desc: 'Get trades for a specific symbol' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero */}
      <div style={{ background: 'var(--bg-darkest)', borderBottom: '1px solid var(--border-default)', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="badge badge-yellow" style={{ marginBottom: '16px', display: 'inline-flex' }}>🔧 Developer Hub</div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Build on BINANCE</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '28px' }}>
            Access our comprehensive REST and WebSocket APIs to build trading bots, market data apps, and automated strategies.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link href="/account" className="btn btn-primary btn-lg">Get API Key</Link>
            <a href="https://docs.binance.com" className="btn btn-secondary btn-lg">Full Documentation →</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 32px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { icon: '⚡', value: '1.4M', label: 'Orders/sec capacity' },
            { icon: '🌐', value: '99.99%', label: 'API uptime SLA' },
            { icon: '📊', value: '1000+', label: 'API requests/min' },
            { icon: '🔌', value: '5', label: 'WebSocket streams' },
          ].map(s => (
            <div key={s.label} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand-yellow)' }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Quick Start</h2>
          <div style={{ background: 'var(--bg-darkest)', borderRadius: '8px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.7', overflow: 'auto' }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}># Install the Python SDK</div>
            <div style={{ color: 'var(--color-positive)' }}>pip install binance-sdk</div>
            <div style={{ height: '12px' }} />
            <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}># Basic usage</div>
            <div><span style={{ color: 'var(--color-info)' }}>from</span> binance <span style={{ color: 'var(--color-info)' }}>import</span> Client</div>
            <div />
            <div>client = Client(<span style={{ color: 'var(--brand-yellow)' }}>&apos;your-api-key&apos;</span>, <span style={{ color: 'var(--brand-yellow)' }}>&apos;your-api-secret&apos;</span>)</div>
            <div />
            <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}># Get BTC price</div>
            <div>price = client.get_ticker_price(<span style={{ color: 'var(--brand-yellow)' }}>symbol=&apos;BTCUSDT&apos;</span>)</div>
            <div><span style={{ color: 'var(--color-info)' }}>print</span>(price)</div>
          </div>
        </div>

        {/* Endpoints */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>REST API Endpoints</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {endpoints.map((ep, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0', borderBottom: i < endpoints.length - 1 ? '1px solid var(--border-default)' : 'none', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '3px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 700, fontFamily: 'monospace', flexShrink: 0,
                  background: ep.method === 'GET' ? 'rgba(14,203,129,0.1)' : ep.method === 'POST' ? 'rgba(30,155,240,0.1)' : 'rgba(246,70,93,0.1)',
                  color: ep.method === 'GET' ? 'var(--color-positive)' : ep.method === 'POST' ? 'var(--color-info)' : 'var(--color-negative)',
                }}>
                  {ep.method}
                </span>
                <code style={{ flex: 1, fontFamily: 'monospace', fontSize: '13px', color: 'var(--text-primary)' }}>{ep.path}</code>
                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WebSocket */}
        <div className="card">
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>WebSocket Streams</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {[
              { stream: 'Individual Symbol Book Ticker', desc: 'Real-time best bid/ask for a symbol' },
              { stream: 'Aggregate Trade Streams', desc: 'Real-time trade data stream' },
              { stream: 'Kline/Candlestick Streams', desc: 'OHLCV candlestick updates' },
              { stream: 'User Data Streams', desc: 'Account updates, order updates' },
            ].map(ws => (
              <div key={ws.stream} style={{ background: 'var(--bg-elevated)', borderRadius: '8px', padding: '14px' }}>
                <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px', fontFamily: 'monospace', color: 'var(--color-positive)' }}>{ws.stream}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{ws.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
