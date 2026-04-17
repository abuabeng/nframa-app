import Head from 'next/head'
import { useEffect } from 'react'

const bodyHTML = `<div class="app" id="nfApp" data-theme="dark">

<div onclick="toggleTheme()" id="theme-btn" style="position:absolute;top:11px;right:14px;z-index:999;width:30px;height:30px;border-radius:50%;background:var(--card);border:0.5px solid var(--border2);display:flex;align-items:center;justify-content:center;cursor:pointer;">
  <svg id="theme-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
</div>

<div class="screen active" id="s-splash" style="justify-content:center;">
  <div style="padding:0 28px;display:flex;flex-direction:column;height:100%;">
    <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding-top:40px;">
      <div style="width:68px;height:68px;background:var(--primary);border-radius:20px;display:flex;align-items:center;justify-content:center;margin-bottom:44px;">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 5C11.5 5 7 9.8 7 15.5c0 2.8 1.1 5.3 3.2 7C8 24.2 7 27 7 30" stroke="white" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M18 5C24.5 5 29 9.8 29 15.5c0 2.8-1.1 5.3-3.2 7C28 24.2 29 27 29 30" stroke="white" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M10.8 22.5C13.5 21 15.7 20 18 20s4.5 1 7.2 2.5" stroke="white" stroke-width="2.3" stroke-linecap="round"/>
          <circle cx="18" cy="16" r="3.8" fill="white" opacity=".9"/>
        </svg>
      </div>
      <h1 style="font-size:40px;font-weight:800;color:var(--text);line-height:1.1;margin-bottom:14px;">Move smarter<br><span style="color:var(--primary);">together.</span></h1>
      <p style="font-size:16px;color:var(--muted);line-height:1.65;">Ghana's shared commute network — connecting corporate workers, students &amp; churchgoers on predictable routes.</p>
    </div>
    <div style="padding-bottom:20px;">
      <button class="btn btn-primary" onclick="go('phone')" style="margin-bottom:16px;">Get started</button>
      <p style="text-align:center;font-size:13px;color:var(--hint);">Serving Accra · Tema · Kumasi</p>
    </div>
  </div>
</div>

<!-- ══ OB 1: PHONE ══════════════════════════════════════ -->

<div class="screen" id="s-phone">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot"></div><div class="ob-dot"></div><div class="ob-dot"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 1 of 4</div>
    <h2 style="font-size:28px;font-weight:800;color:var(--text);margin-bottom:6px;">Your phone number</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:28px;">We'll send a one-time code to verify it's you.</p>
    <div class="ob-label">Ghana mobile number</div>
    <input class="ob-input" type="tel" placeholder="+233 24 000 0000" value="+233 24 123 4567"/>
    <p style="font-size:12px;color:var(--hint);margin-bottom:24px;">By continuing you agree to Nframa's Terms &amp; Privacy Policy.</p>
    <button class="btn btn-primary" onclick="go('otp')">Send verification code</button>
  </div></div>
</div>

<!-- ══ OB 2: OTP ════════════════════════════════════════ -->

<div class="screen" id="s-otp">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('phone')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot"></div><div class="ob-dot"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 2 of 4</div>
    <h2 style="font-size:28px;font-weight:800;color:var(--text);margin-bottom:6px;">Enter your code</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:28px;">Sent to +233 24 123 4567 via SMS</p>
    <div class="otp-row">
      <input class="otp-box filled" maxlength="1" value="4" type="tel"/>
      <input class="otp-box filled" maxlength="1" value="8" type="tel"/>
      <input class="otp-box filled" maxlength="1" value="2" type="tel"/>
      <input class="otp-box filled" maxlength="1" value="7" type="tel"/>
    </div>
    <button class="btn btn-primary" onclick="go('role')" style="margin-bottom:16px;">Verify &amp; continue</button>
    <p style="text-align:center;font-size:13px;color:var(--muted);">Didn't receive it? <span style="color:var(--primary);font-weight:700;cursor:pointer;" onclick="showToastGlobal('Code resent to +233 24 123 4567')">Resend code</span></p>
  </div></div>
</div>

<!-- ══ OB 3: ROLE SELECT ════════════════════════════════ -->

<div class="screen" id="s-role">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('otp')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 3 of 4</div>
    <h1 style="font-size:28px;font-weight:800;color:var(--text);margin-bottom:6px;">I am a...</h1>
    <p style="font-size:14px;color:var(--muted);margin-bottom:24px;">Choose your role to personalise your experience</p>
    <div id="rc-rider" onclick="pickRole('rider')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:20px;display:flex;align-items:flex-start;gap:16px;cursor:pointer;margin-bottom:12px;">
      <div style="font-size:34px;line-height:1;flex-shrink:0;">👤</div>
      <div><div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:4px;">Rider</div><div style="font-size:13px;color:var(--primary);font-weight:600;margin-bottom:6px;">I need a shared commute</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">Subscribe daily, weekly, or monthly. Get matched to car owners on your route.</div></div>
    </div>
    <div id="rc-owner" onclick="pickRole('owner')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:20px;display:flex;align-items:flex-start;gap:16px;cursor:pointer;margin-bottom:12px;">
      <div style="font-size:34px;line-height:1;flex-shrink:0;">🚗</div>
      <div><div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:4px;">Car Owner</div><div style="font-size:13px;color:var(--orange);font-weight:600;margin-bottom:6px;">I have a car &amp; empty seats</div><div style="font-size:13px;color:var(--muted);line-height:1.55;">Log your availability, pick up riders on your daily route, and earn.</div></div>
    </div>
    <div id="rc-hr" onclick="pickRole('hr')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:20px;display:flex;align-items:flex-start;gap:16px;cursor:pointer;margin-bottom:12px;">
      <div style="font-size:34px;line-height:1;flex-shrink:0;">🏢</div>
      <div>
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:4px;">HR / Corporate Admin</div>
        <div style="font-size:13px;color:var(--purple-light);font-weight:600;margin-bottom:6px;">I manage commutes for my organisation</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.55;">Add employees, manage bulk passes, download invoices, and access ESG reporting.</div>
      </div>
    </div>
    <div id="rc-guardian" onclick="pickRole('guardian')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:20px;display:flex;align-items:flex-start;gap:16px;cursor:pointer;margin-bottom:28px;">
      <div style="font-size:34px;line-height:1;flex-shrink:0;">👨‍👧</div>
      <div>
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:4px;">Parent / Guardian</div>
        <div style="font-size:13px;color:var(--blue);font-weight:600;margin-bottom:6px;">I need safe school transport for my child</div>
        <div style="font-size:13px;color:var(--muted);line-height:1.55;">Enrol your child, get real-time journey alerts, and manage their physical QR pass — no smartphone needed by your child.</div>
      </div>
    </div>
    <button class="btn btn-primary" id="continue-btn" style="opacity:.3;" onclick="doRole()">Continue</button>
  </div></div>
</div>

<!-- ══ OB 4a: RIDER SETUP ══════════════════════════════ -->

<div class="screen" id="s-setup-rider">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('role')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 4 of 4 · Rider profile</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Your commute details</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">This is how we match you to car owners every morning.</p>
    <div class="ob-label">Full name</div>
    <input class="ob-input" type="text" value="Ama Owusu" placeholder="Your full name"/>
    <div class="ob-label">Home area / pickup neighbourhood</div>
    <select class="ob-select">
      <option selected>Tema Community 5</option><option>Tema Community 1</option><option>Spintex Road</option><option>Legon</option><option>East Legon</option>
    </select>
    <div class="ob-label">Where do you commute to?</div>
    <select class="ob-select">
      <option selected>Accra CBD / Circle</option><option>Osu</option><option>Airport Area</option><option>Accra Mall</option><option>Ridge / Ministries</option>
    </select>
    <div class="ob-label" style="margin-bottom:8px;">Usual departure window</div>
    <div style="display:flex;gap:6px;margin-bottom:14px;">
      <div class="time-pill on" onclick="selTime(this)">6:00–6:30</div>
      <div class="time-pill" onclick="selTime(this)">6:30–7:00</div>
      <div class="time-pill" onclick="selTime(this)">7:00–7:30</div>
      <div class="time-pill" onclick="selTime(this)">7:30–8:00</div>
    </div>
    <div class="ob-label" style="margin-bottom:8px;">Which days do you commute?</div>
    <div style="display:flex;gap:8px;margin-bottom:20px;">
      <div class="day-chip on" onclick="this.classList.toggle('on')">M</div>
      <div class="day-chip on" onclick="this.classList.toggle('on')">T</div>
      <div class="day-chip on" onclick="this.classList.toggle('on')">W</div>
      <div class="day-chip on" onclick="this.classList.toggle('on')">T</div>
      <div class="day-chip on" onclick="this.classList.toggle('on')">F</div>
      <div class="day-chip" onclick="this.classList.toggle('on')">S</div>
      <div class="day-chip" onclick="this.classList.toggle('on')">S</div>
    </div>
    <div class="ob-label">Emergency contact name</div>
    <input class="ob-input" type="text" placeholder="e.g. Adwoa (Mum)" value="Adwoa (Mum)"/>
    <div class="ob-label">Emergency contact phone</div>
    <input class="ob-input" type="tel" placeholder="+233 24 000 0000" value="+233 24 456 7890"/>
    <button class="btn btn-primary" onclick="go('plans-ob')" style="margin-top:6px;">Set up my commute →</button>
  </div></div>
</div>

<!-- ══ OB 4a-ii: RIDER PLAN SELECT ════════════════════ -->

<div class="screen" id="s-plans-ob">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('setup-rider')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Almost there</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Choose a plan</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:24px;">Your QR pass is generated instantly after payment. You can upgrade anytime.</p>
    <div id="ob-p-daily" onclick="pickObPlan('daily')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;">
      <div><div style="font-size:17px;font-weight:700;color:var(--text);">Daily</div><div style="font-size:13px;color:var(--muted);">1 ride · Today only</div></div>
      <div style="font-size:24px;font-weight:800;color:var(--text);">₵8</div>
    </div>
    <div id="ob-p-weekly" onclick="pickObPlan('weekly')" style="background:var(--card);border:1.5px solid var(--primary);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;">
      <div><div style="font-size:17px;font-weight:700;color:var(--text);">Weekly</div><div style="font-size:13px;color:var(--muted);">5 rides · 7 days</div></div>
      <div style="display:flex;align-items:center;gap:8px;"><span class="badge b-pink" style="font-size:9px;">POPULAR</span><div style="font-size:24px;font-weight:800;color:var(--primary);">₵40</div></div>
    </div>
    <div id="ob-p-monthly" onclick="pickObPlan('monthly')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;">
      <div><div style="font-size:17px;font-weight:700;color:var(--text);">Monthly</div><div style="font-size:13px;color:var(--muted);">22 rides · 30 days</div></div>
      <div style="font-size:24px;font-weight:800;color:var(--text);">₵140</div>
    </div>
    <!-- Corporate option — tappable, routes to company link screen -->
    <div id="ob-p-corp" onclick="pickObPlan('corp');go('corp-link')" style="background:var(--purple-bg);border:0.5px solid var(--border2);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:22px;">
      <div>
        <div style="font-size:17px;font-weight:700;color:var(--text);">Corporate</div>
        <div style="font-size:13px;color:var(--purple-light);">Employer-paid · Link to your company</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="badge b-purple">Ask HR</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple-light)" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>
    <button class="btn btn-primary" onclick="goNav('home','home')">Pay with MoMo &amp; start commuting →</button>
  </div></div>
</div>

<!-- ══ OB 4b: CAR OWNER SETUP ══════════════════════════ -->

<div class="screen" id="s-setup-owner">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('role')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 4 of 4 · Car owner profile</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Your vehicle</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">We verify all car owners before your first pickup. Usually 24–48 hours.</p>
    <div class="ob-label">Your full name</div>
    <input class="ob-input" type="text" value="Kwame Asante"/>
    <div class="ob-label">Vehicle make &amp; model</div>
    <input class="ob-input" type="text" value="Toyota Corolla 2020"/>
    <div class="ob-label">Ghana plate number</div>
    <input class="ob-input" type="text" value="GR-2847-20" style="text-transform:uppercase;letter-spacing:.06em;"/>
    <div class="ob-label">Seats available for riders (excl. driver)</div>
    <select class="ob-select"><option>1 seat</option><option>2 seats</option><option selected>3 seats</option><option>4 seats</option></select>
    <div class="ob-label">Your regular commute route</div>
    <select class="ob-select"><option selected>Tema → Accra CBD</option><option>Spintex Rd → Airport</option><option>Legon → Accra Mall</option><option>East Legon → CBD</option></select>
    <div class="ob-label" style="margin-top:4px;">Documents (required for verification)</div>
    <!-- Pre-filled doc 1 — Vehicle registration -->
    <div class="doc-ok">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--green-light)" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
      <div><div style="font-size:13px;font-weight:700;color:var(--green-light);">Vehicle registration</div><div style="font-size:11px;color:var(--muted);">GH-VEH-2020-KA.pdf</div></div>
    </div>
    <!-- Insurance certificate -->
    <div class="doc-upload" onclick="markDocUploaded(this,'Insurance certificate')">
      <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
      <p style="font-size:13px;color:var(--muted);">Tap to upload insurance certificate</p>
    </div>
    <!-- Driver's license -->
    <div class="doc-upload" onclick="markDocUploaded(this,'Drivers license')">
      <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
      <p style="font-size:13px;color:var(--muted);">Tap to upload driver's license</p>
    </div>
    <!-- Roadworthy Certificate (Ghana equivalent of MOT) -->
    <div style="margin-bottom:6px;">
      <div class="ob-label" style="margin-top:2px;margin-bottom:6px;">Roadworthy certificate (DVLA Ghana)</div>
      <div style="background:var(--purple-bg);border:0.5px solid var(--border2);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:flex-start;gap:8px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--purple-light)" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <p style="font-size:12px;color:var(--muted);line-height:1.55;">Ghana's <span style="color:var(--purple-light);font-weight:700;">Roadworthy Certificate</span> is issued by the DVLA and confirms your vehicle has passed a safety inspection. It is renewed annually. Obtain yours at any DVLA office before submitting.</p>
      </div>
      <div class="doc-upload" onclick="markDocUploaded(this,'Roadworthy certificate')">
        <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
        <p style="font-size:13px;color:var(--muted);">Tap to upload roadworthy certificate</p>
        <p style="font-size:11px;color:var(--hint);margin-top:4px;">Issued by DVLA Ghana · Must be valid &amp; not expired</p>
      </div>
    </div>
    <!-- What happens if roadworthy expired -->
    <div style="background:var(--orange-bg);border:0.5px solid var(--orange);border-radius:10px;padding:10px 14px;margin-bottom:20px;display:flex;align-items:flex-start;gap:8px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:1px;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--amber);margin-bottom:2px;">Annual renewal required</div>
        <p style="font-size:11px;color:var(--muted);line-height:1.55;">Your account will be automatically paused if your roadworthy certificate expires. Nframa will notify you 30 days before expiry.</p>
      </div>
    </div>
    <button class="btn btn-primary" onclick="go('owner-pending')" style="margin-top:0;">Submit for verification</button>
  </div></div>
</div>

<!-- ══ OB 4b-ii: OWNER PENDING ═════════════════════════ -->

<div class="screen" id="s-owner-pending" style="justify-content:center;">
  <div style="padding:32px 24px;text-align:center;">
    <div style="width:80px;height:80px;border-radius:50%;background:var(--orange-bg);border:2px solid var(--orange);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    </div>
    <div class="overline" style="margin-bottom:8px;text-align:center;">Application submitted</div>
    <h2 style="font-size:24px;font-weight:800;color:var(--text);margin-bottom:10px;">Under review</h2>
    <p style="font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:30px;">Our team is reviewing your documents. You'll receive an SMS within 24–48 hours once approved and matched to your first corridor.</p>
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px;text-align:left;margin-bottom:24px;">
      <div class="overline" style="margin-bottom:14px;">What happens next</div>
      <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--orange-bg);color:var(--amber);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</div>
        <span style="font-size:13px;color:var(--muted);line-height:1.5;">Nframa ops verifies your license, insurance, vehicle registration, and <strong style="color:var(--text);">roadworthy certificate</strong></span>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--purple-bg);color:var(--purple-light);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div>
        <span style="font-size:13px;color:var(--muted);line-height:1.5;">Your vehicle is assigned to corridors with open rider demand</span>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--green-bg);color:var(--green-light);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">3</div>
        <span style="font-size:13px;color:var(--muted);line-height:1.5;">You receive your first rider matches and go live</span>
      </div>
    </div>
    <button class="btn btn-ghost" onclick="go('co')">Preview your dashboard →</button>
    <!-- Global toast for this screen -->
    <div id="g-toast" class="toast toast-ok" style="margin-top:14px;"></div>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<!-- RIDER SCREENS                                          -->
<!-- ══════════════════════════════════════════════════════ -->

<div class="screen" id="s-home">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:6px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;">
      <div><div class="overline" style="margin-bottom:3px;">Good morning</div><h2 style="font-size:26px;font-weight:800;color:var(--text);">Ama Owusu</h2></div>
      <div style="width:44px;height:44px;border-radius:50%;background:var(--primary-bg);border:1.5px solid var(--primary);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--primary);">AO</div>
    </div>
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:18px;padding:18px;margin-bottom:14px;position:relative;overflow:hidden;">
      <div style="position:absolute;right:-20px;top:-20px;width:100px;height:100px;border-radius:50%;background:var(--primary);opacity:.07;"></div>
      <div class="overline" style="margin-bottom:8px;">Active pass</div>
      <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:3px;">Monthly · Tema → CBD</div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:14px;">NFR-2025-04871 · 14 rides left</div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:64%;background:var(--primary);"></div></div>
      <div style="display:flex;justify-content:flex-end;gap:5px;"><span style="font-size:12px;color:var(--hint);">Expires</span><span style="font-size:12px;font-weight:700;color:var(--text);">Apr 25</span></div>
    </div>
    <button class="btn btn-primary" onclick="goNav('routes','routes')" style="margin-bottom:20px;">I need a ride today →</button>
    <div class="section-hd">My commute group</div>
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:14px 16px;cursor:pointer;margin-bottom:14px;" onclick="go('group')">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="display:flex;margin-right:2px;">
          <div style="width:30px;height:30px;border-radius:50%;background:var(--primary-bg);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--primary);margin-right:-8px;">AO</div>
          <div style="width:30px;height:30px;border-radius:50%;background:var(--purple-bg);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--purple-light);margin-right:-8px;">KA</div>
          <div style="width:30px;height:30px;border-radius:50%;background:var(--orange-bg);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--amber);margin-right:-8px;">EO</div>
          <div style="width:30px;height:30px;border-radius:50%;background:var(--card2);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:var(--hint);">+4</div>
        </div>
        <div style="flex:1;"><div style="font-size:14px;font-weight:700;color:var(--text);">Tema → CBD commuters</div><div style="font-size:11px;color:var(--muted);">7 members · 6:30–7:15 AM</div></div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
      <div style="background:var(--card2);border-radius:10px;padding:10px 12px;">
        <div style="font-size:11px;font-weight:700;color:var(--orange);margin-bottom:2px;">Kwame A.</div>
        <div style="font-size:13px;color:var(--text);">Slight delay tomorrow — road works at Tema bridge 🚧</div>
      </div>
    </div>
    <!-- Offline access link -->
    <button onclick="go('offline')" style="width:100%;padding:12px;background:var(--card2);border:0.5px solid var(--border2);border-radius:12px;font-size:12px;font-weight:700;color:var(--muted);font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:20px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>
      No internet? View offline access &amp; USSD shortcuts
    </button>
    <!-- Referral nudge -->
    <div onclick="go('rider-referral')" style="background:var(--primary-bg);border:1px solid var(--primary);border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:12px;margin-bottom:14px;cursor:pointer;">
      <span style="font-size:26px;">🎁</span>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;color:var(--primary-light);">Invite a commuter, earn a free ride</div>
        <div style="font-size:12px;color:var(--muted);">You have 3 referrals · 2 more to unlock Power Referrer</div>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
    </div>
    <div class="section-hd">Tomorrow's commute</div>
    <div class="card" style="display:flex;align-items:center;gap:14px;">
      <div style="width:38px;height:38px;background:var(--primary-bg);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
      <div style="flex:1;"><div style="font-size:15px;font-weight:700;color:var(--text);">Tema Comm. 5 → Accra CBD</div><div style="font-size:12px;color:var(--muted);">Wed 26 Mar · 6:45 AM · Kwame A. confirmed</div></div>
      <span class="badge b-green">SET</span>
    </div>
    <div class="section-hd">Live corridor demand</div>
    <div class="card">
      <div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:14px;">Tema → CBD corridor</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:10px;"><span style="font-size:14px;color:var(--muted);">Riders waiting</span><span style="font-size:15px;font-weight:700;color:var(--orange);">12</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:10px;"><span style="font-size:14px;color:var(--muted);">Cars available</span><span style="font-size:15px;font-weight:700;color:var(--green-light);">9</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:16px;"><span style="font-size:14px;color:var(--muted);">Avg wait</span><span style="font-size:15px;font-weight:700;color:var(--blue);">6 min</span></div>
      <button onclick="goNav('routes','routes')" style="background:none;border:none;color:var(--primary);font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;padding:0;">View all 6 corridors →</button>
    </div>
  </div></div>
</div>

<div class="screen" id="s-routes">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:4px;">
      <div><div class="overline" style="margin-bottom:3px;">Live intelligence</div><h2 class="page-title">Route clusters</h2></div>
      <div style="display:flex;gap:5px;background:var(--card);border-radius:10px;padding:4px;"><div style="padding:6px 14px;background:var(--primary);color:#fff;border-radius:7px;font-size:13px;font-weight:700;">List</div><div style="padding:6px 14px;color:var(--muted);border-radius:7px;font-size:13px;font-weight:600;">Map</div></div>
    </div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:18px;">Pre-built corridors · Nightly demand cluster analysis</p>
    <div class="card" onclick="go('detail')" style="cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Tema → Accra CBD</div><div style="font-size:12px;color:var(--muted);">6:00–8:00 AM · Mon–Fri</div></div><span class="badge b-green">HIGH DEMAND</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:82%;background:var(--green);"></div></div>
      <div style="display:flex;justify-content:space-between;"><div><span style="font-size:14px;font-weight:700;color:var(--primary);">142</span><span style="font-size:13px;color:var(--muted);"> riders</span>&nbsp;&nbsp;<span style="font-size:14px;font-weight:700;color:var(--text);">76</span><span style="font-size:13px;color:var(--muted);"> cars</span></div><span style="font-size:13px;color:var(--primary);font-weight:700;">View →</span></div>
    </div>
    <div class="card" onclick="go('detail')" style="cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Spintex → Airport</div><div style="font-size:12px;color:var(--muted);">6:30–8:30 AM · Mon–Fri</div></div><span class="badge b-purple">GROWING</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:65%;background:var(--green);"></div></div>
      <div style="display:flex;justify-content:space-between;"><div><span style="font-size:14px;font-weight:700;color:var(--primary);">89</span><span style="font-size:13px;color:var(--muted);"> riders</span>&nbsp;&nbsp;<span style="font-size:14px;font-weight:700;color:var(--text);">58</span><span style="font-size:13px;color:var(--muted);"> cars</span></div><span style="font-size:13px;color:var(--primary);font-weight:700;">View →</span></div>
    </div>
    <div class="card" onclick="go('detail')" style="cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Legon → Accra Mall</div><div style="font-size:12px;color:var(--muted);">7:00–9:00 AM · Mon–Sat</div></div><span class="badge b-amber">SUPPLY GAP</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:55%;background:var(--amber);"></div></div>
      <div style="display:flex;justify-content:space-between;"><div><span style="font-size:14px;font-weight:700;color:var(--primary);">74</span><span style="font-size:13px;color:var(--muted);"> riders</span>&nbsp;&nbsp;<span style="font-size:14px;font-weight:700;color:var(--text);">41</span><span style="font-size:13px;color:var(--muted);"> cars</span></div><span style="font-size:13px;color:var(--primary);font-weight:700;">View →</span></div>
    </div>
    <div class="card" onclick="go('detail')" style="cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">East Legon → CBD</div><div style="font-size:12px;color:var(--muted);">6:45–8:15 AM · Mon–Fri</div></div><span class="badge b-green">WELL MATCHED</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:91%;background:var(--green);"></div></div>
      <div style="display:flex;justify-content:space-between;"><div><span style="font-size:14px;font-weight:700;color:var(--primary);">61</span><span style="font-size:13px;color:var(--muted);"> riders</span>&nbsp;&nbsp;<span style="font-size:14px;font-weight:700;color:var(--text);">50</span><span style="font-size:13px;color:var(--muted);"> cars</span></div><span style="font-size:13px;color:var(--primary);font-weight:700;">View →</span></div>
    </div>
  </div></div>
</div>

<div class="screen" id="s-detail">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="goNav('routes','routes')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <h2 style="font-size:23px;font-weight:800;color:var(--text);margin-bottom:3px;">Tema → Accra CBD</h2>
    <p style="font-size:13px;color:var(--muted);margin-bottom:20px;">Tema Community 5 → Accra Central · Mon–Fri</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
      <div class="card" style="margin:0;"><div class="overline" style="margin-bottom:7px;">Rider demand</div><div style="font-size:30px;font-weight:800;color:var(--orange);">94</div></div>
      <div class="card" style="margin:0;"><div class="overline" style="margin-bottom:7px;">Cars available</div><div style="font-size:30px;font-weight:800;color:var(--green-light);">76</div></div>
      <div class="card" style="margin:0;"><div class="overline" style="margin-bottom:7px;">Active riders</div><div style="font-size:30px;font-weight:800;color:var(--blue);">142</div></div>
      <div class="card" style="margin:0;"><div class="overline" style="margin-bottom:7px;">Peak window</div><div style="font-size:17px;font-weight:800;color:var(--text);">6:00–8:00 AM</div></div>
    </div>
    <div class="card">
      <div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:10px;">Supply / demand match</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;"><div class="track" style="flex:1;"><div class="fill" style="width:82%;background:var(--green);"></div></div><span style="font-size:15px;font-weight:800;color:var(--green-light);">82%</span></div>
      <p style="font-size:13px;color:var(--muted);">Well covered — strong car owner supply.</p>
    </div>
    <div class="section-hd">Departure heatmap</div>
    <div class="card" id="heatmap-container"></div>
    <button class="btn btn-primary" onclick="goNav('ride','ride')" style="margin-top:16px;margin-bottom:4px;">Book a ride on this route →</button>
  </div></div>
</div>

<div class="screen" id="s-ride">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="go('detail')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Step 1 of 2</div>
    <h2 class="page-title" style="margin-bottom:4px;">Book a ride</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">Confirm today's trip details</p>
    <div class="card" style="display:flex;align-items:center;gap:14px;"><span style="font-size:24px;">📍</span><div><div class="overline" style="margin-bottom:2px;">Pickup</div><div style="font-size:15px;font-weight:700;color:var(--text);">Tema Comm. 5, near Valco Trust</div></div></div>
    <div class="card" style="display:flex;align-items:center;gap:14px;"><span style="font-size:24px;">🏁</span><div><div class="overline" style="margin-bottom:2px;">Destination</div><div style="font-size:15px;font-weight:700;color:var(--text);">Accra CBD · Independence Ave.</div></div></div>
    <div class="card" style="display:flex;align-items:center;gap:14px;"><span style="font-size:24px;">⏰</span><div><div class="overline" style="margin-bottom:2px;">When</div><div style="font-size:15px;font-weight:700;color:var(--text);">Today · 6:30–7:15 AM</div></div></div>
    <div class="card" style="display:flex;align-items:center;gap:14px;"><span style="font-size:24px;">🎫</span><div><div class="overline" style="margin-bottom:2px;">Pass</div><div style="font-size:15px;font-weight:700;color:var(--text);">Monthly pass · 14 rides left</div></div></div>
    <div class="card" style="background:var(--purple-bg);border-color:var(--border2);margin-top:4px;"><p style="font-size:14px;color:var(--text);line-height:1.6;"><span style="font-weight:700;color:var(--primary);">9 car owners</span> available on your corridor right now · avg wait <span style="font-weight:700;color:var(--orange);">6 min</span></p></div>
    <button class="btn btn-primary" onclick="go('matches')" style="margin-top:18px;">Find best match →</button>
  </div></div>
</div>

<div class="screen" id="s-matches">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="go('ride')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Ranked by algorithm</div>
    <h2 class="page-title" style="margin-bottom:5px;">Best matches</h2>
    <p style="font-size:12px;color:var(--muted);margin-bottom:22px;">Sorted by: proximity 40% · rating 30% · reliability 20% · time 10%</p>
    <div class="card" style="border:1.5px solid var(--primary);margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--primary-bg);border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;color:var(--primary);flex-shrink:0;">KA</div>
        <div style="flex:1;"><div style="font-size:17px;font-weight:700;color:var(--text);">Kwame A.</div><div style="font-size:12px;color:var(--muted);margin-bottom:6px;">Toyota Corolla · GR-2847-20</div><div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--muted);"><span>⭐ 4.9</span><span>🚗 312 trips</span><span>⏱ ETA 4 min</span><span>💺 2 seats</span></div></div>
        <div style="background:var(--primary-bg);border-radius:10px;padding:8px 10px;text-align:center;flex-shrink:0;"><div style="font-size:20px;font-weight:800;color:var(--primary);">94</div><div style="font-size:9px;color:var(--muted);">score</div></div>
      </div>
      <span class="badge b-pink" style="margin-bottom:12px;display:inline-block;">BEST MATCH</span>
      <button class="btn btn-primary" onclick="confirmDriver('KA','Kwame A.','Toyota Corolla · GR-2847-20','4 min')">Request this ride</button>
    </div>
    <div class="card" style="margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--card2);border:1.5px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;color:var(--muted);flex-shrink:0;">AM</div>
        <div style="flex:1;"><div style="font-size:17px;font-weight:700;color:var(--text);">Abena M.</div><div style="font-size:12px;color:var(--muted);margin-bottom:6px;">Honda Civic · GW-1023-19</div><div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--muted);"><span>⭐ 4.7</span><span>🚗 198 trips</span><span>⏱ ETA 7 min</span><span>💺 3 seats</span></div></div>
        <div style="background:var(--card2);border-radius:10px;padding:8px 10px;text-align:center;flex-shrink:0;"><div style="font-size:20px;font-weight:800;color:var(--text);">87</div><div style="font-size:9px;color:var(--muted);">score</div></div>
      </div>
      <button class="btn btn-outline" onclick="confirmDriver('AM','Abena M.','Honda Civic · GW-1023-19','7 min')">Choose instead</button>
    </div>
    <div class="card" style="margin-bottom:26px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--card2);border:1.5px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;color:var(--muted);flex-shrink:0;">EF</div>
        <div style="flex:1;"><div style="font-size:17px;font-weight:700;color:var(--text);">Emmanuel F.</div><div style="font-size:12px;color:var(--muted);margin-bottom:6px;">Hyundai Elantra · GN-3210-21</div><div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--muted);"><span>⭐ 4.6</span><span>🚗 145 trips</span><span>⏱ ETA 10 min</span><span>💺 2 seats</span></div></div>
        <div style="background:var(--card2);border-radius:10px;padding:8px 10px;text-align:center;flex-shrink:0;"><div style="font-size:20px;font-weight:800;color:var(--text);">79</div><div style="font-size:9px;color:var(--muted);">score</div></div>
      </div>
      <button class="btn btn-outline" onclick="confirmDriver('EF','Emmanuel F.','Hyundai Elantra · GN-3210-21','10 min')">Choose instead</button>
    </div>
    <div class="overline" style="margin-bottom:12px;">⭐ Your preferred drivers</div>
    <div style="background:var(--purple-bg);border:1px solid var(--border2);border-radius:14px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;">
        <div style="width:46px;height:46px;border-radius:50%;background:var(--primary-bg);border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:var(--primary);flex-shrink:0;">KA</div>
        <div><div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:2px;">Kwame A. ⭐</div><div style="font-size:12px;color:var(--muted);">Toyota Corolla · ETA 4 min · 4.9 ★</div></div>
      </div>
      <button style="background:var(--primary);color:#fff;border:none;border-radius:10px;padding:10px 18px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;flex-shrink:0;" onclick="confirmDriver('KA','Kwame A.','Toyota Corolla · GR-2847-20','4 min')">Book</button>
    </div>
    <div style="background:var(--purple-bg);border:1px solid var(--border2);border-radius:14px;padding:14px 16px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:12px;opacity:.6;">
      <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0;">
        <div style="width:46px;height:46px;border-radius:50%;background:var(--orange-bg);border:2px solid var(--orange);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:var(--orange);flex-shrink:0;">KM</div>
        <div><div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:2px;">Kofi M. ⭐</div><div style="font-size:12px;color:var(--muted);">Nissan Sentra · <span style="color:var(--amber);">Offline today</span> · 4.8 ★</div></div>
      </div>
      <button style="background:var(--card2);color:var(--hint);border:none;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:700;font-family:inherit;cursor:not-allowed;flex-shrink:0;">Unavail.</button>
    </div>
  </div></div>
</div>

<div class="screen" id="s-confirmed">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>

  <!-- Route deviation alert banner — shown when deviation detected -->
  <div class="deviation-banner" id="deviation-banner">
    <h4>Route deviation detected</h4>
    <p>Your vehicle has moved 650m off the Tema → CBD corridor. Tap SOS if you feel unsafe.</p>
    <div class="dev-btns">
      <button class="dev-btn-ok" onclick="dismissDeviation()">I'm still safe</button>
      <button class="dev-btn-panic" onclick="go('panic')">SOS</button>
    </div>
  </div>

  <div class="scroll"><div class="page" style="padding-top:10px;">
    <div class="overline" style="margin-bottom:4px;">En route</div>
    <h2 class="page-title" style="margin-bottom:18px;">Ride confirmed</h2>

    <!-- Driver -->
    <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:20px;">
      <div id="conf-av" style="width:84px;height:84px;border-radius:50%;background:var(--primary-bg);border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;color:var(--primary);margin-bottom:12px;">KA</div>
      <div id="conf-name" style="font-size:21px;font-weight:800;color:var(--text);margin-bottom:2px;">Kwame A.</div>
      <div id="conf-car" style="font-size:13px;color:var(--muted);">Toyota Corolla · GR-2847-20</div>
    </div>

    <!-- ETA tiles -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:18px;">
      <div style="background:var(--card);border:0.5px solid var(--border);border-radius:14px 0 0 14px;padding:18px;text-align:center;"><div id="conf-eta" style="font-size:36px;font-weight:800;color:var(--primary);">4 min</div><div style="font-size:11px;color:var(--muted);margin-top:4px;letter-spacing:.08em;text-transform:uppercase;">ETA</div></div>
      <div style="background:var(--card);border:0.5px solid var(--border);border-radius:0 14px 14px 0;padding:18px;text-align:center;"><div id="etaSec" style="font-size:36px;font-weight:800;color:var(--orange);">45s</div><div style="font-size:11px;color:var(--muted);margin-top:4px;letter-spacing:.08em;text-transform:uppercase;">to confirm</div></div>
    </div>

    <!-- Security status strip -->
    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--green-light);flex-shrink:0;"></div>
      <div style="flex:1;"><span style="font-size:12px;font-weight:700;color:var(--green-light);">Safety active</span><span style="font-size:12px;color:var(--muted);"> · Route monitored · Auto check-in on</span></div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    </div>

    <!-- Trip summary -->
    <div class="card">
      <div class="overline" style="margin-bottom:12px;">Trip summary</div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Pickup</span><span style="font-size:14px;font-weight:600;color:var(--text);">Tema Comm. 5</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Drop-off</span><span style="font-size:14px;font-weight:600;color:var(--text);">Accra CBD</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Departure</span><span style="font-size:14px;font-weight:600;color:var(--text);">6:45 AM</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;"><span style="font-size:14px;color:var(--muted);">Pass</span><span style="font-size:14px;font-weight:600;color:var(--primary);">NFR-2025-04871 ✓</span></div>
    </div>

    <button class="btn btn-primary" onclick="goNav('pass','pass')" style="margin-top:4px;margin-bottom:8px;">View my QR pass →</button>
    <div style="display:flex;gap:8px;margin-bottom:10px;">
      <button onclick="go('chat')" style="flex:1;padding:13px;background:var(--card);border:0.5px solid var(--border2);border-radius:12px;font-size:13px;font-weight:700;color:var(--text);font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Message</button>
      <button onclick="go('checkin')" style="flex:1;padding:13px;background:var(--green);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">I've arrived ✓</button>
    </div>
    <!-- Rider cancel - always visible -->
    <button onclick="go('cancel')" style="width:100%;padding:13px;background:transparent;color:var(--muted);border:0.5px solid var(--border);border-radius:12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;margin-bottom:10px;">Cancel this ride</button>
    <div style="display:flex;justify-content:center;gap:16px;">
      <button onclick="simulateDeviation()" style="background:none;border:none;color:var(--hint);font-size:11px;font-family:inherit;cursor:pointer;padding:4px;">Demo: deviation alert</button>
      <button onclick="go('driver-cancelled')" style="background:none;border:none;color:var(--hint);font-size:11px;font-family:inherit;cursor:pointer;padding:4px;">Demo: driver cancelled</button>
    </div>
  </div></div>

  <!-- Fixed safety bar — panic + share -->
  <div class="sec-bar">
    <button class="panic-btn" onclick="go('panic')">
      <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      SOS
    </button>
    <button class="share-btn" onclick="go('share')">
      <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      Share trip
    </button>
  </div>
</div>

<!-- ══ IN-APP CHAT ════════════════════════════════════ -->

<div class="screen" id="s-chat">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="chat-header">
    <button class="back" onclick="go('confirmed')" style="margin:0;"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div style="width:38px;height:38px;border-radius:50%;background:var(--primary-bg);border:1.5px solid var(--primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--primary);">KA</div>
    <div style="flex:1;"><div style="font-size:14px;font-weight:700;color:var(--text);">Kwame A.</div><div style="font-size:11px;color:var(--green-light);">● En route · ETA 4 min</div></div>
    <div style="font-size:10px;color:var(--hint);display:flex;align-items:center;gap:4px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>Number masked</div>
  </div>
  <div class="scroll"><div class="msg-wrap">
    <div style="text-align:center;font-size:11px;color:var(--hint);margin-bottom:14px;padding:6px 12px;background:var(--card2);border-radius:100px;align-self:center;">Today · 6:28 AM · Numbers masked for your privacy 🔒</div>
    <div class="msg-bubble msg-in"><div>I'm about 5 minutes away — parking near the Valco Trust sign. Look out for a silver Corolla 🚗</div><div class="msg-time">6:28 AM</div></div>
    <div class="msg-bubble msg-out"><div>Perfect, I'll be at the gate 👋</div><div class="msg-time">6:29 AM</div></div>
    <div class="msg-bubble msg-in"><div>Do you have a large bag? I can open the boot</div><div class="msg-time">6:29 AM</div></div>
    <div class="msg-bubble msg-out"><div>Just a small backpack — I'm fine in the back seat. Thanks!</div><div class="msg-time">6:30 AM</div></div>
    <div style="margin-top:8px;margin-bottom:4px;font-size:10px;color:var(--hint);letter-spacing:.06em;text-transform:uppercase;">Quick replies</div>
    <div style="display:flex;flex-wrap:wrap;gap:7px;" id="quick-replies">
      <button class="quick-reply" onclick="sendQuickReply(this,'On my way to you now 👋')">On my way 👋</button>
      <button class="quick-reply" onclick="sendQuickReply(this,'Running 2 minutes late, sorry!')">2 min late ⏱</button>
      <button class="quick-reply" onclick="sendQuickReply(this,'Can you wait 1 minute?')">Wait 1 min?</button>
      <button class="quick-reply" onclick="sendQuickReply(this,'Got it, see you soon!')">Got it 👌</button>
    </div>
  </div></div>
  <div class="chat-input-row">
    <input class="chat-input" id="chat-msg" placeholder="Type a message…"/>
    <button class="chat-send" onclick="sendChatMsg()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
  </div>
</div>

<!-- ══ POST-TRIP RATING ══════════════════════════════════ -->

<div class="screen" id="s-rating">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <div style="text-align:center;margin-bottom:22px;">
      <div style="width:76px;height:76px;border-radius:50%;background:var(--primary-bg);border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:var(--primary);margin:0 auto 14px;">KA</div>
      <div class="overline" style="margin-bottom:6px;">Rate your trip</div>
      <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:4px;">How was Kwame A.?</h2>
      <p style="font-size:13px;color:var(--muted);">Tema Comm. 5 → Accra CBD · 43 min · Today</p>
    </div>
    <div class="star-row" id="star-row">
      <div class="star-tap" onclick="rateStar(1)"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="star-tap" onclick="rateStar(2)"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="star-tap" onclick="rateStar(3)"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="star-tap" onclick="rateStar(4)"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="star-tap on" onclick="rateStar(5)"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
    </div>
    <div class="mood-row">
      <button class="mood-chip on" onclick="this.classList.toggle('on')">On time ✓</button>
      <button class="mood-chip on" onclick="this.classList.toggle('on')">Clean car ✓</button>
      <button class="mood-chip on" onclick="this.classList.toggle('on')">Safe driving ✓</button>
      <button class="mood-chip" onclick="this.classList.toggle('on')">Friendly</button>
      <button class="mood-chip" onclick="this.classList.toggle('on')">Great music 🎵</button>
    </div>
    <textarea id="rating-comment" style="width:100%;background:var(--card);border:0.5px solid var(--border2);border-radius:12px;padding:14px;font-size:14px;color:var(--text);font-family:inherit;outline:none;resize:none;height:80px;margin-bottom:16px;" placeholder="Add a comment (optional)…"></textarea>
    <button class="btn btn-primary" onclick="submitRating()" style="margin-bottom:10px;">Submit rating</button>
    <button onclick="goNav('home','home')" style="background:none;border:none;color:var(--hint);font-size:13px;font-family:inherit;cursor:pointer;width:100%;text-align:center;padding:6px 0;">Skip</button>
    <div id="rating-toast" class="toast toast-ok" style="margin-top:12px;"></div>
  </div></div>
</div>

<!-- ══ RIDER CANCEL FLOW ══════════════════════════════ -->

<div class="screen" id="s-cancel">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:14px;">
    <button class="back" onclick="go('confirmed')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Cancel your ride</div>
    <h2 style="font-size:24px;font-weight:800;color:var(--text);margin-bottom:6px;">Are you sure?</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:20px;line-height:1.6;">Kwame A. is already on his way. Cancelling now may affect your reliability score.</p>

    <!-- Pass deduction warning -->
    <div id="cancel-warning" style="background:var(--orange-bg);border:1px solid var(--orange);border-radius:14px;padding:14px 16px;margin-bottom:18px;">
      <div style="font-size:13px;font-weight:700;color:var(--amber);margin-bottom:4px;">⚠️ This ride will be deducted from your pass</div>
      <div style="font-size:12px;color:var(--muted);line-height:1.55;">Cancellations within 5 minutes of driver arrival use one ride from your pass. Earlier cancellations are protected.</div>
    </div>

    <!-- Reason selector -->
    <div class="section-hd" style="margin-top:0;">Why are you cancelling?</div>
    <div id="cancel-reasons" style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">
      <div class="cancel-reason-btn" onclick="selectCancelReason(this,'Plans changed')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);">Plans changed</div>
      <div class="cancel-reason-btn" onclick="selectCancelReason(this,'Driver is taking too long')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);">Driver is taking too long</div>
      <div class="cancel-reason-btn" onclick="selectCancelReason(this,'Found another way to commute')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);">Found another way to commute</div>
      <div class="cancel-reason-btn" onclick="selectCancelReason(this,'Driver details do not match')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);">Driver details don't match</div>
      <div class="cancel-reason-btn" onclick="selectCancelReason(this,'Personal emergency')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);">Personal emergency</div>
    </div>

    <!-- Reliability notice -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;margin-bottom:20px;">
      <div class="overline" style="margin-bottom:8px;">Your cancellation record</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <div class="strike-pip"></div>
        <div class="strike-pip"></div>
        <div class="strike-pip"></div>
        <span style="font-size:11px;color:var(--muted);margin-left:4px;">0 / 3 rider cancellations this month</span>
      </div>
      <p style="font-size:12px;color:var(--muted);">3 cancellations in a month may affect your matching priority.</p>
    </div>

    <button id="confirm-cancel-btn" class="btn" style="background:#C0140A;color:#fff;opacity:.4;margin-bottom:10px;" onclick="confirmRiderCancel()">Confirm cancellation</button>
    <button class="btn btn-ghost" onclick="go('confirmed')">Keep my ride →</button>
    <div id="cancel-toast" class="toast toast-ok" style="margin-top:12px;"></div>
  </div></div>
</div>

<!-- ══ DRIVER CANCELLED (shown when driver cancels on rider) ═ -->

<div class="screen" id="s-driver-cancelled">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <div style="width:64px;height:64px;border-radius:50%;background:var(--orange-bg);border:2px solid var(--orange);display:flex;align-items:center;justify-content:center;margin-bottom:18px;">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2.2" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    </div>
    <div class="overline" style="margin-bottom:6px;">Trip alert</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:8px;">Driver cancelled</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;line-height:1.6;">Kwame A. cancelled your 6:45 AM trip. We're finding you a replacement now.</p>
    <div style="background:var(--orange-bg);border:1px solid var(--orange);border-radius:14px;padding:16px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:700;color:var(--amber);margin-bottom:8px;">🔍 Searching for a replacement driver…</div>
      <div class="track"><div class="fill" style="width:65%;background:var(--orange);"></div></div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px;">If no match found in 3 minutes, a Nframa driver will be dispatched automatically.</p>
    </div>
    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:18px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.2" stroke-linecap="round" style="flex-shrink:0;"><path d="M20 6L9 17l-5-5"/></svg>
      <span style="font-size:13px;color:var(--green-light);font-weight:600;">Your pass ride is protected — no deduction for driver cancellations</span>
    </div>
    <div class="card">
      <div class="overline" style="margin-bottom:10px;">Driver reliability record</div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:12px;line-height:1.55;">Kwame A. has cancelled 2 times in 30 days. After 3 cancellations they will be reviewed by Nframa.</p>
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="strike-pip hit"></div><div class="strike-pip hit"></div><div class="strike-pip"></div>
        <span style="font-size:11px;color:var(--muted);margin-left:6px;">2 / 3 strikes</span>
      </div>
    </div>
    <div class="card">
      <div class="overline" style="margin-bottom:12px;">Your options</div>
      <button class="btn btn-primary" onclick="go('matches')" style="margin-bottom:8px;">Find another driver now</button>
      <button class="btn btn-ghost" onclick="goNav('home','home')">Reschedule to tomorrow</button>
    </div>
  </div></div>
</div>

<!-- ══ CORP LINK (rider onboarding → company code) ════ -->

<div class="screen" id="s-corp-link">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('plans-ob')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Corporate plan</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Link to your employer</h2>
    <p style="font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:28px;">Your HR team will have a company code for Nframa for Teams. Enter it below and your pass will be covered by your employer.</p>
    <!-- Illustration -->
    <div style="background:var(--purple-bg);border-radius:16px;padding:20px;text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;margin-bottom:10px;">🏢</div>
      <div style="font-size:14px;font-weight:700;color:var(--purple-light);margin-bottom:4px;">How it works</div>
      <div style="font-size:13px;color:var(--muted);line-height:1.6;">Your HR admin creates your organisation on Nframa for Teams. They share a company code with all employees. Enter it here to link your pass to your company's billing.</div>
    </div>
    <div class="ob-label">Your company code</div>
    <input class="ob-input" type="text" id="corp-code-input" placeholder="e.g. GHL-2025" style="text-transform:uppercase;letter-spacing:.08em;font-size:20px;font-weight:700;text-align:center;" oninput="validateCorpCode(this)"/>
    <div id="corp-code-result" style="display:none;border-radius:10px;padding:12px 14px;margin-bottom:16px;display:flex;align-items:center;gap:10px;"></div>
    <button class="btn btn-purple" id="corp-link-btn" style="opacity:.3;margin-bottom:16px;" onclick="submitCorpCode()">Link to my company</button>
    <p style="text-align:center;font-size:13px;color:var(--muted);">Don't have a code? <span style="color:var(--primary);font-weight:700;cursor:pointer;" onclick="showToastGlobal('Share this page with your HR team to get set up on Nframa for Teams')">Ask your HR team →</span></p>
    <div id="g-toast-corp" class="toast toast-ok" style="margin-top:14px;"></div>
  </div></div>
</div>

<!-- ══ HR ONBOARDING ═══════════════════════════════════ -->

<div class="screen" id="s-setup-hr">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('role')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 4 of 4 · Organisation setup</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Set up your company</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">This creates your Nframa for Teams account. Employees link their passes using your company code.</p>
    <div class="ob-label">Organisation name</div>
    <input class="ob-input" type="text" value="Ghana Home Loans Ltd"/>
    <div class="ob-label">Industry</div>
    <select class="ob-select">
      <option selected>Financial services</option><option>Healthcare</option><option>Technology</option><option>Education</option><option>Government / NGO</option><option>Other</option>
    </select>
    <div class="ob-label">Your name (HR contact)</div>
    <input class="ob-input" type="text" value="Akosua Mensah"/>
    <div class="ob-label">Work email</div>
    <input class="ob-input" type="email" value="akosua@ghl.com.gh"/>
    <div class="ob-label">Number of employees to enroll</div>
    <select class="ob-select">
      <option>1–10</option><option>11–25</option><option selected>26–50</option><option>51–100</option><option>100+</option>
    </select>
    <div class="ob-label">Billing preference</div>
    <select class="ob-select">
      <option selected>Monthly invoice (bank transfer)</option><option>Monthly invoice (MoMo)</option><option>Prepaid credits</option>
    </select>
    <!-- Estimated cost -->
    <div style="background:var(--purple-bg);border:0.5px solid var(--border2);border-radius:12px;padding:14px;margin-bottom:20px;">
      <div style="font-size:12px;color:var(--purple-light);font-weight:700;margin-bottom:4px;">Estimated monthly cost</div>
      <div style="font-size:22px;font-weight:800;color:var(--text);">₵3,360 <span style="font-size:14px;color:var(--muted);font-weight:400;">/ month</span></div>
      <div style="font-size:12px;color:var(--muted);margin-top:2px;">Based on 24 employees on monthly plans · Pricing from ₵120 per employee</div>
    </div>
    <button class="btn btn-purple" onclick="go('hr-dashboard')">Create organisation →</button>
  </div></div>
</div>

<!-- ══ HR CORPORATE DASHBOARD ══════════════════════════ -->

<div class="screen" id="s-hr-dashboard">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll">

    <!-- OVERVIEW panel -->
    <div id="hr-overview" class="hr-panel on"><div class="page" style="padding-top:12px;">
      <!-- Org header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <div><div class="overline" style="margin-bottom:3px;">Nframa for Teams</div><h2 style="font-size:22px;font-weight:800;color:var(--text);">Ghana Home Loans</h2></div>
        <div style="width:44px;height:44px;border-radius:12px;background:var(--purple-bg);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:var(--purple-light);">GH</div>
      </div>
      <!-- KPI row -->
      <div class="corp-stat-grid">
        <div class="corp-stat"><div class="corp-stat-val" style="color:var(--primary);">24</div><div class="corp-stat-lbl">Active passes</div></div>
        <div class="corp-stat"><div class="corp-stat-val">18</div><div class="corp-stat-lbl">Used this month</div></div>
        <div class="corp-stat"><div class="corp-stat-val" style="color:var(--green-light);">75%</div><div class="corp-stat-lbl">Utilisation</div></div>
      </div>
      <!-- Spend card -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div><div style="font-size:15px;font-weight:700;color:var(--text);">Monthly spend</div><div style="font-size:12px;color:var(--muted);">April 2025</div></div>
          <div style="text-align:right;"><div style="font-size:22px;font-weight:800;color:var(--text);">₵3,360</div><div style="font-size:11px;color:var(--green-light);">−₵280 vs March</div></div>
        </div>
        <div style="background:var(--card2);border-radius:100px;height:8px;margin-bottom:6px;"><div style="width:75%;height:8px;border-radius:100px;background:var(--purple);"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--hint);"><span>18 of 24 passes used</span><span>Renews 1 May</span></div>
      </div>
      <!-- ESG widget -->
      <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:14px;padding:14px 16px;margin-bottom:14px;display:flex;align-items:center;gap:14px;">
        <span style="font-size:28px;">🌿</span>
        <div><div style="font-size:14px;font-weight:700;color:var(--green-light);">264 kg CO₂ saved this month</div><div style="font-size:12px;color:var(--muted);">Team shared 396 trips · ESG report ready to download</div></div>
      </div>
      <!-- Quick actions -->
      <div style="display:flex;gap:8px;margin-bottom:10px;">
        <button onclick="hrTab('employees');hrNavSel('employees')" style="flex:1;padding:13px;background:var(--purple);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">+ Add employee</button>
        <button onclick="showHRToast('Invoice PDF downloaded for April 2025')" style="flex:1;padding:13px;background:var(--card);border:0.5px solid var(--border2);color:var(--text);border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Download invoice</button>
      </div>
      <button onclick="showHRToast('ESG sustainability report exported')" style="width:100%;padding:13px;background:var(--green-bg);border:0.5px solid var(--green);color:var(--green-light);border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;margin-bottom:4px;">Export ESG / CO₂ report</button>
      <!-- Company code share -->
      <div class="section-hd">Your company code</div>
      <div style="background:var(--purple-bg);border:1.5px dashed var(--purple-light);border-radius:14px;padding:16px;text-align:center;margin-bottom:4px;">
        <div style="font-size:11px;color:var(--purple-light);margin-bottom:6px;letter-spacing:.06em;text-transform:uppercase;">Share with employees to link their passes</div>
        <div style="font-size:28px;font-weight:900;color:var(--text);letter-spacing:.12em;margin-bottom:10px;">GHL-2025</div>
        <button onclick="showHRToast('Company code copied to clipboard')" style="background:var(--purple);color:#fff;border:none;border-radius:10px;padding:9px 24px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Copy code</button>
      </div>
      <div id="hr-toast" class="toast toast-ok" style="margin-top:10px;"></div>
    </div></div>

    <!-- EMPLOYEES panel -->
    <div id="hr-employees" class="hr-panel"><div class="page" style="padding-top:14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3 style="font-size:18px;font-weight:800;color:var(--text);">Employee passes</h3>
        <button onclick="showHRToast('Invite SMS sent to new employee')" style="background:var(--purple);color:#fff;border:none;border-radius:10px;padding:9px 16px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">+ Add</button>
      </div>
      <!-- Search -->
      <input style="width:100%;background:var(--card);border:0.5px solid var(--border2);border-radius:10px;padding:11px 14px;font-size:14px;color:var(--text);font-family:inherit;outline:none;margin-bottom:14px;" placeholder="Search employees…"/>
      <!-- Employee list -->
      <div class="corp-emp-row">
        <div class="corp-av" style="background:var(--primary-bg);color:var(--primary-light);">AO</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Ama Owusu</div><div style="font-size:11px;color:var(--muted);">Monthly · Tema → CBD · 14 rides left</div></div>
        <span class="badge b-green">Active</span>
      </div>
      <div class="corp-emp-row">
        <div class="corp-av" style="background:var(--purple-bg);color:var(--purple-light);">KF</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Kofi Frempong</div><div style="font-size:11px;color:var(--muted);">Monthly · Legon → CBD · 9 rides left</div></div>
        <span class="badge b-green">Active</span>
      </div>
      <div class="corp-emp-row">
        <div class="corp-av" style="background:var(--orange-bg);color:var(--amber);">MB</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Maame Boateng</div><div style="font-size:11px;color:var(--muted);">Monthly · Spintex → CBD · 0 rides left</div></div>
        <span class="badge b-amber">Renew</span>
      </div>
      <div class="corp-emp-row">
        <div class="corp-av" style="background:var(--green-bg);color:var(--green-light);">YD</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Yaw Darko</div><div style="font-size:11px;color:var(--muted);">Weekly · Spintex → CBD · 2 rides left</div></div>
        <span class="badge b-amber">Renew soon</span>
      </div>
      <div class="corp-emp-row">
        <div class="corp-av" style="background:var(--card2);color:var(--hint);">EO</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Efua Owusu</div><div style="font-size:11px;color:var(--muted);">Not yet activated · Invite pending</div></div>
        <span class="badge b-purple">Pending</span>
      </div>
      <div style="text-align:center;padding:14px 0;">
        <button onclick="showHRToast('Full employee list exported to CSV')" style="background:none;border:none;color:var(--primary);font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Export all as CSV</button>
      </div>
      <div id="hr-toast-emp" class="toast toast-ok" style="margin-top:4px;"></div>
    </div></div>

    <!-- BILLING panel -->
    <div id="hr-billing" class="hr-panel"><div class="page" style="padding-top:14px;">
      <h3 style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:16px;">Billing &amp; invoices</h3>
      <!-- Current month -->
      <div class="card">
        <div class="overline" style="margin-bottom:10px;">April 2025 — current</div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">24 monthly passes</span><span style="font-size:14px;font-weight:600;color:var(--text);">₵3,360</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">VAT (15%)</span><span style="font-size:14px;font-weight:600;color:var(--text);">₵504</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;"><span style="font-size:14px;font-weight:700;color:var(--text);">Total due 1 May</span><span style="font-size:16px;font-weight:800;color:var(--primary);">₵3,864</span></div>
        <button onclick="showHRToast('Invoice PDF downloaded')" class="btn btn-ghost" style="margin-top:12px;font-size:14px;">Download April invoice PDF</button>
      </div>
      <!-- Past invoices -->
      <div class="section-hd">Past invoices</div>
      <div class="corp-emp-row" style="cursor:pointer;" onclick="showHRToast('March invoice downloaded')">
        <div style="width:38px;height:38px;border-radius:10px;background:var(--green-bg);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">March 2025</div><div style="font-size:11px;color:var(--muted);">₵3,640 · Paid 1 Apr</div></div>
        <span style="font-size:12px;color:var(--primary);font-weight:700;">Download</span>
      </div>
      <div class="corp-emp-row" style="cursor:pointer;" onclick="showHRToast('February invoice downloaded')">
        <div style="width:38px;height:38px;border-radius:10px;background:var(--green-bg);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">February 2025</div><div style="font-size:11px;color:var(--muted);">₵2,800 · Paid 1 Mar</div></div>
        <span style="font-size:12px;color:var(--primary);font-weight:700;">Download</span>
      </div>
      <div id="hr-toast-bill" class="toast toast-ok" style="margin-top:10px;"></div>
    </div></div>

    <!-- ESG panel -->
    <div id="hr-esg" class="hr-panel"><div class="page" style="padding-top:14px;">
      <h3 style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:16px;">Sustainability &amp; ESG</h3>
      <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:16px;padding:20px;text-align:center;margin-bottom:16px;">
        <div style="font-size:13px;color:var(--green-light);font-weight:600;margin-bottom:6px;">Your team saved this month</div>
        <div style="font-size:48px;font-weight:800;color:var(--green-light);">264 kg</div>
        <div style="font-size:16px;color:var(--green-light);">of CO₂</div>
        <div style="font-size:13px;color:var(--muted);margin-top:8px;">compared to employees commuting solo by car</div>
      </div>
      <div class="corp-stat-grid">
        <div class="corp-stat"><div class="corp-stat-val">29</div><div class="corp-stat-lbl">Trees equivalent</div></div>
        <div class="corp-stat"><div class="corp-stat-val">396</div><div class="corp-stat-lbl">Trips shared</div></div>
        <div class="corp-stat"><div class="corp-stat-val">9,504 km</div><div class="corp-stat-lbl">Carpooled</div></div>
      </div>
      <div class="card" style="margin-bottom:14px;">
        <div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:10px;">All-time impact</div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">CO₂ saved total</span><span style="font-size:14px;font-weight:600;color:var(--green-light);">842 kg</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Total trips shared</span><span style="font-size:14px;font-weight:600;color:var(--text);">1,248</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 0;"><span style="font-size:14px;color:var(--muted);">On Nframa since</span><span style="font-size:14px;font-weight:600;color:var(--text);">Jan 2025</span></div>
      </div>
      <button onclick="showHRToast('ESG report PDF exported — ready for board presentation')" class="btn btn-green" style="background:var(--green);color:#fff;margin-bottom:10px;">Download full ESG report PDF</button>
      <button onclick="showHRToast('ESG data shared to sustainability@ghl.com.gh')" class="btn btn-ghost" style="font-size:14px;">Email to sustainability team</button>
      <div id="hr-toast-esg" class="toast toast-ok" style="margin-top:12px;"></div>
    </div></div>

  </div><!-- .scroll -->

  <!-- HR bottom nav -->
  <nav class="hr-bnav show">
    <div class="bnav-items">
      <div class="hr-ni on" id="hr-ni-overview" onclick="hrTab('overview');hrNavSel('overview')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Overview</span></div>
      <div class="hr-ni" id="hr-ni-employees" onclick="hrTab('employees');hrNavSel('employees')"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg><span>Employees</span></div>
      <div class="hr-ni" id="hr-ni-billing" onclick="hrTab('billing');hrNavSel('billing')"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><span>Billing</span></div>
      <div class="hr-ni" id="hr-ni-esg" onclick="hrTab('esg');hrNavSel('esg')"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>ESG</span></div>
    </div>
  </nav>
</div><!-- s-hr-dashboard -->

<!-- ══ CORPORATE DASHBOARD (rider-facing, read-only) ══ -->

<div class="screen" id="s-corporate">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="goNav('home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Your employer</div>
    <h2 class="page-title" style="margin-bottom:18px;">Corporate pass</h2>
    <!-- Employer card - rider only sees this, not the full dashboard -->
    <div style="background:var(--purple-bg);border:0.5px solid var(--purple-light);border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;margin-bottom:18px;">
      <div style="width:52px;height:52px;border-radius:14px;background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:var(--purple-light);flex-shrink:0;">GH</div>
      <div style="flex:1;"><div style="font-size:16px;font-weight:800;color:var(--text);">Ghana Home Loans Ltd</div><div style="font-size:12px;color:var(--muted);">Your pass is employer-paid</div></div>
      <span class="badge b-purple">Linked</span>
    </div>
    <div class="card">
      <div class="overline" style="margin-bottom:12px;">Your employer-paid pass</div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Pass type</span><span style="font-size:14px;font-weight:600;color:var(--text);">Monthly · 22 rides</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Charged to</span><span style="font-size:14px;font-weight:600;color:var(--purple-light);">Ghana Home Loans Ltd</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Your cost</span><span style="font-size:14px;font-weight:700;color:var(--green-light);">₵0 — fully covered</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;"><span style="font-size:14px;color:var(--muted);">Renewal</span><span style="font-size:14px;font-weight:600;color:var(--text);">Auto · 1 May 2025</span></div>
    </div>
    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:12px;padding:12px 14px;margin-bottom:18px;">
      <div style="font-size:13px;font-weight:700;color:var(--green-light);margin-bottom:3px;">Questions about your pass?</div>
      <div style="font-size:12px;color:var(--muted);">Contact your HR team at <span style="color:var(--text);font-weight:600;"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="acc4deeccbc4c082cfc3c182cbc4">[email&#160;protected]</a></span> or speak to Akosua Mensah.</div>
    </div>
    <!-- HR dashboard CTA - only visible to riders -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:16px;text-align:center;">
      <div style="font-size:13px;color:var(--muted);margin-bottom:10px;">Are you in HR? Manage your organisation's passes in the full dashboard.</div>
      <button onclick="go('hr-dashboard')" style="background:var(--purple);color:#fff;border:none;border-radius:10px;padding:10px 24px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Open HR dashboard →</button>
    </div>
  </div></div>
</div>
<!-- ══ CAR OWNER CANCEL TRIP ══════════════════════════ -->

<div class="screen" id="s-co-cancel">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:14px;">
    <button class="back" onclick="go('co')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Cancel trip</div>
    <h2 style="font-size:24px;font-weight:800;color:var(--text);margin-bottom:6px;">Are you sure?</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:20px;line-height:1.6;">You have 2 riders depending on this trip. Cancelling will trigger a search for a replacement and affect your reliability score.</p>
    <!-- Riders affected -->
    <div class="card" style="margin-bottom:18px;">
      <div class="overline" style="margin-bottom:10px;">Riders affected</div>
      <div class="rr" style="margin-bottom:8px;"><div class="rr-av" style="background:var(--primary-bg);color:var(--primary-light);">EO</div><span class="rr-name">Efua Owusu</span><span style="font-size:11px;color:var(--muted);">Will be notified &amp; pass protected</span></div>
      <div class="rr"><div class="rr-av" style="background:var(--purple-bg);color:var(--purple-light);">YD</div><span class="rr-name">Yaw Darko</span><span style="font-size:11px;color:var(--muted);">Will be notified &amp; pass protected</span></div>
    </div>
    <!-- Reason selector -->
    <div class="section-hd" style="margin-top:0;">Reason for cancellation</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px;">
      <div onclick="selectCancelReason(this,'Vehicle breakdown')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);" class="cancel-reason-btn">Vehicle breakdown</div>
      <div onclick="selectCancelReason(this,'Medical emergency')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);" class="cancel-reason-btn">Medical emergency</div>
      <div onclick="selectCancelReason(this,'Fuel / car issue')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);" class="cancel-reason-btn">Fuel / car issue</div>
      <div onclick="selectCancelReason(this,'Personal emergency')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);" class="cancel-reason-btn">Personal emergency</div>
      <div onclick="selectCancelReason(this,'Safety concern with rider')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px 16px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text);" class="cancel-reason-btn">Safety concern with rider</div>
    </div>
    <!-- Strike warning -->
    <div class="card" style="margin-bottom:18px;">
      <div class="overline" style="margin-bottom:8px;">Your cancellation record</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <div class="strike-pip hit"></div><div class="strike-pip hit"></div><div class="strike-pip"></div>
        <span style="font-size:11px;color:var(--muted);margin-left:4px;">2 / 3 cancellations this month</span>
      </div>
      <p style="font-size:12px;color:var(--orange);">One more cancellation this month will trigger a review and may temporarily pause your account.</p>
    </div>
    <button id="co-cancel-confirm-btn" class="btn" style="background:#C0140A;color:#fff;opacity:.4;margin-bottom:10px;" onclick="confirmOwnerCancel()">Confirm cancellation</button>
    <button class="btn btn-ghost" onclick="go('co')">Keep my trip →</button>
    <div id="co-cancel-toast" class="toast toast-ok" style="margin-top:12px;"></div>
  </div></div>
</div>

<!-- ══ COMMUTE GROUP ════════════════════════════════════ -->

<div class="screen" id="s-group">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div style="padding:10px 18px 8px;background:var(--surface);border-bottom:0.5px solid var(--border);display:flex;align-items:center;gap:12px;flex-shrink:0;">
    <button class="back" onclick="goNav('home','home')" style="margin:0;"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div style="flex:1;">
      <div style="font-size:15px;font-weight:700;color:var(--text);">Tema → CBD commuters</div>
      <div style="font-size:11px;color:var(--muted);">7 members · 6:30–7:15 AM · Mon–Fri</div>
    </div>
    <div style="display:flex;margin-right:2px;">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--primary-bg);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--primary);margin-right:-8px;">AO</div>
      <div style="width:28px;height:28px;border-radius:50%;background:var(--purple-bg);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--purple-light);margin-right:-8px;">KA</div>
      <div style="width:28px;height:28px;border-radius:50%;background:var(--orange-bg);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--amber);margin-right:-8px;">EO</div>
      <div style="width:28px;height:28px;border-radius:50%;background:var(--card2);border:2px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:var(--hint);">+4</div>
    </div>
  </div>
  <!-- Quick update chips -->
  <div style="display:flex;gap:6px;padding:10px 18px;background:var(--surface);border-bottom:0.5px solid var(--border);overflow-x:auto;flex-shrink:0;">
    <button onclick="sendGroupQuick('🚧 Road issue on Tema bridge — add 10 min')" style="white-space:nowrap;padding:6px 12px;background:var(--orange-bg);border:0.5px solid var(--orange);border-radius:100px;font-size:11px;font-weight:700;color:var(--amber);font-family:inherit;cursor:pointer;">🚧 Road issue</button>
    <button onclick="sendGroupQuick('⏱ Running about 5 minutes late today')" style="white-space:nowrap;padding:6px 12px;background:var(--card2);border:0.5px solid var(--border2);border-radius:100px;font-size:11px;font-weight:700;color:var(--muted);font-family:inherit;cursor:pointer;">⏱ Running late</button>
    <button onclick="sendGroupQuick('💺 I have 1 extra seat available this morning')" style="white-space:nowrap;padding:6px 12px;background:var(--green-bg);border:0.5px solid var(--green);border-radius:100px;font-size:11px;font-weight:700;color:var(--green-light);font-family:inherit;cursor:pointer;">💺 Seat available</button>
    <button onclick="sendGroupQuick('✅ All clear today — roads looking good')" style="white-space:nowrap;padding:6px 12px;background:var(--card2);border:0.5px solid var(--border2);border-radius:100px;font-size:11px;font-weight:700;color:var(--muted);font-family:inherit;cursor:pointer;">✅ All clear</button>
  </div>
  <!-- Messages -->
  <div class="scroll"><div class="msg-wrap" id="group-msg-wrap">
    <div style="text-align:center;font-size:11px;color:var(--hint);margin-bottom:14px;padding:6px 14px;background:var(--card2);border-radius:100px;align-self:center;">Today · Tema → CBD corridor group</div>
    <!-- Driver update -->
    <div style="align-self:flex-start;margin-bottom:10px;max-width:88%;">
      <div style="font-size:10px;font-weight:700;color:var(--orange);margin-bottom:3px;">Kwame A. (your driver)</div>
      <div class="msg-bubble msg-in" style="margin-bottom:2px;">Slight delay tomorrow — road works at Tema bridge. Allow extra 10 min 🚧</div>
      <div style="font-size:10px;color:var(--hint);padding-left:4px;">6:42 PM · Yesterday</div>
    </div>
    <!-- Rider reply -->
    <div style="align-self:flex-start;margin-bottom:10px;max-width:88%;">
      <div style="font-size:10px;font-weight:700;color:var(--purple-light);margin-bottom:3px;">Efua O.</div>
      <div class="msg-bubble msg-in" style="margin-bottom:2px;">Thanks for the heads up! Will leave 15 min early 👍</div>
      <div style="font-size:10px;color:var(--hint);padding-left:4px;">6:58 PM · Yesterday</div>
    </div>
    <!-- Your message -->
    <div style="align-self:flex-end;margin-bottom:10px;max-width:88%;">
      <div class="msg-bubble msg-out" style="margin-bottom:2px;">Same here. See you all tomorrow 🙏</div>
      <div style="font-size:10px;color:var(--hint);text-align:right;padding-right:4px;">7:03 PM · Yesterday</div>
    </div>
    <!-- Today -->
    <div style="align-self:flex-start;margin-bottom:10px;max-width:88%;">
      <div style="font-size:10px;font-weight:700;color:var(--green-light);margin-bottom:3px;">Yaw D.</div>
      <div class="msg-bubble msg-in" style="margin-bottom:2px;">Morning everyone! Road seems clear today 😊</div>
      <div style="font-size:10px;color:var(--hint);padding-left:4px;">6:12 AM · Today</div>
    </div>
  </div></div>
  <!-- Members bar -->
  <div style="padding:8px 18px;background:var(--surface);border-top:0.5px solid var(--border);display:flex;align-items:center;gap:10px;flex-shrink:0;">
    <div style="font-size:11px;color:var(--hint);flex:1;">7 commuters · same route · same time</div>
    <button onclick="showGroupToast('Member list shown')" style="background:none;border:none;color:var(--primary);font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;">View members</button>
  </div>
  <div id="group-toast" class="toast toast-ok" style="margin:0 18px 6px;display:none;"></div>
  <div class="chat-input-row">
    <input class="chat-input" id="group-msg-input" placeholder="Message the group…"/>
    <button class="chat-send" onclick="sendGroupMsg()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
  </div>
</div>

<!-- ══ OFFLINE / LOW DATA MODE ══════════════════════════ -->

<div class="screen" id="s-offline">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="goNav('home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">No internet? No problem.</div>
    <h2 class="page-title" style="margin-bottom:6px;">Offline access</h2>
    <p style="font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:20px;">Nframa works even without data. Your QR pass, saved routes, and matching status are all available offline. Use USSD to manage your availability without the app.</p>

    <!-- Offline pass -->
    <div class="section-hd" style="margin-top:0;">Your QR pass — always available offline</div>
    <div style="background:var(--card);border:1px solid var(--primary);border-radius:16px;padding:16px;text-align:center;margin-bottom:14px;">
      <div style="background:#fff;border-radius:10px;padding:10px;display:inline-block;margin-bottom:10px;">
        <svg width="80" height="80" viewBox="0 0 128 128" fill="none">
          <rect x="0" y="0" width="44" height="44" rx="4" fill="#D11C8A"/><rect x="8" y="8" width="28" height="28" rx="2" fill="white"/>
          <rect x="84" y="0" width="44" height="44" rx="4" fill="#6B2D8E"/><rect x="92" y="8" width="28" height="28" rx="2" fill="white"/>
          <rect x="0" y="84" width="44" height="44" rx="4" fill="#F7941D"/><rect x="8" y="92" width="28" height="28" rx="2" fill="white"/>
          <rect x="52" y="0" width="20" height="8" rx="1" fill="#D11C8A"/><rect x="52" y="12" width="12" height="8" rx="1" fill="#6B2D8E"/>
          <rect x="52" y="52" width="8" height="18" rx="1" fill="#6B2D8E"/><rect x="84" y="52" width="18" height="8" rx="1" fill="#D11C8A"/>
        </svg>
      </div>
      <div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:2px;">NFR-2025-04871</div>
      <div style="font-size:12px;color:var(--green-light);font-weight:600;">✓ Cached · Works without internet</div>
    </div>

    <!-- Saved routes cache -->
    <div class="section-hd">Saved routes — last synced 6:30 AM</div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:13px;color:var(--text);font-weight:600;">Tema → Accra CBD</span><span class="badge b-green">Cached</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:13px;color:var(--text);font-weight:600;">Spintex → Airport</span><span class="badge b-green">Cached</span></div>
      <div style="display:flex;justify-content:space-between;padding:9px 0;"><span style="font-size:13px;color:var(--text);font-weight:600;">Legon → Accra Mall</span><span class="badge b-green">Cached</span></div>
    </div>

    <!-- Matching status cache -->
    <div class="section-hd">Your matching status — cached</div>
    <div class="card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="width:8px;height:8px;border-radius:50%;background:var(--green-light);flex-shrink:0;"></div>
        <span style="font-size:13px;font-weight:700;color:var(--green-light);">Pre-matched · Kwame A. confirmed</span>
      </div>
      <div style="font-size:12px;color:var(--muted);line-height:1.6;">Tomorrow 6:45 AM · Toyota Corolla · GR-2847-20<br>Matched last night at 10:14 PM — no internet needed to view this.</div>
    </div>

    <!-- USSD section -->
    <div class="section-hd">USSD shortcuts — no data required</div>
    <div class="card">
      <div style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.6;">Dial these codes from any network, any phone — no internet or app needed.</div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:0.5px solid var(--border);">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">Log availability today</div><div style="font-size:11px;color:var(--muted);">(Rider) Confirm you need a ride</div></div>
        <div style="background:var(--card2);border-radius:8px;padding:6px 12px;font-size:14px;font-weight:800;color:var(--primary);font-family:monospace;">*714*1#</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:0.5px solid var(--border);">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">Cancel today's ride</div><div style="font-size:11px;color:var(--muted);">(Rider) Cancel without data</div></div>
        <div style="background:var(--card2);border-radius:8px;padding:6px 12px;font-size:14px;font-weight:800;color:var(--primary);font-family:monospace;">*714*2#</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:0.5px solid var(--border);">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">Log car availability</div><div style="font-size:11px;color:var(--muted);">(Car owner) Go available today</div></div>
        <div style="background:var(--card2);border-radius:8px;padding:6px 12px;font-size:14px;font-weight:800;color:var(--primary);font-family:monospace;">*714*3#</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">Check my match status</div><div style="font-size:11px;color:var(--muted);">SMS reply with driver details</div></div>
        <div style="background:var(--card2);border-radius:8px;padding:6px 12px;font-size:14px;font-weight:800;color:var(--primary);font-family:monospace;">*714*4#</div>
      </div>
    </div>

    <!-- Data-lite mode toggle -->
    <div class="section-hd">Data-lite mode</div>
    <div class="avail-card">
      <div class="toggle-row">
        <div>
          <div style="font-size:14px;font-weight:700;color:var(--text);">Enable data-lite mode</div>
          <div style="font-size:12px;color:var(--muted);margin-top:3px;">Strips images and animations. Reduces data use by ~85%.</div>
        </div>
        <div class="toggle-wrap off" id="datalite-toggle" onclick="this.classList.toggle('off');showOfflineToast('Data-lite mode updated')"><div class="toggle-knob"></div></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--hint);">
        <span>Last sync: 6:30 AM today</span>
        <button onclick="showOfflineToast('Routes and status synced')" style="background:none;border:none;color:var(--primary);font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;">Sync now</button>
      </div>
    </div>
    <div id="offline-toast" class="toast toast-ok" style="margin-top:4px;"></div>
  </div></div>
</div>

<!-- ══ RIDER REFERRAL ═══════════════════════════════════ -->

<div class="screen" id="s-rider-referral">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="goNav('home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Refer &amp; earn</div>
    <h2 class="page-title" style="margin-bottom:6px;">Invite riders</h2>
    <p style="font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:20px;">Share Nframa with friends and colleagues on your commute corridor. You both benefit — and you earn credit towards free rides.</p>

    <!-- Your code -->
    <div class="ref-code-box">
      <div style="font-size:12px;color:var(--primary-light);font-weight:600;margin-bottom:4px;">Your rider referral code</div>
      <div class="ref-code-val">AMA2025</div>
      <div style="font-size:12px;color:var(--muted);">nframa.app/join?ref=AMA2025</div>
    </div>

    <!-- Share buttons -->
    <div class="ref-share-grid">
      <button class="ref-share-btn" onclick="refAction('WhatsApp','rider')">
        <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        WhatsApp
      </button>
      <button class="ref-share-btn" onclick="refAction('SMS','rider')">
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        Send SMS
      </button>
      <button class="ref-share-btn" onclick="refAction('Copy link','rider')">
        <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        Copy link
      </button>
      <button class="ref-share-btn" onclick="refAction('Email','rider')">
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </button>
    </div>
    <div id="ref-rider-toast" class="toast toast-ok" style="margin-bottom:16px;"></div>

    <!-- Reward tiers -->
    <div class="section-hd" style="margin-top:0;">How it works</div>
    <div class="ref-tier">
      <div class="ref-tier-badge" style="background:var(--primary-bg);">🎫</div>
      <div class="ref-tier-info">
        <h5>Friend subscribes to any plan</h5>
        <p>You both get 1 free ride credited immediately</p>
      </div>
      <div class="ref-tier-reward">+1 ride</div>
    </div>
    <div class="ref-tier">
      <div class="ref-tier-badge" style="background:var(--orange-bg);">🔄</div>
      <div class="ref-tier-info">
        <h5>Friend renews their monthly pass</h5>
        <p>You earn ₵8 credit each time they renew</p>
      </div>
      <div class="ref-tier-reward">+₵8/month</div>
    </div>
    <div class="ref-tier">
      <div class="ref-tier-badge" style="background:var(--purple-bg);">👥</div>
      <div class="ref-tier-info">
        <h5>Refer 5+ riders (Power Referrer)</h5>
        <p>Unlock a free monthly pass every quarter</p>
      </div>
      <div class="ref-tier-reward">Free pass</div>
    </div>
    <div class="ref-tier" style="margin-bottom:20px;">
      <div class="ref-tier-badge" style="background:var(--green-bg);">🏢</div>
      <div class="ref-tier-info">
        <h5>Refer a corporate account</h5>
        <p>Earn ₵50 when your employer signs up for Nframa for Teams</p>
      </div>
      <div class="ref-tier-reward">+₵50</div>
    </div>

    <!-- Your stats -->
    <div class="section-hd">Your referrals</div>
    <div class="ref-stat-row">
      <div class="ref-stat-box"><div class="ref-stat-val" style="color:var(--primary);">3</div><div class="ref-stat-lbl">Friends referred</div></div>
      <div class="ref-stat-box"><div class="ref-stat-val" style="color:var(--green-light);">2</div><div class="ref-stat-lbl">Active subscribers</div></div>
      <div class="ref-stat-box"><div class="ref-stat-val" style="color:var(--orange);">₵24</div><div class="ref-stat-lbl">Total earned</div></div>
    </div>

    <!-- Progress to Power Referrer -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:14px 16px;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:700;color:var(--text);">Power Referrer progress</span>
        <span style="font-size:12px;color:var(--muted);">3 / 5 riders</span>
      </div>
      <div class="proj-bar-wrap"><div class="proj-bar" style="width:60%;background:var(--primary);"></div></div>
      <p style="font-size:12px;color:var(--muted);margin-top:6px;">Refer 2 more riders to unlock a free monthly pass every quarter 🎉</p>
    </div>

    <!-- Activity feed -->
    <div class="section-hd">Activity</div>
    <div class="card">
      <div class="activity-row">
        <div class="activity-av" style="background:var(--green-bg);color:var(--green-light);">KO</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Kofi subscribed (Weekly)</div><div style="font-size:11px;color:var(--muted);">Mon 24 Mar · 1 free ride credited to you</div></div>
        <span style="font-size:13px;font-weight:700;color:var(--green-light);">+1 ride</span>
      </div>
      <div class="activity-row">
        <div class="activity-av" style="background:var(--primary-bg);color:var(--primary-light);">AB</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Abena subscribed (Monthly)</div><div style="font-size:11px;color:var(--muted);">Fri 21 Mar · 1 free ride credited to you</div></div>
        <span style="font-size:13px;font-weight:700;color:var(--green-light);">+1 ride</span>
      </div>
      <div class="activity-row">
        <div class="activity-av" style="background:var(--primary-bg);color:var(--primary-light);">AB</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Abena renewed (Monthly)</div><div style="font-size:11px;color:var(--muted);">Tue 1 Apr · Renewal bonus</div></div>
        <span style="font-size:13px;font-weight:700;color:var(--green-light);">+₵8</span>
      </div>
      <div class="activity-row" style="opacity:.5;">
        <div class="activity-av" style="background:var(--card2);color:var(--hint);">YA</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Yaa — link opened, not yet subscribed</div><div style="font-size:11px;color:var(--muted);">Today · Pending</div></div>
        <span style="font-size:12px;color:var(--hint);">Pending</span>
      </div>
    </div>

    <!-- Earnings projection -->
    <div class="section-hd">Earnings projection</div>
    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:14px;padding:16px;margin-bottom:8px;">
      <div style="font-size:13px;color:var(--green-light);font-weight:700;margin-bottom:12px;">If you refer 5 monthly riders</div>
      <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid rgba(93,202,165,.2);"><span style="font-size:13px;color:var(--muted);">Month 1 (sign-up bonuses)</span><span style="font-size:13px;font-weight:700;color:var(--green-light);">5 free rides + ₵0</span></div>
      <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid rgba(93,202,165,.2);"><span style="font-size:13px;color:var(--muted);">Month 2 onwards (renewals)</span><span style="font-size:13px;font-weight:700;color:var(--green-light);">₵40/month</span></div>
      <div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:13px;color:var(--muted);">Power Referrer bonus (quarterly)</span><span style="font-size:13px;font-weight:700;color:var(--green-light);">₵140 pass value</span></div>
      <div style="margin-top:12px;padding-top:10px;border-top:0.5px solid rgba(93,202,165,.25);display:flex;justify-content:space-between;">
        <span style="font-size:14px;font-weight:700;color:var(--green-light);">Year 1 total value</span>
        <span style="font-size:16px;font-weight:800;color:var(--green-light);">~₵1,040</span>
      </div>
    </div>
    <p style="font-size:11px;color:var(--hint);margin-bottom:24px;">Projection assumes 5 monthly subscribers who each renew for 12 months.</p>
  </div></div>
</div>

<!-- ══ CAR OWNER REFERRAL ════════════════════════════════ -->

<div class="screen" id="s-co-referral">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="coTab('earn');coNavSel('earn');go('co')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Supply acquisition</div>
    <h2 class="page-title" style="margin-bottom:6px;">Refer a car owner</h2>
    <p style="font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:20px;">Know someone with a car on your corridor? Refer them to Nframa and earn ₵20 when they complete their first 5 trips. Show them the earning potential — it sells itself.</p>

    <!-- Your code -->
    <div class="ref-code-box" style="background:var(--orange-bg);border-color:var(--orange);">
      <div style="font-size:12px;color:var(--amber);font-weight:600;margin-bottom:4px;">Your car owner referral code</div>
      <div class="ref-code-val" style="color:var(--orange);letter-spacing:.14em;">KA-DRIVE</div>
      <div style="font-size:12px;color:var(--muted);">nframa.app/drive?ref=KA-DRIVE</div>
    </div>

    <!-- Share buttons -->
    <div class="ref-share-grid">
      <button class="ref-share-btn" onclick="refAction('WhatsApp','owner')">
        <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        WhatsApp
      </button>
      <button class="ref-share-btn" onclick="refAction('SMS','owner')">
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        Send SMS
      </button>
      <button class="ref-share-btn" onclick="refAction('Copy link','owner')">
        <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        Copy link
      </button>
      <button class="ref-share-btn" onclick="refAction('Share earnings card','owner')" style="grid-column:1/-1;background:var(--orange-bg);border-color:var(--orange);color:var(--amber);">
        <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Share earnings projection card
      </button>
    </div>
    <div id="ref-owner-toast" class="toast toast-ok" style="margin-bottom:16px;"></div>

    <!-- Earning projection for the referred driver - the pitch card -->
    <div class="section-hd" style="margin-top:0;">Earning projection to share</div>
    <div style="background:var(--orange-bg);border:1.5px solid var(--orange);border-radius:16px;padding:18px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="font-size:24px;">🚗</span>
        <div><div style="font-size:15px;font-weight:800;color:var(--amber);">Tema → CBD corridor</div><div style="font-size:12px;color:var(--muted);">High demand · Mon–Fri · 6:00–8:00 AM</div></div>
      </div>
      <!-- Interactive slider concept - shown as stepped options -->
      <div class="section-hd" style="margin-top:0;margin-bottom:10px;color:var(--amber);">Trips per week</div>
      <div style="display:flex;gap:8px;margin-bottom:16px;" id="proj-trips">
        <button onclick="selectProjTrips(this,10,'₵140','₵560','₵6,720')" style="flex:1;padding:9px;border-radius:10px;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;background:var(--orange);color:#fff;border:none;">10 trips</button>
        <button onclick="selectProjTrips(this,15,'₵210','₵840','₵10,080')" style="flex:1;padding:9px;border-radius:10px;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;background:var(--card2);color:var(--muted);border:0.5px solid var(--border2);">15 trips</button>
        <button onclick="selectProjTrips(this,20,'₵280','₵1,120','₵13,440')" style="flex:1;padding:9px;border-radius:10px;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;background:var(--card2);color:var(--muted);border:0.5px solid var(--border2);">20 trips</button>
      </div>
      <!-- Earnings display - updates via JS -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px;">
        <div style="background:rgba(0,0,0,.2);border-radius:10px;padding:12px 8px;text-align:center;">
          <div id="proj-weekly" style="font-size:18px;font-weight:800;color:var(--amber);">₵140</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px;">Per week</div>
        </div>
        <div style="background:rgba(0,0,0,.2);border-radius:10px;padding:12px 8px;text-align:center;">
          <div id="proj-monthly" style="font-size:18px;font-weight:800;color:var(--amber);">₵560</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px;">Per month</div>
        </div>
        <div style="background:rgba(0,0,0,.2);border-radius:10px;padding:12px 8px;text-align:center;">
          <div id="proj-annual" style="font-size:18px;font-weight:800;color:var(--amber);">₵6,720</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px;">Per year</div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--muted);line-height:1.55;">Based on avg ₵14/trip after Nframa's 10% commission. Actual earnings vary by corridor, passenger count, and availability. Fuel costs not deducted.</div>
    </div>

    <!-- Supply gap corridors -->
    <div class="section-hd">Corridors needing drivers urgently</div>
    <div class="card" style="margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:0.5px solid var(--border);">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">Legon → Accra Mall</div><div style="font-size:11px;color:var(--muted);">7:00–9:00 AM · Mon–Sat</div></div>
        <span class="badge b-amber">SUPPLY GAP</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:0.5px solid var(--border);">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">Spintex → Airport</div><div style="font-size:11px;color:var(--muted);">6:30–8:30 AM · Mon–Fri</div></div>
        <span class="badge b-purple">GROWING</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;">
        <div><div style="font-size:13px;font-weight:700;color:var(--text);">East Legon → CBD</div><div style="font-size:11px;color:var(--muted);">6:45–8:15 AM · Mon–Fri</div></div>
        <span class="badge b-purple">GROWING</span>
      </div>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:20px;">Drivers on gap corridors are pre-assigned riders faster and earn a 5% gap-fill bonus per trip.</p>

    <!-- Reward tiers for referring -->
    <div class="section-hd">Your referral rewards</div>
    <div class="ref-tier">
      <div class="ref-tier-badge" style="background:var(--green-bg);">✅</div>
      <div class="ref-tier-info">
        <h5>Referred driver completes 5 trips</h5>
        <p>You earn ₵20 cash — credited to your Nframa wallet</p>
      </div>
      <div class="ref-tier-reward">+₵20</div>
    </div>
    <div class="ref-tier">
      <div class="ref-tier-badge" style="background:var(--orange-bg);">🚗</div>
      <div class="ref-tier-info">
        <h5>Referred driver active for 3 months</h5>
        <p>Loyalty bonus — one extra ₵15 credited</p>
      </div>
      <div class="ref-tier-reward">+₵15</div>
    </div>
    <div class="ref-tier" style="margin-bottom:20px;">
      <div class="ref-tier-badge" style="background:var(--purple-bg);">👑</div>
      <div class="ref-tier-info">
        <h5>Refer 3+ active drivers</h5>
        <p>Corridor Champion badge — priority matching &amp; featured in app</p>
      </div>
      <div class="ref-tier-reward">Badge</div>
    </div>

    <!-- Your stats -->
    <div class="section-hd">Your referral stats</div>
    <div class="ref-stat-row">
      <div class="ref-stat-box"><div class="ref-stat-val" style="color:var(--orange);">1</div><div class="ref-stat-lbl">Drivers referred</div></div>
      <div class="ref-stat-box"><div class="ref-stat-val" style="color:var(--green-light);">1</div><div class="ref-stat-lbl">Now active</div></div>
      <div class="ref-stat-box"><div class="ref-stat-val" style="color:var(--amber);">₵20</div><div class="ref-stat-lbl">Earned</div></div>
    </div>

    <!-- Activity -->
    <div class="section-hd">Activity</div>
    <div class="card">
      <div class="activity-row">
        <div class="activity-av" style="background:var(--green-bg);color:var(--green-light);">KM</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Kofi M. — completed 5 trips</div><div style="font-size:11px;color:var(--muted);">Wed 26 Mar · Reward unlocked</div></div>
        <span style="font-size:13px;font-weight:700;color:var(--green-light);">+₵20</span>
      </div>
      <div class="activity-row" style="opacity:.6;">
        <div class="activity-av" style="background:var(--orange-bg);color:var(--amber);">AS</div>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Ama S. — link clicked, not yet verified</div><div style="font-size:11px;color:var(--muted);">Today · Documents under review</div></div>
        <span style="font-size:12px;color:var(--hint);">Pending</span>
      </div>
    </div>

    <!-- Projection: what if you refer 3 drivers -->
    <div class="section-hd">What if you refer 3 active drivers?</div>
    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:14px;padding:16px;margin-bottom:6px;">
      <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid rgba(93,202,165,.2);"><span style="font-size:13px;color:var(--muted);">Immediate referral bonuses</span><span style="font-size:13px;font-weight:700;color:var(--green-light);">₵60</span></div>
      <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid rgba(93,202,165,.2);"><span style="font-size:13px;color:var(--muted);">3-month loyalty bonuses</span><span style="font-size:13px;font-weight:700;color:var(--green-light);">₵45</span></div>
      <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid rgba(93,202,165,.2);"><span style="font-size:13px;color:var(--muted);">Corridor Champion badge</span><span style="font-size:13px;font-weight:700;color:var(--purple-light);">Priority matching</span></div>
      <div style="display:flex;justify-content:space-between;padding:7px 0;"><span style="font-size:14px;font-weight:700;color:var(--green-light);">Total cash earned</span><span style="font-size:16px;font-weight:800;color:var(--green-light);">₵105</span></div>
    </div>
    <p style="font-size:11px;color:var(--hint);margin-bottom:24px;">Referral rewards are credited to your Nframa wallet and can be withdrawn at any time.</p>
  </div></div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<!-- GUARDIAN / PARENT SCREENS                              -->
<!-- ══════════════════════════════════════════════════════ -->

<!-- GD-1: SAFETY PITCH — shown before setup to build trust -->

<div class="screen" id="s-gd-pitch">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('role')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Why parents choose Nframa</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:8px;">Your child's safety is the product.</h2>
    <p style="font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:24px;">Not a nice-to-have. Not a feature. Every single thing Nframa does for school transport is built around one question: <em style="color:var(--text);">did your child get there safely?</em></p>

    <div class="usp-row"><div class="usp-icon" style="background:var(--green-bg);">📍</div><div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">You know every step of the journey</div><p style="font-size:13px;color:var(--muted);line-height:1.55;">SMS alerts when your child boards, when the vehicle reaches school, and when safe arrival is confirmed. Works on any phone — no smartphone needed.</p></div></div>
    <div class="usp-row"><div class="usp-icon" style="background:var(--primary-bg);">🆔</div><div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">Named, photo QR card — not a generic ticket</div><p style="font-size:13px;color:var(--muted);line-height:1.55;">Your child carries a laminated card with their photo and name. The driver scans it at pickup. If the scan fails, the driver is instructed not to proceed and you're alerted immediately.</p></div></div>
    <div class="usp-row"><div class="usp-icon" style="background:var(--purple-bg);">🔒</div><div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">Pre-vetted, child-safe verified drivers only</div><p style="font-size:13px;color:var(--muted);line-height:1.55;">Ghana Police criminal background check, child safeguarding declaration, DVLA roadworthy certificate. The same driver, every morning — your child sees a familiar face.</p></div></div>
    <div class="usp-row"><div class="usp-icon" style="background:var(--orange-bg);">🚨</div><div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">Route deviation triggers instant parent alert</div><p style="font-size:13px;color:var(--muted);line-height:1.55;">If the vehicle goes off the school route, you get an SMS with the vehicle's location within 60 seconds. No app needed to receive this alert.</p></div></div>
    <div class="usp-row" style="margin-bottom:24px;"><div class="usp-icon" style="background:var(--green-bg);">💳</div><div><div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">One subscription. No cash. No guesswork.</div><p style="font-size:13px;color:var(--muted);line-height:1.55;">Pay monthly, weekly, or termly via MoMo. Your child never handles money. Auto-renewal means their pass never lapses mid-term unexpectedly.</p></div></div>

    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:14px;padding:14px 16px;margin-bottom:22px;">
      <div style="font-size:13px;font-weight:700;color:var(--green-light);margin-bottom:4px;">Used by 340+ parents on the Tema corridor</div>
      <div style="font-size:12px;color:var(--muted);line-height:1.6;">"I get an SMS before I've even sat down at my desk. I know Kofi is at school. That 45 minutes of worry every morning is just gone." — Adjoa M., Tema Comm. 5</div>
    </div>
    <button class="btn" style="background:var(--blue);color:#fff;" onclick="go('setup-guardian')">Set up my child's account →</button>
  </div></div>
</div>

<!-- GD-2: GUARDIAN ONBOARDING -->

<div class="screen" id="s-setup-guardian">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('gd-pitch')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="ob-step"><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div><div class="ob-dot on"></div></div>
    <div class="overline" style="margin-bottom:6px;">Step 4 of 4 · Guardian profile</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Your details</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">You manage your child's transport. They don't need an account or a phone.</p>

    <div class="ob-label">Your full name</div>
    <input class="ob-input" type="text" value="Adjoa Mensah"/>
    <div class="ob-label">Relationship to child</div>
    <select class="ob-select"><option selected>Mother</option><option>Father</option><option>Grandparent</option><option>Legal guardian</option><option>Other</option></select>
    <div class="ob-label">Home / pickup address</div>
    <input class="ob-input" type="text" value="Tema Community 5, near Valco Trust" placeholder="Street, area, landmark"/>
    <div class="ob-label">Second emergency contact name</div>
    <input class="ob-input" type="text" value="Kwame (husband)" placeholder="Name and relationship"/>
    <div class="ob-label">Second emergency contact phone</div>
    <input class="ob-input" type="tel" value="+233 24 456 7890" placeholder="+233 24 000 0000"/>
    <p style="font-size:12px;color:var(--hint);line-height:1.6;margin-bottom:22px;">Both you and your emergency contact will receive SMS alerts at every stage of your child's journey — no app required on their end.</p>
    <button class="btn" style="background:var(--blue);color:#fff;" onclick="go('child-profile')">Next — add my child →</button>
  </div></div>
</div>

<!-- GD-3: CHILD PROFILE SETUP -->

<div class="screen" id="s-child-profile">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('setup-guardian')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Child profile</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Your child's details</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">This goes on their physical QR pass card. The driver uses this to identify your child at pickup.</p>

    <!-- Photo upload -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:22px;">
      <div style="width:80px;height:80px;border-radius:50%;background:var(--card2);border:2px dashed var(--border2);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;" onclick="this.style.background='var(--blue)';this.innerHTML='<svg width=\\'30\\' height=\\'30\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'#fff\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\'><path d=\\'M20 6L9 17l-5-5\\'/></svg>'">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-linecap="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <span style="font-size:9px;color:var(--hint);margin-top:5px;text-align:center;">Add photo</span>
      </div>
      <div>
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;">Child's photo</div>
        <p style="font-size:12px;color:var(--muted);line-height:1.55;">Required for the physical QR pass card. A clear face photo on a plain background works best. Only used for driver identification.</p>
      </div>
    </div>

    <div class="ob-label">Child's first name</div>
    <input class="ob-input" type="text" value="Kofi" placeholder="First name only (privacy)"/>
    <div class="ob-label">Child's surname</div>
    <input class="ob-input" type="text" value="Mensah" placeholder="Surname"/>
    <div class="ob-label">Date of birth</div>
    <input class="ob-input" type="text" value="14 / 03 / 2016" placeholder="DD / MM / YYYY"/>
    <div class="ob-label">School name</div>
    <input class="ob-input" type="text" value="Tema Methodist JHS" placeholder="Full school name"/>
    <div class="ob-label">School area / location</div>
    <select class="ob-select"><option selected>Tema Community 1</option><option>Tema Community 5</option><option>Spintex Road</option><option>Lashibi</option><option>Other</option></select>
    <div class="ob-label">Year / grade</div>
    <select class="ob-select"><option>Primary 1</option><option>Primary 2</option><option>Primary 3</option><option>Primary 4</option><option>Primary 5</option><option>Primary 6</option><option selected>JHS 1</option><option>JHS 2</option><option>JHS 3</option></select>
    <div class="ob-label">Any medical conditions the driver should know about?</div>
    <input class="ob-input" type="text" placeholder="e.g. asthma, allergies (optional)" value="None"/>
    <button class="btn" style="background:var(--blue);color:#fff;" onclick="go('gd-schedule')">Next — set school run times →</button>
  </div></div>
</div>

<!-- GD-4: SCHOOL RUN SCHEDULING -->

<div class="screen" id="s-gd-schedule">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('child-profile')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">School run schedule</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">When does Kofi travel?</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">Set morning pickup and afternoon return separately. You can update these any time, including one-off changes.</p>

    <!-- Morning -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="font-size:20px;">🌅</span>
        <div style="font-size:15px;font-weight:700;color:var(--text);">Morning — home to school</div>
        <div style="margin-left:auto;" class="toggle-wrap" onclick="this.classList.toggle('off')"><div class="toggle-knob"></div></div>
      </div>
      <div class="ob-label" style="margin-bottom:6px;">Pickup time window</div>
      <div style="display:flex;gap:6px;margin-bottom:12px;">
        <div class="time-pill on" onclick="selTime(this)">6:00–6:30</div>
        <div class="time-pill" onclick="selTime(this)">6:30–7:00</div>
        <div class="time-pill" onclick="selTime(this)">7:00–7:30</div>
        <div class="time-pill" onclick="selTime(this)">7:30–8:00</div>
      </div>
      <div class="ob-label" style="margin-bottom:6px;">School gate / drop-off point</div>
      <input class="ob-input" style="margin-bottom:0;" type="text" value="Main gate — Tema Methodist JHS" placeholder="Specific gate or entrance"/>
    </div>

    <!-- Afternoon -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="font-size:20px;">🌆</span>
        <div style="font-size:15px;font-weight:700;color:var(--text);">Afternoon — school to home</div>
        <div style="margin-left:auto;" class="toggle-wrap" onclick="this.classList.toggle('off')"><div class="toggle-knob"></div></div>
      </div>
      <div class="ob-label" style="margin-bottom:6px;">Pickup time window</div>
      <div style="display:flex;gap:6px;margin-bottom:12px;">
        <div class="time-pill" onclick="selTime(this)">13:30–14:00</div>
        <div class="time-pill on" onclick="selTime(this)">14:00–14:30</div>
        <div class="time-pill" onclick="selTime(this)">14:30–15:00</div>
        <div class="time-pill" onclick="selTime(this)">15:00–15:30</div>
      </div>
      <div class="ob-label" style="margin-bottom:6px;">School gate / pickup point</div>
      <input class="ob-input" style="margin-bottom:0;" type="text" value="Main gate — Tema Methodist JHS" placeholder="Specific gate or entrance"/>
    </div>

    <!-- School days -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;">
      <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:10px;">School days</div>
      <div style="display:flex;gap:8px;">
        <div class="day-chip on" onclick="this.classList.toggle('on')">M</div>
        <div class="day-chip on" onclick="this.classList.toggle('on')">T</div>
        <div class="day-chip on" onclick="this.classList.toggle('on')">W</div>
        <div class="day-chip on" onclick="this.classList.toggle('on')">T</div>
        <div class="day-chip on" onclick="this.classList.toggle('on')">F</div>
        <div class="day-chip" onclick="this.classList.toggle('on')">S</div>
        <div class="day-chip" onclick="this.classList.toggle('on')">S</div>
      </div>
    </div>
    <button class="btn" style="background:var(--blue);color:#fff;" onclick="go('gd-plans')">Next — choose a plan →</button>
  </div></div>
</div>

<!-- GD-5: GUARDIAN PLAN SELECTION -->

<div class="screen" id="s-gd-plans">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"></div></div>
  <div class="scroll"><div class="page" style="padding-top:16px;">
    <button class="back" onclick="go('gd-schedule')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:6px;">Subscribe</div>
    <h2 style="font-size:26px;font-weight:800;color:var(--text);margin-bottom:6px;">Choose Kofi's plan</h2>
    <p style="font-size:14px;color:var(--muted);margin-bottom:22px;">All plans include: named physical QR pass card, real-time SMS alerts to 2 contacts, and child-safe verified drivers.</p>

    <!-- Daily -->
    <div onclick="pickGdPlan(this,'daily')" class="gd-plan-card" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px;cursor:pointer;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-size:17px;font-weight:700;color:var(--text);">Daily</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Pay per day · Flexible</div></div><div style="font-size:24px;font-weight:800;color:var(--text);">₵10</div></div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.5;">Best for irregular schedules. Cancel the night before with no charge.</p>
    </div>
    <!-- Weekly -->
    <div onclick="pickGdPlan(this,'weekly')" class="gd-plan-card" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px;cursor:pointer;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-size:17px;font-weight:700;color:var(--text);">Weekly</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">5 school days</div></div><div style="font-size:24px;font-weight:800;color:var(--text);">₵45</div></div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.5;">Covers Mon–Fri. Renews automatically each Monday.</p>
    </div>
    <!-- Monthly -->
    <div onclick="pickGdPlan(this,'monthly')" class="gd-plan-card" style="background:var(--card);border:1.5px solid var(--blue);border-radius:16px;padding:18px;cursor:pointer;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-size:17px;font-weight:700;color:var(--text);">Monthly</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">~22 school days</div></div><div style="display:flex;align-items:center;gap:8px;"><span style="background:#0A2240;color:var(--blue);font-size:9px;font-weight:700;padding:3px 8px;border-radius:100px;">POPULAR</span><div style="font-size:24px;font-weight:800;color:var(--blue);">₵160</div></div></div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.5;">Best value. Includes free card replacement if lost once per term.</p>
    </div>
    <!-- Termly -->
    <div onclick="pickGdPlan(this,'termly')" class="gd-plan-card" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px;cursor:pointer;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-size:17px;font-weight:700;color:var(--text);">Termly</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">~15 weeks · Pay once</div></div><div style="display:flex;align-items:center;gap:8px;"><span style="background:var(--green-bg);color:var(--green-light);font-size:9px;font-weight:700;padding:3px 8px;border-radius:100px;">SAVE 10%</span><div style="font-size:24px;font-weight:800;color:var(--green-light);">₵432</div></div></div>
      <p style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.5;">Pay once per school term. No mid-term renewals. Best for peace of mind.</p>
    </div>
    <div id="gd-plan-toast" class="toast toast-ok" style="margin-bottom:14px;"></div>

    <!-- What's included -->
    <div style="background:var(--card2);border-radius:12px;padding:14px;margin-bottom:20px;">
      <div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:10px;">Every plan includes</div>
      <div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg><span style="font-size:12px;color:var(--muted);">Laminated photo QR pass card for your child</span></div>
      <div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg><span style="font-size:12px;color:var(--muted);">Real-time SMS at every journey milestone</span></div>
      <div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg><span style="font-size:12px;color:var(--muted);">Child-safe verified driver — same driver daily</span></div>
      <div style="display:flex;gap:8px;align-items:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg><span style="font-size:12px;color:var(--muted);">Route deviation alerts · Nframa ops monitoring</span></div>
    </div>
    <button class="btn" style="background:var(--blue);color:#fff;" onclick="go('gd-home')">Pay with MoMo &amp; enrol Kofi →</button>
  </div></div>
</div>

<!-- GD-6: GUARDIAN HOME DASHBOARD -->

<div class="screen" id="s-gd-home">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:6px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div><div class="overline" style="margin-bottom:3px;">Good morning</div><h2 style="font-size:24px;font-weight:800;color:var(--text);">Adjoa Mensah</h2></div>
      <div style="width:44px;height:44px;border-radius:50%;background:#0A2240;border:1.5px solid var(--blue);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--blue);">AM</div>
    </div>

    <!-- Live journey status banner — ACTIVE STATE -->
    <div onclick="go('gd-live')" style="background:var(--green-bg);border:1.5px solid var(--green);border-radius:16px;padding:16px;margin-bottom:12px;cursor:pointer;animation:panicRing 3s ease-in-out infinite;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--green-light);animation:pulse 1.4s ease-in-out infinite;flex-shrink:0;"></div>
        <span style="font-size:12px;font-weight:700;color:var(--green-light);letter-spacing:.04em;text-transform:uppercase;">Kofi is on his way to school</span>
        <span style="font-size:11px;color:var(--muted);margin-left:auto;">6:52 AM</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;flex-shrink:0;">KM</div>
        <div style="flex:1;"><div style="font-size:15px;font-weight:700;color:var(--text);">Kofi Mensah · JHS 1</div><div style="font-size:12px;color:var(--muted);">Boarded 6:44 AM · Est. arrival 7:20 AM</div></div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>

    <!-- Children list -->
    <div class="section-hd">My children</div>
    <div class="child-card live" onclick="go('gd-live')">
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="child-av" style="background:var(--green);color:#fff;">KM</div>
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;"><span style="font-size:16px;font-weight:700;color:var(--text);">Kofi Mensah</span><span style="background:var(--green-bg);color:var(--green-light);font-size:9px;font-weight:700;padding:2px 7px;border-radius:100px;">● LIVE</span></div>
          <div style="font-size:12px;color:var(--muted);">JHS 1 · Tema Methodist JHS · Monthly pass</div>
          <div style="font-size:12px;color:var(--green-light);font-weight:600;margin-top:4px;">In vehicle · 6:52 AM · ETA school 7:20 AM</div>
        </div>
      </div>
    </div>

    <!-- Add another child -->
    <div onclick="go('child-profile')" style="background:var(--card);border:1.5px dashed var(--border2);border-radius:16px;padding:16px;display:flex;align-items:center;gap:12px;cursor:pointer;margin-bottom:20px;">
      <div style="width:44px;height:44px;border-radius:50%;background:var(--card2);display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--hint)" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
      <div><div style="font-size:14px;font-weight:600;color:var(--muted);">Add another child</div><div style="font-size:12px;color:var(--hint);">Each child gets their own QR pass card</div></div>
    </div>

    <!-- Today's alerts -->
    <div class="section-hd">Today's journey alerts</div>
    <div class="card">
      <div style="display:flex;gap:12px;align-items:center;padding:8px 0;border-bottom:0.5px solid var(--border);">
        <span style="font-size:20px;">✅</span>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Kofi boarded safely</div><div style="font-size:11px;color:var(--muted);">6:44 AM · Driver: Emmanuel K. · GR-4421-22</div></div>
        <span style="font-size:11px;color:var(--hint);">6:44</span>
      </div>
      <div style="display:flex;gap:12px;align-items:center;padding:8px 0;border-bottom:0.5px solid var(--border);">
        <span style="font-size:20px;">🚗</span>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">Driver departed for pickup</div><div style="font-size:11px;color:var(--muted);">6:31 AM · Emmanuel K. en route to your address</div></div>
        <span style="font-size:11px;color:var(--hint);">6:31</span>
      </div>
      <div style="display:flex;gap:12px;align-items:center;padding:8px 0;">
        <span style="font-size:20px;">📋</span>
        <div style="flex:1;"><div style="font-size:13px;font-weight:700;color:var(--text);">School run confirmed for today</div><div style="font-size:11px;color:var(--muted);">Matched last night at 10:12 PM</div></div>
        <span style="font-size:11px;color:var(--hint);">10:12 PM</span>
      </div>
    </div>

    <!-- Quick actions -->
    <div class="section-hd">Quick actions</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:4px;">
      <div onclick="go('gd-driver')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;cursor:pointer;text-align:center;"><div style="font-size:20px;margin-bottom:6px;">🔍</div><div style="font-size:12px;font-weight:700;color:var(--text);">View driver profile</div></div>
      <div onclick="go('gd-card')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;cursor:pointer;text-align:center;"><div style="font-size:20px;margin-bottom:6px;">💳</div><div style="font-size:12px;font-weight:700;color:var(--text);">Manage QR pass card</div></div>
      <div onclick="go('gd-live')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;cursor:pointer;text-align:center;"><div style="font-size:20px;margin-bottom:6px;">📍</div><div style="font-size:12px;font-weight:700;color:var(--text);">Live journey view</div></div>
      <div onclick="go('gd-history')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;cursor:pointer;text-align:center;"><div style="font-size:20px;margin-bottom:6px;">📋</div><div style="font-size:12px;font-weight:700;color:var(--text);">Journey history</div></div>
    </div>
  </div></div>

  <nav class="gd-bnav">
    <div class="bnav-items">
      <div class="gd-ni on" id="gd-ni-home" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="gd-ni" id="gd-ni-live" onclick="gdNav('gd-live','live')"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Live</span></div>
      <div class="gd-ni" id="gd-ni-card" onclick="gdNav('gd-card','card')"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg><span>Pass card</span></div>
      <div class="gd-ni" id="gd-ni-driver" onclick="gdNav('gd-driver','driver')"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg><span>Driver</span></div>
      <div class="gd-ni" id="gd-ni-history" onclick="gdNav('gd-history','history')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>History</span></div>
    </div>
  </nav>
</div>

<!-- GD-7: LIVE JOURNEY MONITORING -->

<div class="screen" id="s-gd-live">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Live journey · Kofi Mensah</div>
    <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:14px;">En route to school</h2>

    <!-- Map placeholder -->
    <div class="journey-map">
      <!-- Fake route line SVG -->
      <svg style="position:absolute;inset:0;width:100%;height:100%;" viewBox="0 0 360 180" preserveAspectRatio="xMidYMid meet">
        <rect width="360" height="180" fill="none"/>
        <!-- Roads -->
        <path d="M20,150 Q90,120 160,100 Q230,80 280,60" stroke="rgba(255,255,255,0.1)" stroke-width="12" fill="none" stroke-linecap="round"/>
        <path d="M20,150 Q90,120 160,100 Q230,80 280,60" stroke="var(--green)" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="8 4"/>
        <!-- Home marker -->
        <circle cx="20" cy="150" r="8" fill="var(--primary)"/>
        <text x="30" y="145" font-size="10" fill="var(--muted)" font-family="system-ui">Home</text>
        <!-- School marker -->
        <circle cx="280" cy="60" r="8" fill="var(--blue)"/>
        <text x="250" y="50" font-size="10" fill="var(--muted)" font-family="system-ui">School</text>
        <!-- Vehicle position -->
        <circle cx="185" cy="97" r="12" fill="var(--green)" opacity="0.25"/>
        <circle cx="185" cy="97" r="7" fill="var(--green)"/>
        <text x="172" y="120" font-size="9" fill="var(--green-light)" font-family="system-ui" font-weight="bold">GR-4421-22</text>
      </svg>
    </div>

    <!-- Status card -->
    <div style="background:var(--green-bg);border:1px solid var(--green);border-radius:14px;padding:14px 16px;margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="width:40px;height:40px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0;">KM</div>
        <div style="flex:1;"><div style="font-size:15px;font-weight:700;color:var(--text);">Kofi is safely in the vehicle</div><div style="font-size:12px;color:var(--muted);">Driver: Emmanuel K. · Toyota Corolla · GR-4421-22</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
        <div style="background:rgba(0,0,0,.2);border-radius:8px;padding:10px;text-align:center;"><div style="font-size:17px;font-weight:800;color:var(--green-light);">6:52</div><div style="font-size:10px;color:var(--muted);margin-top:2px;">Boarded</div></div>
        <div style="background:rgba(0,0,0,.2);border-radius:8px;padding:10px;text-align:center;"><div style="font-size:17px;font-weight:800;color:var(--orange);">7:20</div><div style="font-size:10px;color:var(--muted);margin-top:2px;">ETA school</div></div>
        <div style="background:rgba(0,0,0,.2);border-radius:8px;padding:10px;text-align:center;"><div style="font-size:17px;font-weight:800;color:var(--text);">28 min</div><div style="font-size:10px;color:var(--muted);margin-top:2px;">Remaining</div></div>
      </div>
    </div>

    <!-- Journey notification timeline -->
    <div class="section-hd">Journey milestones</div>
    <div class="card">
      <div class="notif-step">
        <div class="notif-line"><div class="notif-dot done"></div><div class="notif-connector done"></div></div>
        <div class="notif-content"><h5>School run confirmed</h5><p>Matched at 10:12 PM · Emmanuel K. assigned</p></div>
      </div>
      <div class="notif-step">
        <div class="notif-line"><div class="notif-dot done"></div><div class="notif-connector done"></div></div>
        <div class="notif-content"><h5>Driver departed for pickup</h5><p>6:31 AM · SMS sent to your number</p></div>
      </div>
      <div class="notif-step">
        <div class="notif-line"><div class="notif-dot done"></div><div class="notif-connector done"></div></div>
        <div class="notif-content"><h5>✅ Kofi boarded — QR pass scanned</h5><p>6:44 AM · "Kofi is in the car" SMS sent to you &amp; Kwame</p></div>
      </div>
      <div class="notif-step">
        <div class="notif-line"><div class="notif-dot active"></div><div class="notif-connector"></div></div>
        <div class="notif-content"><h5 style="color:var(--orange);">En route to school</h5><p>Route is clear · No deviations detected</p></div>
      </div>
      <div class="notif-step">
        <div class="notif-line"><div class="notif-dot"></div><div class="notif-connector"></div></div>
        <div class="notif-content"><h5 style="color:var(--hint);">Arrived at school gate</h5><p>Pending · You'll receive an SMS</p></div>
      </div>
      <div class="notif-step">
        <div class="notif-line"><div class="notif-dot"></div></div>
        <div class="notif-content" style="padding-bottom:0;"><h5 style="color:var(--hint);">Safe arrival confirmed</h5><p>Teacher or gate scan confirms Kofi is inside</p></div>
      </div>
    </div>

    <!-- Safety strip -->
    <div style="background:var(--card2);border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <span style="font-size:12px;color:var(--muted);">Route monitoring <strong style="color:var(--green-light);">active</strong> · Deviation alert armed · Nframa ops watching</span>
    </div>

    <!-- Contact driver -->
    <button onclick="go('chat')" style="width:100%;padding:14px;background:var(--card);border:0.5px solid var(--border2);border-radius:12px;font-size:14px;font-weight:700;color:var(--text);font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      Message driver (number masked)
    </button>
  </div></div>

  <nav class="gd-bnav">
    <div class="bnav-items">
      <div class="gd-ni" id="gd-ni-home2" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="gd-ni on" id="gd-ni-live2"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Live</span></div>
      <div class="gd-ni" id="gd-ni-card2" onclick="gdNav('gd-card','card')"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg><span>Pass card</span></div>
      <div class="gd-ni" id="gd-ni-driver2" onclick="gdNav('gd-driver','driver')"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg><span>Driver</span></div>
      <div class="gd-ni" id="gd-ni-history2" onclick="gdNav('gd-history','history')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>History</span></div>
    </div>
  </nav>
</div>

<!-- GD-8: DRIVER TRUST PROFILE -->

<div class="screen" id="s-gd-driver">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Kofi's assigned driver</div>
    <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:18px;">Emmanuel Kwame</h2>

    <!-- Driver card -->
    <div style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;margin-bottom:18px;">
      <div style="width:68px;height:68px;border-radius:50%;background:var(--green-bg);border:2px solid var(--green-light);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:var(--green-light);flex-shrink:0;">EK</div>
      <div style="flex:1;">
        <div style="font-size:17px;font-weight:800;color:var(--text);margin-bottom:3px;">Emmanuel Kwame</div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:6px;">Toyota Corolla · GR-4421-22 · Silver</div>
        <div style="display:flex;gap:12px;font-size:13px;">
          <span style="color:var(--orange);">⭐ 4.9</span>
          <span style="color:var(--muted);">🚗 408 trips</span>
          <span style="color:var(--green-light);">👶 2 yrs school runs</span>
        </div>
      </div>
    </div>

    <!-- Child-safe verification section -->
    <div class="section-hd" style="margin-top:0;">Child safeguarding verification</div>
    <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>Ghana Police criminal background check — passed Mar 2025</span></div>
    <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>Child safeguarding declaration signed &amp; witnessed</span></div>
    <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>Nframa in-person interview — school run protocol confirmed</span></div>
    <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>DVLA roadworthy certificate — valid until Nov 2025</span></div>
    <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>Vehicle insurance — comprehensive, valid until Dec 2025</span></div>
    <div class="trust-badge" style="margin-bottom:18px;"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>No incidents in 408 trips · Zero parent complaints</span></div>

    <!-- Standard verifications -->
    <div class="section-hd">Standard verifications</div>
    <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>Driver's license — valid</span></div>
    <div class="trust-badge" style="margin-bottom:18px;"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>Vehicle registration — GR-4421-22 verified</span></div>

    <!-- School run stats -->
    <div class="section-hd">School run record</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:18px;">
      <div style="background:var(--card2);border-radius:10px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:var(--green-light);">124</div><div style="font-size:10px;color:var(--hint);margin-top:2px;">School runs</div></div>
      <div style="background:var(--card2);border-radius:10px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:var(--text);">100%</div><div style="font-size:10px;color:var(--hint);margin-top:2px;">On-time rate</div></div>
      <div style="background:var(--card2);border-radius:10px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:var(--orange);">4.9 ★</div><div style="font-size:10px;color:var(--hint);margin-top:2px;">Parent rating</div></div>
    </div>

    <!-- Parent reviews -->
    <div class="section-hd">What parents say</div>
    <div class="card" style="margin-bottom:8px;">
      <div style="font-size:12px;color:var(--orange);margin-bottom:4px;">⭐⭐⭐⭐⭐</div>
      <p style="font-size:13px;color:var(--text);margin-bottom:4px;line-height:1.55;">"Emmanuel always waits if we're a couple of minutes late. My daughter feels completely safe with him."</p>
      <div style="font-size:11px;color:var(--hint);">Efua A. · Parent of Primary 5 student · Tema Comm. 3</div>
    </div>
    <div class="card">
      <div style="font-size:12px;color:var(--orange);margin-bottom:4px;">⭐⭐⭐⭐⭐</div>
      <p style="font-size:13px;color:var(--text);margin-bottom:4px;line-height:1.55;">"Very professional. He knows the school gate, never parks dangerously. Arrived every single day this term."</p>
      <div style="font-size:11px;color:var(--hint);">Kwabena T. · Parent of JHS 2 student · Tema Comm. 5</div>
    </div>

    <button onclick="showGdToast('gd-drv-toast','A concern has been logged with Nframa ops. Our team will follow up within 2 hours.')" style="width:100%;padding:13px;background:transparent;color:var(--muted);border:0.5px solid var(--border);border-radius:12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;margin-top:10px;">Report a concern about this driver</button>
    <div id="gd-drv-toast" class="toast toast-ok" style="margin-top:10px;"></div>
  </div></div>

  <nav class="gd-bnav">
    <div class="bnav-items">
      <div class="gd-ni" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="gd-ni" onclick="gdNav('gd-live','live')"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Live</span></div>
      <div class="gd-ni" onclick="gdNav('gd-card','card')"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg><span>Pass card</span></div>
      <div class="gd-ni on"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg><span>Driver</span></div>
      <div class="gd-ni" onclick="gdNav('gd-history','history')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>History</span></div>
    </div>
  </nav>
</div>

<!-- GD-9: PHYSICAL QR CARD MANAGEMENT -->

<div class="screen" id="s-gd-card">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Kofi's physical QR pass</div>
    <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:18px;">Pass card</h2>

    <!-- Physical card visual -->
    <div class="phys-card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
        <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.2);border:2px solid rgba(255,255,255,0.5);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:#fff;flex-shrink:0;">KM</div>
        <div>
          <div style="font-size:18px;font-weight:800;color:#fff;">Kofi Mensah</div>
          <div style="font-size:12px;color:rgba(255,255,255,.7);">JHS 1 · Tema Methodist JHS</div>
        </div>
        <div style="margin-left:auto;background:#fff;border-radius:8px;padding:6px;">
          <svg width="40" height="40" viewBox="0 0 128 128" fill="none">
            <rect x="0" y="0" width="44" height="44" rx="4" fill="#1D4ED8"/><rect x="8" y="8" width="28" height="28" rx="2" fill="white"/>
            <rect x="84" y="0" width="44" height="44" rx="4" fill="#1D4ED8"/><rect x="92" y="8" width="28" height="28" rx="2" fill="white"/>
            <rect x="0" y="84" width="44" height="44" rx="4" fill="#1D4ED8"/><rect x="8" y="92" width="28" height="28" rx="2" fill="white"/>
            <rect x="52" y="0" width="20" height="8" fill="#1D4ED8"/><rect x="52" y="12" width="12" height="8" fill="#1D4ED8"/>
            <rect x="52" y="52" width="8" height="18" fill="#1D4ED8"/><rect x="84" y="52" width="18" height="8" fill="#1D4ED8"/>
          </svg>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:flex-end;">
        <div><div style="font-size:10px;color:rgba(255,255,255,.6);margin-bottom:2px;">PASS ID</div><div style="font-size:13px;font-weight:700;color:#fff;letter-spacing:.08em;">NFR-SCH-2025-00841</div></div>
        <div style="text-align:right;"><div style="font-size:10px;color:rgba(255,255,255,.6);margin-bottom:2px;">STATUS</div><div style="font-size:13px;font-weight:700;color:#4ADE80;">● Active</div></div>
      </div>
    </div>

    <!-- Subscription status -->
    <div class="card">
      <div class="overline" style="margin-bottom:10px;">Current subscription</div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Plan</span><span style="font-size:14px;font-weight:600;color:var(--text);">Monthly · ₵160</span></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Renews</span><span style="font-size:14px;font-weight:600;color:var(--text);">1 May 2025</span></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:0.5px solid var(--border);"><span style="font-size:14px;color:var(--muted);">Auto-renew</span><span style="font-size:14px;font-weight:600;color:var(--green-light);">On ✓</span></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;"><span style="font-size:14px;color:var(--muted);">Payment</span><span style="font-size:14px;font-weight:600;color:var(--text);">MTN MoMo · +233 24 123 4567</span></div>
    </div>

    <!-- Top up / manage -->
    <div style="display:flex;gap:8px;margin-bottom:14px;">
      <button onclick="openGdPlanModal()" style="flex:1;padding:13px;background:var(--blue);color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Upgrade to termly</button>
      <button onclick="openGdPlanModal()" style="flex:1;padding:13px;background:var(--card);border:0.5px solid var(--border2);color:var(--text);border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Change plan</button>
    </div>

    <!-- Card delivery status -->
    <div class="section-hd">Physical card</div>
    <div style="background:var(--green-bg);border:0.5px solid var(--green);border-radius:12px;padding:12px 14px;margin-bottom:12px;display:flex;align-items:center;gap:10px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.2" stroke-linecap="round" style="flex-shrink:0;"><path d="M20 6L9 17l-5-5"/></svg>
      <div><div style="font-size:13px;font-weight:700;color:var(--green-light);">Card delivered — 14 March 2025</div><div style="font-size:11px;color:var(--muted);">Tema Comm. 5 · Received by Adjoa Mensah</div></div>
    </div>
    <div class="card">
      <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:8px;">How the card works</div>
      <p style="font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:10px;">Kofi presents this card at pickup each morning. The driver scans the QR code with their Nframa app. If the scan succeeds, you receive an SMS within 60 seconds confirming he's boarded.</p>
      <p style="font-size:12px;color:var(--hint);">The card never expires as a physical object. Only the subscription behind it expires. Renewing your plan instantly reactivates the QR code.</p>
    </div>

    <!-- Lost card -->
    <div class="section-hd">Lost or damaged card</div>
    <div class="card">
      <p style="font-size:13px;color:var(--muted);margin-bottom:12px;line-height:1.6;">If Kofi's card is lost, report it immediately. The old QR code is deactivated within seconds and a replacement card is ordered automatically.</p>
      <button onclick="showGdToast('gd-card-toast','Card NFR-SCH-2025-00841 deactivated. Replacement ordered — arrives within 2 working days. Replacement fee: ₵15.')" style="width:100%;padding:12px;background:var(--primary-bg);color:var(--primary-light);border:0.5px solid var(--primary);border-radius:10px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Report card lost / request replacement (₵15)</button>
    </div>
  </div></div>

  <nav class="gd-bnav">
    <div class="bnav-items">
      <div class="gd-ni" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="gd-ni" onclick="gdNav('gd-live','live')"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Live</span></div>
      <div class="gd-ni on"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg><span>Pass card</span></div>
      <div class="gd-ni" onclick="gdNav('gd-driver','driver')"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg><span>Driver</span></div>
      <div class="gd-ni" onclick="gdNav('gd-history','history')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>History</span></div>
    </div>
  </nav>
</div>

<!-- GD-10: JOURNEY HISTORY -->

<div class="screen" id="s-gd-history">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Kofi's journeys</div>
    <h2 style="font-size:22px;font-weight:800;color:var(--text);margin-bottom:6px;">Journey history</h2>
    <p style="font-size:13px;color:var(--muted);margin-bottom:18px;">Every completed school run is logged and available for 12 months.</p>

    <!-- Stats strip -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:18px;">
      <div style="background:var(--card2);border-radius:10px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:var(--green-light);">38</div><div style="font-size:10px;color:var(--hint);">Trips this term</div></div>
      <div style="background:var(--card2);border-radius:10px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:var(--text);">100%</div><div style="font-size:10px;color:var(--hint);">Safe arrivals</div></div>
      <div style="background:var(--card2);border-radius:10px;padding:12px;text-align:center;"><div style="font-size:18px;font-weight:800;color:var(--orange);">0</div><div style="font-size:10px;color:var(--hint);">Incidents</div></div>
    </div>

    <!-- Journey log -->
    <div class="section-hd" style="margin-top:0;">This week</div>
    <div class="card" style="margin-bottom:8px;cursor:pointer;" onclick="showGdToast('gd-hist-toast','Journey details: Departed 6:44 AM · Arrived school 7:19 AM · Duration 35 min')">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-size:14px;font-weight:700;color:var(--text);">Today · Morning run</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Emmanuel K. · In progress · Boarded 6:44 AM</div></div><span style="background:var(--orange-bg);color:var(--amber);font-size:9px;font-weight:700;padding:2px 8px;border-radius:100px;">LIVE</span></div>
    </div>
    <div class="card" style="margin-bottom:8px;cursor:pointer;" onclick="showGdToast('gd-hist-toast','Journey: Departed 6:42 AM · Arrived 7:15 AM · 33 min · No incidents')">
      <div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:14px;font-weight:700;color:var(--text);">Mon 21 Apr · Morning run</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Emmanuel K. · Departed 6:42 AM · Arrived 7:15 AM</div></div><span class="badge b-green">✓ Safe</span></div>
    </div>
    <div class="card" style="margin-bottom:8px;cursor:pointer;" onclick="showGdToast('gd-hist-toast','Journey: Departed 6:39 AM · Arrived 7:18 AM · 39 min · No incidents')">
      <div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:14px;font-weight:700;color:var(--text);">Fri 18 Apr · Morning run</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Emmanuel K. · Departed 6:39 AM · Arrived 7:18 AM</div></div><span class="badge b-green">✓ Safe</span></div>
    </div>
    <div class="card" style="margin-bottom:8px;cursor:pointer;" onclick="showGdToast('gd-hist-toast','Journey: Afternoon run · Departed school 14:05 · Arrived home 14:38 · No incidents')">
      <div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:14px;font-weight:700;color:var(--text);">Thu 17 Apr · Afternoon run</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Emmanuel K. · Departed school 14:05 · Arrived home 14:38</div></div><span class="badge b-green">✓ Safe</span></div>
    </div>
    <button onclick="showGdToast('gd-hist-toast','Full term history exported as PDF')" style="width:100%;padding:13px;background:var(--card);border:0.5px solid var(--border2);color:var(--text);border-radius:12px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;margin-top:4px;">Download full term report PDF</button>
    <div id="gd-hist-toast" class="toast toast-ok" style="margin-top:10px;"></div>
  </div></div>

  <nav class="gd-bnav">
    <div class="bnav-items">
      <div class="gd-ni" onclick="gdNav('gd-home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
      <div class="gd-ni" onclick="gdNav('gd-live','live')"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Live</span></div>
      <div class="gd-ni" onclick="gdNav('gd-card','card')"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg><span>Pass card</span></div>
      <div class="gd-ni" onclick="gdNav('gd-driver','driver')"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg><span>Driver</span></div>
      <div class="gd-ni on"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>History</span></div>
    </div>
  </nav>
</div>

<!-- ══ PANIC SCREEN ═════════════════════════════════════ -->

<div class="screen" id="s-panic">
  <div class="sb" style="background:#0D0101;border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <span class="sb-time" style="color:#fff;">9:41</span>
    <button onclick="go('confirmed')" style="background:rgba(255,255,255,0.12);border:none;color:#fff;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;padding:6px 14px;border-radius:100px;">Cancel</button>
  </div>
  <div class="panic-screen-bg">
    <div style="text-align:center;margin-bottom:28px;">
      <div class="overline" style="color:rgba(255,255,255,.5);margin-bottom:8px;">Emergency SOS</div>
      <h2 style="font-size:26px;font-weight:800;color:#fff;line-height:1.2;">Are you in danger?</h2>
    </div>

    <!-- Big panic ring button -->
    <div class="panic-ring" onclick="activatePanic()" id="panic-ring">
      <div class="panic-ring-inner">
        <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div style="font-size:22px;font-weight:900;color:#fff;margin-top:10px;">SOS</div>
        <div class="panic-count" id="panic-count">Hold 3s to activate</div>
      </div>
    </div>

    <!-- What happens note -->
    <div style="background:rgba(255,255,255,0.07);border-radius:14px;padding:16px;margin-bottom:24px;width:100%;">
      <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:10px;letter-spacing:.06em;text-transform:uppercase;">When activated</div>
      <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">📍</span><span style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">Your GPS location sent to Nframa ops and your emergency contacts instantly</span></div>
      <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">📱</span><span style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">SMS alert to trusted contacts with driver name GR-2847-20 and trip ID</span></div>
      <div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🚨</span><span style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">Ghana Police 191 notification queued — works without data via SMS fallback</span></div>
    </div>

    <!-- SOS activated state (hidden until triggered) -->
    <div id="sos-sent" style="display:none;background:rgba(29,158,117,0.2);border:1px solid #1D9E75;border-radius:14px;padding:16px;width:100%;text-align:center;">
      <div style="font-size:20px;font-weight:800;color:#5DCAA5;margin-bottom:6px;">SOS Sent ✓</div>
      <div style="font-size:13px;color:rgba(255,255,255,.7);">Nframa ops and 2 contacts notified<br>Stay calm — help is on the way</div>
    </div>
  </div>
</div>

<!-- ══ TRIP SHARE SCREEN ════════════════════════════════ -->

<div class="screen" id="s-share">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="go('confirmed')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Safety · Trip sharing</div>
    <h2 class="page-title" style="margin-bottom:6px;">Share your trip</h2>
    <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:22px;">Your trusted contacts receive a live tracking link with your driver's details. Works on slow connections.</p>

    <!-- Live trip card -->
    <div style="background:var(--primary-bg);border:1px solid var(--primary);border-radius:14px;padding:14px;margin-bottom:22px;">
      <div class="overline" style="color:var(--primary-light);margin-bottom:8px;">Active trip</div>
      <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;">Tema Comm. 5 → Accra CBD</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px;">Kwame A. · Toyota Corolla · GR-2847-20</div>
      <div style="background:var(--card2);border-radius:8px;padding:8px 12px;font-size:11px;color:var(--primary-light);font-family:monospace;word-break:break-all;">nframa.app/track/TRP-8841-KA</div>
    </div>

    <!-- Trusted contacts -->
    <div class="overline" style="margin-bottom:12px;">Trusted contacts</div>
    <div class="contact-row">
      <div class="contact-av" style="background:var(--primary-bg);color:var(--primary-light);">MA</div>
      <div class="contact-info"><h5>Mum (Adwoa)</h5><p>+233 24 456 7890 · Emergency contact 1</p></div>
      <button class="send-btn unsent" id="share-1" onclick="sendShare(this,'Mum (Adwoa)')">Send</button>
    </div>
    <div class="contact-row">
      <div class="contact-av" style="background:var(--purple-bg);color:var(--purple-light);">KO</div>
      <div class="contact-info"><h5>Kofi (partner)</h5><p>+233 20 987 6543 · Emergency contact 2</p></div>
      <button class="send-btn unsent" id="share-2" onclick="sendShare(this,'Kofi')">Send</button>
    </div>
    <div class="contact-row">
      <div class="contact-av" style="background:var(--green-bg);color:var(--green-light);">AW</div>
      <div class="contact-info"><h5>Afia (colleague)</h5><p>+233 55 321 0987 · Emergency contact 3</p></div>
      <button class="send-btn unsent" id="share-3" onclick="sendShare(this,'Afia')">Send</button>
    </div>

    <div style="margin-top:20px;padding-top:16px;border-top:0.5px solid var(--border);">
      <div class="overline" style="margin-bottom:12px;">Share via</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <button onclick="sendShare(null,'WhatsApp')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;font-size:13px;font-weight:700;color:var(--text);font-family:inherit;cursor:pointer;">WhatsApp</button>
        <button onclick="sendShare(null,'SMS')" style="background:var(--card);border:0.5px solid var(--border);border-radius:12px;padding:14px;font-size:13px;font-weight:700;color:var(--text);font-family:inherit;cursor:pointer;">SMS</button>
      </div>
    </div>
    <div id="share-toast" class="toast toast-ok" style="margin-top:14px;"></div>
  </div></div>
</div>

<!-- ══ JOURNEY CHECK-IN SCREEN ══════════════════════════ -->

<div class="screen" id="s-checkin">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg></div></div>
  <div class="checkin-screen">
    <!-- Pulsing icon -->
    <div class="checkin-pulse" id="checkin-icon">
      <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    </div>
    <div class="overline" style="margin-bottom:8px;text-align:center;">Journey verification</div>
    <h2 style="font-size:24px;font-weight:800;color:var(--text);margin-bottom:10px;text-align:center;">Did you arrive safely?</h2>
    <p style="font-size:14px;color:var(--muted);line-height:1.65;text-align:center;margin-bottom:32px;">Your trip to Accra CBD was due to end at 7:30 AM. Nframa is checking in automatically.</p>

    <div style="width:100%;display:flex;flex-direction:column;gap:10px;">
      <button onclick="checkinSafe()" style="width:100%;padding:18px;background:var(--green);color:#fff;border:none;border-radius:14px;font-size:17px;font-weight:800;font-family:inherit;cursor:pointer;">Yes, I arrived safely</button>
      <button onclick="go('panic')" style="width:100%;padding:18px;background:#C0140A;color:#fff;border:none;border-radius:14px;font-size:17px;font-weight:800;font-family:inherit;cursor:pointer;">No — I need help</button>
      <button onclick="checkinSnooze()" style="width:100%;padding:14px;background:transparent;color:var(--muted);border:0.5px solid var(--border);border-radius:14px;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;">Still on my way — check in 10 min</button>
    </div>

    <!-- Safe confirmation (hidden) -->
    <div id="checkin-ok" style="display:none;margin-top:24px;background:var(--green-bg);border-radius:14px;padding:20px;text-align:center;width:100%;">
      <div style="font-size:40px;margin-bottom:10px;">✓</div>
      <div style="font-size:18px;font-weight:800;color:var(--green-light);">Glad you're safe!</div>
      <div style="font-size:13px;color:var(--muted);margin-top:6px;">Your contacts have been notified you arrived.</div>
    </div>
  </div>
</div>

<div class="screen" id="s-pass">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <h2 class="page-title" style="margin-bottom:20px;">My pass</h2>
    <div style="background:var(--card);border:1px solid var(--primary);border-radius:20px;padding:22px;text-align:center;margin-bottom:14px;">
      <div class="overline" style="text-align:center;margin-bottom:18px;color:var(--primary-light);">Monthly pass · Tap to flip</div>
      <div style="background:#fff;border-radius:14px;padding:14px;display:inline-block;margin-bottom:18px;">
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none">
          <rect x="0" y="0" width="44" height="44" rx="5" fill="#D11C8A"/><rect x="5" y="5" width="34" height="34" rx="3" fill="white"/><rect x="11" y="11" width="22" height="22" rx="1.5" fill="#D11C8A"/>
          <rect x="84" y="0" width="44" height="44" rx="5" fill="#6B2D8E"/><rect x="89" y="5" width="34" height="34" rx="3" fill="white"/><rect x="95" y="11" width="22" height="22" rx="1.5" fill="#6B2D8E"/>
          <rect x="0" y="84" width="44" height="44" rx="5" fill="#F7941D"/><rect x="5" y="89" width="34" height="34" rx="3" fill="white"/><rect x="11" y="95" width="22" height="22" rx="1.5" fill="#F7941D"/>
          <rect x="52" y="0" width="24" height="9" fill="#D11C8A"/><rect x="52" y="13" width="14" height="9" fill="#6B2D8E"/><rect x="70" y="13" width="14" height="9" fill="#D11C8A"/><rect x="52" y="26" width="24" height="9" fill="#F7941D"/>
          <rect x="52" y="52" width="9" height="22" fill="#6B2D8E"/><rect x="65" y="52" width="9" height="14" fill="#D11C8A"/><rect x="84" y="52" width="22" height="9" fill="#6B2D8E"/><rect x="84" y="65" width="9" height="14" fill="#D11C8A"/>
          <rect x="52" y="76" width="13" height="9" fill="#D11C8A"/><rect x="84" y="86" width="13" height="9" fill="#D11C8A"/><rect x="52" y="96" width="9" height="9" fill="#6B2D8E"/><rect x="65" y="103" width="13" height="9" fill="#D11C8A"/>
        </svg>
      </div>
      <div style="font-size:16px;font-weight:800;color:var(--text);letter-spacing:.06em;margin-bottom:4px;">NFR-2025-04871</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:18px;">Tema → Accra CBD · Valid until Apr 25</div>
      <div id="ride-dots" style="display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-bottom:10px;"></div>
      <div style="font-size:12px;color:var(--muted);">14 of 22 rides remaining</div>
    </div>
    <button class="btn btn-ghost" onclick="goNav('plans','plans')" style="margin-bottom:22px;">Renew / upgrade plan</button>
    <div class="section-hd" style="margin-top:0;">Trip history</div>
    <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><div><div style="font-size:15px;font-weight:700;color:var(--text);">Tema → CBD</div><div style="font-size:12px;color:var(--muted);">Mon Mar 24 · Kwame A.</div></div><span class="badge b-green">✓ DONE</span></div>
    <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><div><div style="font-size:15px;font-weight:700;color:var(--text);">Tema → CBD</div><div style="font-size:12px;color:var(--muted);">Fri Mar 21 · Abena M.</div></div><span class="badge b-green">✓ DONE</span></div>
    <div class="card" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><div><div style="font-size:15px;font-weight:700;color:var(--text);">Tema → CBD</div><div style="font-size:12px;color:var(--muted);">Thu Mar 20 · Kwame A.</div></div><span class="badge b-green">✓ DONE</span></div>
  </div></div>
</div>

<div class="screen" id="s-plans">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:10px;">
    <button class="back" onclick="goNav('home','home')"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:4px;">Subscribe</div>
    <h2 class="page-title" style="margin-bottom:22px;">Choose a plan</h2>
    <div id="p-daily" onclick="pickPlan('daily')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;"><div><div style="font-size:18px;font-weight:700;color:var(--text);">Daily</div><div style="font-size:13px;color:var(--muted);">1 ride · Today only</div></div><div style="font-size:24px;font-weight:800;color:var(--text);">₵8</div></div>
    <div id="p-weekly" onclick="pickPlan('weekly')" style="background:var(--card);border:1.5px solid var(--primary);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;"><div><div style="font-size:18px;font-weight:700;color:var(--text);">Weekly</div><div style="font-size:13px;color:var(--muted);">5 rides · 7 days</div></div><div style="display:flex;align-items:center;gap:8px;"><span class="badge b-pink" style="font-size:9px;">MOST POPULAR</span><div style="font-size:24px;font-weight:800;color:var(--primary);">₵40</div></div></div>
    <div id="p-monthly" onclick="pickPlan('monthly')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:20px;"><div><div style="font-size:18px;font-weight:700;color:var(--text);">Monthly</div><div style="font-size:13px;color:var(--muted);">22 rides · 30 days</div></div><div style="font-size:24px;font-weight:800;color:var(--text);">₵140</div></div>
    <div class="card" style="margin-bottom:22px;"><p style="font-size:14px;color:var(--muted);line-height:1.7;">After payment, a <span style="color:var(--primary);font-weight:700;">QR pass</span> is instantly generated and stored in your wallet. Show it to your driver at pickup — works offline.</p></div>
    <button class="btn btn-primary" onclick="goNav('pass','pass')">Continue with MoMo →</button>
  </div></div>
</div>

<!-- Rider bottom nav -->
<nav class="bnav" id="rider-bnav">
  <div class="bnav-items">
    <div class="ni on" id="ni-home" onclick="goNav('home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
    <div class="ni" id="ni-routes" onclick="goNav('routes','routes')"><svg viewBox="0 0 24 24"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/></svg><span>Routes</span></div>
    <div class="ni" id="ni-ride" onclick="goNav('ride','ride')"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg><span>Ride</span></div>
    <div class="ni" id="ni-pass" onclick="goNav('pass','pass')"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg><span>Pass</span></div>
    <div class="ni" id="ni-plans" onclick="goNav('plans','plans')"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><span>Plans</span></div>
  </div>
</nav>

<!-- ══════════════════════════════════════════════════════ -->
<!-- CAR OWNER SCREEN                                       -->
<!-- ══════════════════════════════════════════════════════ -->

<div class="screen" id="s-co">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll">

    <!-- LIVE PICKUPS -->
    <div id="co-live" class="co-panel on"><div class="page" style="padding-top:14px;">
      <div style="display:inline-flex;align-items:center;gap:7px;background:var(--primary-bg);border-radius:100px;padding:6px 14px;margin-bottom:16px;">
        <span class="pulse-dot"></span><span style="font-size:13px;font-weight:700;color:var(--primary-light);">2 active trips now</span>
      </div>

      <!-- ── INCOMING REQUEST CARD (verification badge shown before accept) ── -->
      <div class="req-card" id="req-card">
        <div style="margin-bottom:12px;">
          <div style="font-size:13px;font-weight:700;color:var(--purple-light);margin-bottom:2px;">New boarding request · 7:18 AM</div>
          <div style="font-size:12px;color:var(--muted);">Spintex Rd › Accra Mall · 1 rider</div>
        </div>
        <!-- Rider profile with verification badge prominently shown -->
        <div style="background:var(--card2);border-radius:12px;padding:12px;margin-bottom:12px;display:flex;align-items:center;gap:12px;">
          <div style="width:44px;height:44px;border-radius:50%;background:var(--green-bg);border:2px solid var(--green-light);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--green-light);flex-shrink:0;">AO</div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px;">
              <span style="font-size:15px;font-weight:700;color:var(--text);">Adjoa Owusu</span>
              <span class="tag-verified">Verified</span>
            </div>
            <div style="font-size:11px;color:var(--muted);">Monthly pass · NFR-2025-04899 · 18 rides left · 4.8 ★</div>
          </div>
        </div>
        <!-- Rider conduct summary -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px;">
          <div style="background:var(--card2);border-radius:8px;padding:8px;text-align:center;">
            <div style="font-size:14px;font-weight:700;color:var(--green-light);">47</div>
            <div style="font-size:9px;color:var(--hint);margin-top:1px;">Trips</div>
          </div>
          <div style="background:var(--card2);border-radius:8px;padding:8px;text-align:center;">
            <div style="font-size:14px;font-weight:700;color:var(--text);">0</div>
            <div style="font-size:9px;color:var(--hint);margin-top:1px;">Incidents</div>
          </div>
          <div style="background:var(--card2);border-radius:8px;padding:8px;text-align:center;">
            <div style="font-size:14px;font-weight:700;color:var(--green-light);">100%</div>
            <div style="font-size:9px;color:var(--hint);margin-top:1px;">Route match</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="acceptRequest()" style="flex:1;padding:11px;background:var(--purple);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Accept</button>
          <button onclick="declineRequest()" style="flex:1;padding:11px;background:var(--card2);color:var(--muted);border:0.5px solid var(--border2);border-radius:10px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer;">Decline</button>
        </div>
        <div id="req-toast" class="toast toast-ok" style="margin-top:10px;"></div>
      </div>

      <div class="pickup-card live">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div><div style="font-size:14px;font-weight:700;color:var(--text);">In progress · 7:02 AM &nbsp;<span style="color:var(--green-light);font-size:13px;">● En route</span></div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Tema Manhean › Osu Ako Adjei · Est. 12 min remaining</div></div>
          <span class="badge b-pink" style="flex-shrink:0;">Live</span>
        </div>
        <div style="margin-bottom:4px;">
          <div class="rr"><div class="rr-av" style="background:var(--primary-bg);color:var(--primary-light);">EO</div><span class="rr-name">Efua Owusu</span><span class="rr-tag tag-validated">Validated</span>&nbsp;<span class="rr-tag tag-preferred">Preferred</span>&nbsp;<span class="tag-verified">Verified</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--purple-bg);color:var(--purple-light);">YD</div><span class="rr-name">Yaw Darko</span><span class="rr-tag tag-validated">Validated</span>&nbsp;<span class="tag-verified">Verified</span></div>
        </div>
        <div class="trip-stats">
          <div class="ts"><div class="ts-val green">₵28</div><div class="ts-lbl">This trip</div></div>
          <div class="ts"><div class="ts-val">43 min</div><div class="ts-lbl">Elapsed</div></div>
          <div class="ts"><div class="ts-val">2 / 3</div><div class="ts-lbl">Seats used</div></div>
        </div>
        <button class="btn" style="background:var(--green);color:#fff;margin-bottom:8px;" onclick="showToast('t1')">Mark trip complete</button>
        <button onclick="go('co-cancel')" style="width:100%;padding:10px;background:transparent;color:var(--muted);border:0.5px solid var(--border);border-radius:10px;font-size:12px;font-weight:600;font-family:inherit;cursor:pointer;">Cancel this trip</button>
        <div id="t1" class="toast toast-ok" style="margin-top:10px;">₵26 credited to your wallet.</div>
      </div>
      <div class="pickup-card boarding">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div><div style="font-size:14px;font-weight:700;color:var(--text);">Boarding now · 7:15 AM &nbsp;<span style="color:var(--orange);font-size:13px;">● At pickup</span></div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Spintex Rd › CBD · 3 riders boarding</div></div>
          <span class="badge b-amber" style="flex-shrink:0;">Boarding</span>
        </div>
        <div style="margin-bottom:4px;">
          <div class="rr"><div class="rr-av" style="background:var(--orange-bg);color:var(--amber);">AA</div><span class="rr-name">Abena Asare</span><span class="rr-tag tag-validated">Validated</span>&nbsp;<span class="rr-tag tag-preferred">Preferred</span>&nbsp;<span class="tag-verified">Verified</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--card2);color:var(--hint);">KO</div><span class="rr-name">Kweku Ofori</span><span class="rr-tag tag-pending">Pending scan</span>&nbsp;<span class="tag-verified">Verified</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--purple-bg);color:var(--purple-light);">MB</div><span class="rr-name">Maame Boateng</span><span class="rr-tag tag-validated">Validated</span>&nbsp;<span class="tag-verified">Verified</span></div>
        </div>
        <div class="trip-stats">
          <div class="ts"><div class="ts-val orange">₵42</div><div class="ts-lbl">Est. earn</div></div>
          <div class="ts"><div class="ts-val">3 / 3</div><div class="ts-lbl">Seats full</div></div>
          <div class="ts"><div class="ts-val">22 km</div><div class="ts-lbl">Distance</div></div>
        </div>
        <button class="btn btn-primary" onclick="openScanner()" style="display:flex;align-items:center;justify-content:center;gap:8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/><rect x="3" y="16" width="5" height="5"/><path d="M21 16h-3a2 2 0 00-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 01-2 2H7"/></svg>
          Scan next QR pass
        </button>
      </div>
    </div></div>

    <!-- SCHEDULED -->
    <div id="co-sched" class="co-panel"><div class="page" style="padding-top:14px;">
      <div class="section-hd" style="margin-top:0;">Upcoming scheduled trips</div>
      <div class="pickup-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div><div style="font-size:14px;font-weight:700;color:var(--text);">Tomorrow · Thu 26 Mar · 6:45 AM</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Spintex Rd › Accra Mall · 2 riders confirmed</div></div>
          <span class="badge b-purple" style="flex-shrink:0;">Scheduled</span>
        </div>
        <div style="margin-bottom:4px;">
          <div class="rr"><div class="rr-av" style="background:var(--primary-bg);color:var(--primary-light);">EO</div><span class="rr-name">Efua Owusu</span><span class="rr-tag tag-preferred">Preferred</span>&nbsp;<span class="tag-verified">Verified</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--purple-bg);color:var(--purple-light);">YD</div><span class="rr-name">Yaw Darko</span><span class="rr-tag tag-confirmed">Confirmed</span>&nbsp;<span class="tag-verified">Verified</span></div>
        </div>
        <div class="trip-stats">
          <div class="ts"><div class="ts-val purple">₵28</div><div class="ts-lbl">Est. earn</div></div>
          <div class="ts"><div class="ts-val">2 / 3</div><div class="ts-lbl">Seats booked</div></div>
          <div class="ts"><div class="ts-val">1 seat</div><div class="ts-lbl">Still open</div></div>
        </div>
        <button class="btn" style="background:var(--purple-bg);color:var(--purple-light);border:0.5px solid var(--border2);" onclick="openRouteMap()">View route map</button>
      </div>
      <div class="pickup-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div><div style="font-size:14px;font-weight:700;color:var(--text);">Sunday 30 Mar · 8:00 AM</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Tema › Ridge Church · 3 riders</div></div>
          <span class="badge b-amber" style="flex-shrink:0;">Church route</span>
        </div>
        <div style="margin-bottom:4px;">
          <div class="rr"><div class="rr-av" style="background:var(--orange-bg);color:var(--amber);">AA</div><span class="rr-name">Abena Asare</span><span class="rr-tag tag-preferred">Preferred</span>&nbsp;<span class="tag-verified">Verified</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--green-bg);color:var(--green-light);">KF</div><span class="rr-name">Kofi Frempong</span><span class="rr-tag tag-confirmed">Confirmed</span>&nbsp;<span class="tag-verified">Verified</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--purple-bg);color:var(--purple-light);">MB</div><span class="rr-name">Maame Boateng</span><span class="rr-tag tag-confirmed">Confirmed</span>&nbsp;<span class="tag-verified">Verified</span></div>
        </div>
        <div class="trip-stats">
          <div class="ts"><div class="ts-val orange">₵42</div><div class="ts-lbl">Est. earn</div></div>
          <div class="ts"><div class="ts-val">3 / 3</div><div class="ts-lbl">Full</div></div>
          <div class="ts"><div class="ts-val">38 km</div><div class="ts-lbl">Distance</div></div>
        </div>
        <button class="btn" style="background:var(--purple-bg);color:var(--purple-light);border:0.5px solid var(--border2);" onclick="openRouteMap()">View route map</button>
      </div>
      <div class="pickup-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div><div style="font-size:14px;font-weight:700;color:var(--text);">Mon 31 Mar · 7:00 AM</div><div style="font-size:12px;color:var(--muted);margin-top:2px;">Tema › Osu · 1 rider confirmed</div></div>
          <span class="badge b-green" style="flex-shrink:0;">1 seat open</span>
        </div>
        <div style="margin-bottom:4px;">
          <div class="rr"><div class="rr-av" style="background:var(--primary-bg);color:var(--primary-light);">EO</div><span class="rr-name">Efua Owusu</span><span class="rr-tag tag-preferred">Preferred</span></div>
          <div class="rr"><div class="rr-av" style="background:var(--card2);color:var(--hint);">+1</div><span class="rr-name" style="color:var(--hint);font-style:italic;">Open seat — matching in progress</span></div>
        </div>
        <div class="trip-stats">
          <div class="ts"><div class="ts-val purple">₵14</div><div class="ts-lbl">Confirmed so far</div></div>
          <div class="ts"><div class="ts-val">1 / 2</div><div class="ts-lbl">Seats booked</div></div>
          <div class="ts"><div class="ts-val">Nightly</div><div class="ts-lbl">Match runs</div></div>
        </div>
        <button class="btn" style="background:var(--purple-bg);color:var(--purple-light);border:0.5px solid var(--border2);" onclick="showToast('t3')">Share open seat to pool</button>
        <div id="t3" class="toast toast-ok" style="margin-top:10px;">Open seat shared — you'll be notified when a rider is matched.</div>
      </div>
      <div class="section-hd">My availability</div>
      <div class="avail-card">
        <div class="toggle-row">
          <div><div style="font-size:14px;font-weight:700;color:var(--text);">Tomorrow availability</div><div style="font-size:12px;color:var(--muted);margin-top:3px;">Route: Tema › Osu · Departs 6:45 AM · Max 3 pax</div></div>
          <div class="toggle-wrap" onclick="this.classList.toggle('off')"><div class="toggle-knob"></div></div>
        </div>
        <div class="day-btns">
          <button class="day-btn on" onclick="this.classList.toggle('on')">Mon</button>
          <button class="day-btn on" onclick="this.classList.toggle('on')">Tue</button>
          <button class="day-btn on" onclick="this.classList.toggle('on')">Wed</button>
          <button class="day-btn on" onclick="this.classList.toggle('on')">Thu</button>
          <button class="day-btn on" onclick="this.classList.toggle('on')">Fri</button>
          <button class="day-btn" onclick="this.classList.toggle('on')">Sat</button>
          <button class="day-btn on" onclick="this.classList.toggle('on')">Sun</button>
        </div>
      </div>
    </div></div>

    <!-- EARNINGS -->
    <div id="co-earn" class="co-panel"><div class="page" style="padding-top:14px;">
      <div class="earn-grid">
        <div class="em"><div class="em-lbl">This month</div><div class="em-val">₵480</div><div class="em-sub">+12% vs last</div></div>
        <div class="em"><div class="em-lbl">Trips</div><div class="em-val">34</div><div class="em-sub">4.8 avg rating</div></div>
        <div class="em"><div class="em-lbl">Wallet</div><div class="em-val">₵210</div><div class="em-sub">Available now</div></div>
      </div>
      <!-- Referral promo banner -->
      <div onclick="go('co-referral')" style="background:var(--orange-bg);border:1px solid var(--orange);border-radius:14px;padding:14px 16px;display:flex;align-items:center;gap:12px;margin-bottom:16px;cursor:pointer;">
        <span style="font-size:26px;">🤝</span>
        <div style="flex:1;">
          <div style="font-size:14px;font-weight:700;color:var(--amber);">Refer a car owner — earn ₵20</div>
          <div style="font-size:12px;color:var(--muted);">Know someone with a car? 1 referral active · View projections →</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>
      <div class="section-hd" style="margin-top:0;">Withdraw earnings</div>
      <div class="wd-section">
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:14px;">Choose withdrawal method</div>
        <div class="method-grid" id="wdMethods">
          <div class="method sel" onclick="selWd(this)"><svg viewBox="0 0 24 24" style="stroke:var(--purple-light)"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><div><h5>Bank card</h5><p>Visa / Mastercard</p></div></div>
          <div class="method" onclick="selWd(this)"><svg viewBox="0 0 24 24" style="stroke:var(--primary-light)"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg><div><h5>MTN MoMo</h5><p>Mobile money</p></div></div>
          <div class="method" onclick="selWd(this)"><svg viewBox="0 0 24 24" style="stroke:var(--amber)"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg><div><h5>Vodafone Cash</h5><p>Mobile money</p></div></div>
          <div class="method" onclick="selWd(this)"><svg viewBox="0 0 24 24" style="stroke:var(--blue)"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><div><h5>AirtelTigo</h5><p>Mobile money</p></div></div>
          <div class="method method-full" onclick="selWd(this)"><svg viewBox="0 0 24 24" style="stroke:var(--muted)"><path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v11H4zm15 0h1v11h-1zM8 10h1v11H8zm7 0h1v11h-1z"/></svg><div><h5>Bank transfer</h5><p>Direct to Ghana bank account · 1–2 business days</p></div></div>
        </div>
        <div class="amt-row">
          <input class="amt-input" id="wdAmt" type="number" value="200" min="10" max="210" placeholder="Amount (₵)"/>
          <span class="amt-max">Max ₵210</span>
        </div>
        <button class="btn btn-purple" onclick="doWd()">Withdraw now</button>
        <div id="wdToast" class="toast" style="margin-top:10px;"></div>
      </div>
      <div class="section-hd" style="margin-top:0;">Recent transactions</div>
      <div class="tx-row"><div class="tx-icon" style="background:var(--green-bg);"><svg viewBox="0 0 24 24" style="stroke:var(--green-light)"><path d="M20 6L9 17l-5-5"/></svg></div><div class="tx-detail"><h5>Today · 2 riders · Tema › Osu</h5><p>7:02 AM · 43 min trip</p></div><span class="tx-amt" style="color:var(--green-light);">+₵26</span></div>
      <div class="tx-row"><div class="tx-icon" style="background:var(--green-bg);"><svg viewBox="0 0 24 24" style="stroke:var(--green-light)"><path d="M20 6L9 17l-5-5"/></svg></div><div class="tx-detail"><h5>Tue · 3 riders · Spintex › CBD</h5><p>7:15 AM · 38 min trip</p></div><span class="tx-amt" style="color:var(--green-light);">+₵39</span></div>
      <div class="tx-row"><div class="tx-icon" style="background:var(--primary-bg);"><svg viewBox="0 0 24 24" style="stroke:var(--primary-light)"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div><div class="tx-detail"><h5>Mon · Withdrawal to MTN MoMo</h5><p>+233 24 123 4567</p></div><span class="tx-amt" style="color:var(--primary-light);">−₵150</span></div>
    </div></div>

    <!-- PREFERRED RIDERS -->
    <div id="co-pref" class="co-panel"><div class="page" style="padding-top:14px;">
      <p style="font-size:13px;color:var(--muted);line-height:1.65;margin-bottom:20px;">Starred riders are pre-allocated a seat before your trip opens to the general pool.</p>
      <div class="pref-row"><div class="pref-av" style="background:var(--primary-bg);color:var(--primary-light);">EO</div><div class="pref-info"><h5>Efua Owusu</h5><p>Monthly pass · Tema › Osu · 5.0 ★</p></div><button class="star-btn on" onclick="this.classList.toggle('on')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button></div>
      <div class="pref-row"><div class="pref-av" style="background:var(--orange-bg);color:var(--amber);">AA</div><div class="pref-info"><h5>Abena Asare</h5><p>Monthly pass · Tema › Osu · 4.8 ★</p></div><button class="star-btn on" onclick="this.classList.toggle('on')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button></div>
      <div class="pref-row"><div class="pref-av" style="background:var(--purple-bg);color:var(--purple-light);">YD</div><div class="pref-info"><h5>Yaw Darko</h5><p>Weekly pass · Spintex › CBD · 4.9 ★</p></div><button class="star-btn" onclick="this.classList.toggle('on')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button></div>
      <div class="pref-row"><div class="pref-av" style="background:var(--green-bg);color:var(--green-light);">KF</div><div class="pref-info"><h5>Kofi Frempong</h5><p>Monthly pass · Tema › Ridge Church · 4.7 ★</p></div><button class="star-btn" onclick="this.classList.toggle('on')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button></div>
      <div class="pref-row"><div class="pref-av" style="background:var(--card2);color:var(--hint);">MB</div><div class="pref-info"><h5>Maame Boateng</h5><p>Monthly pass · Spintex › CBD · 4.6 ★</p></div><button class="star-btn on" onclick="this.classList.toggle('on')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button></div>
    </div></div>

  </div><!-- .scroll -->

  <!-- Car owner SOS safety bar — persistent across all co tabs -->
  <div class="co-sos-bar">
    <button class="co-sos-btn" onclick="go('co-panic')">
      <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      SOS
    </button>
    <button class="co-report-btn" onclick="showToast('co-report-toast')">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      Report rider
    </button>
  </div>
  <div id="co-report-toast" class="toast toast-ok" style="margin:0 18px 8px;display:none;">Report submitted — Nframa will review within 24 hours.</div>

  <!-- Car owner bottom nav -->
  <nav class="co-bnav">
    <div class="bnav-items">
      <div class="co-ni on" id="co-ni-live" onclick="coTab('live');coNavSel('live')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Live</span></div>
      <div class="co-ni" id="co-ni-sched" onclick="coTab('sched');coNavSel('sched')"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span>Schedule</span></div>
      <div class="co-ni" id="co-ni-earn" onclick="coTab('earn');coNavSel('earn')"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg><span>Earnings</span></div>
      <div class="co-ni" id="co-ni-pref" onclick="coTab('pref');coNavSel('pref')"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span>Preferred</span></div>
    </div>
  </nav>
</div><!-- s-co -->

<!-- ══ CAR OWNER PANIC SCREEN ═══════════════════════════ -->

<div class="screen" id="s-co-panic">
  <div class="sb" style="background:#0D0101;border-bottom:0.5px solid rgba(255,255,255,0.08);">
    <span class="sb-time" style="color:#fff;">9:41</span>
    <button onclick="go('co')" style="background:rgba(255,255,255,0.12);border:none;color:#fff;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;padding:6px 14px;border-radius:100px;">Cancel</button>
  </div>
  <div class="panic-screen-bg">
    <div style="text-align:center;margin-bottom:28px;">
      <div class="overline" style="color:rgba(255,255,255,.5);margin-bottom:8px;">Car owner emergency SOS</div>
      <h2 style="font-size:26px;font-weight:800;color:#fff;line-height:1.2;">Are you in danger?</h2>
    </div>

    <!-- Big panic ring -->
    <div class="panic-ring" onclick="activateCoSOSPress()" id="co-panic-ring">
      <div class="panic-ring-inner">
        <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div style="font-size:22px;font-weight:900;color:#fff;margin-top:10px;">SOS</div>
        <div class="panic-count" id="co-panic-count">Hold 3s to activate</div>
      </div>
    </div>

    <!-- What happens -->
    <div style="background:rgba(255,255,255,0.07);border-radius:14px;padding:16px;margin-bottom:20px;width:100%;">
      <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:10px;letter-spacing:.06em;text-transform:uppercase;">When activated</div>
      <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">📍</span><span style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">Your GPS, vehicle plate GR-2847-20, and all passenger details sent to Nframa ops</span></div>
      <div style="display:flex;gap:10px;margin-bottom:8px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">📱</span><span style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">SMS to your 2 emergency contacts with live tracking link — works without data</span></div>
      <div style="display:flex;gap:10px;align-items:flex-start;"><span style="font-size:16px;flex-shrink:0;">🚨</span><span style="font-size:13px;color:rgba(255,255,255,.8);line-height:1.5;">Ghana Police 191 alerted with vehicle info, route, and passenger names</span></div>
    </div>

    <!-- Passengers on current trip (so police have their details) -->
    <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:12px;width:100%;margin-bottom:0;">
      <div style="font-size:11px;color:rgba(255,255,255,.4);letter-spacing:.07em;text-transform:uppercase;margin-bottom:8px;">Passengers on board</div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:0.5px solid rgba(255,255,255,.08);"><span style="font-size:13px;color:rgba(255,255,255,.8);">Abena Asare</span><span style="font-size:11px;color:rgba(255,255,255,.4);">Monthly · NFR-2025-04855</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:0.5px solid rgba(255,255,255,.08);"><span style="font-size:13px;color:rgba(255,255,255,.8);">Kweku Ofori</span><span style="font-size:11px;color:rgba(255,255,255,.4);">Weekly · NFR-2025-04860</span></div>
      <div style="display:flex;justify-content:space-between;padding:6px 0;"><span style="font-size:13px;color:rgba(255,255,255,.8);">Maame Boateng</span><span style="font-size:11px;color:rgba(255,255,255,.4);">Monthly · NFR-2025-04831</span></div>
    </div>

    <!-- SOS sent state -->
    <div id="co-sos-sent" style="display:none;margin-top:16px;background:rgba(29,158,117,0.2);border:1px solid #1D9E75;border-radius:14px;padding:16px;width:100%;text-align:center;">
      <div style="font-size:20px;font-weight:800;color:#5DCAA5;margin-bottom:6px;">SOS Sent ✓</div>
      <div style="font-size:13px;color:rgba(255,255,255,.7);">Nframa ops, 2 contacts &amp; police notified<br>Stay calm — keep driving if safe to do so</div>
    </div>
  </div>
</div>

<!-- ══ QR SCANNER ═══════════════════════════════════════ -->

<div class="screen" id="s-scanner">
  <div class="sb" style="background:#000;"><span class="sb-time" style="color:#fff;">9:41</span></div>
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#000;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:rgba(0,0,0,0.75);"></div>
    <!-- Viewfinder -->
    <div style="position:relative;width:240px;height:240px;z-index:2;">
      <div style="position:absolute;top:0;left:0;width:36px;height:36px;border-top:3px solid var(--primary);border-left:3px solid var(--primary);border-radius:4px 0 0 0;"></div>
      <div style="position:absolute;top:0;right:0;width:36px;height:36px;border-top:3px solid var(--primary);border-right:3px solid var(--primary);border-radius:0 4px 0 0;"></div>
      <div style="position:absolute;bottom:0;left:0;width:36px;height:36px;border-bottom:3px solid var(--primary);border-left:3px solid var(--primary);border-radius:0 0 0 4px;"></div>
      <div style="position:absolute;bottom:0;right:0;width:36px;height:36px;border-bottom:3px solid var(--primary);border-right:3px solid var(--primary);border-radius:0 0 4px 0;"></div>
      <!-- Ghost QR -->
      <div style="position:absolute;inset:24px;opacity:.07;display:flex;align-items:center;justify-content:center;">
        <svg width="160" height="160" viewBox="0 0 128 128" fill="white"><rect x="0" y="0" width="44" height="44" rx="4"/><rect x="8" y="8" width="28" height="28" rx="2" fill="#000"/><rect x="84" y="0" width="44" height="44" rx="4"/><rect x="92" y="8" width="28" height="28" rx="2" fill="#000"/><rect x="0" y="84" width="44" height="44" rx="4"/><rect x="8" y="92" width="28" height="28" rx="2" fill="#000"/><rect x="52" y="0" width="20" height="8" rx="1"/><rect x="52" y="12" width="12" height="8" rx="1"/><rect x="68" y="12" width="12" height="8" rx="1"/><rect x="52" y="24" width="20" height="8" rx="1"/><rect x="52" y="52" width="8" height="18" rx="1"/><rect x="64" y="52" width="8" height="12" rx="1"/><rect x="76" y="52" width="10" height="8" rx="1"/><rect x="84" y="52" width="18" height="8" rx="1"/><rect x="84" y="64" width="8" height="12" rx="1"/><rect x="100" y="64" width="20" height="8" rx="1"/></svg>
      </div>
      <!-- Scan line -->
      <div id="scan-line" style="position:absolute;left:8px;right:8px;height:2.5px;background:var(--primary);border-radius:2px;top:20px;animation:scanline 1.8s ease-in-out infinite;opacity:.9;"></div>
    </div>
    <!-- Label -->
    <div style="position:relative;z-index:2;text-align:center;margin-top:32px;padding:0 40px;">
      <p style="font-size:16px;font-weight:600;color:#fff;margin-bottom:6px;">Point camera at rider's QR pass</p>
      <p style="font-size:12px;color:rgba(255,255,255,.5);">Hold steady · auto-detects</p>
    </div>
    <!-- Cancel -->
    <div style="position:relative;z-index:2;width:100%;padding:32px 24px 0;">
      <button onclick="cancelScanner()" style="width:100%;padding:15px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:14px;color:#fff;font-size:15px;font-weight:600;font-family:inherit;cursor:pointer;">Cancel</button>
    </div>
    <!-- Success overlay -->
    <div id="scan-success" style="display:none;position:absolute;inset:0;background:rgba(29,158,117,0.94);flex-direction:column;align-items:center;justify-content:center;z-index:10;">
      <div style="width:80px;height:80px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div style="font-size:22px;font-weight:800;color:#fff;margin-bottom:8px;">Pass validated ✓</div>
      <div style="font-size:15px;color:rgba(255,255,255,.85);margin-bottom:6px;">Kweku Ofori</div>
      <div style="font-size:13px;color:rgba(255,255,255,.65);">NFR-2025-04860 · Monthly pass</div>
    </div>
  </div>
</div>

<!-- ══ ROUTE MAP PICKER ════════════════════════════════ -->

<div class="screen" id="s-co-routes">
  <div class="sb"><span class="sb-time">9:41</span><div class="sb-icons"><svg viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg><svg viewBox="0 0 24 24"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg></div></div>
  <div class="scroll"><div class="page" style="padding-top:8px;">
    <button class="back" onclick="closeRouteMap()"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div class="overline" style="margin-bottom:3px;">Choose your route</div>
    <h2 class="page-title" style="margin-bottom:4px;">Route corridors</h2>
    <p style="font-size:13px;color:var(--muted);margin-bottom:20px;">Select a preferred route for your trip · demand updated nightly</p>
    <div onclick="selectRoute('Tema › Accra CBD')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:16px;margin-bottom:12px;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Tema › Accra CBD</div><div style="font-size:12px;color:var(--muted);">6:00–8:00 AM · Mon–Fri · 38 km</div></div><span class="badge b-green">HIGH DEMAND</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:82%;background:var(--green);"></div></div>
      <div style="font-size:13px;color:var(--muted);">142 riders · 76 cars · avg ₵28 per trip</div>
    </div>
    <div onclick="selectRoute('Spintex Rd › Accra Mall')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:16px;margin-bottom:12px;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Spintex Rd › Accra Mall</div><div style="font-size:12px;color:var(--muted);">6:30–8:30 AM · Mon–Fri · 22 km</div></div><span class="badge b-purple">GROWING</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:65%;background:var(--green);"></div></div>
      <div style="font-size:13px;color:var(--muted);">89 riders · 58 cars · avg ₵19 per trip</div>
    </div>
    <div onclick="selectRoute('Tema › Ridge Church')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:16px;margin-bottom:12px;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Tema › Ridge Church</div><div style="font-size:12px;color:var(--muted);">8:00–9:00 AM · Sundays · 36 km</div></div><span class="badge b-amber">CHURCH ROUTE</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:70%;background:var(--amber);"></div></div>
      <div style="font-size:13px;color:var(--muted);">54 riders · 32 cars · avg ₵42 per trip</div>
    </div>
    <div onclick="selectRoute('Legon › Accra Mall')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:16px;margin-bottom:12px;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">Legon › Accra Mall</div><div style="font-size:12px;color:var(--muted);">7:00–9:00 AM · Mon–Sat · 19 km</div></div><span class="badge b-amber">SUPPLY GAP</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:55%;background:var(--amber);"></div></div>
      <div style="font-size:13px;color:var(--muted);">74 riders · 41 cars · avg ₵16 per trip</div>
    </div>
    <div onclick="selectRoute('East Legon › CBD')" style="background:var(--card);border:0.5px solid var(--border);border-radius:16px;padding:16px;margin-bottom:12px;cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;"><div><div style="font-size:16px;font-weight:700;color:var(--text);">East Legon › CBD</div><div style="font-size:12px;color:var(--muted);">6:45–8:15 AM · Mon–Fri · 24 km</div></div><span class="badge b-green">WELL MATCHED</span></div>
      <div class="track" style="margin-bottom:8px;"><div class="fill" style="width:91%;background:var(--green);"></div></div>
      <div style="font-size:13px;color:var(--muted);">61 riders · 50 cars · avg ₵21 per trip</div>
    </div>
    <div id="route-toast" class="toast toast-ok" style="margin-top:4px;"></div>
  </div></div>
</div>



<nav class="bnav" id="rider-bnav">
  <div class="bnav-items">
    <div class="ni on" id="ni-home" onclick="goNav('home','home')"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Home</span></div>
    <div class="ni" id="ni-routes" onclick="goNav('routes','routes')"><svg viewBox="0 0 24 24"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/></svg><span>Routes</span></div>
    <div class="ni" id="ni-ride" onclick="goNav('ride','ride')"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg><span>Ride</span></div>
    <div class="ni" id="ni-pass" onclick="goNav('pass','pass')"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg><span>Pass</span></div>
    <div class="ni" id="ni-plans" onclick="goNav('plans','plans')"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><span>Plans</span></div>
  </div>
</nav>

<!-- ══ PLAN CHANGE OVERLAY MODAL (Guardian) ════════════ -->
<div id="gd-plan-modal" style="display:none;position:absolute;inset:0;z-index:9999;background:rgba(0,0,0,0.6);align-items:flex-end;justify-content:center;">
  <div style="background:var(--bg);border-radius:22px 22px 0 0;padding:24px 18px 36px;width:100%;max-height:90%;overflow-y:auto;">
    <!-- Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <div>
        <div style="font-size:17px;font-weight:800;color:var(--text);">Change Kofi's plan</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px;">Select a new plan and confirm payment via MoMo</div>
      </div>
      <button onclick="closeGdPlanModal()" style="background:var(--card2);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:18px;color:var(--muted);font-family:inherit;display:flex;align-items:center;justify-content:center;flex-shrink:0;">✕</button>
    </div>
    <!-- Plan options -->
    <div onclick="selectGdPlanChange(this,'Daily','₵10/day','daily')" class="gd-modal-plan" style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;">
      <div>
        <div style="font-size:15px;font-weight:700;color:var(--text);">Daily</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px;">Pay per day · Flexible · Cancel night before</div>
      </div>
      <div style="font-size:22px;font-weight:800;color:var(--text);">₵10</div>
    </div>
    <div onclick="selectGdPlanChange(this,'Weekly','₵45/week','weekly')" class="gd-modal-plan" style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;">
      <div>
        <div style="font-size:15px;font-weight:700;color:var(--text);">Weekly</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px;">5 school days · Renews Monday</div>
      </div>
      <div style="font-size:22px;font-weight:800;color:var(--text);">₵45</div>
    </div>
    <div onclick="selectGdPlanChange(this,'Monthly','₵160/month','monthly')" class="gd-modal-plan" style="background:var(--card);border:1.5px solid var(--blue);border-radius:14px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:10px;">
      <div>
        <div style="font-size:15px;font-weight:700;color:var(--text);">Monthly</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px;">~22 school days · Current plan</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="background:#0A2240;color:var(--blue);font-size:9px;font-weight:700;padding:3px 8px;border-radius:100px;">CURRENT</span>
        <div style="font-size:22px;font-weight:800;color:var(--blue);">₵160</div>
      </div>
    </div>
    <div onclick="selectGdPlanChange(this,'Termly','₵432 once','termly')" class="gd-modal-plan" style="background:var(--card);border:0.5px solid var(--border);border-radius:14px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;margin-bottom:18px;">
      <div>
        <div style="font-size:15px;font-weight:700;color:var(--text);">Termly</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px;">~15 weeks · Pay once · Save 10%</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="background:var(--green-bg);color:var(--green-light);font-size:9px;font-weight:700;padding:3px 8px;border-radius:100px;">SAVE 10%</span>
        <div style="font-size:22px;font-weight:800;color:var(--green-light);">₵432</div>
      </div>
    </div>
    <!-- Confirm button -->
    <button id="gd-confirm-plan-btn" onclick="confirmGdPlanChange()" style="width:100%;padding:15px;background:var(--blue);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:700;font-family:inherit;cursor:pointer;opacity:.35;transition:opacity .2s;" disabled>Select a plan above to continue</button>
    <div id="gd-card-toast" class="toast toast-ok" style="margin-top:12px;"></div>
  </div>
</div>

</div><!-- /.app -->`

export default function Home() {
  useEffect(() => {
    // Prototype JS — runs after DOM is ready
    var cur = 'splash', selRole = null, etaSec = 45, etaTimer = null, scanTimer = null;
var riderScreens = ['home','routes','detail','ride','matches','confirmed','pass','plans','panic','share','checkin','co','co-panic','co-routes','scanner','chat','rating','cancel','driver-cancelled','corporate','phone','otp','setup-rider','plans-ob','setup-owner','owner-pending','corp-link','setup-hr','hr-dashboard','co-cancel','group','offline','rider-referral','co-referral'];
var guardianScreens = ['gd-pitch','setup-guardian','child-profile','gd-schedule','gd-plans','gd-home','gd-live','gd-driver','gd-card','gd-history'];
var isDark = true;

function toggleTheme() {
  isDark = !isDark;
  var app = document.getElementById('nfApp');
  app.setAttribute('data-theme', isDark ? 'dark' : 'light');
  var icon = document.getElementById('theme-icon');
  if (isDark) {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
  } else {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  }
}

function go(id) {
  var old = document.getElementById('s-' + cur);
  if (old) old.classList.remove('active');
  cur = id;
  var el = document.getElementById('s-' + id);
  if (el) { el.classList.add('active'); var sc = el.querySelector('.scroll'); if (sc) sc.scrollTop = 0; }

  /* Rider nav — only on rider screens */
  var rbnav = document.getElementById('rider-bnav');
  if (rbnav) rbnav.classList.toggle('show', riderScreens.indexOf(id) >= 0);

  /* Guardian nav — hide ALL, then show only the one inside the active screen */
  document.querySelectorAll('.gd-bnav').forEach(function(n){ n.style.display = 'none'; });
  if (guardianScreens.indexOf(id) >= 0 && el) {
    var gdnav = el.querySelector('.gd-bnav');
    if (gdnav) gdnav.style.display = 'block';
  }

  if (id === 'co-panic') {
    var coring = document.getElementById('co-panic-ring'); if (coring) coring.style.display = 'flex';
    var cosent = document.getElementById('co-sos-sent'); if (cosent) cosent.style.display = 'none';
    var cocnt = document.getElementById('co-panic-count'); if (cocnt) cocnt.textContent = 'Hold 3s to activate';
    if (coPanicHold) { clearInterval(coPanicHold); coPanicHold = null; }
  }
  if (id === 'panic') {
    var ring = document.getElementById('panic-ring'); if (ring) ring.style.display = 'flex';
    var sent = document.getElementById('sos-sent'); if (sent) sent.style.display = 'none';
    var cnt = document.getElementById('panic-count'); if (cnt) cnt.textContent = 'Hold 3s to activate';
    if (panicHold) { clearInterval(panicHold); panicHold = null; }
  }
  if (id === 'checkin') {
    var icon = document.getElementById('checkin-icon');
    if (icon) { icon.style.background = 'var(--primary)'; icon.style.animation = ''; }
    var ok = document.getElementById('checkin-ok'); if (ok) ok.style.display = 'none';
  }
  if (id !== 'confirmed') dismissDeviation();
  if (id === 'pass') buildDots();
  if (id === 'confirmed') startEta(); else stopEta();
}

function goNav(id, navKey) {
  go(id);
  document.querySelectorAll('.ni').forEach(function(n) { n.classList.remove('on'); });
  var ni = document.getElementById('ni-' + navKey);
  if (ni) ni.classList.add('on');
}

function pickRole(r) {
  selRole = r;
  ['rider','owner','hr','guardian'].forEach(function(x) {
    var el = document.getElementById('rc-' + x);
    if (el) el.style.border = x === r ? '1.5px solid var(--primary)' : '0.5px solid var(--border)';
  });
  document.getElementById('continue-btn').style.opacity = '1';
}

function doRole() {
  if (!selRole) return;
  if (selRole === 'owner')    go('setup-owner');
  else if (selRole === 'hr') go('setup-hr');
  else if (selRole === 'guardian') go('gd-pitch');
  else go('setup-rider');
}

/* Guardian nav */
function gdNav(screenId, navKey) {
  go(screenId);
  /* highlight the right nav item across all gd navs */
  document.querySelectorAll('.gd-ni').forEach(function(n) { n.classList.remove('on'); });
  /* key → partial id match */
  document.querySelectorAll('.gd-ni').forEach(function(n) {
    var sp = n.querySelector('span');
    if (!sp) return;
    var label = sp.textContent.toLowerCase();
    if (navKey === 'home' && label === 'home') n.classList.add('on');
    else if (navKey === 'live' && label === 'live') n.classList.add('on');
    else if (navKey === 'card' && label === 'pass card') n.classList.add('on');
    else if (navKey === 'driver' && label === 'driver') n.classList.add('on');
    else if (navKey === 'history' && label === 'history') n.classList.add('on');
  });
}

/* Guardian plan change modal */
var gdSelectedPlan = null;
function openGdPlanModal() {
  var m = document.getElementById('gd-plan-modal');
  if (!m) return;
  m.style.display = 'flex';
  gdSelectedPlan = null;
  /* Reset all plan option borders */
  document.querySelectorAll('.gd-modal-plan').forEach(function(p) {
    if (p.getAttribute('onclick') && p.getAttribute('onclick').indexOf('monthly') > -1) {
      p.style.border = '1.5px solid var(--blue)';
    } else {
      p.style.border = '0.5px solid var(--border)';
    }
  });
  var btn = document.getElementById('gd-confirm-plan-btn');
  if (btn) { btn.style.opacity = '.35'; btn.disabled = true; btn.textContent = 'Select a plan above to continue'; }
  var toast = document.getElementById('gd-card-toast');
  if (toast) toast.style.display = 'none';
}
function closeGdPlanModal() {
  var m = document.getElementById('gd-plan-modal');
  if (m) m.style.display = 'none';
  gdSelectedPlan = null;
}
function selectGdPlanChange(el, planName, planPrice, planKey) {
  document.querySelectorAll('.gd-modal-plan').forEach(function(p) {
    p.style.border = '0.5px solid var(--border)';
  });
  el.style.border = '1.5px solid var(--blue)';
  gdSelectedPlan = { name: planName, price: planPrice, key: planKey };
  var btn = document.getElementById('gd-confirm-plan-btn');
  if (btn) {
    btn.style.opacity = '1';
    btn.disabled = false;
    btn.textContent = 'Confirm ' + planName + ' (' + planPrice + ') \\u2014 Pay with MoMo \\u2192';
  }
}
function confirmGdPlanChange() {
  if (!gdSelectedPlan) return;
  var t = document.getElementById('gd-card-toast');
  if (t) {
    t.textContent = gdSelectedPlan.name + ' plan confirmed \\u2014 ' + gdSelectedPlan.price + ' charged via MoMo \\u2713';
    t.style.display = 'block';
  }
  setTimeout(function() {
    if (t) t.style.display = 'none';
    closeGdPlanModal();
  }, 2500);
}

/* Guardian plan selection (onboarding plan picker) */
function pickGdPlan(el, plan) {
  document.querySelectorAll('.gd-plan-card').forEach(function(c) {
    c.style.border = '0.5px solid var(--border)';
  });
  el.style.border = '1.5px solid var(--blue)';
  var t = document.getElementById('gd-plan-toast');
  var labels = {daily:'Daily plan selected — ₵10/day', weekly:'Weekly plan selected — ₵45/week', monthly:'Monthly plan selected — ₵160/month', termly:'Termly plan selected — ₵432 (10% saving)'};
  if (t) { t.textContent = labels[plan] || 'Plan selected'; t.style.display = 'block'; setTimeout(function(){t.style.display='none';},2500); }
}

/* Guardian toasts */
function showGdToast(id, msg) {
  var t = document.getElementById(id);
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 4000);
}

/* HR dashboard tabs */
function hrTab(id) {
  document.querySelectorAll('.hr-panel').forEach(function(p) { p.classList.remove('on'); });
  var panel = document.getElementById('hr-' + id);
  if (panel) panel.classList.add('on');
}
function hrNavSel(id) {
  document.querySelectorAll('.hr-ni').forEach(function(n) { n.classList.remove('on'); });
  var ni = document.getElementById('hr-ni-' + id);
  if (ni) ni.classList.add('on');
}
function showHRToast(msg) {
  /* find whichever toast is visible in the current hr panel */
  var ids = ['hr-toast','hr-toast-emp','hr-toast-bill','hr-toast-esg'];
  var t = null;
  ids.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { var panel = el.closest('.hr-panel'); if (panel && panel.classList.contains('on')) t = el; }
  });
  if (!t) t = document.getElementById('hr-toast');
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 3500);
}

/* Corporate code validation (rider onboarding) */
function validateCorpCode(inp) {
  var btn = document.getElementById('corp-link-btn');
  var res = document.getElementById('corp-code-result');
  var val = inp.value.trim().toUpperCase();
  if (val.length >= 4) {
    btn.style.opacity = '1';
    if (val === 'GHL-2025') {
      res.style.display = 'flex';
      res.style.background = 'var(--green-bg)';
      res.style.border = '0.5px solid var(--green)';
      res.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-light)" stroke-width="2.2" stroke-linecap="round" style="flex-shrink:0"><path d="M20 6L9 17l-5-5"/></svg><span style="font-size:13px;color:var(--green-light);font-weight:600;">Ghana Home Loans Ltd — verified ✓</span>';
    } else {
      res.style.display = 'flex';
      res.style.background = 'var(--primary-bg)';
      res.style.border = '0.5px solid var(--primary)';
      res.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" stroke-width="2.2" stroke-linecap="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span style="font-size:13px;color:var(--primary-light);font-weight:600;">Code not found — check with your HR team</span>';
    }
  } else {
    btn.style.opacity = '0.3';
    res.style.display = 'none';
  }
}
function submitCorpCode() {
  var val = (document.getElementById('corp-code-input') ? document.getElementById('corp-code-input').value.trim().toUpperCase() : '');
  if (val === 'GHL-2025') {
    var t = document.getElementById('g-toast-corp'); if (!t) return;
    t.textContent = 'Linked to Ghana Home Loans Ltd — your pass is now employer-paid 🎉';
    t.style.display = 'block';
    setTimeout(function() { t.style.display = 'none'; goNav('home', 'home'); }, 2500);
  }
}

/* Onboarding helpers */
function selTime(el) {
  el.parentNode.querySelectorAll('.time-pill').forEach(function(t) { t.classList.remove('on'); });
  el.classList.add('on');
}
function pickObPlan(p) {
  ['daily','weekly','monthly'].forEach(function(x) {
    var el = document.getElementById('ob-p-' + x);
    if (el) el.style.border = x === p ? '1.5px solid var(--primary)' : '0.5px solid var(--border)';
  });
}
function markDocUploaded(el, name) {
  el.innerHTML = '<svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:var(--green-light);fill:none;stroke-width:2;stroke-linecap:round;margin-bottom:6px;"><path d="M20 6L9 17l-5-5"/></svg><p style="color:var(--green-light);font-size:13px;font-weight:700;">' + name + ' uploaded ✓</p>';
  el.style.borderColor = 'var(--green)'; el.style.background = 'var(--green-bg)'; el.onclick = null;
}
function showToastGlobal(msg) {
  var t = document.getElementById('g-toast');
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 3500);
}

/* Chat */
function sendChatMsg() {
  var inp = document.getElementById('chat-msg');
  var text = inp ? inp.value.trim() : '';
  if (!text) return;
  var wrap = document.querySelector('#s-chat .msg-wrap');
  if (!wrap) return;
  var b = document.createElement('div');
  b.className = 'msg-bubble msg-out';
  b.innerHTML = '<div>' + text + '</div><div class="msg-time">Just now</div>';
  wrap.appendChild(b);
  inp.value = '';
  var sc = document.getElementById('s-chat') ? document.getElementById('s-chat').querySelector('.scroll') : null;
  if (sc) sc.scrollTop = sc.scrollHeight;
}
function sendQuickReply(btn, text) {
  var wrap = document.querySelector('#s-chat .msg-wrap');
  if (!wrap) return;
  var b = document.createElement('div');
  b.className = 'msg-bubble msg-out';
  b.innerHTML = '<div>' + text + '</div><div class="msg-time">Just now</div>';
  wrap.appendChild(b);
  btn.style.opacity = '.4'; btn.onclick = null;
  var sc = document.getElementById('s-chat') ? document.getElementById('s-chat').querySelector('.scroll') : null;
  if (sc) sc.scrollTop = sc.scrollHeight;
}

/* Rating */
function rateStar(n) {
  document.querySelectorAll('.star-tap').forEach(function(s, i) { s.classList.toggle('on', i < n); });
}
function submitRating() {
  var t = document.getElementById('rating-toast');
  t.textContent = 'Rating submitted — thank you! Kwame A. has been notified.';
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; goNav('home', 'home'); }, 2200);
}

/* Corporate toast */
function showCorpToast(msg) {
  var t = document.getElementById('corp-toast');
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 3500);
}

/* Rider cancel reason selection */
function selectCancelReason(el, reason) {
  document.querySelectorAll('.cancel-reason-btn').forEach(function(b) {
    b.style.border = '0.5px solid var(--border)';
    b.style.background = 'var(--card)';
  });
  el.style.border = '1.5px solid var(--primary)';
  el.style.background = 'var(--primary-bg)';
  var btn = document.getElementById('confirm-cancel-btn') || document.getElementById('co-cancel-confirm-btn');
  if (btn) btn.style.opacity = '1';
}
function confirmRiderCancel() {
  var t = document.getElementById('cancel-toast');
  if (t) { t.textContent = 'Ride cancelled. Kwame A. has been notified. Pass ride protected.'; t.style.display = 'block'; }
  setTimeout(function() { goNav('home','home'); }, 2000);
}
function confirmOwnerCancel() {
  var t = document.getElementById('co-cancel-toast');
  if (t) { t.textContent = 'Trip cancelled. Riders notified. Nframa is finding replacements.'; t.style.display = 'block'; }
  setTimeout(function() { t.style.display = 'none'; go('co'); coTab('live'); coNavSel('live'); }, 2500);
}

/* Commute group */
function sendGroupMsg() {
  var inp = document.getElementById('group-msg-input');
  var text = inp ? inp.value.trim() : '';
  if (!text) return;
  var wrap = document.getElementById('group-msg-wrap');
  if (!wrap) return;
  var outer = document.createElement('div');
  outer.style.cssText = 'align-self:flex-end;margin-bottom:10px;max-width:88%;';
  outer.innerHTML = '<div class="msg-bubble msg-out" style="margin-bottom:2px;"><div>' + text + '</div></div><div style="font-size:10px;color:var(--hint);text-align:right;padding-right:4px;">Just now</div>';
  wrap.appendChild(outer);
  inp.value = '';
  var sc = document.getElementById('s-group') ? document.getElementById('s-group').querySelector('.scroll') : null;
  if (sc) sc.scrollTop = sc.scrollHeight;
}
function sendGroupQuick(text) {
  var wrap = document.getElementById('group-msg-wrap');
  if (!wrap) return;
  var outer = document.createElement('div');
  outer.style.cssText = 'align-self:flex-end;margin-bottom:10px;max-width:88%;';
  outer.innerHTML = '<div class="msg-bubble msg-out" style="margin-bottom:2px;"><div>' + text + '</div></div><div style="font-size:10px;color:var(--hint);text-align:right;padding-right:4px;">Just now</div>';
  wrap.appendChild(outer);
  var sc = document.getElementById('s-group') ? document.getElementById('s-group').querySelector('.scroll') : null;
  if (sc) sc.scrollTop = sc.scrollHeight;
}
function showGroupToast(msg) {
  var t = document.getElementById('group-toast');
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 3000);
}

/* Offline screen */
function showOfflineToast(msg) {
  var t = document.getElementById('offline-toast');
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 3000);
}



function pickPlan(p) {
  ['daily','weekly','monthly'].forEach(function(x) {
    document.getElementById('p-' + x).style.border = x === p ? '1.5px solid var(--primary)' : '0.5px solid var(--border)';
  });
}

function confirmDriver(initials, name, car, eta) {
  var set = function(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; };
  set('conf-av', initials); set('conf-name', name); set('conf-car', car); set('conf-eta', eta);
  go('confirmed');
}

function coTab(id) {
  document.querySelectorAll('.co-panel').forEach(function(p) { p.classList.remove('on'); });
  var panel = document.getElementById('co-' + id);
  if (panel) panel.classList.add('on');
}

function coNavSel(id) {
  document.querySelectorAll('.co-ni').forEach(function(n) { n.classList.remove('on'); });
  var ni = document.getElementById('co-ni-' + id);
  if (ni) ni.classList.add('on');
}

function selWd(el) {
  document.querySelectorAll('#wdMethods .method').forEach(function(m) { m.classList.remove('sel'); });
  el.classList.add('sel');
}

function doWd() {
  var amt = parseFloat(document.getElementById('wdAmt').value) || 0;
  var t = document.getElementById('wdToast');
  if (amt > 0 && amt <= 210) {
    t.textContent = 'Withdrawal of ₵' + amt.toFixed(2) + ' initiated — arrives within 24 hours';
    t.className = 'toast toast-ok';
  } else {
    t.textContent = 'Please enter an amount between ₵1 and ₵210';
    t.className = 'toast toast-err';
  }
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 5000);
}

function showToast(id) {
  var t = document.getElementById(id);
  if (!t) return;
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 4000);
}

/* Car owner SOS */
var coPanicHold = null, coPanicCount = 3;
function activateCoSOSPress() {
  if (coPanicHold) return;
  coPanicCount = 3;
  var cnt = document.getElementById('co-panic-count');
  if (cnt) cnt.textContent = 'Hold ' + coPanicCount + 's\\u2026';
  coPanicHold = setInterval(function() {
    coPanicCount--;
    if (cnt) cnt.textContent = coPanicCount > 0 ? 'Hold ' + coPanicCount + 's\\u2026' : 'Sending SOS\\u2026';
    if (coPanicCount <= 0) {
      clearInterval(coPanicHold); coPanicHold = null;
      var ring = document.getElementById('co-panic-ring');
      if (ring) ring.style.display = 'none';
      var sent = document.getElementById('co-sos-sent');
      if (sent) sent.style.display = 'block';
    }
  }, 1000);
}

/* Incoming request accept / decline */
function acceptRequest() {
  var t = document.getElementById('req-toast');
  t.textContent = 'Adjoa Owusu added — seat confirmed.';
  t.className = 'toast toast-ok';
  t.style.display = 'block';
  setTimeout(function() {
    t.style.display = 'none';
    var c = document.getElementById('req-card'); if (c) c.style.display = 'none';
  }, 2500);
}
function declineRequest() {
  var t = document.getElementById('req-toast');
  t.textContent = 'Request declined — rider offered next available car.';
  t.className = 'toast toast-err';
  t.style.display = 'block';
  setTimeout(function() {
    t.style.display = 'none'; t.className = 'toast toast-ok';
    var c = document.getElementById('req-card'); if (c) c.style.display = 'none';
  }, 2500);
}

/* QR Scanner */
function openScanner() {
  var succ = document.getElementById('scan-success');
  if (succ) succ.style.display = 'none';
  go('scanner');
  if (scanTimer) clearTimeout(scanTimer);
  scanTimer = setTimeout(function() {
    var s = document.getElementById('scan-success');
    if (s) s.style.display = 'flex';
    scanTimer = setTimeout(function() {
      go('co'); coTab('live'); coNavSel('live');
    }, 2200);
  }, 2400);
}
function cancelScanner() {
  if (scanTimer) { clearTimeout(scanTimer); scanTimer = null; }
  go('co'); coTab('live'); coNavSel('live');
}

/* Route map */
function openRouteMap() { go('co-routes'); }
function closeRouteMap() { go('co'); coTab('sched'); coNavSel('sched'); }
function selectRoute(name) {
  var t = document.getElementById('route-toast');
  t.textContent = name + ' set as your preferred route.';
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; closeRouteMap(); }, 2000);
}

/* Heatmap */
function buildHeatmap() {
  var data = [{l:'5:30–6:00',v:8},{l:'6:00–6:30',v:25},{l:'6:30–7:00',v:38},{l:'7:00–7:30',v:33},{l:'7:30–8:00',v:21},{l:'8:00–8:30',v:11}];
  var c = document.getElementById('heatmap-container');
  if (!c) return;
  c.innerHTML = '';
  data.forEach(function(d) {
    var pct = d.v / 38;
    var col = pct >= 0.85 ? '#F7941D' : pct >= 0.6 ? '#EF9F27' : '#1D9E75';
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:11px;';
    row.innerHTML = '<span style="font-size:11px;color:var(--hint);width:74px;flex-shrink:0;">' + d.l + '</span><div style="flex:1;background:var(--card2);border-radius:4px;height:8px;"><div style="width:' + Math.round(pct*100) + '%;height:8px;border-radius:4px;background:' + col + '"></div></div><span style="font-size:13px;font-weight:700;color:var(--text);width:20px;text-align:right;">' + d.v + '</span>';
    c.appendChild(row);
  });
}

/* Pass dots */
function buildDots() {
  var c = document.getElementById('ride-dots');
  if (!c) return;
  c.innerHTML = '';
  for (var i = 0; i < 22; i++) {
    var d = document.createElement('div');
    d.style.cssText = 'width:15px;height:15px;border-radius:3px;background:' + (i < 8 ? 'var(--card2)' : 'var(--primary)') + ';';
    c.appendChild(d);
  }
}

/* ── SECURITY FEATURES ──────────────────────────────── */

/* Route deviation */
var deviationTimer = null;
function simulateDeviation() {
  var b = document.getElementById('deviation-banner');
  if (b) { b.style.display = 'block'; }
}
function dismissDeviation() {
  var b = document.getElementById('deviation-banner');
  if (b) b.style.display = 'none';
}
/* Auto-trigger deviation 10s after confirmed loads */
function startDeviationWatch() {
  if (deviationTimer) clearTimeout(deviationTimer);
  deviationTimer = setTimeout(function() {
    if (cur === 'confirmed') simulateDeviation();
  }, 10000);
}

/* Panic button */
var panicHold = null, panicCount = 3;
function activatePanic() {
  if (panicHold) return;
  panicCount = 3;
  var countEl = document.getElementById('panic-count');
  if (countEl) countEl.textContent = 'Hold ' + panicCount + 's…';
  panicHold = setInterval(function() {
    panicCount--;
    if (countEl) countEl.textContent = panicCount > 0 ? 'Hold ' + panicCount + 's…' : 'Sending SOS…';
    if (panicCount <= 0) {
      clearInterval(panicHold); panicHold = null;
      var ring = document.getElementById('panic-ring');
      if (ring) ring.style.display = 'none';
      var sent = document.getElementById('sos-sent');
      if (sent) sent.style.display = 'block';
    }
  }, 1000);
}

/* Trip sharing */
function sendShare(btn, name) {
  var t = document.getElementById('share-toast');
  t.textContent = 'Trip link sent to ' + name + ' via SMS';
  t.style.display = 'block';
  if (btn && btn.classList) {
    btn.classList.remove('unsent');
    btn.classList.add('sent');
    btn.textContent = 'Sent ✓';
  }
  setTimeout(function() { t.style.display = 'none'; }, 3500);
}

/* Journey check-in */
function checkinSafe() {
  var icon = document.getElementById('checkin-icon');
  if (icon) { icon.style.background = 'var(--green)'; icon.style.animation = 'none'; }
  var ok = document.getElementById('checkin-ok');
  if (ok) ok.style.display = 'block';
  /* After 2s show the rating screen automatically */
  setTimeout(function() { go('rating'); }, 2000);
}
function checkinSnooze() {
  var t = document.getElementById('share-toast');
  go('confirmed');
}

/* ETA countdown */
function startEta() {
  dismissDeviation();
  startDeviationWatch();
  etaSec = 45;
  var s = document.getElementById('etaSec');
  if (s) s.textContent = etaSec + 's';
  stopEta();
  etaTimer = setInterval(function() {
    if (etaSec > 0) { etaSec--; var el = document.getElementById('etaSec'); if (el) el.textContent = etaSec + 's'; }
    else stopEta();
  }, 1000);
}
/* ── REFERRAL JS ────────────────────────────────────── */

function refAction(method, side) {
  var toastId = side === 'rider' ? 'ref-rider-toast' : 'ref-owner-toast';
  var t = document.getElementById(toastId);
  if (!t) return;
  var msgs = {
    'WhatsApp': 'Opening WhatsApp with your referral link…',
    'SMS':      'Opening SMS with your referral link…',
    'Copy link':'Link copied to clipboard ✓',
    'Email':    'Opening email with your referral…',
    'Share earnings card': 'Earnings projection card shared via WhatsApp ✓'
  };
  t.textContent = msgs[method] || method + ' shared ✓';
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 3000);
}

function selectProjTrips(btn, trips, weekly, monthly, annual) {
  /* Update the button styles */
  var btns = document.querySelectorAll('#proj-trips button');
  btns.forEach(function(b) {
    b.style.background = 'var(--card2)';
    b.style.color      = 'var(--muted)';
    b.style.border     = '0.5px solid var(--border2)';
  });
  btn.style.background = 'var(--orange)';
  btn.style.color      = '#fff';
  btn.style.border     = 'none';

  /* Update the projection figures */
  var w = document.getElementById('proj-weekly');
  var m = document.getElementById('proj-monthly');
  var a = document.getElementById('proj-annual');
  if (w) w.textContent = weekly;
  if (m) m.textContent = monthly;
  if (a) a.textContent = annual;
}

function stopEta() { if (etaTimer) { clearInterval(etaTimer); etaTimer = null; } }
  }, [])

  return (
    <>
      <Head>
        <title>Nframa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <div
        dangerouslySetInnerHTML={{ __html: bodyHTML }}
      />
    </>
  )
}
