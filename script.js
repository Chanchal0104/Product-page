let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCart = document.querySelector(".listCart");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () =>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'HP-LAPTOP',
        image: 'laptop.jpg',
        price: 60000
    },
    {
        id: 2,
        name: 'Iphone-15',
        image: 'Iphone15.jpg',
        price: 40000
    },
     
    {
        id: 3,
        name: 'Traditional Dress',
        image: 'Taditionaldress.jpg',
        price: 2000
    }, 
    {
        id: 4,
        name: 'Sneakers',
        image: 'sneakers.jpg',
        price: 10000
    }, 
    {
        id: 5,
        name: 'Casual T-shirt(Men)',
        image: 'casual.png',
        price: 6000
    }, 
    {
       
         id: 6,
        name: 'Beauty-Products',
        image: 'beauty.jpg',
        price: 100.05
    }
];
let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class = "title">${value.name}</div>
        <div class = "price">${value.price.toLocaleString()}</div>
        <button class ="btn" onclick = "addToCart(${key})">Add To Cart</button>
       `;
       list.appendChild(newDiv);
    });
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity =1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        // totalPrice = totalPrice + value.price;
        // count = count + value.quantity;
        if(value != null){
        let itemTotal = value.quantity * products[key].price;
        totalPrice = totalPrice + itemTotal;
        count = count + value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src ="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${itemTotal.toLocaleString()}</div>
            
            <div>
                <button onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                       <button onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }
    else{
        listCarts[key].quantity = quantity;
    }
    reloadCart();
}
