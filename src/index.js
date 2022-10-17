window.addEventListener('DOMContentLoaded', function() {

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  //swiper

  new Swiper('.swiper-container', {
    slidesPerView: 1,
    touchEventsTarget: 'swiper-container',
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 4000,
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  });

  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });

  //tabs

  document.querySelectorAll('.work__link').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.work__link').forEach(function(link) {
        link.classList.remove('work__link--active');
        event.currentTarget.classList.add('work__link--active');

        document.querySelectorAll('.work__tab').forEach(function(elem) {
          elem.classList.remove('work__tab--active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('work__tab--active');
      });
    });
  });

  //burger

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.add('header__menu--active');
  });

  document.querySelector('.header-menu__btn').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.remove('header__menu--active');
  });

  //search

  document.querySelector('.header__btn').addEventListener('click', function() {
    document.querySelector('.haeder__serach').classList.toggle('opacity');
    document.querySelector('.haeder__serach').classList.add('header__search--active');
    document.querySelector('.header__input').classList.add('header__input--active');
    document.querySelector('.header__bt').classList.add('header__bt--active');
    document.querySelector('.header__closed').classList.add('header__closed-active');

  });

  document.querySelector('.header__closed').addEventListener('click', function() {
    document.querySelector('.haeder__serach').classList.add('opacity');
    setTimeout(function() {
      document.querySelector('.haeder__serach').classList.remove('header__search--active');
    }, 600);
    document.querySelector('.header__input').classList.remove('header__input--active');
    document.querySelector('.header__bt').classList.remove('header__bt--active');
    document.querySelector('.header__closed').classList.remove('header__closed-active');
  });


});
