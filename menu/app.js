//get parent element
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//display all items when page loads
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

//to display menu items 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        //console.log(item);
        // <input type="submit" value="Cart +" class="add-to-cart" />
        let existingItems = basket.find((x) => x.id === item.id) || [];

        return `<article class="menu-item" id=product-id-${item.id}>
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
                <button type="submit" id=${item.id} class="add-to-cart" onclick="increment(${item.id})">
                    <i class="fas fa-shopping-cart" style="position:relative">
                        <div class='cart' id=${item.id}>${existingItems.quantity === undefined ? 0 : existingItems.quantity}</div>
                    </i>
                </button>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`
    });

    displayMenu = displayMenu.join(" ");
    //console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons() {
    let categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    console.log(categories);

    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    }).join(" ");

    btnContainer.innerHTML = categoryBtns;

    const filters = document.querySelectorAll(".filter-btn");
    console.log(filters);

    filters.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            //console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                //console.log(menuItem.category);
                if (menuItem.category === category)
                    return menuItem;
            });
            //console.log(menuCategory);
            if (category === 'all')
                displayMenuItems(menu);
            else
                displayMenuItems(menuCategory);
        });
    });
};

// CREATION OF ITEMS IN BASKET

// let basket = [];
let basket = JSON.parse(localStorage.getItem("basket")) || [];

function increment(id) {
    let selectedItem = id;
    // console.log(selectedItem);

    let search = basket.find((item) => item.id === selectedItem);

    // if item doesn't exist in basket push it, else increase quantity
    if (search === undefined) {
        basket.push({
            id: id,
            quantity: 1
        });
    } else {
        search.quantity += 1;
    }
    update(id);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
};

function update(id) {
    // console.log(id);
    let search = basket.find((item) => item.id === id);
    // console.log(search.quantity);
    document.getElementById(id).innerHTML = `
    <i class="fas fa-shopping-cart" style="position:relative">
        <div class='cartAmount' id=${id}>${search.quantity}</div>
    </i>
    `;

    calculation();
}

let calculation = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((item) => item.quantity).reduce((acc, val) => acc+val, 0);
}

calculation();