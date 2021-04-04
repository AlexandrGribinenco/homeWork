const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const API2 = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class BasketList {
    constructor(container = '.basket'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data.contents];
                this.render()
            });
   
    }
    
    _getProducts(){
        return fetch(`${API2}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }


    render(){
        const block = document.querySelector(this.container);
        for (let contents of this.goods){
            const productObj = new ProductBasket(contents);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
   
}

class ProductBasket{
    constructor(contents){
        this.title = contents.product_name;
        this.price = contents.price;
        this.quantity = contents.quantity;
        this.id = contents.id_product;
    }
    
   
    render(){
        return `
                
                <div class="product-item del" data-id="${this.id}">
                
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <p>Количество товара : ${this.quantity} </p>
                    <button class="buy-btn">Удалить</button>
                </div>
            </div>`
    }
    
}


class ProductItem {
    constructor(product){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn" id= "but">Купить</button>
                </div>
            </div>`
    }
}

document.onclick = function() {
    div = Array.from(document.querySelectorAll('.del'));
    div.forEach((e) => {
      e.onclick = function() {
        this.remove();
      }
    });
  }

document.getElementById("but").addEventListener("click", fun);  

function fun(){
    basket2.render();
    
}
 
 
let list = new ProductsList();
let basket2 = new BasketList();
