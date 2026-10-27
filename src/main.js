(()=>{
const ico=(n,c='')=>`<svg class="ico ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

/* ==========================================================================
   PHONE "DESKTOP SITE" MODE FIX
   (saare layout reads PEHLE, writes BAAD mein -> forced reflow nahi)
   ========================================================================== */
const MQ = {desk:'(min-width:769px)', t980:'(max-width:980px)', t768:'(max-width:768px)', t520:'(max-width:520px)'};
window.__zoom = 1;
function applyViewportMode(){
  const root = document.documentElement;
  // ---- reads ----
  const touch = window.matchMedia('(pointer:coarse)').matches;
  const shortSide = Math.min(screen.width, screen.height);
  const iw = window.innerWidth;
  const ih = window.innerHeight;
  const dsm = touch && shortSide < 700 && iw > 800;
  const set = (id, v) => { const el = document.getElementById(id); if(el) el.media = v; };

  // ---- writes ----
  if(dsm){
    const z = iw / 400;
    window.__zoom = z;
    document.body.style.zoom = z;
    root.style.setProperty('--vw', (iw / z / 100) + 'px');
    root.style.setProperty('--vh', (ih / z / 100) + 'px');
    set('st-desk','not all'); set('st-980','all'); set('st-768','all'); set('st-520','all');
    root.classList.add('dsm');
  } else {
    window.__zoom = 1;
    document.body.style.zoom = '';
    root.style.removeProperty('--vw'); root.style.removeProperty('--vh');
    set('st-desk',MQ.desk); set('st-980',MQ.t980); set('st-768',MQ.t768); set('st-520',MQ.t520);
    root.classList.remove('dsm');
  }
}
applyViewportMode();

document.getElementById('year').textContent = new Date().getFullYear();

/* ==========================================================================
   PROJECT DATA
   ========================================================================== */
const projectData = [
 {
  idx:'01', icon:'user-doctor', tags:['PHP','MySQL','Bootstrap','JavaScript'],
  title:'Clinic Appointment Portal',
  summary:'A complete clinic appointment management system where patients can book appointments and administrators can efficiently manage doctors, patients, and schedules.',
  github:'https://github.com/anuja2793/clinic-appointment-portal', demo:'',
  problem:'Traditional appointment booking relied on manual processes, causing scheduling conflicts, long waiting times, and difficulty managing patient records.',
  solution:'Developed a web-based appointment portal using PHP and MySQL that enables online appointment booking, patient management, doctor scheduling, and centralized administration.',
  features:['Patient registration and login','Doctor appointment booking','Appointment management dashboard','Admin panel for managing doctors and patients','MySQL database integration','Responsive Bootstrap interface'],
  challenges:'Designing a reliable appointment workflow while preventing scheduling conflicts and maintaining accurate patient and doctor records.',
  learned:'Strengthened my understanding of PHP session management, CRUD operations, MySQL database design, authentication, and building full-stack web applications.'
 },
 {
  idx:'02', icon:'hand-holding-heart', tags:['PHP','MySQL','Bootstrap','JavaScript'],
  title:'Daansetu – Donation Platform for NGOs',
  summary:'A donation platform that connects donors with NGOs, enabling secure online donations, campaign management, and transparent fundraising through a user-friendly web application.',
  github:'https://github.com/anuja2793/Daansetu---Donation-Platform-for-NGOs', demo:'',
  problem:'Many NGOs struggle to reach donors through a centralized digital platform, while donors often find it difficult to discover verified causes and contribute transparently.',
  solution:'Developed a PHP and MySQL-based donation platform that allows NGOs to create fundraising campaigns and enables users to browse causes, make donations, and manage their contributions through a centralized system.',
  features:['NGO registration and profile management','Donation campaign creation','Secure online donation workflow','Donor dashboard and donation history','Admin panel for managing NGOs and campaigns','Responsive Bootstrap interface'],
  challenges:'Building a transparent donation workflow while efficiently managing NGO, donor, and campaign data through a scalable database structure.',
  learned:'Enhanced my skills in PHP, MySQL, authentication, CRUD operations, relational database design, and developing real-world social impact web applications.'
 },
 {
  idx:'03', icon:'microphone', tags:['JavaScript','Web Speech API'],
  title:'Dora — The Voice Assistant',
  summary:'Web-based voice assistant that responds to voice & text commands to handle everyday tasks.',
  github:'https://github.com/anuja2793/Dora-The-Voice-Assistant', demo:'',
  problem:'Wanted a lightweight, browser-based assistant without relying on a native app or paid API.',
  solution:'Used the Web Speech API to capture voice input and trigger matching JavaScript command handlers.',
  features:['Voice & text command input','Command matching engine','Real-time speech feedback','Extensible command list'],
  challenges:'Getting reliable speech recognition across browsers and handling ambiguous commands gracefully.',
  learned:'Practical experience with browser speech APIs and building a simple command-parsing system.'
 },
 {
  idx:'04', icon:'android', tags:['Java','Android','XML'],
  title:'QR Code Generator',
  summary:'Android app that generates custom QR codes instantly — built with Java & XML in Android Studio.',
  github:'https://github.com/anuja2793/QR-Code-Generator-', demo:'',
  problem:'Needed a simple offline tool to generate QR codes for text/links without third-party apps.',
  solution:'Built a native Android app using Java that generates and displays QR codes instantly on-device.',
  features:['Instant QR generation','Clean native UI','Offline functionality','Shareable QR image output'],
  challenges:'Working with the QR generation library in Android and handling different screen sizes.',
  learned:'Core Android development workflow — activities, layouts, and packaging a Java app end-to-end.'
 },
 {
  idx:'05', icon:'calendar-check', tags:['PHP','MySQL','Bootstrap','JavaScript'],
  title:'Event Craft – Event Planning Platform',
  summary:'A full-stack event planning platform with an admin panel for managing events, bookings, users, and event services through a modern web interface.',
  github:'', demo:'',
  problem:'Event organizers often rely on manual booking and management processes, making it difficult to track events, customer requests, and service details efficiently.',
  solution:'Developed a complete event management system using PHP and MySQL that allows users to explore and book events while providing administrators with a centralized dashboard to manage events, bookings, customers, and services.',
  features:['User registration and authentication','Browse and book event packages','Admin dashboard for event management','Booking and customer management','Service and category management','Responsive Bootstrap design'],
  challenges:'Designing an intuitive booking workflow while building a secure admin panel to efficiently manage events, users, and booking records.',
  learned:'Improved my expertise in full-stack PHP development, MySQL database design, authentication, CRUD operations, admin dashboard development, and creating scalable event management applications.'
 }
];

const projGrid = document.getElementById('projGrid');
projGrid.innerHTML = projectData.map((p,i) => `
  <div class="proj-card glass" data-idx="${i}">
    <div class="proj-thumb" style="background:linear-gradient(135deg, hsl(${240+i*20} 70% 22%), hsl(${190+i*15} 70% 18%));">
      <span class="proj-idx-badge">${p.idx}</span>
      ${ico(p.icon,'pt-icon')}
    </div>
    <div class="proj-body">
      <div class="proj-badges">${p.tags.map(t=>`<span class="proj-badge">${t}</span>`).join('')}</div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="proj-actions">
        ${p.demo ? `<a class="live" href="${p.demo}" target="_blank" rel="noopener">${ico('arrow-up-right-from-square')} Live Demo</a>` : ''}
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${ico('github')} GitHub</a>` : `<span class="private">${ico('lock')} Private Repo</span>`}
        <button type="button" class="details-btn" data-detail="${i}">${ico('circle-info')} Case Study</button>
      </div>
    </div>
  </div>
`).join('');

const csModal = document.getElementById('csModal');
const csPanel = document.getElementById('csPanel');
document.querySelectorAll('[data-detail]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const p = projectData[btn.dataset.detail];
    csPanel.innerHTML = `
      <button type="button" class="cs-close" data-cs-close aria-label="Close">${ico('xmark')}</button>
      <span class="cs-tag">Case Study — ${p.tags.join(' · ')}</span>
      <h3>${p.title}</h3>
      <div style="height:18px;"></div>
      <div class="cs-block"><h4>Problem</h4><p>${p.problem}</p></div>
      <div class="cs-block"><h4>Solution</h4><p>${p.solution}</p></div>
      <div class="cs-block"><h4>Key Features</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="cs-block"><h4>Challenges</h4><p>${p.challenges}</p></div>
      <div class="cs-block"><h4>What I Learned</h4><p>${p.learned}</p></div>
      ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:6px;">${ico('github')} View on GitHub</a>` : `<span class="btn btn-ghost" style="margin-top:6px;cursor:default;">${ico('lock')} Repository is private</span>`}
    `;
    csModal.classList.add('open');
    csPanel.querySelector('[data-cs-close]').addEventListener('click', ()=>csModal.classList.remove('open'));
  });
});
csModal.addEventListener('click', e=>{ if(e.target === csModal) csModal.classList.remove('open'); });

/* ==========================================================================
   HERO: role typing. Static text pehle se HTML mein hai (SEO + fast paint),
   JS usse delete karke next role type karta hai.
   ========================================================================== */
const typedEl = document.getElementById('typed');
const roles = ['PHP Laravel Developer','Full Stack Web Developer','Backend Engineer','Problem Solver'];
let rIdx=0, cIdx=roles[0].length, deleting=true;
function typeLoop(){
  const current = roles[rIdx];
  if(!deleting){
    cIdx++; typedEl.textContent = current.slice(0,cIdx);
    if(cIdx===current.length){ deleting=true; setTimeout(typeLoop, 1400); return; }
  } else {
    cIdx--; typedEl.textContent = current.slice(0,cIdx);
    if(cIdx===0){ deleting=false; rIdx=(rIdx+1)%roles.length; }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
setTimeout(typeLoop, 2200);

/* ==========================================================================
   CUSTOM CURSOR (mouse devices only)
   ========================================================================== */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
if(!window.matchMedia('(pointer:coarse)').matches){
  window.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; }, {passive:true});
  (function ringLoop(){ rx += (mx-rx)*0.16; ry += (my-ry)*0.16; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(ringLoop); })();
  document.querySelectorAll('a,button,.gal-card,.proj-card,.skill-cat,.testi-card').forEach(el=>{
    el.addEventListener('mouseenter', ()=>ring.classList.add('big'));
    el.addEventListener('mouseleave', ()=>ring.classList.remove('big'));
  });
}

/* ==========================================================================
   PARTICLE BACKGROUND — desktop only, page idle hone ke baad
   ========================================================================== */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = window.innerWidth < 769 || window.__zoom > 1 || reduceMotion;
function resizeCanvas(){
  canvas.width = Math.round(window.innerWidth / window.__zoom);
  canvas.height = Math.round(window.innerHeight / window.__zoom);
}
function initParticles(){
  particles = Array.from({length:40}, ()=>({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3, r:Math.random()*1.6+0.6
  }));
}
function drawParticles(){
  if(document.hidden){ requestAnimationFrame(drawParticles); return; }
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const isLight = document.documentElement.getAttribute('data-theme')==='light';
  const dotColor = isLight ? 'rgba(108,99,255,0.35)' : 'rgba(148,163,184,0.5)';
  const lineColor = isLight ? 'rgba(108,99,255,0.12)' : 'rgba(148,163,184,0.10)';
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=dotColor; ctx.fill();
  });
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const a=particles[i], b=particles[j];
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if(d<120){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle=lineColor; ctx.lineWidth=1; ctx.stroke(); }
    }
  }
  requestAnimationFrame(drawParticles);
}
if(lowPower){
  canvas.style.display = 'none';
} else {
  resizeCanvas(); initParticles();
  const startParticles = ()=>drawParticles();
  if('requestIdleCallback' in window){ requestIdleCallback(startParticles, {timeout:2500}); }
  else { setTimeout(startParticles, 1500); }
}
let resizeTimer;
window.addEventListener('resize', ()=>{
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(()=>{ applyViewportMode(); if(!lowPower){ resizeCanvas(); initParticles(); } }, 150);
});
window.addEventListener('orientationchange', ()=>setTimeout(()=>{ applyViewportMode(); if(!lowPower){ resizeCanvas(); initParticles(); } }, 300));

/* ==========================================================================
   SCROLL REVEAL + NAV STATE + BACK TO TOP
   ========================================================================== */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const navEl = document.getElementById('siteNav');
const backToTop = document.getElementById('backToTop');
let scrollTick = false;
window.addEventListener('scroll', ()=>{
  if(scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(()=>{
    const y = window.scrollY;
    navEl.classList.toggle('scrolled', y>40);
    backToTop.classList.toggle('show', y>500);
    scrollTick = false;
  });
}, {passive:true});
backToTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

const sections = document.querySelectorAll('main section[id]');
const navA = document.querySelectorAll('.navlinks a');
const navIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ navA.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+e.target.id)); }
  });
},{rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=>navIO.observe(s));

/* counters */
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el = e.target; const target = parseInt(el.dataset.count,10);
      let cur = 0; const step = Math.max(1, Math.ceil(target/60));
      const t = setInterval(()=>{
        cur += step;
        if(cur>=target){ cur=target; clearInterval(t); }
        el.textContent = cur + (target>=10 ? '+' : '');
      }, 24);
      counterIO.unobserve(el);
    }
  });
},{threshold:0.4});
counters.forEach(c=>counterIO.observe(c));

/* animated bars / rings */
const barIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el = e.target;
      if(el.classList.contains('skill-bar-fill') || el.classList.contains('lang-bar-fill')){ el.style.width = el.dataset.width + '%'; }
      if(el.classList.contains('ring-fg')){
        const p = parseInt(el.dataset.pct,10);
        el.style.strokeDashoffset = 283 - (283*p/100);
      }
      barIO.unobserve(el);
    }
  });
},{threshold:0.3});
document.querySelectorAll('.skill-bar-fill,.lang-bar-fill,.ring-fg').forEach(el=>barIO.observe(el));

/* tilt (mouse devices only) */
const hasMouse = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
function bindTilt(el, strength=10){
  let pending = false, lx = 0, ly = 0;
  el.addEventListener('mousemove', e=>{
    lx = e.clientX; ly = e.clientY;
    if(pending) return;
    pending = true;
    requestAnimationFrame(()=>{
      const r = el.getBoundingClientRect();
      const px = (lx - r.left)/r.width - 0.5;
      const py = (ly - r.top)/r.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px*strength}deg) rotateX(${-py*strength}deg) translateY(-4px)`;
      pending = false;
    });
  }, {passive:true});
  el.addEventListener('mouseleave', ()=>{ el.style.transform=''; });
}
if(hasMouse){
  const tiltPhoto = document.getElementById('tiltPhoto');
  if(tiltPhoto) bindTilt(tiltPhoto, 12);
  document.querySelectorAll('.proj-card').forEach(card=>bindTilt(card, 6));
  const heroVisual = document.getElementById('heroVisual');
  if(heroVisual && !reduceMotion){
    heroVisual.addEventListener('mousemove', e=>{
      const r = heroVisual.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width - 0.5;
      const py = (e.clientY - r.top)/r.height - 0.5;
      heroVisual.querySelectorAll('.tech-float').forEach(el=>{
        const depth = parseFloat(el.dataset.depth || 1);
        el.style.transform = `translate(${px*14*depth}px, ${py*14*depth}px)`;
      });
    }, {passive:true});
    heroVisual.addEventListener('mouseleave', ()=>{ heroVisual.querySelectorAll('.tech-float').forEach(el=>{ el.style.transform=''; }); });
  }
}

/* gallery — videos tabhi load hote hain jab screen ke paas aayein */
const vidIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.preload = 'metadata'; e.target.load(); vidIO.unobserve(e.target); }
  });
},{rootMargin:'300px'});
document.querySelectorAll('.gal-card video').forEach(v=>vidIO.observe(v));

document.querySelectorAll('.gal-card').forEach(card=>{
  const vid = card.querySelector('video');
  if(vid && hasMouse){
    card.addEventListener('mouseenter', ()=>vid.play().catch(()=>{}));
    card.addEventListener('mouseleave', ()=>{ vid.pause(); vid.currentTime=0; });
  }
  card.addEventListener('click', ()=>{
    if(card.dataset.type === 'video'){
      const modal = document.getElementById('videoModal');
      const modalVid = document.getElementById('modalVideo');
      modalVid.src = card.dataset.src;
      modal.classList.add('open'); modalVid.play().catch(()=>{});
    } else {
      document.getElementById('modalImg').src = card.dataset.src;
      document.getElementById('imgModal').classList.add('open');
    }
  });
});
document.querySelector('[data-close-video]').addEventListener('click', ()=>{
  const modal = document.getElementById('videoModal'); const v = document.getElementById('modalVideo');
  v.pause(); v.removeAttribute('src'); v.load(); modal.classList.remove('open');
});
document.querySelector('[data-close-img]').addEventListener('click', ()=>{ document.getElementById('imgModal').classList.remove('open'); });
document.getElementById('videoModal').addEventListener('click', e=>{ if(e.target.id==='videoModal') document.querySelector('[data-close-video]').click(); });
document.getElementById('imgModal').addEventListener('click', e=>{ if(e.target.id==='imgModal') document.querySelector('[data-close-img]').click(); });
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    document.querySelector('[data-close-video]').click();
    document.querySelector('[data-close-img]').click();
    csModal.classList.remove('open');
  }
});

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const metaTheme = document.querySelector('meta[name="theme-color"]');
function setTheme(t, save){
  root.setAttribute('data-theme', t);
  themeToggle.innerHTML = t === 'dark' ? ico('moon') : ico('sun');
  themeToggle.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.setAttribute('aria-pressed', String(t === 'light'));
  if(metaTheme) metaTheme.setAttribute('content', t === 'dark' ? '#0F172A' : '#F7F8FC');
  if(save){ try{ localStorage.setItem('theme', t); }catch(e){} }
}
setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);
themeToggle.addEventListener('click', ()=>{
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
});

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
function closeMenu(){ mobileMenu.classList.remove('open'); menuOverlay.classList.remove('open'); }
hamburger.addEventListener('click', ()=>{ mobileMenu.classList.add('open'); menuOverlay.classList.add('open'); });
menuOverlay.addEventListener('click', closeMenu);
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));

/* (marquee JS hata diya — ab pure CSS hai, forced reflow khatam) */


(function(){
  const WA_NUMBER = '918425908503';
  const form = document.getElementById('waForm');
  if(!form) return;
  const note = document.getElementById('formNote');
  const group = id => document.getElementById(id).closest('.f-group');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const v = id => document.getElementById(id).value.trim();
    const name = v('fName'), phone = v('fPhone'), email = v('fEmail'),
          service = v('fService'), budget = v('fBudget'), msg = v('fMsg');

    const emailOk = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    group('fName').classList.toggle('err', !name);
    group('fEmail').classList.toggle('err', !emailOk);
    group('fMsg').classList.toggle('err', !msg);
    if(!name || !emailOk || !msg) return;

    const text =
`Hello Anuja! 👋
I found your portfolio and have a project enquiry.

*Name:* ${name}
*Phone:* ${phone || '-'}
*Email:* ${email || '-'}
*Service:* ${service}
*Budget:* ${budget}

*Project details:*
${msg}`;

    const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();

    note.textContent = '✅ WhatsApp opened. Please tap Send to deliver your message.';
    form.reset();
  });
})();

})();