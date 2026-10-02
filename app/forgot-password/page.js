'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState('email'); // email | verify | reset | done
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-darkest)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ color: 'var(--brand-yellow)', fontSize: '28px' }}>◆</span>
            <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)' }}>BINANCE</span>
          </Link>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '32px' }}>
          {step === 'email' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔑</div>
                <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Reset Password</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Enter your email to receive a verification code</p>
              </div>
              <div className="input-group" style={{ marginBottom: '16px' }}>
                <label className="input-label">Email Address</label>
                <input type="email" className="input" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <button onClick={() => setStep('verify')} className="btn btn-primary btn-full" style={{ height: '48px', fontSize: '15px', borderRadius: '8px' }}>
                Send Verification Code
              </button>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Link href="/login" style={{ color: 'var(--brand-yellow)', fontSize: '13px' }}>← Back to Login</Link>
              </div>
            </>
          )}

          {step === 'verify' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>📧</div>
                <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Check Your Email</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  We sent a 6-digit code to<br /><strong style={{ color: 'var(--text-primary)' }}>{email || 'your@email.com'}</strong>
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', justifyContent: 'center' }}>
                {code.map((c, i) => (
                  <input key={i} type="text" maxLength={1} value={c}
                    onChange={e => { const n = [...code]; n[i] = e.target.value; setCode(n); }}
                    style={{ width: '46px', height: '54px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '8px', textAlign: 'center', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'inherit', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--brand-yellow)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-default)'}
                  />
                ))}
              </div>
              <button onClick={() => setStep('reset')} className="btn btn-primary btn-full" style={{ height: '48px', borderRadius: '8px' }}>Verify Code</button>
              <button onClick={() => setStep('email')} style={{ width: '100%', marginTop: '12px', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}>Didn&apos;t receive? Resend →</button>
            </>
          )}

          {step === 'reset' && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔒</div>
                <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>New Password</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Create a strong new password</p>
              </div>
              {['New Password', 'Confirm Password'].map(label => (
                <div key={label} className="input-group" style={{ marginBottom: '12px' }}>
                  <label className="input-label">{label}</label>
                  <input type="password" className="input" placeholder="••••••••" />
                </div>
              ))}
              <button onClick={() => setStep('done')} className="btn btn-primary btn-full" style={{ height: '48px', borderRadius: '8px', marginTop: '8px' }}>
                Reset Password
              </button>
            </>
          )}

          {step === 'done' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
              <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Password Reset!</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                Your password has been successfully reset. You can now log in with your new password.
              </p>
              <Link href="/login" className="btn btn-primary btn-full" style={{ height: '48px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Log In Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
