(() => {
"use strict";

const TABS = ["Overview","Details","Planning","Faculty","Files","Activities","Workflow"];

const PRESENCE = [
  { initials: "MW", name: "Maya Whitfield · Details", color: "var(--pa-primary)" },
  { initials: "PR", name: "Priya Raman · Overview", color: "#4FA3E8" },
  { initials: "KB", name: "Kevin Boateng · Activities", color: "var(--pa-ink-2)" }
];

const FEED = [
  {"initials":"SY","user":"Stephanie Yang","where":"Faculty","stamp":"Jun 12, 2026 · 10:14 AM – 11:02 AM ET","fields":"Faculty Member added · Faculty Role updated"},
  {"initials":"SY","user":"Stephanie Yang","where":"Faculty","stamp":"Feb 9, 2026 at 12:02 PM ET","fields":"Faculty Member added"},
  {"initials":"LM","user":"Leah Molloy","where":"Planning","stamp":"Jan 22, 2026 at 3:54 PM ET","fields":"Misc added · Miscellaneous added · Competencies updated · Designed To updated"},
  {"initials":"LM","user":"Leah Molloy","where":"Planning","stamp":"Jan 22, 2026 at 3:50 PM ET","fields":"Evaluation added · Skills/Strategy or Performance updated"}
];

const HISTORY = [{"id":"s1","area":"Faculty","date":"Jun 12, 2026","time":"11:02 AM","note":"Dr. Whitfield confirmed as moderator for office hours","notified":["Master","Product","Marketing","Graphics","MS","Content","Accreditation"],"changes":[{"time":"10:14 AM","field":"Faculty Member","type":"added","value":"Tamara J Whitfield, DNP, FNP-BC — Moderator"},{"time":"11:02 AM","field":"Faculty Role · Daniel K Osei, PharmD, AAHIVP","type":"updated","old":"Speaker","new":"Speaker, Moderator"}],"user":"Stephanie Yang","initials":"SY"},{"id":"s2","area":"Faculty","date":"Feb 9, 2026","time":"12:02 PM","note":"Dr. Osei confirmed as speaker","notified":["Master","Product","Marketing","Graphics","MS","Content","Accreditation"],"changes":[{"time":"12:02 PM","field":"Faculty Member","type":"added","value":"Daniel K Osei, PharmD, AAHIVP — Speaker"}],"user":"Stephanie Yang","initials":"SY"},{"id":"s3","area":"Planning","date":"Jan 22, 2026","time":"3:54 PM","note":"Added planner form","notified":[],"changes":[{"field":"Misc","type":"added","value":"Multidisciplinary, interprofessional HCPs are involved in the diagnosis, treatment, and prevention strategies that directly impact people living with or at risk for HIV."},{"field":"Miscellaneous","type":"added","value":"The live webinar format allows clinicians to access timely educational content and interact with expert faculty in real time. Online enduring activities allow busy clinicians to access content at their convenience, from multiple devices, with self-paced, independent learning."},{"field":"Competencies","type":"updated","old":"None","new":"Provide patient-centered care\nWork in interdisciplinary teams\nEmploy evidence-based practice\nInterprofessional communication\nTeams and teamwork\nPatient care\nMedical knowledge\nInterpersonal and communication skills"},{"field":"Designed To","type":"updated","old":"None","new":"Change Competence (Skills & Strategy)\nMeasure Competence (Skills & Strategy)"}],"user":"Leah Molloy","initials":"LM"},{"id":"s4","area":"Planning","date":"Jan 22, 2026","time":"3:50 PM","notified":[],"changes":[{"field":"Evaluation","type":"added","value":"This CE series bridges these educational gaps by equipping clinicians with evidence-based strategies to manage multidrug-resistant HIV, deliver equitable HIV services, personalize treatment, and scale long-acting PrEP with limited capacity. Participants will evaluate emerging data and apply practical frameworks for task shifting, triage, and team resilience in resource-constrained settings."},{"field":"Skills/Strategy or Performance","type":"text","old":"This program will equip HIV physicians, nurse practitioners, physician assistants, pharmacists, and care team members to optimize HIV treatment and prevention by applying evidence-based strategies for resistance management, long-acting regimens, and PrEP delivery in the context of shrinking clinical and financial resources.","new":"This program is designed to equip HCPs to optimize HIV treatment and prevention by applying evidence-based strategies for resistance management, long-acting regimens, and PrEP delivery in the context of shrinking clinical and financial resources."}],"user":"Leah Molloy","initials":"LM"},{"id":"s5","area":"Faculty","date":"Jan 22, 2026","time":"3:41 PM","note":"Added planners and reviewers","notified":[],"changes":[{"time":"3:12 PM","field":"Faculty Member","type":"added","value":"Shaina Vincent — Reviewer"},{"time":"3:18 PM","field":"Faculty Member","type":"added","value":"Leah Molloy — Planner"},{"time":"3:35 PM","field":"Faculty Member","type":"added","value":"Stephanie Yang — Planner"},{"time":"3:41 PM","field":"Faculty Role · Monica L Reyes, MD, AAHIVS","type":"updated","old":"Director","new":"Director, Speaker"}],"user":"Leah Molloy","initials":"LM"},{"id":"s6","area":"Planning","date":"Jan 22, 2026","time":"3:00 PM","notified":[],"changes":[{"field":"Objectives","type":"added","value":"- Apply evidence-based strategies to select and optimize regimens for people with multidrug-resistant HIV\n- Implement equitable, patient-centered approaches that improve engagement across diverse communities\n- Integrate long-acting treatment and prevention options into personalized care plans\n- Use triage and task-shifting strategies to scale PrEP delivery with limited clinical capacity"},{"field":"Relevance","type":"added","value":"Key Gaps and Educational Needs. Resistance management: Clinicians lack confidence selecting regimens for heavily treatment-experienced patients. Equity in HIV services: Persistent disparities in diagnosis, retention, and viral suppression affect underserved communities. Long-acting options: Uptake of long-acting injectable treatment and PrEP remains limited by workflow, coverage, and patient-selection barriers. Capacity constraints: Funding cuts and staffing shortages require new models for delegating care without compromising quality."},{"field":"Skills/Strategy or Performance","type":"added","value":"This program will equip HIV physicians, nurse practitioners, physician assistants, pharmacists, and care team members to optimize HIV treatment and prevention by applying evidence-based strategies for resistance management, long-acting regimens, and PrEP delivery in the context of shrinking clinical and financial resources."}],"user":"Leah Molloy","initials":"LM"},{"id":"s7","area":"Planning","date":"Jan 22, 2026","time":"2:50 PM","notified":[],"changes":[{"field":"Commercial Supporters","type":"added","value":"This activity is supported by independent educational grants from Merck Sharp & Dohme LLC and Gilead Sciences, Inc."},{"field":"Audience","type":"added","value":"HIV clinicians, including physicians, NPs, PAs, pharmacists, and care teams working in HIV treatment and prevention."},{"field":"Activity Overview","type":"added","value":"Six 1.0-hour live webinars, each followed by a live office hours session, address the most pressing challenges in HIV practice in an era of reduced resources. Each webinar is post-produced as an online enduring activity to extend reach and provide sustainability for learners unable to attend live."},{"field":"Agenda","type":"added","value":"I. Multidrug-Resistant HIV: Fast Facts for Smart Decisions\nII. Advancing Equity in HIV Services\nIII. Navigating the Evolving HIV Treatment Landscape\nIV. Long-Acting Injectable PrEP\nV. Fostering Resilience to Lead and Delegate HIV Services\nVI. Triage Thinking and Task Shifting to Scale PrEP\nVII. Conclusions and Q&A"}],"user":"Leah Molloy","initials":"LM"},{"id":"s8","area":"Files","date":"Jan 20, 2026","time":"1:20 PM","note":"Launch notes uploaded","notified":["Master","Product","Marketing","Graphics","MS","Content","Accreditation"],"changes":[{"time":"12:42 PM","field":"File","type":"added","value":"Launch notes - Final (72261_HIV_Launch_Notes_Final.docx)"},{"time":"12:58 PM","field":"File Type · 72261_HIV_Launch_Notes_Final.docx","type":"updated","old":"Other","new":"Launch Notes"},{"time":"1:20 PM","field":"File","type":"added","value":"Merck LOA - Signed (72261_Merck_LOA_signed.pdf)"}],"user":"Stephanie Yang","initials":"SY"},{"id":"s9","area":"Details","date":"Jan 20, 2026","time":"10:13 AM","notified":[],"changes":[{"field":"Clinical Lead","type":"added","value":"Shaina Vincent"}],"user":"Stephanie Yang","initials":"SY"},{"id":"s10","area":"Details","date":"Jan 20, 2026","time":"10:04 AM","notified":[],"changes":[{"field":"Creative Lead","type":"added","value":"Matthew Philips"}],"user":"Stephanie Yang","initials":"SY"},{"id":"s11","area":"Details","date":"Jan 19, 2026","time":"7:55 PM","notified":[],"changes":[{"field":"Short Title","type":"added","value":"HIV Hot Topics Webinars"},{"field":"Operations Lead","type":"added","value":"Stephanie Yang"},{"field":"Strategy Lead","type":"added","value":"Leah Molloy"}],"user":"Stephanie Yang","initials":"SY"},{"id":"s12","area":"Details","date":"Jan 19, 2026","time":"6:15 PM","notified":[],"changes":[{"field":"Project Launch Date","type":"added","value":"01/23/2026"}],"user":"Stephanie Yang","initials":"SY"}];

const TYPES = [["all", "All"], ["added", "Added"], ["removed", "Removed"], ["updated", "Updated"], ["text", "Edited"]];
const BADGE = { added: "Added", removed: "Removed", updated: "Updated", text: "Edited" };
const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const icon = (name, cls) => '<svg class="i' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#i-' + name + '"></use></svg>';
const iso = d => { const m = /^(\w{3}) (\d{1,2}), (\d{4})$/.exec(d); return m ? m[3] + "-" + String(MONTHS[m[1]]).padStart(2, "0") + "-" + m[2].padStart(2, "0") : ""; };

/* Page */
let tab = "Overview";
function renderTabs() {
  $("#tabs").innerHTML = TABS.map(t =>
    '<button class="pa-tabs__btn' + (t === tab ? " pa-tabs__btn--active" : "") + '" type="button" role="tab" aria-selected="' + (t === tab) + '" data-tab="' + t + '">' + t + "</button>").join("");
  $("#view-overview").hidden = tab !== "Overview";
  $("#view-other").hidden = tab === "Overview";
  $("#other-title").textContent = "Project " + tab;
}
$("#tabs").addEventListener("click", e => { const b = e.target.closest("[data-tab]"); if (b) { tab = b.dataset.tab; renderTabs(); } });
$("#back-overview").addEventListener("click", () => { tab = "Overview"; renderTabs(); });

$("#presence").innerHTML = PRESENCE.map(p =>
  '<span class="presence__av" title="' + esc(p.name) + '" style="background:' + p.color + '">' + esc(p.initials) + "</span>").join("");

$("#feed").innerHTML = FEED.map(f =>
  '<button class="feed__item" type="button" data-open-log>' +
    '<span class="av av--sm">' + esc(f.initials) + "</span>" +
    '<span class="feed__body">' +
      '<span class="feed__who"><strong>' + esc(f.user) + '</strong><span class="pill pill--sm">' + esc(f.where) + "</span></span>" +
      '<span class="feed__stamp">' + esc(f.stamp) + "</span>" +
      '<span class="feed__fields">' + esc(f.fields) + "</span>" +
    "</span></button>").join("");

/* Change history drawer */
const st = { q: "", user: "", from: "", to: "", type: "all", expanded: { s1: true } };
const drawer = $("#log"), qIn = $("#chp-q"), userIn = $("#chp-user"), userList = $("#chp-user-list");
const USERS = [""].concat(Array.from(new Set(HISTORY.map(s => s.user))));

function openLog() { drawer.hidden = false; document.body.style.overflow = "hidden"; renderLog(); }
function closeLog() { drawer.hidden = true; document.body.style.overflow = ""; }
document.addEventListener("click", e => {
  if (e.target.closest("[data-open-log]")) openLog();
  else if (e.target.closest("[data-close-log]")) closeLog();
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && !drawer.hidden) closeLog(); });

function diffTokens(oldS, newS) {
  const tok = s => String(s).split(/(\s+)/).filter(x => x.length);
  const a = tok(oldS), b = tok(newS), n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ops = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { ops.push(["", a[i]]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) ops.push(["del", a[i++]]);
    else ops.push(["ins", b[j++]]);
  }
  while (i < n) ops.push(["del", a[i++]]);
  while (j < m) ops.push(["ins", b[j++]]);
  return ops.map(([t, s]) => t ? '<span class="tk tk--' + t + '">' + esc(s) + "</span>" : esc(s)).join("");
}

const box = (label, cls, value) => '<div class="box"><div class="box__lbl">' + label + '</div><div class="box__v ' + cls + '">' + esc(value) + "</div></div>";

function changeHTML(c) {
  let body;
  if (c.type === "added") body = box("New", "box__v--new", c.value);
  else if (c.type === "removed") body = box("Old", "box__v--old", c.value);
  else if (c.type === "updated") body = '<div class="pair">' + box("Old", "box__v--old", c.old) + box("New", "box__v--new", c.new) + "</div>";
  else body = '<div class="box"><div class="box__lbl">Changes</div><div class="box__v">' + diffTokens(c.old, c.new) + "</div></div>";
  return '<div class="chg">' +
    (c.time ? '<div class="chg__time">' + esc(c.time) + "</div>" : "") +
    '<div class="chg__main"><div class="chg__head"><strong>' + esc(c.field) + '</strong><span class="badge badge--' + c.type + '">' + BADGE[c.type] + "</span></div>" + body + "</div></div>";
}

function sessionHTML(s, forceOpen) {
  const open = forceOpen || !!st.expanded[s.id];
  const n = s.changes.length;
  const times = s.changes.map(c => c.time).filter(Boolean);
  const stamp = times.length > 1 && times[0] !== times[times.length - 1]
    ? s.date + " · " + times[0] + " – " + times[times.length - 1] + " ET"
    : s.date + " at " + (times[0] || s.time) + " ET";
  return '<article class="ses">' +
    '<button class="ses__hd" type="button" data-toggle="' + s.id + '" aria-expanded="' + open + '">' +
      '<span class="av">' + esc(s.initials) + "</span>" +
      '<span class="ses__meta"><span class="ses__who"><strong>' + esc(s.user) + '</strong><span class="pill">' + n + (n === 1 ? " change" : " changes") + "</span>" +
        (s.area ? '<span class="pill pill--grey">' + esc(s.area) + "</span>" : "") + "</span>" +
        '<span class="ses__stamp">' + esc(stamp) + "</span></span>" +
      icon(open ? "chevron-up" : "chevron-down") +
    "</button>" +
    (open ? '<div class="ses__body">' + s.changes.map(changeHTML).join("") +
      (s.note ? '<div class="callout callout--note"><strong>NOTES: </strong>' + esc(s.note) + "</div>" : "") +
      (s.notified.length
        ? '<div class="callout callout--notified"><strong>NOTIFIED: </strong>' + esc(s.notified.join(", ")) + "</div>"
        : '<div class="callout callout--silent"><strong>NOTIFIED: </strong>Silent</div>') +
      "</div>" : "") +
    "</article>";
}

function renderLog() {
  const q = st.q.trim().toLowerCase();
  const anyFilter = !!(q || st.user || st.from || st.to || st.type !== "all");
  const list = HISTORY.map(s => {
    const d = iso(s.date);
    if (st.user && s.user !== st.user) return null;
    if (st.from && d < st.from) return null;
    if (st.to && d > st.to) return null;
    const sessionHit = !!q && [s.user, s.note, s.area].some(v => (v || "").toLowerCase().includes(q));
    let changes = s.changes;
    if (st.type !== "all") changes = changes.filter(c => c.type === st.type);
    if (q && !sessionHit) changes = changes.filter(c => [c.field, c.value, c.old, c.new].filter(Boolean).join(" ").toLowerCase().includes(q));
    return changes.length ? Object.assign({}, s, { changes }) : null;
  }).filter(Boolean);

  $("#chp-list").innerHTML = list.length
    ? list.map(s => sessionHTML(s, anyFilter)).join("")
    : '<div class="empty">' + icon("history") + "No changes match these filters.</div>";
  $("#chp-count").textContent = anyFilter ? list.length + " of " + HISTORY.length + " entries" : HISTORY.length + " entries";
  $("#chp-chips").innerHTML = TYPES.map(([v, label]) =>
    '<button class="chip" type="button" data-type="' + v + '" aria-pressed="' + (st.type === v) + '">' + label + "</button>").join("");
  $("#chp-clear").hidden = !anyFilter;
  $("#chp-q-clear").hidden = !st.q;
}

$("#chp-list").addEventListener("click", e => {
  const b = e.target.closest("[data-toggle]");
  if (b) { st.expanded[b.dataset.toggle] = !st.expanded[b.dataset.toggle]; renderLog(); }
});
$("#chp-chips").addEventListener("click", e => { const b = e.target.closest("[data-type]"); if (b) { st.type = b.dataset.type; renderLog(); } });
qIn.addEventListener("input", () => { st.q = qIn.value; renderLog(); });
$("#chp-q-clear").addEventListener("click", () => { st.q = qIn.value = ""; renderLog(); qIn.focus(); });
$("#chp-from").addEventListener("change", e => { st.from = e.target.value; renderLog(); });
$("#chp-to").addEventListener("change", e => { st.to = e.target.value; renderLog(); });
$("#chp-clear").addEventListener("click", () => {
  Object.assign(st, { q: "", user: "", from: "", to: "", type: "all" });
  qIn.value = $("#chp-from").value = $("#chp-to").value = "";
  userIn.value = "All users";
  renderLog();
});

function renderUsers(filter) {
  const f = (filter || "").toLowerCase();
  userList.innerHTML = USERS.map(u => ({ u, label: u || "All users" }))
    .filter(o => !f || o.label.toLowerCase().includes(f))
    .map(o => '<div class="menu__opt" data-user="' + esc(o.u) + '">' + esc(o.label) + "</div>").join("");
  userList.hidden = false;
}
userIn.addEventListener("focus", () => { userIn.value = ""; renderUsers(""); });
userIn.addEventListener("input", () => renderUsers(userIn.value));
userIn.addEventListener("blur", () => { userList.hidden = true; userIn.value = st.user || "All users"; });
userList.addEventListener("mousedown", e => {
  const o = e.target.closest("[data-user]");
  if (!o) return;
  e.preventDefault();
  st.user = o.dataset.user;
  userIn.blur();
  renderLog();
});

renderTabs();
})();
