'use client';
import { useState } from 'react';
import Link from 'next/link';
import { supportArticles, feeStructure } from '@/lib/mockData';

const supportCategories = [
  { icon: '💼', title: 'Trading', topics: ['Spot Trading', 'Futures', 'Margin', 'Order Types'], color: '#F0B90B' },
  { icon: '👛', title: 'Wallet & Deposits', topics: ['Deposit Crypto', 'Withdraw Crypto', 'Fiat Deposit', 'Bank Transfer'], color: '#0ECB81' },
  { icon: '🔐', title: 'Account & Security', topics: ['2FA Setup', 'KYC Verification', 'Account Recovery', 'Phishing'], color: '#1E9BF0' },
  { icon: '💳', title: 'Buy Crypto', topics: ['Credit Card', 'Bank Transfer', 'P2P Trading', 'Convert'], color: '#9945FF' },
  { icon: '💰', title: 'Earn & Rewards', topics: ['Simple Earn', 'Staking', 'Referral', 'Launchpool'], color: '#E84142' },
  { icon: '📋', title: 'Compliance & Legal', topics: ['KYC/AML Policy', 'Terms of Use', 'Privacy Policy', 'Tax Info'], color: '#848E9C' },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('Help Center');
  const [search, setSearch] = useState('');
  const [chatMsg, setChatMsg] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I'm BINANCE Support AI. How can I help you today?" }
  ]);

  const sendMessage = () => {
    if (!chatMsg.trim()) return;
    setMessages(m => [...m,
      { from: 'user', text: chatMsg },
      { from: 'bot', text: "Thank you for your message. A support agent will review your query shortly. Meanwhile, you can check our Help Center for instant answers." }
    ]);
    setChatMsg('');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, rgba(30,155,240,0.1) 0%, rgba(14,203,129,0.05) 100%)', borderBottom: '1px solid var(--border-default)', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>How can we help?</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '24px' }}>Search our knowledge base or contact support 24/7</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '10px', padding: '12px 20px', maxWidth: '500px', margin: '0 auto' }}>
            <span style={{ fontSize: '20px' }}>🔍</span>
            <input type="text" placeholder="Search for help articles..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '15px', fontFamily: 'inherit' }} />
            <button className="btn btn-primary btn-sm">Search</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '24px 32px' }}>
        {/* Contact Options */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px', textAlign: 'center' }}>
          {[
            { icon: '💬', title: '24/7 Live Chat', desc: 'Chat with our support team instantly', action: 'Start Chat', tab: 'Live Chat' },
            { icon: '📧', title: 'Submit a Ticket', desc: 'Get help via email within 4 hours', action: 'Submit Ticket', tab: 'Ticket' },
            { icon: '🤖', title: 'AI Assistant', desc: 'Get instant AI-powered answers', action: 'Ask AI', tab: 'Live Chat' },
          ].map(opt => (
            <div key={opt.title} className="card card-hover" style={{ cursor: 'pointer' }} onClick={() => setActiveTab(opt.tab)}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{opt.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{opt.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>{opt.desc}</p>
              <button className="btn btn-primary btn-sm">{opt.action}</button>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tabs">
          {['Help Center', 'Live Chat', 'Ticket', 'Status'].map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        {activeTab === 'Help Center' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
              {supportCategories.map(cat => (
                <div key={cat.title} className="card card-hover" style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '10px', background: `${cat.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', border: `1px solid ${cat.color}30` }}>
                      {cat.icon}
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: '15px' }}>{cat.title}</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cat.topics.map(topic => (
                      <div key={topic} style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: cat.color, fontSize: '10px' }}>→</span> {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Articles */}
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Popular Articles</h2>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '8px', overflow: 'hidden' }}>
                {supportArticles.map((article, i) => (
                  <div key={article.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', borderBottom: i < supportArticles.length - 1 ? '1px solid var(--border-default)' : 'none', cursor: 'pointer', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-elevated)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <span style={{ fontSize: '20px' }}>{article.category === 'Account' ? '👤' : article.category === 'Trading' ? '📈' : article.category === 'Wallet' ? '👛' : article.category === 'Security' ? '🔒' : '📚'}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '2px' }}>{article.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{article.category} · Updated {article.updated}</div>
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>→</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'Live Chat' && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', overflow: 'hidden', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ background: 'var(--brand-yellow)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🤖</div>
              <div>
                <div style={{ fontWeight: 700, color: '#0B0E11' }}>BINANCE Support</div>
                <div style={{ fontSize: '12px', color: 'rgba(11,14,17,0.7)' }}>● Online</div>
              </div>
            </div>
            <div style={{ height: '400px', overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '75%', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', lineHeight: 1.5,
                    background: msg.from === 'user' ? 'var(--brand-yellow)' : 'var(--bg-elevated)',
                    color: msg.from === 'user' ? '#0B0E11' : 'var(--text-primary)',
                    borderBottomRightRadius: msg.from === 'user' ? '4px' : '12px',
                    borderBottomLeftRadius: msg.from === 'bot' ? '4px' : '12px',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--border-default)', padding: '16px', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                className="input"
                placeholder="Type your message..."
                value={chatMsg}
                onChange={e => setChatMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                style={{ flex: 1 }}
              />
              <button className="btn btn-primary" onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}

        {activeTab === 'Status' && (
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-positive)', marginBottom: '8px' }}>All Systems Operational</h2>
              <p style={{ color: 'var(--text-muted)' }}>Last updated: Oct 2, 2026, 4:30 PM IST</p>
            </div>
            {['Trading Engine', 'Deposit & Withdrawal', 'P2P Trading', 'API Services', 'Website', 'Mobile App'].map(service => (
              <div key={service} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', marginBottom: '8px' }}>
                <span style={{ fontWeight: 500 }}>{service}</span>
                <span style={{ color: 'var(--color-positive)', fontWeight: 600, fontSize: '13px' }}>● Operational</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
