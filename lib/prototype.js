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
    btn.textContent = 'Confirm ' + planName + ' (' + planPrice + ') \u2014 Pay with MoMo \u2192';
  }
}
function confirmGdPlanChange() {
  if (!gdSelectedPlan) return;
  var t = document.getElementById('gd-card-toast');
  if (t) {
    t.textContent = gdSelectedPlan.name + ' plan confirmed \u2014 ' + gdSelectedPlan.price + ' charged via MoMo \u2713';
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
  if (cnt) cnt.textContent = 'Hold ' + coPanicCount + 's\u2026';
  coPanicHold = setInterval(function() {
    coPanicCount--;
    if (cnt) cnt.textContent = coPanicCount > 0 ? 'Hold ' + coPanicCount + 's\u2026' : 'Sending SOS\u2026';
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