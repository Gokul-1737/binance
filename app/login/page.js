'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState('login'); // login | 2fa

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-darkest)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="32" height="32">
                <path fill="#F3BA2F" d="M150 72.85l-35.34 35.35L150 143.54l35.34-35.34L150 72.85zm0 154.3l-35.34-35.34-35.35 35.34 70.69 70.7 70.69-70.7-35.35-35.34L150 227.15zm0-227.15L79.31 70.69l35.35 35.35L150 70.69l35.34 35.35 35.35-35.35L150 0zM63.66 114.65L28.31 150l35.35 35.35L99.01 150l-35.35-35.35zm172.68 0L201 150l35.34 35.35L271.69 150l-35.35-35.35z" />
              </svg>
            </span>
            <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>BINANCE</span>
          </Link>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '32px' }}>
          {step === 'login' ? (
            <>
              <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Log in</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                Don&apos;t have an account? <Link href="/register" style={{ color: 'var(--brand-yellow)', fontWeight: 500 }}>Register</Link>
              </p>

              {/* Social Login */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', padding: '10px 16px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                  Continue with Google
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', padding: '10px 16px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="18px" height="18px">
                    <path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  Continue with Apple
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>or</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
              </div>

              {/* Email/Phone Toggle */}
              <div style={{ display: 'flex', gap: '0', background: 'var(--bg-elevated)', borderRadius: '6px', padding: '3px', marginBottom: '16px' }}>
                {['Email', 'Phone'].map(t => (
                  <button key={t} style={{ flex: 1, padding: '6px', borderRadius: '4px', border: 'none', background: t === 'Email' ? 'var(--bg-hover)' : 'transparent', color: t === 'Email' ? 'var(--text-primary)' : 'var(--text-muted)', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>{t}</button>
                ))}
              </div>

              {/* Form */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="input-group">
                  <label className="input-label">Email Address</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>

                <div className="input-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <label className="input-label">Password</label>
                    <Link href="/forgot-password" style={{ fontSize: '12px', color: 'var(--brand-yellow)' }}>Forgot password?</Link>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPass ? 'text' : 'password'}
                      className="input"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                      style={{ paddingRight: '40px' }}
                    />
                    <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '14px' }}>
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <input type="checkbox" checked={form.remember} onChange={e => setForm(f => ({ ...f, remember: e.target.checked }))} style={{ accentColor: 'var(--brand-yellow)', width: '15px', height: '15px' }} />
                  Remember me for 30 days
                </label>

                <button
                  onClick={() => setStep('2fa')}
                  className="btn btn-primary btn-full"
                  style={{ height: '48px', fontSize: '16px', borderRadius: '8px', marginTop: '4px' }}
                >
                  Log In
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Security Verification</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Enter the 6-digit code sent to your email</p>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', justifyContent: 'center' }}>
                {Array.from({ length: 6 }, (_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    style={{ width: '48px', height: '56px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', textAlign: 'center', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'inherit', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--brand-yellow)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-default)'}
                  />
                ))}
              </div>

              <Link href="/" className="btn btn-primary btn-full" style={{ height: '48px', fontSize: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Confirm
              </Link>
              <button onClick={() => setStep('login')} style={{ width: '100%', marginTop: '12px', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}>
                ← Back to Login
              </button>
            </>
          )}
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
          Protected by advanced security. <Link href="/" style={{ color: 'var(--brand-yellow)' }}>Learn more</Link>
        </p>
      </div>
    </div>
  );
}
