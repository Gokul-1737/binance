'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cryptoAssets, tradingPairs, earnProducts, academyArticles, newsArticles } from '@/lib/mockData';
import styles from './page.module.css';

const tickerAssets = [
  { symbol: 'BTC/USDT', price: '67,842.50', change: '+2.34%', pos: true },
  { symbol: 'ETH/USDT', price: '3,521.80', change: '+1.87%', pos: true },
  { symbol: 'BNB/USDT', price: '578.40', change: '-0.92%', pos: false },
  { symbol: 'SOL/USDT', price: '182.35', change: '+4.21%', pos: true },
  { symbol: 'XRP/USDT', price: '0.6234', change: '-1.45%', pos: false },
  { symbol: 'ADA/USDT', price: '0.4821', change: '+0.67%', pos: true },
  { symbol: 'DOGE/USDT', price: '0.1623', change: '+3.45%', pos: true },
  { symbol: 'AVAX/USDT', price: '38.72', change: '-2.11%', pos: false },
  { symbol: 'DOT/USDT', price: '7.84', change: '+1.23%', pos: true },
  { symbol: 'LINK/USDT', price: '14.67', change: '+2.89%', pos: true },
];

const faqItems = [
  { q: 'What is cryptocurrency?', a: 'Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies, cryptocurrencies operate on decentralized networks based on blockchain technology, making them immune to government interference or manipulation.' },
  { q: 'How do I buy crypto on BINANCE?', a: 'You can buy crypto on BINANCE by creating an account, completing identity verification, depositing funds via bank transfer or card, and then using our Buy Crypto feature or Spot Trading to purchase your preferred cryptocurrency.' },
  { q: 'How does crypto trading work?', a: 'Crypto trading involves buying and selling digital assets on an exchange. You can trade on the spot market (immediate exchange), futures market (contracts for future delivery), or peer-to-peer (directly with other users). Our platform supports all these methods.' },
  { q: 'How do I deposit funds?', a: 'To deposit, log in to your account, navigate to the Wallet section, select Deposit, choose your preferred asset or fiat currency, and follow the instructions. We support bank transfers, credit/debit cards, and crypto transfers.' },
  { q: 'How do I withdraw funds?', a: 'Withdrawals can be made from the Wallet section. Select Withdraw, choose your asset, enter the destination address (for crypto) or bank details (for fiat), and confirm with your 2FA code. Processing times vary by method.' },
  { q: 'What is futures trading?', a: 'Futures trading allows you to trade contracts that represent an agreement to buy or sell an asset at a future date. With leverage up to 125x, futures let you amplify your position — but also your potential losses. Always trade responsibly.' },
  { q: 'How does P2P trading work?', a: 'P2P (Peer-to-Peer) trading allows you to buy and sell crypto directly with other users. You can choose from various payment methods, prices, and merchants. Our escrow system protects both buyers and sellers during each transaction.' },
];

const coinColors = {
  BTC: '#F7931A', ETH: '#627EEA', BNB: '#F0B90B', SOL: '#9945FF',
  XRP: '#00AAE4', ADA: '#3CC8C8', DOGE: '#C2A633', AVAX: '#E84142',
  DOT: '#E6007A', LINK: '#2A5ADA', MATIC: '#8247E5', UNI: '#FF007A',
};

function MiniChart({ positive }) {
  const points = [20, 35, 25, 40, 30, 45, 35, 28, 42, 38, 50, 44];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min;
  const width = 80;
  const height = 32;

  const pathPoints = points.map((p, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((p - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  const color = positive ? '#0ECB81' : '#F6465D';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="mini-chart">
      <polyline
        points={pathPoints}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Hot');
  const [openFaq, setOpenFaq] = useState(null);
  const [animatedPrices, setAnimatedPrices] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updates = {};
      cryptoAssets.slice(0, 5).forEach(asset => {
        updates[asset.symbol] = asset.price * (1 + (Math.random() - 0.5) * 0.001);
      });
      setAnimatedPrices(prev => ({ ...prev, ...updates }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const displayAssets = cryptoAssets.slice(0, 10);

  return (
    <div className={styles.page}>
      {/* Live Ticker */}
      <div className="ticker-container">
        <div className="ticker-track">
          {[...tickerAssets, ...tickerAssets].map((item, i) => (
            <div key={i} className="ticker-item">
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{item.symbol}</span>
              <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>${item.price}</span>
              <span className={item.pos ? 'change-positive' : 'change-negative'}>{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className={`${styles.hero} hero-gradient`}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className="status-dot status-dot-green"></span>
              <span>100M+ Users Worldwide</span>
            </div>
            <h1 className={styles.heroTitle}>
              Trade Crypto<br />
              <span className={styles.heroAccent}>With Confidence</span>
            </h1>
            <p className={styles.heroSubtitle}>
              The world&apos;s leading cryptocurrency exchange. Access 350+ assets, advanced trading tools, and industry-leading security.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/register" className="btn btn-primary btn-xl">
                Start Trading
              </Link>
              <Link href="/markets" className="btn btn-secondary btn-xl">
                Explore Markets
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>$76B+</div>
                <div className={styles.heroStatLabel}>24h Trading Volume</div>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>350+</div>
                <div className={styles.heroStatLabel}>Cryptocurrencies</div>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>0.1%</div>
                <div className={styles.heroStatLabel}>Lowest Fees</div>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatValue}>180+</div>
                <div className={styles.heroStatLabel}>Countries</div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Trading Dashboard */}
          <div className={styles.heroVisual}>
            <div className={styles.dashboardCard}>
              <div className={styles.dashboardHeader}>
                <span className={styles.dashboardTitle}>BTC/USDT</span>
                <span className="badge badge-green">+2.34%</span>
              </div>
              <div className={styles.dashboardPrice}>
                <span className={styles.dashboardPriceMain}>$67,842.50</span>
              </div>
              {/* Fake chart bars */}
              <div className={styles.chartBars}>
                {[40, 55, 35, 70, 45, 80, 60, 90, 65, 85, 72, 95, 78, 88, 92].map((h, i) => (
                  <div
                    key={i}
                    className={styles.chartBar}
                    style={{
                      height: `${h}%`,
                      background: h > 65 ? 'var(--color-positive)' : 'var(--color-negative)',
                      opacity: 0.8
                    }}
                  />
                ))}
              </div>
              <div className={styles.dashboardTickers}>
                {tickerAssets.slice(0, 5).map((t) => (
                  <div key={t.symbol} className={styles.dashboardTickerRow}>
                    <span className={styles.dashboardTickerSym}>{t.symbol}</span>
                    <span className={styles.dashboardTickerPrc}>${t.price}</span>
                    <span className={t.pos ? 'change-positive text-sm' : 'change-negative text-sm'}>{t.change}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className={`${styles.floatingBadge} ${styles.floatingBadge1}`}>
              <span style={{ color: 'var(--color-positive)' }}>▲</span>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>24h Gain</div>
                <div style={{ fontWeight: 700, color: 'var(--color-positive)' }}>+$2,341.20</div>
              </div>
            </div>
            <div className={`${styles.floatingBadge} ${styles.floatingBadge2}`}>
              <span style={{ fontSize: '20px' }}>🔒</span>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Security</div>
                <div style={{ fontWeight: 700, color: 'var(--brand-yellow)' }}>SAFU Fund</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className={`section ${styles.marketSection}`}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Market Overview</h2>
              <p className="section-subtitle">Real-time prices and 24h statistics</p>
            </div>
            <Link href="/markets" className="btn btn-secondary">View All Markets →</Link>
          </div>

          <div className="tabs">
            {['Favorites', 'Hot', 'New Listings', 'Top Gainers', 'Top Volume'].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'Favorites' && '⭐ '}
                {tab}
              </button>
            ))}
          </div>

          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: 32 }}>#</th>
                  <th>Coin</th>
                  <th style={{ textAlign: 'right' }}>Price</th>
                  <th style={{ textAlign: 'right' }}>24h Change</th>
                  <th style={{ textAlign: 'right' }} className="hide-mobile">24h High</th>
                  <th style={{ textAlign: 'right' }} className="hide-mobile">24h Low</th>
                  <th style={{ textAlign: 'right' }} className="hide-tablet">Volume</th>
                  <th style={{ textAlign: 'center' }} className="hide-mobile">Chart</th>
                  <th style={{ textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayAssets.map((asset, i) => {
                  const livePrice = animatedPrices[asset.symbol] || asset.price;
                  const isPos = asset.change24h >= 0;
                  return (
                    <tr key={asset.id}>
                      <td style={{ color: 'var(--text-muted)' }}>{i + 1}</td>
                      <td>
                        <Link href={`/markets/${asset.id}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                          <div
                            className="coin-icon"
                            style={{ background: `${coinColors[asset.symbol] || '#F0B90B'}22`, color: coinColors[asset.symbol] || '#F0B90B', border: `1px solid ${coinColors[asset.symbol] || '#F0B90B'}44` }}
                          >
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{asset.symbol}</div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{asset.name}</div>
                          </div>
                        </Link>
                      </td>
                      <td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>
                        ${livePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: asset.price < 1 ? 4 : 2 })}
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
                      <td style={{ textAlign: 'center' }} className="hide-mobile">
                        <MiniChart positive={isPos} />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <Link
                          href={`/trade/${asset.symbol}_USDT`}
                          className="btn btn-sm btn-outline"
                        >
                          Trade
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust / Ecosystem Section */}
      <section className={`section ${styles.trustSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <h2 className="section-title">Why Choose BINANCE?</h2>
            <p className="section-subtitle">Built for traders, trusted by millions</p>
          </div>
          <div className={styles.trustGrid}>
            {[
              { icon: '🔐', title: 'Industry-Leading Security', desc: 'Multi-layer security with SAFU fund, cold storage, and real-time monitoring protect your assets 24/7.', stat: '$1B+', statLabel: 'SAFU Fund' },
              { icon: '⚡', title: 'Ultra-Fast Execution', desc: 'Our matching engine processes 1.4 million orders per second with near-zero latency.', stat: '1.4M', statLabel: 'Orders/sec' },
              { icon: '💧', title: 'Deep Liquidity', desc: 'Consistently top-ranked global exchange volume ensures tight spreads and best prices.', stat: '#1', statLabel: 'Global Volume' },
              { icon: '📊', title: 'Advanced Trading Tools', desc: 'Professional charts, 100+ indicators, advanced order types and risk management tools.', stat: '100+', statLabel: 'Indicators' },
              { icon: '🌍', title: 'Global Ecosystem', desc: 'Available in 180+ countries with local payment methods and 24/7 customer support.', stat: '180+', statLabel: 'Countries' },
              { icon: '💰', title: 'Lowest Trading Fees', desc: 'Start with 0.1% spot trading fees, reduced further with BNB and VIP tier benefits.', stat: '0.1%', statLabel: 'Base Fee' },
            ].map((item) => (
              <div key={item.title} className={`card card-hover ${styles.trustCard}`}>
                <div className={styles.trustIcon}>{item.icon}</div>
                <div className={styles.trustStat}>{item.stat}</div>
                <div className={styles.trustStatLabel}>{item.statLabel}</div>
                <h3 className={styles.trustTitle}>{item.title}</h3>
                <p className={styles.trustDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <h2 className="section-title">One Platform, Everything You Need</h2>
            <p className="section-subtitle">A complete suite of financial products for every type of trader</p>
          </div>
          <div className={styles.productsGrid}>
            {[
              { icon: '📈', title: 'Spot Trading', desc: 'Buy and sell 350+ cryptocurrencies instantly at real-time prices.', href: '/trade/BTC_USDT', color: '#0ECB81' },
              { icon: '⚡', title: 'Futures', desc: 'Trade perpetual contracts with up to 125x leverage.', href: '/futures', color: '#1E9BF0' },
              { icon: '🤝', title: 'P2P Trading', desc: 'Trade directly with other users with zero fees.', href: '/p2p', color: '#F0B90B' },
              { icon: '💰', title: 'Earn', desc: 'Earn up to 22% APR on your idle crypto assets.', href: '/earn', color: '#9945FF' },
              { icon: '👛', title: 'Wallet', desc: 'Secure, fast and multi-currency digital wallet.', href: '/wallet', color: '#E84142' },
              { icon: '🏢', title: 'Institutional', desc: 'Dedicated services for institutional clients and funds.', href: '/', color: '#3CC8C8' },
              { icon: '🔧', title: 'API & Developers', desc: 'REST and WebSocket APIs for automated trading.', href: '/developers', color: '#848E9C' },
              { icon: '📚', title: 'Academy', desc: 'Learn crypto trading from beginner to advanced.', href: '/academy', color: '#F0B90B' },
            ].map((product) => (
              <Link key={product.title} href={product.href} className={`${styles.productCard} card card-hover`}>
                <div className={styles.productIcon} style={{ background: `${product.color}15`, border: `1px solid ${product.color}30` }}>
                  {product.icon}
                </div>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDesc}>{product.desc}</p>
                <span className={styles.productArrow} style={{ color: product.color }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Section Preview */}
      <section className={`section ${styles.earnSection}`}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Earn Passive Income</h2>
              <p className="section-subtitle">Put your crypto to work and earn rewards</p>
            </div>
            <Link href="/earn" className="btn btn-secondary">View All →</Link>
          </div>
          <div className={styles.earnGrid}>
            {earnProducts.slice(0, 4).map((product) => (
              <div key={product.asset} className={`card card-hover ${styles.earnCard}`}>
                <div className={styles.earnCardTop}>
                  <div
                    className="coin-icon coin-icon-lg"
                    style={{ background: `${coinColors[product.asset] || '#F0B90B'}20`, color: coinColors[product.asset] || '#F0B90B', fontSize: '18px' }}
                  >
                    {product.asset.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-lg)' }}>{product.asset}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{product.type}</div>
                  </div>
                  <div className={`badge ${product.risk === 'Low' ? 'badge-green' : product.risk === 'Medium' ? 'badge-yellow' : 'badge-red'}`} style={{ marginLeft: 'auto' }}>
                    {product.risk}
                  </div>
                </div>
                <div className={styles.earnCardApr}>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>APR</div>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--color-positive)' }}>{product.apr}</div>
                </div>
                <div className={styles.earnCardDetails}>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Duration</div>
                    <div style={{ fontWeight: 500 }}>{product.duration}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Min Amount</div>
                    <div style={{ fontWeight: 500 }}>{product.minimum}</div>
                  </div>
                </div>
                <Link href="/earn" className="btn btn-primary btn-full">Subscribe</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className={`section ${styles.newsSection}`}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Latest News</h2>
              <p className="section-subtitle">Stay up to date with the crypto market</p>
            </div>
            <Link href="/news" className="btn btn-secondary">All News →</Link>
          </div>
          <div className={styles.newsGrid}>
            {newsArticles.slice(0, 4).map((article) => (
              <Link key={article.id} href="/news" className={styles.newsCard}>
                <div className={styles.newsImage}>
                  {article.category === 'Bitcoin' ? '₿' : article.category === 'Ethereum' ? 'Ξ' : article.category === 'Regulation' ? '⚖️' : article.category === 'DeFi' ? '🏦' : '📰'}
                </div>
                <div className={styles.newsBody}>
                  <div className={styles.newsMeta}>
                    <span className="badge badge-blue">{article.category}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>{article.readTime} read</span>
                  </div>
                  <h3 className={styles.newsTitle}>{article.title}</h3>
                  <p className={styles.newsExcerpt}>{article.excerpt}</p>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>
                    {article.author} · {article.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className={`section ${styles.appSection}`}>
        <div className="container">
          <div className={styles.appContent}>
            <div className={styles.appText}>
              <h2 className={styles.appTitle}>Trade Anywhere, Anytime</h2>
              <p className={styles.appSubtitle}>
                Download the BINANCE app and take your trading on the go. Available on iOS and Android.
              </p>
              <ul className={styles.appFeatures}>
                {['Advanced charting tools', 'Instant push notifications', 'Face ID / fingerprint login', 'Real-time market data', 'P2P trading on mobile'].map((f) => (
                  <li key={f} className={styles.appFeature}>
                    <span style={{ color: 'var(--color-positive)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className={styles.appDownloadBtns}>
                <Link href="/download" className={styles.dlBtn}>
                  <span>🍎</span>
                  <div>
                    <div style={{ fontSize: '10px', opacity: 0.8 }}>Download on the</div>
                    <div style={{ fontWeight: 600 }}>App Store</div>
                  </div>
                </Link>
                <Link href="/download" className={styles.dlBtn}>
                  <span>▶</span>
                  <div>
                    <div style={{ fontSize: '10px', opacity: 0.8 }}>Get it on</div>
                    <div style={{ fontWeight: 600 }}>Google Play</div>
                  </div>
                </Link>
              </div>
              <div className={styles.qrBox}>
                <div className={styles.qrCode}>
                  {/* QR Code simulation */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', padding: '8px' }}>
                    {Array.from({ length: 49 }, (_, i) => (
                      <div key={i} style={{ width: '8px', height: '8px', background: Math.random() > 0.5 ? '#0B0E11' : 'transparent', borderRadius: '1px' }} />
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Scan to download</span>
              </div>
            </div>
            <div className={styles.appPhone}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  <div style={{ padding: '16px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Total Balance</div>
                    <div style={{ fontSize: '24px', fontWeight: 700 }}>$124,583.20</div>
                    <div style={{ color: 'var(--color-positive)', fontSize: '12px' }}>+$2,341.20 (+1.92%)</div>
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    {tickerAssets.slice(0, 6).map((t) => (
                      <div key={t.symbol} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-default)', fontSize: '13px' }}>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{t.symbol}</span>
                        <span style={{ color: t.pos ? 'var(--color-positive)' : 'var(--color-negative)' }}>{t.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about BINANCE</p>
          </div>
          <div className={styles.faqContainer}>
            {faqItems.map((item, i) => (
              <div key={i} className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={`accordion-icon ${openFaq === i ? 'open' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="accordion-content">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to start your crypto journey?</h2>
            <p className={styles.ctaSubtitle}>Join 100 million+ users and start trading today</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/register" className="btn btn-primary btn-lg">Create Free Account</Link>
              <Link href="/markets" className="btn btn-secondary btn-lg">Explore Markets</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <div className="mobile-nav">
        <Link href="/" className="mobile-nav-item active">
          <span className="mobile-nav-icon">🏠</span>
          <span>Home</span>
        </Link>
        <Link href="/markets" className="mobile-nav-item">
          <span className="mobile-nav-icon">📊</span>
          <span>Markets</span>
        </Link>
        <Link href="/trade/BTC_USDT" className="mobile-nav-item">
          <span className="mobile-nav-icon">📈</span>
          <span>Trade</span>
        </Link>
        <Link href="/futures" className="mobile-nav-item">
          <span className="mobile-nav-icon">⚡</span>
          <span>Futures</span>
        </Link>
        <Link href="/wallet" className="mobile-nav-item">
          <span className="mobile-nav-icon">👛</span>
          <span>Assets</span>
        </Link>
      </div>
    </div>
  );
}
