const projects=[
{title:"Hamyar School",type:"platform",label:"Education · multi-tenant SaaS",desc:"A role-aware school operations platform spanning administrators, teachers, students and families. Contributed to product experience, data workflows, tenant isolation, application architecture and release verification.",tags:"Product architecture / Multi-tenancy / Data / UX",url:"case-studies/hamyar-school.html"},
{title:"Risheh Core",type:"platform",label:"Internal systems · engineering operations",desc:"A unified workspace for collaboration, task tracking and engineering operations — including GitHub integration, access scopes, team workflows and a protected document vault.",tags:"Platform engineering / Access control / Integrations",url:"case-studies/risheh-core.html"},
{title:"Omid90",type:"engineering",label:"Modernization · live application",desc:"Modernization of an existing multi-service web platform while preserving critical business rules and APIs. Focus areas included frontend experience, safe migration practices, validation and operational reliability.",tags:"React / Node.js / MongoDB / Redis / QA",url:"case-studies/omid90.html"},
{title:"Entekhab Platform",type:"platform",label:"Content · services · operations",desc:"Product platform for managing content, specialists and service workflows with an emphasis on an understandable editorial experience, data management and deployable architecture.",tags:"Product design / CMS / PostgreSQL / Delivery",url:null},
{title:"Risheh Growth Intelligence",type:"ai",label:"AI · product and growth systems",desc:"Architecture for combining brand context, content planning, structured imports and intelligent workflows into a coherent growth intelligence platform.",tags:"AI workflows / FastAPI / Product strategy",url:null},
{title:"Prototype Factory Skill",type:"ai",label:"Developer tooling · prototyping",desc:"A documented seven-stage workflow that connects discovery, design exploration, golden screens, implementation and evidence-based quality gates. Designed to avoid unverified demo claims.",tags:"Developer experience / Prototyping / Quality gates",url:"https://github.com/mahamirmh/Risheh-Prototype-Factory-Skill"},
{title:"RISHEH Industry Solutions",type:"engineering",label:"Portfolio · industry storytelling",desc:"An industry-focused corporate presentation exploring how business challenges can be translated into digital systems, with attention to brand, communication and product narratives.",tags:"Storytelling / UX / Product positioning",url:"https://github.com/mahamirmh/RISHEH-Industry-Solutions-Corporate-Profile"}];
const container=document.getElementById("projects");const filters=[...document.querySelectorAll(".filter")];
function render(filter="all"){const list=projects.filter(p=>filter==="all"||p.type===filter);container.innerHTML=list.map((p,i)=>`<article class="project"><span class="project-num">${String(i+1).padStart(2,"0")}</span><div><h3 class="project-title">${p.url?`<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.title}</a>`:p.title}</h3><span class="project-type">${p.label}</span></div><div class="project-details"><p class="project-description">${p.desc}</p><span class="project-tags">${p.tags}</span></div><span class="project-arrow" aria-hidden="true">${p.url?"↗":"↗"}</span></article>`).join("");}
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(b=>{b.classList.remove("active");b.setAttribute("aria-pressed","false")});btn.classList.add("active");btn.setAttribute("aria-pressed","true");render(btn.dataset.filter)}));render();
const menu=document.getElementById("menu"),nav=document.getElementById("nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.innerHTML=open?'Close <span aria-hidden="true">×</span>':'Menu <span aria-hidden="true">↗</span>'});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="Menu ↗"}));
const phrases=["Software architecture with a product mindset.","Turning complexity into clarity.","Engineering practical AI workflows.","Building systems, not scattered features."];const target=document.getElementById("typewriter");if(!matchMedia("(prefers-reduced-motion: reduce)").matches){let line=0,pos=0,erase=false;function type(){const value=phrases[line];target.textContent=value.slice(0,pos);if(!erase&&pos<value.length){pos++;setTimeout(type,56)}else if(!erase){erase=true;setTimeout(type,1750)}else if(pos>0){pos--;setTimeout(type,24)}else{erase=false;line=(line+1)%phrases.length;setTimeout(type,350)}}type()}document.getElementById("year").textContent=new Date().getFullYear();const progress=document.getElementById("progress");window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+"%"},{passive:true});

/* V4 project spotlight — local curated source, no speculative images */
const featured=projects.filter(p=>p.url&&p.url.startsWith("case-studies/"));
let activeFeatured=0;
const spotlightTitle=document.getElementById("spotlight-title");
const spotlightDescription=document.getElementById("spotlight-description");
const spotlightLink=document.getElementById("spotlight-link");
const spotlightIndex=document.getElementById("spotlight-index");
const spotlightType=document.getElementById("spotlight-type");
const spotlightArt=document.getElementById("spotlight-art");
function setFeatured(index){
 if(!featured.length)return;
 activeFeatured=(index+featured.length)%featured.length;
 const project=featured[activeFeatured];
 spotlightTitle.textContent=project.title;
 spotlightDescription.textContent=project.desc;
 spotlightLink.href=project.url;
 spotlightIndex.textContent=String(activeFeatured+1).padStart(2,"0");
 spotlightType.textContent=project.label.split("·")[0].trim().toUpperCase();
 spotlightArt.classList.remove("is-changing");
 void spotlightArt.offsetWidth;
 if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)spotlightArt.classList.add("is-changing");
}
document.getElementById("spotlight-prev")?.addEventListener("click",()=>setFeatured(activeFeatured-1));
document.getElementById("spotlight-next")?.addEventListener("click",()=>setFeatured(activeFeatured+1));
setFeatured(0);
const sections=document.querySelectorAll(".section-heading,.about-grid,.principles,.capabilities>div,.timeline article,.contact-section h2");
if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("revealed");observer.unobserve(entry.target)}
 }),{threshold:.08,rootMargin:"0px 0px -25px 0px"});
 sections.forEach(el=>{el.setAttribute("data-reveal","");observer.observe(el)});
}else{sections.forEach(el=>{el.setAttribute("data-reveal","");el.classList.add("revealed")})}
