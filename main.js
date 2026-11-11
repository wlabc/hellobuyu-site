(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -6% 0px',threshold:.08});
  els.forEach(function(e,i){e.style.transitionDelay=(i%3)*70+'ms';io.observe(e)});
})();
