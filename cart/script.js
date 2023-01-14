let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("basket")) || [];

let calculation = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((item) => item.quantity).reduce((acc, val) => acc + val, 0);
}

calculation();

let generateCartitems = () => {
    calculation();
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            let { id, quantity } = x;
            let search = menu.find((y) => y.id === id) || [];
            return `
                <div class='cart-item'> 
                    <img src=${search.img} alt="" />

                    <div class="details">
                        <div class="title-price-x">
                            <h4 class="title-price">
                                <p>${search.title}</p>
                                <p class="cart-item-price">₹${search.price}</p>
                                <p class="cart-item-quantity">${quantity}</p>
                                <button onclick="removeItem(${id})" class='removeBtn'>x</button>
                            </h4>
                        </div>
                        <p class="total-price">₹${quantity * search.price}</p>
                    </div>
                </div>
            `;
        })
            .join(""));
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
            <h3>Your cart is empty</h3>
            <a id="btnMenu" href="../index.html">Go to Menu</a>
        `;
    }
};

generateCartitems();

let removeItem = (id) => {
    // console.log(id);
    basket = basket.filter((x) => x.id !== id);
    generateCartitems();
    totalAmount();
    localStorage.setItem("basket", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartitems();
    localStorage.setItem("basket", JSON.stringify(basket));
}

let success = () => {
    alert('Order placed successfully!!');
    basket = [];
    generateCartitems();
    localStorage.setItem("basket", JSON.stringify(basket));
}

let totalAmount = () => {
    if(basket.length !== 0) {
        let amount = basket.map((x) => {
            let { id, quantity } = x;
            let search = menu.find((y) => y.id === id) || []; 
            return quantity*search.price;
        }).reduce((acc, val) => acc + val, 0);
        // console.log(amount);
        label.innerHTML = `
            <h4>Total Bill: ₹${amount}</h4>
            <div style="display: grid">
                <button class="checkout" onclick="success()">CHECKOUT</button>
                <button class="removeAll" onclick="clearCart()">EMPTY CART</button>
            </div>
        `;
    }
};
totalAmount();