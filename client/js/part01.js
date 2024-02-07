const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


const navigation = getNode('.navigation');
// const list = getNodes('.navigation li');
const visualImage = getNode('.visual img');

function handleSlide(e) {

  e.preventDefault();

  // 1. e.target 조회
  // 2. li만 수집
  const target = e.target.closest('li');
  const a = e.target.closest('a');
  const list = [...navigation.children];


  if (!target || !a) return;

  // 선택한 li가 몇 번째인지 찾아서 data 배열의 i번째에 접근
  const index = target.dataset.index;
  const src = data[index - 1].src;
  const alt = data[index - 1].alt;

  // li를 클릭할 때마다 visual의 image를 교체
  // visualImage.src = a.href;
  // visualImage.setAttribute('src', a.href);
  attr(visualImage, 'src', `./assets/part01/${src}`);
  attr(visualImage, 'alt', alt);


  // 모든 li에 있는 is-active 클래스 제거
  list.forEach(li => removeClass(li, 'is-active'));

  // 선택한 li에 is-active 클래스 부여
  addClass(target, 'is-active');
}


navigation.addEventListener('click', handleSlide);
