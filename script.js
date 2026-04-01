// TABS
function openTab(id){
  document.querySelectorAll(".tab").forEach(t=>t.style.display="none");
  document.getElementById(id).style.display="block";
}
openTab("diary");

// 💬 CHARACTER RANDOM TALK
const talks = [
 "you’re literally that girl 💅",
 "drink water pls 💖",
 "stop overthinking 😭",
 "you’re glowing today ✨"
];
setInterval(()=>{
 document.getElementById("speech").innerText =
 talks[Math.floor(Math.random()*talks.length)];
},4000);

// 🎵 MUSIC
let music = document.getElementById("music");
function toggleMusic(){
 if(music.paused) music.play();
 else music.pause();
}

// 🔒 DIARY
let pass = localStorage.getItem("pass")||"";

function setPass(){
 let input = document.getElementById("pass").value;
 if(!pass){
  localStorage.setItem("pass",input);
  pass=input;
 } else if(input===pass){
  alert("unlocked 💖");
 }
}

function saveEntry(){
 let entry = document.getElementById("entry").value;
 let all = JSON.parse(localStorage.getItem("entries")||"[]");
 all.push(entry);
 localStorage.setItem("entries",JSON.stringify(all));
 loadEntries();
}

function loadEntries(){
 let all = JSON.parse(localStorage.getItem("entries")||"[]");
 let div="";
 all.forEach(e=> div+=`<p>${e}</p>`);
 document.getElementById("entries").innerHTML=div;
}
loadEntries();

// 💌 AFFIRM
const aff=[
"you are enough 💖",
"you are powerful 👑",
"you are glowing ✨",
"you deserve love 💕"
];

function newAffirm(){
 document.getElementById("affirmText").innerText =
 aff[Math.floor(Math.random()*aff.length)];
}
newAffirm();

// 👤 PROFILE
function saveProfile(){
 localStorage.setItem("name",name.value);
 localStorage.setItem("avatar",avatar.value);
 loadProfile();
}
function loadProfile(){
 showName.innerText=localStorage.getItem("name")||"name";
 showAvatar.src=localStorage.getItem("avatar")||"";
}
loadProfile();

// 🎨 THEME
function setTheme(t){
 document.body.className=t;
}

// 🌈 MOOD
function setMood(m){
 localStorage.setItem("mood",m);
 moodDisplay.innerText="Today: "+m;
}
moodDisplay.innerText="Today: "+(localStorage.getItem("mood")||"");

// ✨ GLITTER
const c=document.getElementById("glitter");
const ctx=c.getContext("2d");
c.width=innerWidth;
c.height=innerHeight;

let p=[];
function burst(){
 for(let i=0;i<150;i++){
  p.push({x:Math.random()*c.width,y:Math.random()*c.height,s:Math.random()*4});
 }
}
function draw(){
 ctx.clearRect(0,0,c.width,c.height);
 p.forEach(a=>{
  ctx.fillRect(a.x,a.y,a.s,a.s);
  a.y+=2;
 });
 requestAnimationFrame(draw);
}
burst();
draw();

// 💿 UPDATE
function triggerUpdate(){
 alert("NEW UPDATE 💿✨");
 burst();
}

// 🎁 SURPRISE
let last=localStorage.getItem("gift")||0;
if(Date.now()-last>5*86400000){
 alert("🎁 surprise: you are magic ✨");
 localStorage.setItem("gift",Date.now());
}

// 🧸 DRAG STICKERS
document.querySelectorAll(".sticker").forEach(s=>{
 s.ondragend=(e)=>{
  s.style.left=e.pageX+"px";
  s.style.top=e.pageY+"px";
 };
});
