class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'img/1.jpg'},
            {id: 2, title: 'Mouse', price: 20, img: 'img/2.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img: 'img/3.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img: 'img/4.jpg'},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    
    sumPriceOfGoods(){
        
       for(let product of this.goods){
           sum += product.price;
       }
       console.log(sum);
    };
}


class ProductItem{
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = product.img;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="...">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}
 /*class ProductBasket {
    constructor()
    addToBasket(){
        //Добавляет товар в карзину.
    }
    removeFromBasket(){
        //Убирает товар из карзины.
    }
    quantityInBasket(){
        //Количество товара в карзине.
    }
}*/
let list = new ProductsList();
list.render();






    



