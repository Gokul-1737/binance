'use client';
import { useState } from 'react';
import Link from 'next/link';
import { notifications } from '@/lib/mockData';

const typeIcon = { security: '🔒', trading: '📈', system: '⚙️', promotions: '🎁' };
const typeColor = { security: 'var(--color-negative)', trading: 'var(--color-positive)', system: 'var(--color-info)', promotions: 'var(--brand-yellow)' };

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [notifs, setNotifs] = useState(notifications);

  const filtered = activeTab === 'All' ? notifs : notifs.filter(n => n.type === activeTab.toLowerCase());
  const unreadCount = notifs.filter(n => !n.read).length;

  const markAllRead = () => setNotifs(n => n.map(notif => ({ ...notif, read: true })));

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Notifications</h1>
            {unreadCount > 0 && <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>{unreadCount} unread notifications</p>}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={markAllRead} className="btn btn-secondary btn-sm">Mark all as read</button>
            <button className="btn btn-secondary btn-sm">⚙️ Settings</button>
          </div>
        </div>

        <div className="tabs">
          {['All', 'Security', 'Trading', 'System', 'Promotions'].map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {typeIcon[tab.toLowerCase()] && <span>{typeIcon[tab.toLowerCase()]} </span>}{tab}
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
          {filtered.length > 0 ? filtered.map(notif => (
            <div
              key={notif.id}
              className="notification-card"
              onClick={() => setNotifs(prev => prev.map(n => n.id === notif.id ? { ...n, read: true } : n))}
              style={{ display: 'flex', gap: '16px', padding: '16px 20px', borderBottom: '1px solid var(--border-default)', cursor: 'pointer', background: notif.read ? 'transparent' : 'rgba(240,185,11,0.02)', transition: 'background 0.15s' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${typeColor[notif.type]}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, border: `1px solid ${typeColor[notif.type]}25` }}>
                {typeIcon[notif.type]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>{notif.title}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{notif.time}</span>
                    {!notif.read && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-yellow)', flexShrink: 0 }} />}
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{notif.message}</p>
                <div style={{ marginTop: '8px' }}>
                  <span className={`badge badge-${notif.type === 'security' ? 'red' : notif.type === 'trading' ? 'green' : notif.type === 'promotions' ? 'yellow' : 'blue'}`} style={{ fontSize: '10px' }}>
                    {notif.type}
                  </span>
                </div>
              </div>
            </div>
          )) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔔</div>
              <div className="empty-state-title">No Notifications</div>
              <div className="empty-state-desc">You&apos;re all caught up! No notifications in this category.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
