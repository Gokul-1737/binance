'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function SettingsPage() {
  const [openMenus, setOpenMenus] = useState({
    assets: true,
    thirdParty: true,
    orders: false,
    account: true
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
        <Link href="/dashboard" className={styles.sidebarItem}>
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

        <Link href="/settings" className={`${styles.sidebarItem} ${styles.active}`}>
          <div className={styles.sidebarIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <span>Settings</span>
          </div>
        </Link>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Profile Card */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Profile</h2>
          
          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <div className={styles.settingName}>Nickname & Avatar</div>
              <div className={styles.settingDesc}>Set up an avatar and nickname. It is suggested not to use your real name or the name of your social account as a nickname.</div>
            </div>
            <div className={styles.settingAction}>
              <div className={styles.profilePreview}>
                <div className={styles.profileAvatar}>
                  <div className={styles.avatarHead}></div>
                  <div className={styles.avatarBody}></div>
                </div>
                <span>User-61d22239</span>
              </div>
              <button className={styles.editBtn}>Edit</button>
            </div>
          </div>
          
          <div className={styles.divider}></div>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <div className={styles.settingName}>C2C Profile</div>
              <div className={styles.settingDesc}>Edit your C2C nickname, manage your payment methods and the list of users you follow.</div>
            </div>
            <div className={styles.settingAction}>
              <div className={styles.profilePreview}>
                <div className={styles.purpleAvatar}>U</div>
                <span>User-f9eca2lf</span>
              </div>
              <button className={styles.editBtn}>Edit</button>
            </div>
          </div>
        </div>

        {/* Notifications Card */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Notifications</h2>
          
          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <div className={styles.settingName}>Notification Language</div>
              <div className={styles.settingDesc}>This will affect the language settings of E-mail and App push.</div>
            </div>
            <div className={styles.settingAction}>
              <span className={styles.statusText}>Default</span>
              <button className={styles.editBtn}>Edit</button>
            </div>
          </div>
          
          <div className={styles.divider}></div>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <div className={styles.settingName}>Notification Preferences</div>
              <div className={styles.settingDesc}>Once configured, you will receive relevant on-site inbox notifications within the app and website.</div>
            </div>
            <div className={styles.settingAction}>
              <span className={styles.statusText}>Activities, Trade Notification, Binance News, System Messages</span>
              <button className={styles.editBtn}>Manage</button>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.settingRow}>
            <div className={styles.settingInfo}>
              <div className={styles.settingName}>Auto Price Alert</div>
              <div className={styles.settingDesc}>Once configured, you will receive alerts on the price changes of major and holding</div>
            </div>
            <div className={styles.settingAction}>
              <span className={styles.statusText}>Notification On, Sound On</span>
              <button className={styles.editBtn}>Manage</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
