const names=["亗 D A R K 亗","乂 NIGHT 乂","『ACE』〆","メ LEGEND ツ","亗 VENOM 亗","么 SHADOW 么","〆 HUNTER 〆","乂 CYBER 乂","★ PHANTOM ★","『KING』ツ"];
const nameBox=document.getElementById("nameBox");
function renderNames(){nameBox.innerHTML=names.map(n=>`<div class="name-chip" onclick="copyText('${n.replace(/'/g,"\\'")}')">${n}</div>`).join("")}
renderNames();
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove("show"),2200)}
async function copyText(txt){try{await navigator.clipboard.writeText(txt);showToast("Copied: "+txt)}catch(e){showToast(txt)}}
function generateName(){const n=names[Math.floor(Math.random()*names.length)];copyText(n)}
function addCode(){const code=document.getElementById("codeInput").value.trim(),title=document.getElementById("codeTitle").value.trim()||"Community Code";if(!code){showToast("Enter a code first.");return}const item=document.createElement("div");item.className="code-item";item.innerHTML=`<div><b>${title}</b><br><code>${code}</code></div><button class="tool-btn" onclick="copyText('${code.replace(/'/g,"\\'")}')">Copy</button>`;document.getElementById("codeList").prepend(item);document.getElementById("codeInput").value="";document.getElementById("codeTitle").value="";showToast("Code added on this device.")}
document.getElementById("wallSearch").addEventListener("input",e=>{const q=e.target.value.toLowerCase();document.querySelectorAll(".wall").forEach(w=>w.style.display=w.dataset.name.includes(q)?"":"none")});