const MENU = {
  ALL: [],
  Bread: [
    {name: '소금빵', price: 3000, imagePath: './assets/bread.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '바게트', price: 4500, imagePath: './assets/bread.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '피자빵', price: 3500, imagePath: './assets/bread.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '마들렌', price: 2000, imagePath: './assets/bread.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  ],
  Bugger: [
    {name: '불고기 버거', price: 3000, imagePath: './assets/bugger.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '새우 버거', price: 3000, imagePath: './assets/bugger.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '치킨 버거', price: 3000, imagePath: './assets/bugger.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '핫 크리스피 버거', price: 3000, imagePath: './assets/bugger.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '한우 불고기 버거', price: 3000, imagePath: './assets/bugger.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ],
  Coffee: [
    {name: '아메리카노', price: 1500, imagePath: './assets/coffee.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '카페 라떼', price: 2500, imagePath: './assets/coffee.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '카페 모카', price: 3000, imagePath: './assets/coffee.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '카라멜 마끼야또', price: 3000, imagePath: './assets/coffee.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {name: '롱 블랙', price: 2000, imagePath: './assets/coffee.jpeg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ],
}

const MenuNavContainer = document.querySelector('.menu-list');
const MenuSectionContainer = document.querySelector('.menu-section');

const menuList = Object.keys(MENU);

menuList.forEach(menu => {
  const menuItem = document.createElement('li');
  const menuBtn = document.createElement('button');

  menuItem.className = 'menu';
  menuBtn.innerText = menu;
  menuBtn.addEventListener('click', () => {
    changeMenuView(menu);
  })
  menuItem.appendChild(menuBtn);

  MenuNavContainer.appendChild(menuItem);
});


/**
 * 
 * @param {string} name  상품 이름
 * @param {number} price 상품 가격
 * @param {string} description  상품 설명
 * @param {string} imagePath 상품 이미지
 * 
 * Menu Card Template을 리턴해주는 함수 입니다.
 */
function generateMenuCard (name, price, description, imagePath) {
  return `
  <div class='menu-item'>
    <section class='img-section'>
      <img src=${imagePath} alt='menu-img' />
    </section>
    <section class='menu-info-section'>
      <header>
        <h3>${name}</h3>
        <p>${price.toLocaleString()}원</p>
      </header>
      <main>
        ${description}
      </main>
    </section>
  </div>
  `
}

function initializeMenu() {
  menuList.forEach(menu => {
    if(menu !== 'All'){
      const menuItems = MENU[menu];
      menuItems.forEach(item => {
        const menuItem = generateMenuCard(item.name, item.price, item.description, item.imagePath);
        MenuSectionContainer.innerHTML += menuItem;
      });
    }
  });
}

function changeMenuView(menu){
  MenuSectionContainer.innerHTML = '';
  if(menu === 'ALL'){ initializeMenu(); return;}
  const menuItems = MENU[menu];
  menuItems.forEach(item => {
    const menuItem = generateMenuCard(item.name, item.price, item.description, item.imagePath);
    MenuSectionContainer.innerHTML += menuItem;
  });
}

initializeMenu();