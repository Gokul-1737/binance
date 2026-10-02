'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Buy Crypto', href: '/buy' },
  { label: 'Markets', href: '/markets' },
  {
    label: 'Trade',
    href: '/trade/BTC_USDT',
    columns: [
      {
        title: 'Basic',
        items: [
          { label: 'Spot', href: '/trade/BTC_USDT', desc: 'Trade Spot and Margin with advanced tools', icon: '🎯' },
          { label: 'Stocks', href: '/trade/BTC_USDT', desc: 'Trade Stocks & ETFs with crypto', badge: 'New', icon: '📈' },
          { label: 'Margin', href: '/trade/BTC_USDT', desc: 'Increase your profits with leverage', icon: '⚡' },
          { label: 'P2P', href: '/p2p', desc: 'Buy & sell cryptocurrencies using bank transfer and 800+ options', icon: '👥' },
          { label: 'Convert & Block Trade', href: '/buy', desc: 'The easiest way to trade at all sizes', icon: '🔄' },
          { label: 'Demo Trading', href: '/trade/BTC_USDT', desc: 'Use virtual funds to experience real trading scenarios with zero risk.', icon: '🎮' },
        ]
      },
      {
        title: 'Advanced',
        items: [
          { label: 'DEX', href: '/trade/BTC_USDT', desc: 'On-chain trading with Binance Wallet', badge: 'Beta', icon: '🔗' },
          { label: 'Alpha', href: '/trade/BTC_USDT', desc: 'Quick access to Web3 via Alpha Trading', icon: 'α' },
          { label: 'Prediction', href: '/trade/BTC_USDT', desc: 'Predict outcomes, trade the future', badge: 'New', icon: '🔮' },
          { label: 'Trading Bots', href: '/trade/BTC_USDT', desc: 'Trade smarter with our various automated strategies - easy, fast and reliable', icon: '🤖' },
          { label: 'Copy Trading', href: '/trade/BTC_USDT', desc: 'Follow the most popular traders', icon: '📋' },
          { label: 'APIs', href: '/developers', desc: 'Unlimited opportunities with one key', icon: '🔌' },
        ]
      }
    ]
  },
  {
    label: 'Futures',
    href: '/futures',
    dropdown: [
      { label: 'USDⓈ-M Futures', href: '/futures', desc: 'Contracts settled in USDT and USDC', icon: '💲' },
      { label: 'COIN-M Futures', href: '/futures', desc: 'Contracts settled in cryptocurrency', icon: '🪙' },
      { label: 'Options', href: '/futures', desc: 'USDT Options with limited downside and affordable entry', icon: '📊' },
    ]
  },
  {
    label: 'Earn',
    href: '/earn',
    dropdown: [
      { label: 'Overview', href: '/earn', desc: 'One-stop portal for all Earn products', icon: '💼' },
      { label: 'Simple Earn', href: '/earn', desc: 'Earn passive income on 300+ crypto assets with flexible and locked terms', icon: '🌱' },
      { label: 'Advanced Earn', href: '/earn', desc: 'Maximize your returns with our advanced yield investment products', icon: '📈' },
      { label: 'Loans', href: '/earn', desc: 'Access quick and easy loans with competitive rates', icon: '💸' },
    ]
  },
  {
    label: 'Square',
    href: '/news',
    dropdown: [
      { label: 'Square', href: '/news', desc: 'Stay informed with everything crypto', icon: '🟩' },
      { label: 'Blog', href: '/news', desc: 'Expand your knowledge and get the latest insights', icon: '📝' },
      { label: 'Research', href: '/academy', desc: 'Institutional-grade analysis, in-depth insights, and more', icon: '🔬' },
    ]
  },
  {
    label: 'Institutional',
    href: '/about',
    dropdown: [
      { label: 'VIP & Institutional', href: '/about', desc: 'Your trusted digital asset platform for VIPs and institutions', icon: '👑' },
      { label: 'Capital Connect', href: '/about', desc: 'Invest in Crypto and TradFi strategies managed by licensed trading teams', icon: '🏦' },
      { label: 'OTC & Execution Services', href: '/about', desc: 'Trade OTC with the industry\'s largest liquidity network', icon: '🔄' },
      { label: 'Crypto-as-a-Service (CaaS)', href: '/about', desc: 'Integrate crypto services into your platform with world-class infrastructure', icon: '⚙️' },
      { label: 'Banking Triparty', href: '/about', desc: 'Trusted collateral storage with regulated banking partners', icon: '🏦' },
    ]
  },
  {
    label: 'AI',
    href: '/academy',
    dropdown: [
      { label: 'Binance AI', href: '/academy', desc: 'Smart trading tools', icon: '🤖' }
    ]
  },
  {
    label: 'More',
    href: '#',
    dropdown: [
      { label: 'Academy', href: '/academy', desc: 'Learn crypto', icon: '🎓' },
      { label: 'Research', href: '/academy', desc: 'In-depth analysis', icon: '🔬' },
    ]
  }
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isTrading = pathname?.startsWith('/trade') || pathname?.startsWith('/futures');

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isTrading ? styles.trading : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon} style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="28" height="28">
                <path fill="var(--brand-yellow)" d="M150 72.85l-35.34 35.35L150 143.54l35.34-35.34L150 72.85zm0 154.3l-35.34-35.34-35.35 35.34 70.69 70.7 70.69-70.7-35.35-35.34L150 227.15zm0-227.15L79.31 70.69l35.35 35.35L150 70.69l35.34 35.35 35.35-35.35L150 0zM63.66 114.65L28.31 150l35.35 35.35L99.01 150l-35.35-35.35zm172.68 0L201 150l35.34 35.35L271.69 150l-35.35-35.35z" />
              </svg>
            </span>
            <span className={styles.logoText} style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900, fontSize: '24px', letterSpacing: '0.5px', color: 'var(--brand-yellow)' }}>BINANCE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                  {(item.dropdown || item.columns) && <span className={styles.chevron}>▾</span>}
                </Link>

                {item.dropdown && activeDropdown === item.label && (
                  <div className={styles.dropdown} style={{ padding: '16px', minWidth: '320px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {item.dropdown.map(sub => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                          onClick={() => setActiveDropdown(null)}
                          className={styles.dropdownItemHover}
                        >
                          <span style={{ fontSize: '20px', color: 'var(--text-muted)' }}>{sub.icon}</span>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {sub.label}
                              {sub.badge && <span style={{ background: 'var(--brand-yellow)', color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>{sub.badge}</span>}
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4 }}>{sub.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.columns && activeDropdown === item.label && (
                  <div className={styles.dropdown} style={{ display: 'flex', gap: '32px', padding: '24px', minWidth: '600px' }}>
                    {item.columns.map((col, colIdx) => (
                      <div key={colIdx} style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: 600 }}>{col.title}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          {col.items.map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                              onClick={() => setActiveDropdown(null)}
                              className={styles.dropdownItemHover}
                            >
                              <span style={{ fontSize: '20px', color: 'var(--text-muted)' }}>{sub.icon}</span>
                              <div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  {sub.label}
                                  {sub.badge && <span style={{ background: 'var(--brand-yellow)', color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>{sub.badge}</span>}
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4 }}>{sub.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.actions} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Dropdown */}
            <div
              className={`${styles.actionItem} ${activeDropdown === 'search' ? styles.active : ''}`}
              onMouseEnter={() => setActiveDropdown('search')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/markets" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
              </Link>
              {activeDropdown === 'search' && (
                <div className={styles.dropdown} style={{ padding: '16px', minWidth: '380px', right: 0, left: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                      <svg style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-muted)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                      <input type="text" placeholder="ADA" style={{ width: '100%', padding: '10px 12px 10px 36px', background: 'transparent', border: '1px solid var(--brand-yellow)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }} />
                    </div>
                    <button style={{ color: 'var(--brand-yellow)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>Cancel</button>
                  </div>

                  {/* Hot Trading */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px' }}>
                      Hot Trading
                      <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)' }}><span>&lt;</span><span>&gt;</span></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        { num: 1, sym: 'BTC', name: 'Bitcoin', price: '$86,599.84', change: '+3.68%', color: '#f7931a' },
                        { num: 2, sym: 'ETH', name: 'Ethereum', price: '$2,750.44', change: '+2.37%', color: '#627eea' },
                        { num: 3, sym: 'SOL', name: 'Solana', price: '$122.28', change: '+4.33%', color: '#14f195' },
                        { num: 4, sym: 'ZEC', name: 'Zcash', price: '$1,384.07', change: '-0.43%', color: '#f4b728' },
                        { num: 5, sym: 'XRP', name: 'XRP', price: '$1.54', change: '+3.78%', color: '#23292f' }
                      ].map(coin => (
                        <Link key={coin.sym} href={`/trade/${coin.sym}_USDT`} className={styles.dropdownItemHover} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'inherit' }} onClick={() => setActiveDropdown(null)}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ color: 'var(--brand-yellow)', fontWeight: 700, width: '12px' }}>{coin.num}</span>
                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: coin.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>{coin.sym[0]}</div>
                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{coin.sym}<span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '12px' }}>/USDT</span></span>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px' }}>{coin.price}</div>
                            <div style={{ color: coin.change.startsWith('+') ? '#0ecb81' : '#f6465d', fontSize: '12px', fontWeight: 600 }}>{coin.change}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Earn */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px' }}>
                      Earn
                      <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)' }}><span>&lt;</span><span>&gt;</span></div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {[
                        { sym: 'USDT', apr: '226.12', color: '#26a17b' },
                        { sym: 'BTC', apr: '91.62', color: '#f7931a' },
                        { sym: 'USDT', apr: '25.00', color: '#26a17b' }
                      ].map((earn, i) => (
                        <Link key={i} href="/earn" className={styles.dropdownItemHover} style={{ flex: 1, border: '1px solid var(--border-default)', borderRadius: '8px', padding: '12px', color: 'inherit' }} onClick={() => setActiveDropdown(null)}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: earn.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>{earn.sym[0]}</div>
                            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{earn.sym}</span>
                          </div>
                          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Max APR</div>
                          <div style={{ color: '#0ecb81', fontWeight: 700, fontSize: '16px', marginTop: '2px' }}>{earn.apr}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Deposit Button */}
            <Link href="/wallet" className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '14px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', height: '32px', color: '#000', fontWeight: 600 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
              Deposit
            </Link>

            {/* Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-primary)' }}>
              {/* Profile */}
              <div
                className={`${styles.actionItem} ${activeDropdown === 'profile' ? styles.active : ''}`}
                onMouseEnter={() => setActiveDropdown('profile')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/account" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                </Link>
                {activeDropdown === 'profile' && (
                  <div className={styles.dropdown} style={{ padding: '16px', minWidth: '240px', right: 0, left: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid var(--border-default)', marginBottom: '8px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--brand-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                      </div>
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>User-61d22239</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>ID:1283342477</div>
                      </div>
                    </div>
                    {[
                      { label: 'Dashboard', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>, href: '/dashboard' },
                      { label: 'Assets', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.34 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /></svg>, href: '/wallet' },
                      { label: 'Orders', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>, href: '/orders' },
                      { label: 'Account', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>, href: '/account' },
                      { label: 'Referral', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>, href: '/referral' },
                      { label: 'Rewards Hub', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-4v-2h4zM9 4c.55 0 1 .45 1 1h-4c0-.55.45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" /></svg>, href: '/rewards' },
                      { label: 'Sub Accounts', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>, href: '/subaccounts' },
                      { label: 'Settings', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>, href: '/settings' }
                    ].map(sub => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownItemHover} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }} onClick={() => setActiveDropdown(null)}>
                        <span style={{ color: 'var(--text-muted)', display: 'flex' }}>{sub.icon}</span> <span>{sub.label}</span>
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid var(--border-default)', marginTop: '8px', paddingTop: '8px' }}>
                      <Link href="/login" className={styles.dropdownItemHover} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }} onClick={() => setActiveDropdown(null)}>
                        <span style={{ color: 'var(--text-muted)', display: 'flex' }}><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /></svg></span> <span>Log Out</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {/* Wallet */}
              <div
                className={`${styles.actionItem} ${activeDropdown === 'wallet' ? styles.active : ''}`}
                onMouseEnter={() => setActiveDropdown('wallet')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/wallet" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.34 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /><circle cx="16" cy="12" r="1.5" /></svg>
                </Link>
                {activeDropdown === 'wallet' && (
                  <div className={styles.dropdown} style={{ padding: '8px', minWidth: '220px', right: 0, left: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {[
                      { label: 'Overview', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" /></svg>, href: '/wallet' },
                      { label: 'Spot', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg>, href: '/wallet/spot' },
                      { label: 'Margin', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" /></svg>, href: '/wallet/margin' },
                      { label: 'Futures', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>, href: '/wallet/futures' },
                      { label: 'Options', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" /></svg>, href: '/wallet/options' },
                      { label: 'Trading Bots', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h5V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM7.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 17c-2 0-3.5-1-3.5-1s1.5-1 3.5-1 3.5 1 3.5 1-1.5 1-3.5 1z" /></svg>, href: '/wallet/bots' },
                      { label: 'Earn', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3zM9.5 15.5v-7h5v7h-5z" /></svg>, href: '/wallet/earn' },
                      { label: 'Funding', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.4 2.8 2.8 0 1.4-1.4 2.8-2.8 2.8-1.4 0-2.8-1.4-2.8-2.8C9.2 8.4 10.6 7 12 7z" /></svg>, href: '/wallet/funding' },
                      { label: 'Asset History', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>, href: '/wallet/history' },
                      { label: 'Account Statement', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" /></svg>, href: '/wallet/statement' },
                      { label: 'Verification', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>, href: '/account/security' }
                    ].map(sub => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownItemHover} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }} onClick={() => setActiveDropdown(null)}>
                        <span style={{ color: 'var(--text-muted)', display: 'flex' }}>{sub.icon}</span> <span>{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Orders */}
              <div
                className={`${styles.actionItem} ${activeDropdown === 'orders' ? styles.active : ''}`}
                onMouseEnter={() => setActiveDropdown('orders')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/orders" style={{ color: 'inherit', position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                  <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', background: 'var(--brand-yellow)', borderRadius: '50%' }}></div>
                </Link>
                {activeDropdown === 'orders' && (
                  <div className={styles.dropdown} style={{ padding: '16px', minWidth: '320px', right: 0, left: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '12px', color: 'var(--text-muted)' }}>
                      <Link href="/orders">View All &gt;</Link>
                    </div>
                    {[
                      { label: 'Chat', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" /></svg>, href: '/support' },
                      { label: 'Binance Ai Pro', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2l-2.4 7.6L2 12l7.6 2.4L12 22l2.4-7.6L22 12l-7.6-2.4z" /></svg>, href: '/ai-pro' },
                      { label: 'Marketing & Activities', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" /></svg>, badge: '4', desc: 'Open Your Starter Pack for Gold Rewards', href: '/activities' }
                    ].map(sub => (
                      <Link key={sub.label} href={sub.href} className={styles.dropdownItemHover} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-primary)' }} onClick={() => setActiveDropdown(null)}>
                        <span style={{ display: 'flex', color: 'var(--text-muted)' }}>{sub.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '14px', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {sub.label}
                            {sub.badge && <span style={{ background: 'var(--brand-yellow)', color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '10px', fontWeight: 700 }}>{sub.badge}</span>}
                          </div>
                          {sub.desc && <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{sub.desc}</div>}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Download */}
              <div
                className={`${styles.actionItem} ${activeDropdown === 'download' ? styles.active : ''}`}
                onMouseEnter={() => setActiveDropdown('download')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/download" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                </Link>
                {activeDropdown === 'download' && (
                  <div className={styles.dropdown} style={{ padding: '16px', width: '200px', right: 0, left: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '150px', height: '150px', background: '#fff', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://binance.com" alt="QR Code" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>Scan to Download App<br />iOS & Android</div>
                    <button className="btn btn-primary" style={{ width: '100%', padding: '8px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, color: '#000' }}>More Download Options</button>
                  </div>
                )}
              </div>
              {/* Language */}
              <button style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c1.96-3.03 5.4-5 9.25-5 1.07 0 2.08.18 3.03.5 1.25 1.76 2.11 3.84 2.45 6.06h-5.06c-.46-2.14-1.39-4.1-2.65-5.75-1.29 1.69-2.26 3.7-2.73 5.92H5.08c.5-1.2 1.15-2.31 1.93-3.29.35.47.67.97.96 1.5l1.02-1.02c-.37-.62-.78-1.21-1.23-1.78l1.41-1.41z" opacity=".3" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c-.96.98-1.75 2.13-2.3 3.37L4.76 8C5.23 6.81 5.9 5.72 6.75 4.79L8.03 6zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" /></svg>
              </button>
              {/* Theme */}
              <button onClick={toggleTheme} style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileSearch}>
            <span>🔍</span>
            <input type="text" placeholder="Search crypto, pairs..." className={styles.mobileSearchInput} />
          </div>

          <div className={styles.mobileCtas}>
            <Link href="/login" className="btn btn-secondary btn-full">Log In</Link>
            <Link href="/register" className="btn btn-primary btn-full">Sign Up</Link>
          </div>

          <div className={styles.mobileLinks}>
            {navItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className={styles.mobileLink}>{item.label}</Link>
                {item.dropdown && (
                  <div className={styles.mobileSub}>
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href} className={styles.mobileSubLink}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.mobileExtras}>
            <Link href="/download" className={styles.mobileLink}>📱 Download App</Link>
            <Link href="/support" className={styles.mobileLink}>❓ Help Center</Link>
          </div>
        </div>
      )}
    </>
  );
}
