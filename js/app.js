// ============================================
// AAED Interactive Roadmap — App Logic
// ============================================

const STORAGE_KEY = 'aaed_done_v2';
const done = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'));
let activeId = null;
let currentView = 'roadmap'; // 'roadmap' | 'lesson'

// ── Persistence ──
function saveDone(){ localStorage.setItem(STORAGE_KEY, JSON.stringify([...done])); }

// ── Toast ──
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}

// ── Progress ──
function updateProgress(){
  const n = done.size, pct = Math.round(n/TOTAL*100);
  document.getElementById('spf').style.width = pct+'%';
  document.getElementById('spt').textContent = n+' / '+TOTAL+' done';
  document.getElementById('spp').textContent = pct+'%';
}

// ── Sidebar ──
function buildSidebar(){
  const nav = document.getElementById('snav');
  nav.innerHTML = '';
  MODULES.forEach(mod=>{
    const lbl = document.createElement('div');
    lbl.className='s-mod-label';
    lbl.style.color=mod.color;
    lbl.innerHTML=`<span class="s-mod-dot" style="background:${mod.color}"></span>${mod.title}`;
    nav.appendChild(lbl);
    mod.lessons.forEach(l=>{
      const item=document.createElement('div');
      item.className='s-item'+(done.has(l.id)?' done':'')+(l.id===activeId?' active':'');
      item.dataset.id=l.id;
      item.innerHTML=`<span class="s-item-txt">${l.label}</span><span class="s-check">\u2713</span>`;
      item.onclick=()=>{ openLesson(l.id); closeMobileSidebar(); };
      nav.appendChild(item);
    });
  });
}

// ── Main Road Map ──
function buildMain(){
  const body=document.getElementById('roadmap-body');
  body.innerHTML='';
  MODULES.forEach(mod=>{
    const sec=document.createElement('div');
    sec.className='mod-section';
    sec.id='mod-'+mod.id;
    sec.innerHTML=`
      <div class="mod-head">
        <div class="mod-num" style="background:${mod.bg};color:${mod.color};">${mod.id}</div>
        <div class="mod-title-txt" style="color:${mod.color}">${mod.title}</div>
      </div>
      <div class="nodes-wrap" id="nodes-${mod.id}"></div>
    `;
    body.appendChild(sec);
    const grid=sec.querySelector('#nodes-'+mod.id);
    mod.lessons.forEach(l=>{
      const node=document.createElement('div');
      node.className=`node ${l.type}`+(done.has(l.id)?' done':'')+(l.id===activeId?' active':'');
      node.dataset.id=l.id;
      node.id='node-'+l.id;
      node.innerHTML=`<div class="n-check">\u2713</div><div class="n-icon">${l.icon}</div><div class="n-label">${l.label}</div><div class="n-type">${typeLabel[l.type]}</div>`;
      node.onclick=()=>toggleDetail(l);
      grid.appendChild(node);
    });
    const det=document.createElement('div');
    det.id='detail-'+mod.id;
    sec.appendChild(det);
  });
}

// ── Detail Panel (overview card) ──
function toggleDetail(lesson){
  const modId=lesson.id.split('-')[0];
  const detEl=document.getElementById('detail-'+modId);
  if(activeId===lesson.id){ detEl.innerHTML=''; setActive(null); return; }
  MODULES.forEach(m=>{ if(''+m.id!==modId) document.getElementById('detail-'+m.id).innerHTML=''; });
  setActive(lesson.id);
  const isDone=done.has(lesson.id);
  detEl.innerHTML=`
    <div class="detail">
      <div class="d-tag ${tagClass[lesson.type]}">${typeLabel[lesson.type]}</div>
      <div class="d-title">${lesson.label}</div>
      <p class="d-desc">${lesson.desc}</p>
      <div class="d-sec-label">You will learn</div>
      <ul class="d-learns">${lesson.learns.map(l=>`<li>${l}</li>`).join('')}</ul>
      <div class="d-btns">
        <button class="btn btn-primary" id="start-${lesson.id}">Start lesson \u2192</button>
        <button class="btn ${isDone?'btn-done-active':''}" id="done-${lesson.id}">${isDone?'Completed \u2713':'Mark complete \u2713'}</button>
      </div>
    </div>
  `;
  document.getElementById('start-'+lesson.id).onclick=()=> openLesson(lesson.id);
  document.getElementById('done-'+lesson.id).onclick=()=>{
    if(done.has(lesson.id)) done.delete(lesson.id); else done.add(lesson.id);
    saveDone(); updateProgress(); buildSidebar(); refreshNodeStates();
    toggleDetail(lesson);
    if(!done.has(lesson.id)) toggleDetail(lesson);
  };
  detEl.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ── Lesson View (full content) ──
function openLesson(id){
  const lesson = findLesson(id);
  if(!lesson) return;
  setActive(id);
  currentView = 'lesson';

  const contentHtml = getLessonContent(id);
  const {prev, next} = getAdjacentLessons(id);
  const isDone = done.has(id);
  const modId = id.split('-')[0];
  const mod = MODULES.find(m=>''+m.id===modId);
  const lessonIdx = getAllLessons().findIndex(l=>l.id===id);
  const totalLessons = getAllLessons().length;

  const mainInner = document.querySelector('.m-inner');
  // Hide hero and roadmap body, show lesson
  document.querySelector('.m-hero').style.display='none';
  document.getElementById('roadmap-body').style.display='none';
  document.querySelector('footer').style.display='none';

  let lessonContainer = document.getElementById('lesson-container');
  if(!lessonContainer){
    lessonContainer = document.createElement('div');
    lessonContainer.id='lesson-container';
    mainInner.appendChild(lessonContainer);
  }

  lessonContainer.innerHTML=`
    <div class="lesson-view">
      <div class="lesson-back" onclick="closeLesson()">\u2190 Back to roadmap</div>
      <div class="lesson-header">
        <div class="d-tag ${tagClass[lesson.type]}">${typeLabel[lesson.type]}${mod?' \u00B7 Module '+mod.id:''}</div>
        <div class="lesson-header-title">${lesson.label}</div>
        <div class="lesson-header-desc">${lesson.desc}</div>
      </div>
      <div id="lesson-body">${contentHtml}</div>
      <div class="lesson-complete-btn ${isDone?'completed':''}" id="lesson-done-btn" onclick="toggleLessonDone('${id}')">
        ${isDone?'\u2713 Completed \u2014 click to undo':'Mark as complete \u2713'}
      </div>
      <div class="lesson-progress-bar">
        <div class="lesson-prog-track"><div class="lesson-prog-fill" style="width:${Math.round((lessonIdx+1)/totalLessons*100)}%"></div></div>
        <div class="lesson-prog-text">${lessonIdx+1} / ${totalLessons}</div>
      </div>
      <div class="lesson-nav">
        <div class="lesson-nav-btn prev ${prev?'':'disabled'}" onclick="${prev?`openLesson('${prev.id}')`:''}">
          <div class="lesson-nav-label">\u2190 Previous</div>
          <div class="lesson-nav-title">${prev?prev.label:''}</div>
        </div>
        <div class="lesson-nav-btn next ${next?'':'disabled'}" onclick="${next?`openLesson('${next.id}')`:''}">
          <div class="lesson-nav-label">Next \u2192</div>
          <div class="lesson-nav-title">${next?next.label:''}</div>
        </div>
      </div>
    </div>
  `;

  // Bind interactive checklists
  lessonContainer.querySelectorAll('.lesson-check-item').forEach(item=>{
    item.addEventListener('click', ()=> item.classList.toggle('checked'));
  });

  document.getElementById('main').scrollTo({top:0,behavior:'smooth'});
  buildSidebar();
}

function closeLesson(){
  currentView = 'roadmap';
  document.querySelector('.m-hero').style.display='';
  document.getElementById('roadmap-body').style.display='';
  document.querySelector('footer').style.display='';
  const lc = document.getElementById('lesson-container');
  if(lc) lc.innerHTML='';
  setActive(null);
  buildSidebar();
}

function toggleLessonDone(id){
  if(done.has(id)) done.delete(id); else done.add(id);
  saveDone(); updateProgress(); refreshNodeStates();
  const btn = document.getElementById('lesson-done-btn');
  if(btn){
    const isDone = done.has(id);
    btn.className = 'lesson-complete-btn'+(isDone?' completed':'');
    btn.innerHTML = isDone?'\u2713 Completed \u2014 click to undo':'Mark as complete \u2713';
  }
  buildSidebar();
  if(done.has(id)){
    showToast('Lesson completed!');
  }
}

// ── Helpers ──
function findLesson(id){
  for(const m of MODULES) for(const l of m.lessons) if(l.id===id) return l;
  return null;
}

function getAllLessons(){
  return MODULES.flatMap(m=>m.lessons);
}

function getAdjacentLessons(id){
  const all = getAllLessons();
  const idx = all.findIndex(l=>l.id===id);
  return { prev: idx>0?all[idx-1]:null, next: idx<all.length-1?all[idx+1]:null };
}

function getLessonContent(id){
  if(typeof LESSON_CONTENT !== 'undefined' && LESSON_CONTENT[id]){
    return LESSON_CONTENT[id];
  }
  // Fallback if content not loaded
  const lesson = findLesson(id);
  return `
    <div class="lesson-content">
      <div class="lesson-section">
        <p class="lesson-text">Content is loading... Please refresh the page.</p>
      </div>
    </div>
  `;
}

function setActive(id){
  activeId=id;
  document.querySelectorAll('.node').forEach(n=>n.classList.toggle('active',n.dataset.id===id));
  document.querySelectorAll('.s-item').forEach(n=>n.classList.toggle('active',n.dataset.id===id));
}

function refreshNodeStates(){
  document.querySelectorAll('.node').forEach(n=>n.classList.toggle('done',done.has(n.dataset.id)));
  document.querySelectorAll('.s-item').forEach(n=>n.classList.toggle('done',done.has(n.dataset.id)));
}

function scrollToLesson(id){
  const node=document.getElementById('node-'+id);
  if(node) node.scrollIntoView({behavior:'smooth',block:'center'});
}

function resetProgress(){
  if(confirm('Reset all progress?')){
    done.clear(); saveDone(); updateProgress(); buildSidebar(); refreshNodeStates();
    document.querySelectorAll('[id^="detail-"]').forEach(d=>d.innerHTML='');
    setActive(null);
    if(currentView==='lesson') closeLesson();
    showToast('Progress reset');
  }
}

// ── Mobile Sidebar ──
function toggleMobileSidebar(){
  document.querySelector('.sidebar').classList.toggle('open');
  document.querySelector('.sidebar-overlay').classList.toggle('show');
}
function closeMobileSidebar(){
  document.querySelector('.sidebar').classList.remove('open');
  document.querySelector('.sidebar-overlay').classList.remove('show');
}

// ── Keyboard Navigation ──
document.addEventListener('keydown', e=>{
  if(currentView!=='lesson') return;
  if(e.key==='Escape') closeLesson();
  if(e.key==='ArrowRight'){
    const {next} = getAdjacentLessons(activeId);
    if(next) openLesson(next.id);
  }
  if(e.key==='ArrowLeft'){
    const {prev} = getAdjacentLessons(activeId);
    if(prev) openLesson(prev.id);
  }
});

// ── Init ──
buildMain();
buildSidebar();
updateProgress();
