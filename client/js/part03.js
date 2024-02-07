const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];


const split = new SplitText('h3', {type: 'chars'})

// split.chars => array



const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000
  },
  loop: true,
  speed: 2000,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'bullet',
    bulletActiveClass: 'is-active',
    renderBullet: function (index, className) {
      return /* html */ `
        <span class=${className}>
          <img src="./assets/part01/${data[index].src}" alt="${data[index].alt}" />
        </span>
      `
    }
  },
  parallax: true,
});


swiper
.on('slideChangeTransitionStart', function(){
  // console.log('넘어갔다!');
  // document.querySelector('h3').classList.remove('is-active');

  gsap.to(split.chars, {
    yPercent: 120,
    stagger: 0.05,
  })
})
.on('slideChangeTransitionEnd', function(){
  // console.log('도착했다!');
  // document.querySelector('h3').classList.add('is-active');
  gsap.to(split.chars, {
    yPercent: 0,
    stagger: 0.05
  })
})