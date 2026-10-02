'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

const footerSections = [
  {
    title: 'Products',
    links: [
      { label: 'Exchange', href: '/trade/BTC_USDT' },
      { label: 'Buy Crypto', href: '/buy' },
      { label: 'Markets', href: '/markets' },
      { label: 'Futures', href: '/futures' },
      { label: 'P2P Trading', href: '/p2p' },
      { label: 'Earn', href: '/earn' },
      { label: 'Wallet', href: '/wallet' },
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Institutional', href: '/' },
      { label: 'API', href: '/developers' },
      { label: 'OTC Trading', href: '/' },
      { label: 'Broker Program', href: '/' },
      { label: 'Referral', href: '/referral' },
      { label: 'Rewards', href: '/rewards' },
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'Fees', href: '/fees' },
      { label: 'Buy Crypto Guide', href: '/academy' },
      { label: 'Withdrawal FAQ', href: '/support' },
      { label: 'Deposit FAQ', href: '/support' },
      { label: 'Contact Us', href: '/support' },
    ]
  },
  {
    title: 'Learn',
    links: [
      { label: 'Academy', href: '/academy' },
      { label: 'News', href: '/news' },
      { label: 'Research', href: '/academy' },
      { label: 'What is Bitcoin?', href: '/academy' },
      { label: 'Crypto Glossary', href: '/academy' },
      { label: 'Trading Guide', href: '/academy' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Blog', href: '/news' },
      { label: 'Download', href: '/download' },
      { label: 'Security', href: '/account/security' },
      { label: 'Community', href: '/' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Use', href: '/' },
      { label: 'Risk Warning', href: '/' },
      { label: 'Cookie Policy', href: '/' },
      { label: 'Legal Notice', href: '/' },
      { label: 'Compliance', href: '/' },
    ]
  },
];

const socialLinks = [
  { icon: '𝕏', label: 'Twitter', href: '/' },
  { icon: 'in', label: 'LinkedIn', href: '/' },
  { icon: 'f', label: 'Facebook', href: '/' },
  { icon: '▶', label: 'YouTube', href: '/' },
  { icon: '📱', label: 'Telegram', href: '/' },
  { icon: '🎮', label: 'Discord', href: '/' },
  { icon: '📸', label: 'Instagram', href: '/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.container}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>◆</span>
              <span className={styles.logoText}>BINANCE</span>
            </Link>
            <p className={styles.tagline}>
              The world&apos;s leading cryptocurrency exchange. Trade with confidence.
            </p>

            {/* Community Links */}
            <div className={styles.community}>
              <div className={styles.communityTitle}>Community</div>
              <div className={styles.socialLinks}>
                {socialLinks.map((s) => (
                  <Link key={s.label} href={s.href} className={styles.socialLink} title={s.label}>
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className={styles.appBtns}>
              <Link href="/download" className={styles.appBtn}>
                <span className={styles.appBtnIcon}>🍎</span>
                <div>
                  <div className={styles.appBtnSub}>Download on the</div>
                  <div className={styles.appBtnMain}>App Store</div>
                </div>
              </Link>
              <Link href="/download" className={styles.appBtn}>
                <span className={styles.appBtnIcon}>▶</span>
                <div>
                  <div className={styles.appBtnSub}>Get it on</div>
                  <div className={styles.appBtnMain}>Google Play</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Nav Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className={styles.column}>
              <h4 className={styles.colTitle}>{section.title}</h4>
              <ul className={styles.colLinks}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.colLink}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomLeft}>
            <span>© 2024 BINANCE. All rights reserved.</span>
            <span className={styles.separator}>|</span>
            <Link href="/" className={styles.bottomLink}>Cookie Preferences</Link>
            <span className={styles.separator}>|</span>
            <Link href="/" className={styles.bottomLink}>Privacy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/" className={styles.bottomLink}>Terms</Link>
          </div>
          <div className={styles.bottomRight}>
            <button className={styles.langBtn}>🌐 English</button>
            <button className={styles.langBtn}>💵 USD</button>
          </div>
        </div>
        <div className={styles.disclaimer}>
          <strong>Risk Warning:</strong> Cryptocurrency trading involves significant risk of loss and is not suitable for all investors. Please consider your investment objectives and risk tolerance. Past performance is not indicative of future results. This is an educational demo platform.
        </div>
      </div>
    </footer>
  );
}
