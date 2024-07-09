'use strict'

// Products details
const productsObj = [{
    "name": "Irish coffee",
    "image": "./assets/coffee-1.jpg",
    "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Kahlua coffee",
    "image": "./assets/coffee-2.jpg",
    "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey raf",
    "image": "./assets/coffee-3.jpg",
    "description": "Espresso with frothed milk, cream and aromatic honey",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ice cappuccino",
    "image": "./assets/coffee-4.jpg",
    "description": "Cappuccino with soft thick foam in summer version with ice",
    "price": "5.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Espresso",
    "image": "./assets/coffee-5.jpg",
    "description": "Classic black coffee",
    "price": "4.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte",
    "image": "./assets/coffee-6.jpg",
    "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte macchiato",
    "image": "./assets/coffee-7.jpg",
    "description": "Espresso with frothed milk and chocolate",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Coffee with cognac",
    "image": "./assets/coffee-8.jpg",
    "description": "Fragrant black coffee with cognac and whipped cream",
    "price": "6.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Moroccan",
    "image": "./assets/tea-1.png",
    "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    "price": "4.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ginger",
    "image": "./assets/tea-2.png",
    "description": "Original black tea with fresh ginger, lemon and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cranberry",
    "image": "./assets/tea-3.png",
    "description": "Invigorating black tea with cranberry and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Sea buckthorn",
    "image": "./assets/tea-4.png",
    "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    "price": "5.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Marble cheesecake",
    "image": "./assets/dessert-1.png",
    "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    "price": "3.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Red velvet",
    "image": "./assets/dessert-2.png",
    "description": "Layer cake with cream cheese frosting",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cheesecakes",
    "image": "./assets/dessert-3.png",
    "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Creme brulee",
    "image": "./assets/dessert-4.png",
    "description": "Delicate creamy dessert in a caramel basket with wild berries",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Pancakes",
    "image": "./assets/dessert-5.png",
    "description": "Tender pancakes with strawberry jam and fresh strawberries",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey cake",
    "image": "./assets/dessert-6.png",
    "description": "Classic honey cake with delicate custard",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Chocolate cake",
    "image": "./assets/dessert-7.png",
    "description": "Cake with hot chocolate filling and nuts with dried apricots",
    "price": "5.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Black forest",
    "image": "./assets/dessert-8.png",
    "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    "price": "6.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [{
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  }
];
// ======================================================================

// ============= Categories of products on the menu page ============= 

document.addEventListener("DOMContentLoaded", function () {
  // Select the tabs and product containers
  const tabs = document.querySelectorAll(".tab-item");
  const coffeeProducts = document.querySelector(".coffee-products");
  const teaProducts = document.querySelector(".tea-products");
  const dessertProducts = document.querySelector(".dessert-products");
  const loadButton = document.querySelector(".load-btn");

  // Arrays for products
  const coffeeProductItems = document.querySelectorAll(".coffee-product-item");
  const teaProductItems = document.querySelectorAll(".tea-product-item");
  const dessertProductItems = document.querySelectorAll(".dessert-product-item");

  // Variable to track the active tab
  let activeTabIndex = 0;

  // Function to hide all product containers
  function setToDefaultCondition() {
    teaProducts.classList.add("display-none");
    dessertProducts.classList.add("display-none");
  }
  setToDefaultCondition();

  function hideAllProductContainer() {
    coffeeProducts.classList.add("display-none");
    teaProducts.classList.add("display-none");
    dessertProducts.classList.add("display-none");
  }

  function showProductContainer(currentContainer) {
    hideAllProductContainer();
    currentContainer.classList.remove("display-none");
  }

  // Event listener for tab clicks
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");

      // Update the active tab index
      activeTabIndex = index;

      // Show the corresponding product container based on the clicked tab
      if (index === 0) {
        showProductContainer(coffeeProducts);
      } else if (index === 1) {
        showProductContainer(teaProducts);
      } else if (index === 2) {
        showProductContainer(dessertProducts);
      }
    });
  });

  // Event listener for load button
  loadButton.addEventListener('click', function () {
    // Handle product items based on the active tab
    if (activeTabIndex === 0) {
      coffeeProductItems.forEach((item) => {
        item.classList.remove('hidden-product');
      });
    } else if (activeTabIndex === 1) {
      teaProductItems.forEach((item) => {
        item.classList.remove('hidden-product');
      });
    } else if (activeTabIndex === 2) {
      dessertProductItems.forEach((item) => {
        item.classList.remove('hidden-product');
      });
    }
    loadButton.style.display = 'none';
  });
});


// =============== Modal ===============

document.addEventListener('DOMContentLoaded', function () {
  const additiveButtons = document.querySelectorAll('.additive-btn');
  const sizeButtons = document.querySelectorAll('.size-btn');
  const firstSizeButton = document.querySelector('.first-size-btn');

  let totalPrice = 0;
  let initialPrice = 0;


  // Add click event listener to each size button
  sizeButtons.forEach(function (sizeButton) {
    sizeButton.addEventListener('click', function () {
      // Remove 'active-size-btn' class from all size buttons
      sizeButtons.forEach(function (btn) {
        btn.classList.remove('active-size-btn');
      });

      // Add 'active-size-btn' class to the clicked size button
      sizeButton.classList.add('active-size-btn');

      // Update total price based on the selected size
      updateTotalPrice();
    });
  });

  // Add click event listener to each additive button
  additiveButtons.forEach(function (additiveButton) {
    additiveButton.addEventListener('click', function () {
      // Add or 'active-size-btn' class to the clicked size button
      additiveButton.classList.toggle('active-additive-btn');

      // Update total price based on the selected additives
      updateTotalPrice();
    });
  });

  const closeButton = document.querySelector('.modal-close-btn');
  const modalcontainer = document.querySelector('.modal-container');
  const modalOverlay = document.querySelector('.overlay');
  const productItems = document.querySelectorAll('.product-item');
  const body = document.body;


  // Open modal window when any product is clicked
  productItems.forEach((product) => {
    product.addEventListener('click', function () {

      modalcontainer.classList.remove('display-none');
      modalOverlay.classList.add('display-block');
      body.classList.add('overflow-hidden');

      const productName = product.getAttribute('data-product-name');
      const obj = productsObj.find(product => product.name === productName);

      document.getElementById('modal-product-name').innerHTML = obj.name;
      document.getElementById('modal-product-desc-txt').innerHTML = obj.description;

      initialPrice = parseFloat(obj.price);

      // Update total price based on sizes and additives
      updateTotalPrice();

      document.getElementById('total-price').innerHTML = `$${obj.price}`;
      initialPrice = parseFloat(obj.price);

      document.getElementById('size-1').innerHTML = obj.sizes.s.size;
      document.getElementById('size-2').innerHTML = obj.sizes.m.size;
      document.getElementById('size-3').innerHTML = obj.sizes.l.size;

      document.getElementById('additive-1').innerHTML = obj.additives[0].name;
      document.getElementById('additive-2').innerHTML = obj.additives[1].name;
      document.getElementById('additive-3').innerHTML = obj.additives[2].name;

      const modalImage = document.querySelector('#modal-img');
      modalImage.src = obj.image;
    })
  })

  function updateTotalPrice() {
    // Reset total price
    totalPrice = initialPrice;

    // Update total price based on selected size
    sizeButtons.forEach(function (btn) {
      if (btn.classList.contains('active-size-btn')) {
        const sizeValue = btn.getAttribute('data-size-value');
        totalPrice += parseFloat(sizeValue);
      } else if (btn.classList.contains('first-size-btn')) {
        totalPrice = totalPrice;
      }
    });

    // Update total price based on selected additive
    additiveButtons.forEach(function (btn) {
      if (btn.classList.contains('active-additive-btn')) {
        const additiveValue = btn.getAttribute('data-additive-value');
        totalPrice += parseFloat(additiveValue);
      }
    });

    // Update the total price display in the modal
    document.getElementById('total-price').innerHTML = `$${totalPrice.toFixed(2)}`;
  }


  // Close modal with close button
  closeButton.addEventListener('click', function () {
    modalcontainer.classList.add('display-none');
    modalOverlay.classList.remove('display-block');
    body.classList.remove('overflow-hidden');

    // For reset additive buttons
    additiveButtons.forEach(function (additiveButton) {
      additiveButton.classList.remove('active-additive-btn');
    });

    // For reset size buttons
    sizeButtons.forEach(function (btn) {
      btn.classList.remove('active-size-btn');
    });
    // Add active class to first size button
    firstSizeButton.classList.add('active-size-btn');

  })

  // Close modal with click on the padding
  modalOverlay.addEventListener('click', function () {
    modalcontainer.classList.add('display-none');
    modalOverlay.classList.remove('display-block');
    body.classList.remove('overflow-hidden');

    // For reset additive buttons
    additiveButtons.forEach(function (additiveButton) {
      additiveButton.classList.remove('active-additive-btn');
    });

    // For reset size buttons
    sizeButtons.forEach(function (btn) {
      btn.classList.remove('active-size-btn');
    });
    // Add active class to first size button
    firstSizeButton.classList.add('active-size-btn');
  })
})