'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function DashboardPage() {
  const [openMenus, setOpenMenus] = useState({
    assets: true,
    thirdParty: true,
    orders: false,
    account: false
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <Link href="/dashboard" className={`${styles.sidebarItem} ${styles.active}`}>
          <div className={styles.sidebarIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <span>Dashboard</span>
          </div>
        </Link>
        
        <div className={styles.sidebarGroup}>
          <div className={styles.sidebarItem} onClick={() => toggleMenu('assets')}>
            <div className={styles.sidebarIcon}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.34 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/></svg>
              <span>Assets</span>
            </div>
            <span style={{ fontSize: '10px', transform: openMenus.assets ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
          </div>
          {openMenus.assets && (
            <div className={styles.subItems}>
              <Link href="#" className={styles.subItem}>Overview</Link>
              <Link href="#" className={styles.subItem}>Spot</Link>
              <Link href="#" className={styles.subItem}>Margin</Link>
            </div>
          )}
        </div>

        <div className={styles.sidebarGroup}>
          <div className={styles.sidebarItem} onClick={() => toggleMenu('thirdParty')}>
            <div className={styles.sidebarIcon}>
              <span>Third-Party Wallet</span>
            </div>
            <span style={{ fontSize: '10px', transform: openMenus.thirdParty ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
          </div>
          {openMenus.thirdParty && (
            <div className={styles.subItems}>
              <Link href="#" className={styles.subItem}>Binance TR</Link>
              <Link href="#" className={styles.subItem}>Tokocrypto</Link>
              <Link href="#" className={styles.subItem}>Binance TH</Link>
            </div>
          )}
        </div>

        {/* Orders Dropdown */}
        <div className={styles.sidebarGroup}>
          <div className={styles.sidebarItem} onClick={() => toggleMenu('orders')}>
            <div className={styles.sidebarIcon}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              <span>Orders</span>
            </div>
            <span style={{ fontSize: '10px', transform: openMenus.orders ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
          </div>
          {openMenus.orders && (
            <div className={styles.subItems}>
              <Link href="#" className={styles.subItem}>Assets History</Link>
              <Link href="#" className={styles.subItem}>Spot Order</Link>
              <Link href="#" className={styles.subItem}>P2P Order</Link>
            </div>
          )}
        </div>

        <Link href="#" className={styles.sidebarItem}>
          <div className={styles.sidebarIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1h-4c0-.55.45-1 1-1h4z"/></svg>
            <span>Rewards Hub</span>
          </div>
        </Link>

        <Link href="#" className={styles.sidebarItem}>
          <div className={styles.sidebarIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <span>Referral</span>
          </div>
        </Link>

        {/* Account Dropdown */}
        <div className={styles.sidebarGroup}>
          <div className={styles.sidebarItem} onClick={() => toggleMenu('account')}>
            <div className={styles.sidebarIcon}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              <span>Account</span>
            </div>
            <span style={{ fontSize: '10px', transform: openMenus.account ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
          </div>
          {openMenus.account && (
            <div className={styles.subItems}>
              <Link href="#" className={styles.subItem}>Identification</Link>
              <Link href="#" className={styles.subItem}>Security</Link>
              <Link href="#" className={styles.subItem}>Payment</Link>
              <Link href="#" className={styles.subItem}>API Management</Link>
              <Link href="#" className={styles.subItem}>Account Statement</Link>
              <Link href="#" className={styles.subItem}>Financial Reports</Link>
            </div>
          )}
        </div>

        <Link href="#" className={styles.sidebarItem}>
          <div className={styles.sidebarIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <span>Sub Accounts</span>
          </div>
        </Link>

        <Link href="/settings" className={styles.sidebarItem}>
          <div className={styles.sidebarIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <span>Settings</span>
          </div>
        </Link>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        
        {/* Profile Header section */}
        <div className={styles.profileHeader}>
          <div className={styles.profileInfo}>
            {/* The Profile Picture */}
            <div className={styles.profileAvatar}>
              <div className={styles.avatarHead}></div>
              <div className={styles.avatarBody}></div>
            </div>
            
            <div className={styles.profileDetails}>
              <div className={styles.userName}>User-61d22239</div>
              <button className={styles.linkSocialBtn}>
                <span className={styles.instagramIcon}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </span>
                Link Social Account &gt;
              </button>
            </div>
          </div>

          <div className={styles.profileStats}>
            <div className={styles.statCol}>
              <div className={styles.statLabel}>UID</div>
              <div className={styles.statValue}>1283342477 <span style={{color:'var(--text-muted)', fontSize:'12px'}}>📋</span></div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statLabel}>VIP Level</div>
              <div className={styles.statValue}>Regular User &gt;</div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statLabel}>Following</div>
              <div className={styles.statValue}>0 &gt;</div>
            </div>
            <div className={styles.statCol}>
              <div className={styles.statLabel}>Followers</div>
              <div className={styles.statValue}>0 &gt;</div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <h2 className={styles.sectionTitle}>Get Started</h2>
        
        <div className={styles.progressContainer}>
          {/* Progress Nodes */}
          <div className={styles.progressLine}></div>
          <div className={styles.progressNodes}>
            <div className={`${styles.progressNode} ${styles.activeNode}`}>1</div>
            <div className={styles.progressNode}>2</div>
            <div className={styles.progressNode}>3</div>
          </div>
          
          {/* Progress Cards */}
          <div className={styles.progressCards}>
            {/* Card 1 */}
            <div className={`${styles.progressCard} ${styles.activeCard}`}>
              <div className={styles.cardContent}>
                <h3>Verify Account</h3>
                <p>Complete identity verification to access all Binance services</p>
                <button className={styles.verifyBtn}>Verify Now</button>
              </div>
              <div className={styles.cardIllustration}>
                {/* ID Card Hand Illustration */}
                <div style={{ position: 'relative', width: '80px', height: '80px', marginTop: '20px' }}>
                  {/* Green check badge */}
                  <div style={{ position: 'absolute', top: -10, right: 0, width: 32, height: 32, background: '#0ECB81', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  {/* Hand and ID */}
                  <div style={{ position: 'absolute', bottom: -10, left: -20, display: 'flex', alignItems: 'center' }}>
                    <div style={{ background: '#C49779', width: 40, height: 20, borderRadius: '4px', transform: 'rotate(-20deg)', transformOrigin: 'right bottom' }}></div>
                    <div style={{ background: '#F5F5F5', border: '1px solid #CCC', width: 40, height: 24, borderRadius: '2px', padding: '2px 4px', display: 'flex', gap: '4px' }}>
                       <div style={{ width: 10, height: 12, background: '#F0B90B', borderRadius: '2px' }}></div>
                       <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
                         <div style={{ width: '100%', height: 2, background: '#CCC' }}></div>
                         <div style={{ width: '60%', height: 2, background: '#CCC' }}></div>
                         <div style={{ width: '80%', height: 2, background: '#CCC' }}></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.progressCard}>
              <h3>Deposit</h3>
              <div className={styles.pendingStatus}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                Pending
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.progressCard}>
              <h3>Trade</h3>
              <div className={styles.pendingStatus}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                Pending
              </div>
            </div>
          </div>
        </div>

        {/* Total Value Section */}
        <div className={styles.valueSection}>
          <div className={styles.valueLeft}>
            <div className={styles.valueTitle}>
              Est. Total Value <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>👁️</span>
            </div>
            <div className={styles.valueAmount}>
              0.00 <span className={styles.valueCurrency}>BTC ▼</span>
            </div>
          </div>
          <div className={styles.valueRight}>
            <button className={styles.marketBtn}>✨ How&apos;s the market today?</button>
            <button className={styles.actionBtnDark}>Deposit</button>
            <button className={styles.actionBtnDark}>Withdraw</button>
            <button className={styles.actionBtnDark}>Cash In</button>
          </div>
        </div>

      </main>
    </div>
  );
}
