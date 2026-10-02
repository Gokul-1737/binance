'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', password: '', referral: '', agreed: false });
  const [showPass, setShowPass] = useState(false);
  const [regType, setRegType] = useState('email');

  const passwordStrength = (p) => {
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };
  const strength = passwordStrength(form.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColor = ['', '#F6465D', '#F0B90B', '#1E9BF0', '#0ECB81'];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-darkest)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ color: 'var(--brand-yellow)', fontSize: '28px' }}>◆</span>
            <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>BINANCE</span>
          </Link>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '32px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Create Account</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
            Already have an account? <Link href="/login" style={{ color: 'var(--brand-yellow)', fontWeight: 500 }}>Log in</Link>
          </p>

          {/* Email / Phone Toggle */}
          <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: '6px', padding: '3px', marginBottom: '16px' }}>
            {[{ id: 'email', label: '📧 Email' }, { id: 'phone', label: '📱 Phone' }].map(t => (
              <button key={t.id} onClick={() => setRegType(t.id)} style={{ flex: 1, padding: '7px', borderRadius: '4px', border: 'none', background: regType === t.id ? 'var(--bg-hover)' : 'transparent', color: regType === t.id ? 'var(--text-primary)' : 'var(--text-muted)', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>{t.label}</button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="input-group">
              <label className="input-label">{regType === 'email' ? 'Email Address' : 'Phone Number'}</label>
              <input
                type={regType === 'email' ? 'email' : 'tel'}
                className="input"
                placeholder={regType === 'email' ? 'Enter your email' : '+91 Enter your number'}
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPass ? 'text' : 'password'}
                  className="input"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  style={{ paddingRight: '40px' }}
                />
                <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '14px' }}>
                  {showPass ? '🙈' : '👁️'}
                </button>
              </div>
              {form.password && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} style={{ flex: 1, height: '3px', borderRadius: '2px', background: i <= strength ? strengthColor[strength] : 'var(--bg-elevated)', transition: 'all 0.2s' }} />
                    ))}
                  </div>
                  <div style={{ fontSize: '11px', color: strengthColor[strength], fontWeight: 500 }}>
                    {strength > 0 ? `Password strength: ${strengthLabel[strength]}` : ''}
                  </div>
                </div>
              )}
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
                Minimum 8 characters, 1 uppercase letter, 1 number
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Referral ID <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span></label>
              <input
                type="text"
                className="input"
                placeholder="Enter referral code"
                value={form.referral}
                onChange={e => setForm(f => ({ ...f, referral: e.target.value }))}
              />
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              <input type="checkbox" checked={form.agreed} onChange={e => setForm(f => ({ ...f, agreed: e.target.checked }))} style={{ accentColor: 'var(--brand-yellow)', width: '15px', height: '15px', flexShrink: 0, marginTop: '1px' }} />
              <span>
                I agree to BINANCE&apos;s{' '}
                <Link href="/" style={{ color: 'var(--brand-yellow)' }}>Terms of Service</Link>,{' '}
                <Link href="/" style={{ color: 'var(--brand-yellow)' }}>Privacy Policy</Link>, and{' '}
                <Link href="/" style={{ color: 'var(--brand-yellow)' }}>Cookie Policy</Link>
              </span>
            </label>

            <button className="btn btn-primary btn-full" style={{ height: '48px', fontSize: '16px', borderRadius: '8px' }} disabled={!form.agreed}>
              Create Account
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>or sign up with</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {['🍎 Apple', '🔵 Google'].map(s => (
                <button key={s} style={{ flex: 1, padding: '10px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
          {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(l => (
            <Link key={l} href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
