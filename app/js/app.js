// ============ UYGULAMA MANTIĞI ============
const N = WORDS.length;
const BOX_DAYS = [1,1,3,7,14,30];   // kutu 0..5 → sonraki tekrara kaç gün (aralıklı tekrar)
const MASTER_BOX = 5;               // box > 5 → öğrenildi (tekrar planından çıkar)
const NEW_PER_DAY = 20;             // İlk hedef: günde 20 yeni kelime (sabit günlük grup)
const KEY = 'a1de_v2';
let S=null, mem=false;

const CATS = {isim:'İsim', fiil:'Fiil', sifat:'Sıfat / Zarf', zamir:'Zamir', diger:'Edat / Bağlaç', sayi:'Sayı'};

/* ---------- GRAMER ---------- */
const CASE_TR = {'Akk.':'Akkusativ nesne alır (-i hali)','Dat.':'Dativ nesne alır (-e hali)',
  'Dat./Akk.':'kime (Dat.) + neyi (Akk.) alır','sich':'dönüşlü fiil — sich ile'};
function caseNote(c){
  if(CASE_TR[c]) return CASE_TR[c];
  const m=c.match(/^(\w+)\+(Akk|Dat)\.$/);
  if(m) return m[1]+' + '+(m[2]==='Akk'?'Akkusativ':'Dativ')+' ile kullanılır';
  return null;
}
function umlautize(s){
  const map={au:'äu',a:'ä',o:'ö',u:'ü'}; let last=null;
  const re=/au|a|o|u/g; let m;
  while((m=re.exec(s.toLowerCase()))) last={i:m.index,t:m[0]};
  if(!last) return s;
  const orig=s.substr(last.i,last.t.length); let rep=map[last.t];
  if(orig[0]===orig[0].toUpperCase()) rep=rep[0].toUpperCase()+rep.slice(1);
  return s.slice(0,last.i)+rep+s.slice(last.i+last.t.length);
}
function parseWord(w){
  const notes=[];
  let base=w.w.replace(/\(([^)]+)\)/g,(_,c)=>{notes.push(c);return '';}).trim();
  let plural=null;
  if(w.a && base.includes('/')){
    const parts=base.split('/'); base=parts[0].trim();
    let mk=parts.slice(1).join('/').trim();
    if(mk){
      if(/^[A-ZÄÖÜ]/.test(mk)) plural=mk;
      else{ mk=mk.replace(/^¨,/,'¨'); if(mk.includes(',')) mk=mk.split(',')[0];
        if(mk==='=') plural=base;
        else if(mk.startsWith('¨')) plural=umlautize(base)+mk.slice(1);
        else plural=base+mk; }
    }
  }
  const refl = w.w.includes('(sich)');
  return {base, plural, notes, refl};
}
const GENDER={der:['gder','der — maskulin (eril)'],die:['gdie','die — feminin (dişil)'],das:['gdas','das — neutrum (nötr)']};
/* A1 son-ek kuralları (suffix → artikel). Yüksek kesinlikli; en özel önce.
   İpucu yalnızca kuralın kelimenin gerçek artikeliyle örtüştüğü durumda gösterilir → istisna yanıltmaz. */
const ART_RULES=[
  [/(ung|heit|keit|schaft|tion|tät|ei|ik)$/i,'die','“-{s}” ekiyle biten isimler dişildir (die)'],
  [/(chen|lein)$/i,'das','“-{s}” küçültme ekidir → daima nötr (das)'],
  [/(ment|um|ma)$/i,'das','“-{s}” ekiyle biten isimler genelde nötrdür (das)'],
  [/(ling|ismus|or)$/i,'der','“-{s}” ekiyle biten isimler genelde erildir (der)'],
];
function articleRule(base){
  for(const [re,art,tpl] of ART_RULES){ const m=base.match(re); if(m) return {art, txt:tpl.replace('{s}',m[1])}; }
  return null;
}
function display(w){ const g=parseWord(w); return (g.refl?'sich ':'')+g.base; }
function highlightWord(s,base){
  const stem=base.replace(/[^\wäöüÄÖÜß]/g,'').slice(0,Math.max(4,base.length-2));
  if(stem.length<3) return s;
  const re=new RegExp('(\\S*'+stem.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\S*)','i');
  return s.replace(re,'<b>$1</b>');
}

/* ---------- LİSTE GRAMER KARTI ---------- */
const GTR={der:'eril (maskulin)',die:'dişil (feminin)',das:'nötr (neutrum)'};
// Ayrılabilir (trennbar) ön ekler — iddia YALNIZCA örnek cümle kanıtıyla yapılır
const SEP_PREFIXES=['zusammen','zurück','vorbei','weiter','ab','an','auf','aus','bei','ein','mit','nach','vor','weg','zu','los','her','hin','teil','fest','statt','fort'];
/* Fiil ayrılabilir mi? İnfinitif bilinen ön ekle başlar VE örnek cümle o ön ekle
   biter (ana cümlede ayrık) → {pre,stem}; aksi hâlde null. "antworten"→"an|tworten"
   gibi yanlış-pozitifleri, ön ekin cümle SONUNDA olması şartıyla eler. */
function separableInfo(w, base){
  const inf=base.toLowerCase(); let pre=null;
  for(const p of SEP_PREFIXES){ if(inf.startsWith(p) && inf.length>p.length+1 && (!pre||p.length>pre.length)) pre=p; }
  if(!pre) return null;
  const gd=(w.gd||'').trim();
  const re=new RegExp('(^|[\\s(])'+pre+'[.!?…]*$','i');   // ön ek = cümlenin son sözcüğü
  if(!re.test(gd)) return null;
  return {pre, stem:base.slice(pre.length)};
}
/* Bir kelimenin gramer detay panelini (HTML) üretir — mevcut yardımcıları yeniden kullanır */
function grammarPanel(i){
  const w=WORDS[i], g=parseWord(w);
  // --- chip satırı (ezber kartıyla aynı mantık) ---
  let chips=`<span class="chip pos">${CATS[w.c]||''}</span>`;
  if(w.a){ const [cls,txt]=GENDER[w.a]; chips+=`<span class="chip ${cls}">${txt}</span>`; }
  if(g.plural) chips+=`<span class="chip">çoğul: die ${g.plural}</span>`;
  if(g.refl) chips+=`<span class="chip gram">dönüşlü · sich</span>`;
  for(const nt of g.notes){ if(nt==='sich') continue; const c=caseNote(nt); if(c) chips+=`<span class="chip gram">${c}</span>`; }
  // --- kategoriye özel gramer kuralı cümleleri (hepsi o tür için DOĞRU) ---
  const R=[];
  if(w.c==='isim' && w.a){
    const indef=w.a==='die'?'eine':'ein', akk=w.a==='der'?'den':w.a, rule=articleRule(g.base);
    R.push(`<b>Cinsiyet:</b> <span class="art ${w.a}">${w.a}</span> ${g.base} — ${GTR[w.a]}. Artikeli her zaman kelimeyle birlikte ezberle.`);
    if(rule && rule.art===w.a) R.push(`💡 ${rule.txt}.`);
    if(g.plural) R.push(`<b>Çoğul:</b> die ${g.plural} — çoğulda artikel her zaman <i>die</i> olur.`);
    R.push(`<b>Belirsiz / belirli:</b> ${indef} ${g.base} · ${w.a} ${g.base}.`);
    R.push(`<b>Akkusativ (-i hâli):</b> ${akk} ${g.base}. Yalnız <i>der</i> → <i>den</i> olur; <i>die/das</i> ve çoğul değişmez.`);
  } else if(w.c==='fiil'){
    R.push(`<b>Fiil (Verb).</b> Ana cümlede çekimli fiil 2. sırada gelir.`);
    const sep=separableInfo(w, g.base);
    if(sep) R.push(`<b>Ayrılabilir fiil (trennbar):</b> ${sep.pre}|${sep.stem} — ana cümlede ön ek (<i>${sep.pre}</i>) sona atılır.`);
    if(g.refl) R.push(`<b>Dönüşlü fiil (reflexiv):</b> <i>sich ${g.base}</i> — özneye göre dönüşlü zamir alır (mich / dich / sich / uns / euch).`);
    for(const nt of g.notes){ if(nt==='sich') continue; const c=caseNote(nt); if(c) R.push(`<b>Nesne / edat:</b> ${c}.`); }
  } else if(w.c==='sifat'){
    R.push(`<b>Karşılaştırma:</b> Komparativ <i>-er</i>, Superlativ <i>am …-sten</i> (schnell → <i>schneller</i> → <i>am schnellsten</i>). Kısa sıfatların çoğu ünlüyü değiştirir: alt → <i>älter</i>, groß → <i>größer</i>. Düzensiz: gut → besser, viel → mehr, gern → lieber.`);
    R.push(`<b>Sıfat çekimi:</b> İsimden önce artikele ve hâle göre ek alır: <i>der <b>große</b> Mann</i>, <i>ein <b>großes</b> Kind</i>.`);
  } else if(w.c==='zamir'){
    R.push(`<b>Zamir (Pronomen).</b> Cümledeki hâline göre biçim değiştirir. Kişi zamiri örn.: ich → <i>mich</i> (Akkusativ) → <i>mir</i> (Dativ).`);
    for(const nt of g.notes){ const c=caseNote(nt); if(c) R.push(`<b>Hâl:</b> ${c}.`); }
  } else {
    for(const nt of g.notes){ const c=caseNote(nt); if(c) R.push(`<b>Hâl:</b> ${c}.`); }
    R.push(`<b>Edat / Bağlaç.</b> Bağlaçlarda kelime sırasına dikkat: <i>weil, dass</i> yan cümlede fiili sona atar.`);
  }
  // --- örnek cümle (verideki doğrulanmış gramer cümlesi) ---
  const ex=`<div class="exbox"><div class="de">${highlightWord(w.gd,g.base)}</div><div class="tr">${w.gt}</div></div>`;
  return `<div class="chips">${chips}</div>`+
         `<div class="gramrules">${R.map(x=>`<div class="gr">${x}</div>`).join('')}</div>`+
         ex+
         `<button class="wclose" type="button">Kapat ✕</button>`;
}

/* ---------- DURUM ---------- */
function shuffled(n){ const a=[...Array(n).keys()]; for(let k=n-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]];} return a; }
function freshState(){
  return {box:new Array(N).fill(-1), due:new Array(N).fill(0), seen:new Array(N).fill(0),
    wrong:new Array(N).fill(0), correct:new Array(N).fill(0),
    artSeen:new Array(N).fill(0), artWrong:new Array(N).fill(0),
    newPerDay:NEW_PER_DAY, dir:'de', order:shuffled(N),
    read:[], startDate:Date.now(), lastIntro:'', introToday:0};
}
/* Model: her gün 20 yeni kelime + günü gelen tekrarlar; oturum içi drilling/bonus YOK. */

const hasArtifactStore = typeof window.storage!=='undefined' && window.storage && typeof window.storage.get==='function';
function lsGet(){ try{return localStorage.getItem(KEY);}catch(e){return null;} }
function lsSet(v){ try{localStorage.setItem(KEY,v);return true;}catch(e){return false;} }
function migrate(){
  if(!Array.isArray(S.order)||S.order.length!==N) S.order=shuffled(N);
  if(!Array.isArray(S.correct)||S.correct.length!==N) S.correct=new Array(N).fill(0);
  if(!Array.isArray(S.artSeen)||S.artSeen.length!==N) S.artSeen=new Array(N).fill(0);
  if(!Array.isArray(S.artWrong)||S.artWrong.length!==N) S.artWrong=new Array(N).fill(0);
  if(!Array.isArray(S.read)) S.read=[];
  if(S.dir!=='de'&&S.dir!=='tr'&&S.dir!=='mix') S.dir='de';
  if(typeof S.introToday!=='number'||S.introToday<0) S.introToday=0;
  if(typeof S.lastIntro!=='string') S.lastIntro='';
  S.newPerDay=NEW_PER_DAY;                                 // günlük hedef sabit: 20 yeni kelime
  if(S.introToday>NEW_PER_DAY) S.introToday=NEW_PER_DAY;   // eski 30/gün'den gelen taşmayı kırp
}
async function loadState(){
  if(hasArtifactStore){ try{ const r=await window.storage.get(KEY); if(r&&r.value){S=JSON.parse(r.value);migrate();return;} }catch(e){} }
  const v=lsGet(); if(v){ try{ S=JSON.parse(v); migrate(); return; }catch(e){} }
  S=freshState(); await saveState(true);
}
async function saveState(first){
  const v=JSON.stringify(S); let ok=false;
  if(hasArtifactStore){ try{ await window.storage.set(KEY,v); ok=true; }catch(e){} }
  if(lsSet(v)) ok=true;
  if(!ok&&!mem){ mem=true; if(!first) toast('Kayıt yapılamıyor — ilerleme bu oturumla sınırlı'); }
}
/* Ertelenmiş kayıt — kart geçişi bittikten (yeni kart boyandıktan) sonra kaydeder,
   böylece büyük JSON.stringify + localStorage yazımı animasyonu bloklamaz. */
let _saveT=0;
function saveSoon(){ if(_saveT) return; _saveT=setTimeout(()=>{ _saveT=0; saveState(); },0); }
function todayKey(){ const d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function dayNo(){ return Math.floor((Date.now()-S.startDate)/86400000)+1; }
function isMastered(i){ return S.box[i]>MASTER_BOX; }
function reviewsDue(){ const now=Date.now(),o=[]; for(let i=0;i<N;i++) if(S.box[i]>=0&&!isMastered(i)&&S.due[i]<=now) o.push(i); return o; }
function newAvailable(){ return S.order.filter(i=>S.box[i]===-1); }
function newQuotaLeft(){ return S.lastIntro!==todayKey()? S.newPerDay : Math.max(0,S.newPerDay-S.introToday); }
function counts(){ let m=0,l=0,n=0; for(let i=0;i<N;i++){ if(S.box[i]===-1)n++; else if(isMastered(i))m++; else l++; } return {m,l,n}; }

const $ = id=>document.getElementById(id);
function toast(msg){ const t=$('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'),2400); }
function show(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on')); $(id).classList.add('on'); window.scrollTo(0,0); }

/* ---------- ANA EKRAN ---------- */
function renderHome(){
  const {m,l,n}=counts();
  $('st-mastered').textContent=m; $('st-learning').textContent=l; $('st-new').textContent=n;
  $('daybadge').textContent='Gün '+dayNo()+' / ~'+Math.ceil(N/NEW_PER_DAY);
  const rev=reviewsDue().length, nq=Math.min(newQuotaLeft(),n), total=rev+nq;
  if(total===0){
    $('hero-title').textContent='Bugünlük tamam ✓';
    $('hero-sub').textContent = m===N?'608 kelimenin tamamını öğrendin!':'Bugünün 20 kelimesi bitti. Sıradaki tekrarlar günü gelince burada belirir.';
    $('btn-start').disabled=true; $('btn-start').textContent='Beklenen kart yok';
  }else{
    $('hero-title').textContent=(rev? rev+' tekrar + ':'')+nq+' yeni kelime';
    $('hero-sub').textContent='Her kelime bir kez sorulur — oturum içinde tekrar yok. Öğrendiklerin sonraki günlerde tekrar planına düşer.';
    $('btn-start').disabled=false; $('btn-start').textContent='Oturuma başla ('+total+' kart)';
  }
  const names=['Kutu 1 · yeni/yanlış','Kutu 2 · 1 gün','Kutu 3 · 3 gün','Kutu 4 · 1 hafta','Kutu 5 · 2 hafta','Kutu 6 · 1 ay','Öğrenildi ★'];
  const colors=['#DC2626','#EA580C','#D97706','#65A30D','#16A34A','#0D9488','#B8860B'];
  const dist=new Array(7).fill(0);
  for(let i=0;i<N;i++){ if(S.box[i]===-1) continue; dist[Math.min(6, isMastered(i)?6:S.box[i])]++; }
  let html='';
  for(let b=0;b<7;b++){ const pct=N?(dist[b]/N*100):0;
    html+=`<div class="boxrow"><div class="bl">${names[b]}</div><div class="bar"><i style="width:${pct}%;background:${colors[b]}"></i></div><div class="bn">${dist[b]}</div></div>`; }
  $('boxes').innerHTML=html;
  const daysAll=Math.ceil(N/NEW_PER_DAY);
  $('planbox').innerHTML=
    `<b>Hedef:</b> Günde <b>${NEW_PER_DAY} yeni kelime</b> — 608 A1 kelimesi ~<b>${daysAll} günde</b> biter.<br>`+
    `<b>Günlük grup:</b> Her gün sana özel sabit sırayla ${NEW_PER_DAY}'lik bir kelime grubu gelir.<br>`+
    `<b>Oturum içi tekrar YOK:</b> Bir kelime aynı oturumda yalnızca <b>1 kez</b> sorulur; üst üste drilling/bonus yoktur.<br>`+
    `<b>Aralıklı tekrar (günler arası):</b> Öğrendiğin her kelime tekrar planına girer: <b>1 gün → 3 gün → 1 hafta → 2 hafta → 1 ay</b>. Doğru bildikçe ilerler, yanlışta başa döner. Tümü <b>"Tekrar listesi"</b>nde görünür.<br>`+
    `<b>Öğrenildi:</b> Tüm aralıkları geçen kelime (6. kutu) "öğrenildi" olur ve tekrar planından çıkar.`;
  document.querySelectorAll('#seg-dir button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.dir));
}

/* ---------- OTURUM MOTORU (aralıklı tekrar; oturum içi tekrar YOK) ---------- */
let Q=[], sessDone=0, sessCorrect=0, sessGraded=0, sessUp=0, cur=null, curDir='de', revealed=false;

function buildSession(){
  if(S.lastIntro!==todayKey()){ S.lastIntro=todayKey(); S.introToday=0; }   // yeni günse günlük kotayı sıfırla
  // Tekrar günü gelenler (önceki günlerden) + bugünün KALAN yeni kelimeleri — her biri yalnız 1 kez
  const rev=reviewsDue();
  for(let k=rev.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[rev[k],rev[j]]=[rev[j],rev[k]];}
  const news=newAvailable().slice(0, Math.min(newQuotaLeft(),N));
  // NOT: introToday burada DEĞİL, kelime gerçekten çalışıldığında (grade) artırılır —
  // böylece oturum yarıda bırakılınca günlük kota yanmaz, aynı gün kaldığın yerden devam edersin.
  Q=[...rev.map(i=>({i,kind:'rev'})), ...news.map(i=>({i,kind:'new'}))];   // önce tekrar turu, sonra günün yeni kelimeleri
  sessDone=0; sessCorrect=0; sessGraded=0; sessUp=0;
}

function nextCard(){
  if(Q.length===0){ finishSession(); return; }
  cur=Q.shift(); revealed=false;
  const w=WORDS[cur.i], g=parseWord(w);
  curDir = S.dir==='mix' ? (Math.random()<0.5?'de':'tr') : S.dir;
  if(cur.kind==='new') curDir='de';   // yeni kelime ilk kez daima DE→TR gösterilir

  const card=$('card');
  card.classList.remove('anim'); card.style.transform=''; card.style.opacity='1';
  $('stamp-yes').style.opacity=0; $('stamp-no').style.opacity=0;
  // TR→DE'de artikeli ele vermemek için ribbon nötr; cevap açılınca (reveal) gerçek renge döner
  $('ribbon').style.background = (curDir==='de' && w.a) ? `var(--${w.a})` : 'var(--none)';

  if(cur.kind==='new'){ $('tag-status').textContent='Yeni kelime'; }
  else { $('tag-status').innerHTML='<span class="bonus">↻ Tekrar</span>'; }
  $('tag-times').textContent = cur.kind==='new' ? '' : ('Kutu '+(Math.min(S.box[cur.i],5)+1));

  if(curDir==='de'){
    $('c-art').textContent=w.a; $('c-art').className='art '+(w.a?'artbig '+w.a:'');
    $('c-word').textContent=display(w);
    $('a-trans').textContent=w.t;
  }else{
    $('c-art').textContent=''; $('c-art').className='art';
    $('c-word').textContent=w.t;
    $('a-trans').innerHTML=(w.a?`<span class="art ${w.a}">${w.a}</span> `:'')+display(w);
  }
  let chips=`<span class="chip pos">${CATS[w.c]||''}</span>`;
  if(w.a){ const [cls,txt]=GENDER[w.a]; chips+=`<span class="chip ${cls}">${txt}</span>`; }
  if(g.plural) chips+=`<span class="chip">çoğul: die ${g.plural}</span>`;
  for(const nt of g.notes){ const c=caseNote(nt); if(c) chips+=`<span class="chip gram">${c}</span>`; }
  $('a-chips').innerHTML=chips;
  const exDe=highlightWord(w.gd,g.base);
  if(curDir==='de'){
    // DE→TR: Almanca örnek cümleyi soru tarafında göster; cevapta sadece Türkçesi açılır
    $('c-example').innerHTML=exDe; $('c-example').style.display='block';
    $('a-exde').style.display='none'; $('a-exde').innerHTML='';
  }else{
    // TR→DE: Almanca cümle cevabı ele vermesin diye soruda gizli, cevapta görünür
    $('c-example').style.display='none'; $('c-example').innerHTML='';
    $('a-exde').style.display=''; $('a-exde').innerHTML=exDe;
  }
  $('a-extr').textContent=w.gt;

  $('c-answer').classList.remove('show');
  $('taphint').style.display='block';
  $('swipe-hints').classList.add('hidden');
  $('showrow').style.display='block';
  const total=sessDone+Q.length+1;
  $('prog-i').style.width=(sessDone/total*100)+'%';
  $('sess-count').textContent=(Q.length+1)+' kaldı';
}
function reveal(){
  if(revealed) return; revealed=true;
  const w=WORDS[cur.i];
  $('ribbon').style.background = w.a?`var(--${w.a})`:'var(--none)';   // cevapta artikel rengini göster
  $('c-answer').classList.add('show');
  $('taphint').style.display='none';
  $('showrow').style.display='none';
  $('swipe-hints').classList.remove('hidden');
}

/* Not değerlendirme — kart kuyruğa GERİ EKLENMEZ (oturum içi tekrar yok).
   Sonuç yalnızca aralıklı tekrar zamanlamasını (kutu + due) belirler. */
async function grade(g){
  const i=cur.i;
  S.seen[i]++; sessGraded++;
  const firstEver = S.box[i]===-1;
  if(firstEver) S.box[i]=0;
  if(cur.kind==='new'){            // yeni kelime gerçekten çalışıldı → günlük 20 kotasını ilerlet
    if(S.lastIntro!==todayKey()){ S.lastIntro=todayKey(); S.introToday=0; }
    S.introToday++;
  }

  if(g===2){                       // Bildim → bir üst kutu
    sessCorrect++; S.correct[i]++;
    S.box[i]=Math.min(S.box[i]+1, MASTER_BOX+1);
    if(!firstEver) sessUp++;
  }else if(g===1){                 // Zor bildim → kutu sabit (min 1), yarın tekrar
    sessCorrect++;
    S.box[i]=Math.max(S.box[i],1);
  }else{                           // Bilemedim → başa dön (kutu 0), yarın tekrar
    S.wrong[i]++; S.box[i]=0;
  }

  // Öğrenilen/çalışılan her kelime tekrar planına girer (due mutlaka set edilir)
  if(isMastered(i)){
    S.due[i]=0;
    toast('★ Öğrenildi: '+(WORDS[i].a?WORDS[i].a+' ':'')+display(WORDS[i]));
  }else{
    const days=(g===2)?BOX_DAYS[Math.min(S.box[i],BOX_DAYS.length-1)]:1;   // doğru→kutu aralığı, yanlış/zor→yarın
    S.due[i]=Date.now()+days*86400000;
  }

  sessDone++;
  nextCard(); saveSoon();
}

function finishSession(){
  $('d-cards').textContent=sessGraded;
  $('d-acc').textContent=sessGraded?Math.round(sessCorrect/sessGraded*100)+'%':'–';
  $('d-up').textContent=sessUp;
  const {m}=counts();
  $('d-msg').textContent='Bugünün kartları bitti. Öğrendiklerin tekrar planına eklendi — yarın tekrarları hazır olacak. '+m+' / '+N+' kelime öğrenildi.';
  show('scr-done');
}

/* ---------- SWIPE ----------
   Sürüklerken takılmayı (jank) önleyen üç önlem:
   1) DOM referansları önbelleğe alınır → pointermove'da getElementById yok.
   2) Çizim requestAnimationFrame ile kare başına 1 kez yapılır → paint fırtınası yok.
   3) translate3d → GPU kompozit katmanı, düzgün 60fps kayma. */
const card=$('card');
const stampYes=$('stamp-yes'), stampNo=$('stamp-no');
let drag=null, dragRaf=0, dragDx=0, dragW=0;

function paintDrag(){
  dragRaf=0;
  card.style.transform=`translate3d(${dragDx}px,0,0) rotate(${dragDx*0.05}deg)`;
  const p=Math.min(1,Math.abs(dragDx)/110);
  stampYes.style.opacity=dragDx>0?p:0;
  stampNo.style.opacity=dragDx<0?p:0;
}
card.addEventListener('pointerdown',e=>{
  if(!revealed || e.button>0) return;
  drag={x:e.clientX,id:e.pointerId}; dragDx=0; dragW=window.innerWidth;
  try{ card.setPointerCapture(e.pointerId); }catch(_){}
  card.classList.remove('anim');
},{passive:true});
card.addEventListener('pointermove',e=>{
  if(!drag || e.pointerId!==drag.id) return;
  dragDx=e.clientX-drag.x;
  if(!dragRaf) dragRaf=requestAnimationFrame(paintDrag);
},{passive:true});
function endDrag(e){
  if(!drag || (e && e.pointerId!==drag.id)) return;
  const dx=dragDx; drag=null;
  if(dragRaf){ cancelAnimationFrame(dragRaf); dragRaf=0; }
  card.classList.add('anim');
  if(Math.abs(dx)>90){
    const dir=dx>0?1:-1;
    card.style.transform=`translate3d(${dir*(dragW+80)}px,0,0) rotate(${dir*20}deg)`;
    card.style.opacity='0';
    setTimeout(()=>grade(dir>0?2:0),200);
  }else{
    card.style.transform='translate3d(0,0,0)';
    stampYes.style.opacity=0; stampNo.style.opacity=0;
  }
}
card.addEventListener('pointerup',endDrag);
card.addEventListener('pointercancel',endDrag);
card.addEventListener('click',()=>{ if(!revealed) reveal(); });

/* ---------- LİSTELER ---------- */
let listTab='ogrendim', listCat='hepsi', listQ='';
function renderChips(){
  const cats=[['hepsi','Hepsi'],['isim','İsim'],['fiil','Fiil'],['sifat','Sıfat / Zarf'],['zamir','Zamir'],['diger','Edat / Bağlaç'],['sayilar','Sayılar']];
  $('cat-chips').innerHTML=cats.map(([v,l])=>`<button class="fchip ${v===listCat?'on':''}" data-v="${v}">${l}</button>`).join('');
  $('cat-chips').querySelectorAll('button').forEach(b=>b.onclick=()=>{ listCat=b.dataset.v; renderChips(); renderList(); });
}
function renderList(){
  const body=$('list-body'), info=$('listinfo');
  if(listCat==='sayilar'){
    info.textContent='Sayılar — '+NUMBERS.length+' referans (ezber kartlarına dâhil değil)';
    body.innerHTML='<div class="numgrid">'+NUMBERS.map(([n,d,t])=>
      `<div class="numcell"><span class="n">${n}</span><span class="d">${d}</span><span class="t">${t}</span></div>`).join('')+'</div>';
    return;
  }
  let idx=[...Array(N).keys()];
  if(listTab==='ogrendim') idx=idx.filter(i=>isMastered(i));
  else if(listTab==='tekrar') idx=idx.filter(i=>S.box[i]>=0 && !isMastered(i));   // tekrar planındaki kelimeler
  if(listCat!=='hepsi') idx=idx.filter(i=>WORDS[i].c===listCat);
  if(listQ){
    const q=listQ.toLowerCase();
    idx=idx.filter(i=>(WORDS[i].w+' '+WORDS[i].a+' '+WORDS[i].t).toLowerCase().includes(q));
  }
  if(listTab==='tekrar') idx.sort((a,b)=>(S.due[a]||0)-(S.due[b]||0));   // tekrar günü en yakın önce
  else idx.sort((a,b)=>display(WORDS[a]).localeCompare(display(WORDS[b]),'de'));

  const label={ogrendim:'Öğrendiklerim',tekrar:'Tekrar listesi',tum:'Tüm kelimeler'}[listTab];
  info.textContent=label+' — '+idx.length+' kelime';
  if(!idx.length){
    body.innerHTML='<div class="empty">'+(listTab==='ogrendim'
      ? 'Henüz öğrenilmiş kelime yok.<br>Bir kelime tüm tekrar aralıklarını geçince (6. kutu) buraya düşer.'
      : listTab==='tekrar'
      ? 'Tekrar planında kelime yok.<br>Oturumda kelime öğrendikçe burada birikir.'
      : 'Bu filtreye uyan kelime yok.')+'</div>';
    return;
  }
  const dot=i=>isMastered(i)?'var(--gold)':S.wrong[i]>0?'var(--bad)':S.box[i]>=3?'var(--ok)':S.box[i]>=1?'var(--mid)':'var(--line)';
  body.innerHTML='<div class="wlist">'+idx.slice(0,400).map(i=>{
    const w=WORDS[i];
    const art=w.a?`<span class="art ${w.a}" style="font-size:15px">${w.a}</span> `:'';
    const dueTxt=(S.box[i]<0||isMastered(i))?'':(()=>{ const d=Math.ceil((S.due[i]-Date.now())/86400000); return d<=0?'bugün tekrar':(d+' gün sonra'); })();
    const meta = isMastered(i) ? '★ öğrenildi<br>'+S.seen[i]+' tekrar'
      : S.box[i]<0 ? 'başlanmadı'
      : 'Kutu '+(Math.min(S.box[i],5)+1)+' · '+dueTxt+'<br>'+S.seen[i]+' tekrar · '+S.wrong[i]+' hata';
    return `<div class="witem"><div class="wrow" data-i="${i}"><div class="dot" style="background:${dot(i)}"></div>
      <div class="wd"><div class="de">${art}<em>${display(w)}</em></div><div class="tr">${w.t}</div></div>
      <div class="meta">${meta}</div><div class="wchev">›</div></div>
      <div class="wgram">${grammarPanel(i)}</div></div>`;
  }).join('')+'</div>'+(idx.length>400?'<div class="listinfo" style="margin-top:8px">İlk 400 gösteriliyor — aramayı daraltın.</div>':'');
}
$('list-tabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{
  listTab=b.dataset.v;
  $('list-tabs').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
  renderList();
});
$('search').oninput=e=>{ listQ=e.target.value.trim(); renderList(); };
/* Kelimeye tıkla → gramer kartı aç/kapa (delegasyon; her render'da #list-body kalıcı).
   Akordeon: yeni kelime açılınca öncekiler kapanır. "Kapat ✕" da kapatır. */
$('list-body').addEventListener('click', e=>{
  if(e.target.closest('.wclose')){ const it=e.target.closest('.witem'); if(it) it.classList.remove('open'); return; }
  const row=e.target.closest('.wrow'); if(!row) return;
  const item=row.closest('.witem'); if(!item) return;
  const willOpen=!item.classList.contains('open');
  $('list-body').querySelectorAll('.witem.open').forEach(x=>{ if(x!==item) x.classList.remove('open'); });
  item.classList.toggle('open', willOpen);
});

/* ---------- HİKÂYE ---------- */
function renderStories(){
  $('story-list').innerHTML=STORIES.map((s,k)=>{
    const read=S.read.includes(k);
    return `<div class="storycard ${read?'read':''}" data-k="${k}">
      <div class="snum">${read?'✓':k+1}</div>
      <div class="sinfo"><h3>${s.t}</h3><p>${s.tt} · ${s.l.length} cümle</p></div>
      <div class="slvl">${s.lvl}</div></div>`;
  }).join('');
  $('story-list').querySelectorAll('.storycard').forEach(c=>c.onclick=()=>openStory(+c.dataset.k));
}
function openStory(k){
  const s=STORIES[k];
  $('reader-crumb').textContent='Bölüm '+(k+1)+' / '+STORIES.length;
  $('reader').innerHTML=
    `<h2>${s.t}</h2><div class="sub">${s.tt}</div>`+
    s.l.map(([de,tr])=>`<div class="sline"><div class="g">${de}</div><div class="hint">dokun → Türkçe</div><div class="t">${tr}</div></div>`).join('')+
    `<div class="vocab"><h4>Bölüm kelimeleri</h4>`+
    s.v.map(([d,t])=>`<div class="vrow"><b>${d}</b><span>${t}</span></div>`).join('')+`</div>`+
    `<div class="rbtns"><button class="rbtn sec" id="r-all">Tüm çevirileri aç</button>
      <button class="rbtn pri" id="r-done">${S.read.includes(k)?'Okundu ✓':'Okudum olarak işaretle'}</button></div>`;
  $('reader').querySelectorAll('.sline').forEach(l=>l.onclick=()=>l.classList.toggle('open'));
  $('r-all').onclick=()=>{ const any=[...$('reader').querySelectorAll('.sline')].some(l=>!l.classList.contains('open'));
    $('reader').querySelectorAll('.sline').forEach(l=>l.classList.toggle('open',any));
    $('r-all').textContent = any?'Çevirileri gizle':'Tüm çevirileri aç'; };
  $('r-done').onclick=async()=>{ if(!S.read.includes(k)) S.read.push(k); await saveState(); $('r-done').textContent='Okundu ✓'; renderStories(); };
  show('scr-reader');
}
$('btn-sback').onclick=()=>{ renderStories(); show('scr-stories'); };

/* ---------- ARTİKEL (der/die/das) ---------- */
let AQ=[], aCur=null, aRevealed=false, aDone=0, aCorrect=0, aTotal=0;

function artNouns(){ const o=[]; for(let i=0;i<N;i++) if(WORDS[i].a) o.push(i); return o; }

function renderArtikel(){
  $('ak-quiz').style.display='none';
  $('ak-home').style.display='block';
  const total=artNouns().length;
  $('ak-hero-sub').textContent='İsmi artikelsiz göster, doğru artikeli seç. '+total+' isim · her turda '+Math.min(15,total)+' soru.';
  $('ak-plan').innerHTML=
    `<b>Nasıl çalışır:</b> Renk kodlu 3 buton — <span class="art der">mavi der</span>, <span class="art die">kırmızı die</span>, <span class="art das">yeşil das</span>.<br>`+
    `Zorlandığın ve hiç sorulmamış isimler önce gelir. Cevaptan sonra cinsiyet, çoğul, örnek cümle ve varsa <b>ek kuralı</b> ipucu gösterilir.<br>`+
    `<b>Klavye:</b> <b>1/2/3</b> ya da <b>d/f/g</b> ile seç, <b>Enter</b> ile devam et.`;
}

function buildArtikel(){
  const wrong=[],fresh=[],rest=[];
  for(let i=0;i<N;i++){
    if(!WORDS[i].a) continue;               // sadece isimler (w.a dolu)
    if(S.artWrong[i]>0) wrong.push(i);      // önce zorlandıkların
    else if(S.artSeen[i]===0) fresh.push(i);// sonra hiç sorulmamışlar
    else rest.push(i);
  }
  const sh=arr=>shuffled(arr.length).map(k=>arr[k]);   // shuffled() helper'ını kullan
  const pool=[...sh(wrong),...sh(fresh),...sh(rest)];
  AQ=pool.slice(0,Math.min(15,pool.length)).map(i=>({i}));
  aDone=0; aCorrect=0; aTotal=AQ.length;
}

function akNext(){
  if(AQ.length===0){ akFinish(); return; }
  aCur=AQ.shift(); aRevealed=false;
  const w=WORDS[aCur.i];
  $('ak-word').textContent=display(w);
  $('ak-fb').style.display='none'; $('ak-fb').innerHTML='';
  $('ak-next-row').style.display='none';
  document.querySelectorAll('#ak-btns .akbtn').forEach(b=>{ b.classList.remove('correct','wrong'); b.disabled=false; });
  $('ak-tag').textContent = S.artSeen[aCur.i]===0 ? 'Yeni' : (S.artWrong[aCur.i]>0 ? 'Tekrar' : 'Bilinen');
  $('ak-times').textContent = (aDone+1)+' / '+aTotal;
  $('aprog-i').style.width=(aDone/aTotal*100)+'%';
  $('acount').textContent=AQ.length+' kaldı';
}

async function akGrade(choice){
  if(aRevealed || !aCur) return;
  aRevealed=true;
  const i=aCur.i, w=WORDS[i], g=parseWord(w), correct=w.a, ok=(choice===correct);
  S.artSeen[i]++;
  if(ok){ aCorrect++; }
  else{
    S.artWrong[i]++;
    // yanlışı kuyruğa geri ekle — arka arkaya değil (min 2 boşluk)
    if(AQ.length>2){ const lo=2, hi=Math.min(AQ.length,6); AQ.splice(lo+Math.floor(Math.random()*(hi-lo+1)),0,{i}); }
    else AQ.push({i});
    aTotal++;
  }
  aDone++;
  document.querySelectorAll('#ak-btns .akbtn').forEach(b=>{
    if(b.dataset.a===correct) b.classList.add('correct');
    if(b.dataset.a===choice && !ok) b.classList.add('wrong');
    b.disabled=true;
  });
  const [cls,label]=GENDER[correct], rule=articleRule(g.base);
  let html=`<div class="akres ${ok?'good':'bad'}">${ok?'Doğru ✓':'Yanlış ✗'} — <span class="art ${correct}">${correct}</span> ${display(w)}</div>`;
  html+=`<div class="akmeta"><span class="chip ${cls}">${label}</span>`;
  if(g.plural) html+=`<span class="chip">çoğul: die ${g.plural}</span>`;
  html+=`</div>`;
  if(rule && rule.art===correct) html+=`<div class="akhint">💡 ${rule.txt}</div>`;
  html+=`<div class="akex"><div class="de">${highlightWord(w.gd,g.base)}</div><div class="tr">${w.gt}</div></div>`;
  $('ak-fb').innerHTML=html; $('ak-fb').style.display='block';
  $('ak-next-row').style.display='block';
  $('aprog-i').style.width=(aDone/aTotal*100)+'%';
  await saveState();
}

function akFinish(){
  toast('Artikel turu bitti — '+aCorrect+' / '+aTotal+' doğru');
  renderArtikel();
}

/* ---------- NAVİGASYON ---------- */
document.querySelectorAll('.tabbar button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tabbar button').forEach(x=>x.classList.toggle('on',x===b));
  const s=b.dataset.scr;
  if(s==='home'){ renderHome(); show('scr-home'); }
  if(s==='lists'){ renderChips(); renderList(); show('scr-lists'); }
  if(s==='stories'){ renderStories(); show('scr-stories'); }
  if(s==='artikel'){ renderArtikel(); show('scr-artikel'); }
});
$('btn-start').onclick=async()=>{ buildSession(); await saveState(); if(Q.length){ show('scr-sess'); nextCard(); } };
$('btn-show').onclick=reveal;
$('btn-mid').onclick=()=>{ card.classList.add('anim'); card.style.transform='translateY(-40px)'; card.style.opacity='0'; setTimeout(()=>grade(1),200); };
$('btn-back').onclick=()=>{ renderHome(); show('scr-home'); };
$('btn-home').onclick=()=>{ renderHome(); show('scr-home'); };
document.querySelectorAll('#seg-dir button').forEach(b=>b.onclick=async()=>{ S.dir=b.dataset.v; await saveState(); renderHome(); });
$('btn-reset').onclick=async()=>{ if(confirm('Tüm ilerleme silinsin mi? Bu geri alınamaz.')){ S=freshState(); await saveState(); renderHome(); toast('Sıfırlandı'); } };
/* Artikel quiz butonları */
$('ak-start').onclick=()=>{ buildArtikel(); if(AQ.length){ $('ak-home').style.display='none'; $('ak-quiz').style.display='block'; akNext(); } else toast('Sorulacak isim bulunamadı'); };
$('ak-next').onclick=akNext;
$('btn-aback').onclick=()=>{ renderArtikel(); };
$('ak-btns').querySelectorAll('.akbtn').forEach(b=>b.onclick=()=>akGrade(b.dataset.a));
document.addEventListener('keydown',e=>{
  if($('scr-artikel').classList.contains('on') && $('ak-quiz').style.display!=='none'){
    if(aRevealed){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); akNext(); } return; }
    const m={'1':'der','2':'die','3':'das','d':'der','f':'die','g':'das'};
    if(m[e.key]){ e.preventDefault(); akGrade(m[e.key]); }
    return;
  }
  if(!$('scr-sess').classList.contains('on')) return;
  if(e.key===' '){ e.preventDefault(); reveal(); }
  if(revealed){ if(e.key==='ArrowLeft'||e.key==='1') grade(0);
    if(e.key==='2') grade(1); if(e.key==='ArrowRight'||e.key==='3') grade(2); }
});
(async()=>{ await loadState(); renderHome(); })();