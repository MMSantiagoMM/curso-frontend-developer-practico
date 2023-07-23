const NavEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamburguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 220,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 350,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 780,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(array){
    for(product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.img)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$'+product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard)
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productList);



NavEmail.addEventListener('click',toggleDesktopMenu)
menuHamburguer.addEventListener('click',togglemobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    const isAideOpen = aside.classList.contains('inactive');
    if(!isAideOpen){
        aside.classList.add('inactive')
    } 

    mobileMenu.classList.toggle('inactive')


}

function togglemobileMenu(){
    const isAideOpen = aside.classList.contains('inactive');
    if(!isAideOpen){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}