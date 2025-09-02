// 공통 header/footer include + 메뉴 토글 + 푸터 날짜 + Back-to-top
async function include(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(url, { cache: "no-cache" });
    el.innerHTML = await res.text();
  }
  
  include("include-header", "partials/header.html").then(() => {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    if (menuBtn && navMenu) {
      menuBtn.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      navMenu.addEventListener('click', (e) => {
        if(e.target.tagName==="A" && navMenu.classList.contains('open')){
          navMenu.classList.remove('open');
          menuBtn.setAttribute('aria-expanded','false');
        }
      });
    }
    // 현재 페이지 활성화 표시
    const links = document.querySelectorAll('#navMenu a');
    links.forEach(a=>{
      if (a.getAttribute('href') && location.pathname.endsWith(a.getAttribute('href'))) {
        a.setAttribute('aria-current','page');
      }
    });
  });
  
  include("include-footer", "partials/footer.html").then(() => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    const lu = document.getElementById('lastUpdated');
    if (lu) lu.textContent = new Date(document.lastModified).toLocaleString();
  });
  
  // Back-to-top
  window.addEventListener('scroll',()=>{
    const toTop=document.getElementById('toTop');
    if(!toTop)return;
    if(window.scrollY>400) toTop.style.display="inline-flex";
    else toTop.style.display="none";
  });
  