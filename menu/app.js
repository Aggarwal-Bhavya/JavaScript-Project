const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 200,
        img: "/menu/images/item-1.jpeg",
        desc: `Buttermilk pancakes are deliciously buttery and fluffy with golden, crisp edges and an irresistible buttermilk flavour.`,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 450,
        img: "/menu/images/item-2.jpeg",
        desc: `Our menu features burgers that are hand crafted with 100% Angus beef. Always fresh, never frozen. We use fresh, natural and delicious ingredients.`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "beverages",
        price: 250,
        img: "/menu/images/item-3.jpeg",
        desc: `A sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.`,
    },
    {
        id: 4,
        title: "poached eggs",
        category: "breakfast",
        price: 200,
        img: "/menu/images/item-4.jpeg",
        desc: `It is a delicate preparation that relies on a swirling motion to evenly disperse the heat of the water until the egg whites are just set, and the yolks remain runny.`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 300,
        img: "/menu/images/item-5.jpeg",
        desc: `A unique combination of perfectly steamed egg, classic mayonnaise, chopped onions with a sprinkling of magic masala sandwiched in a toasted bun.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "beverages",
        price: 189,
        img: "/menu/images/item-6.jpeg",
        desc: `Real ice cream mixed with OREO Cookie Pieces and chocolate syrup into a thick and creamy shake, finished with whipped topping and a cherry.`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 899,
        img: "/menu/images/item-7.jpeg",
        desc: `A flame-grilled beef patty with crispy bacon, melted American cheese, crunchy pickles, yellow mustard, and ketchup on a toasted sesame seed bun.`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 600,
        img: "/menu/images/item-8.jpeg",
        desc: `Go old school with our handcrafted all-beef patty topped with two slices of American Cheese and two strips of Applewood-smoked bacon. Served with lettuce, tomato, onion and pickles on a Brioche bun. Served with classic fries.`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "beverages",
        price: 160,
        img: "/menu/images/item-9.jpeg",
        desc: `Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant.`,
    },
    {
        id: 10,
        title: "steak",
        category: "dinner",
        price: 499,
        img: "/menu/images/item-10.jpeg",
        desc: `Tender, juicy, cooked perfectly and perfectly seasoned.`,
    },
];

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

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
                <button type="submit" class="add-to-cart"><i class="fas fa-shopping-cart">+</i></button>
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

    const categoryBtns = categories.map(function(category) {
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    }).join(" ");

    btnContainer.innerHTML = categoryBtns;

    const filters = document.querySelectorAll(".filter-btn");
    console.log(filters);

    filters.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            //console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                //console.log(menuItem.category);
                if(menuItem.category === category)  
                    return menuItem;
            });
            //console.log(menuCategory);
            if(category === 'all')
                displayMenuItems(menu);
            else
                displayMenuItems(menuCategory);
        });
    });
}; 
