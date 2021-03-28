const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/1.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/2.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/3.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/4.jpg'},
];


//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
   
    return `<div class="product-item">
                <img src="${item.img}" alt="...">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Buy</button>
            </div>`
            
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    
    document.querySelector('.products').innerHTML = productsList.join(' ');
    console.log(productsList);
};


renderPage(products);