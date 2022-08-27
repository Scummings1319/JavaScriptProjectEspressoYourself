//When you click the font logo, it takes you back to main page
//  document.querySelector(".fontLogo").addEventListener("click", (event) => {
//   event.preventDefault();
//   document.querySelector(".payOptions").style.display = "none";
//   document.querySelector(".mainPage").style.display = "block";
//   document.querySelector(".logoSection").style.display = "block";
//   document.querySelector(".cartItems").style.display = "none";
//   document.querySelector(".shoppingCart").style.display = "none";
//   document.querySelector(".checkout").style.display = "none";
// })

document.querySelector("#coffeeDrpDown").addEventListener("click", (event) => {
    event.preventDefault();
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector("#coffeePage").classList.remove("hidden");
  });
  
  document.querySelector("#hcDrpDown").addEventListener("click", (event) => {
    event.preventDefault();
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector("#hotChocolatePage").classList.remove("hidden");
  });
  
  document.querySelector("#teaDrpDown").addEventListener("click", (event) => {
    event.preventDefault();
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector("#teaPage").classList.remove("hidden");
  });
  
  document.querySelector("#muffinDrpDown").addEventListener("click", (event) => {
    event.preventDefault();
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector("#muffinsPage").classList.remove("hidden");
  });
  
  document
    .querySelector("#sandwichDrpDown")
    .addEventListener("click", (event) => {
      event.preventDefault();
      var containers = document.querySelectorAll(".container");
      for (let i = 0; i < containers.length; i++) {
        containers[i].classList.add("hidden");
      }
      document.querySelector("#sandwichPage").classList.remove("hidden");
    });
  
  document.querySelector("#bagelDrpDown").addEventListener("click", (event) => {
    event.preventDefault();
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector("#bagelPage").classList.remove("hidden");
  });
  
  // start of cart
  
  function showCartContainer(e) {
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector(".CartContainer").classList.remove("hidden");
    calculateTotal();
    e.preventDefault();
  }
  function addColdBrew() {
    var temp = {
      name: "Vanilla Sweet Cream Cold Brew",
      price: 4.25,
      quantity: 1,
      imagePath: "./assets/cold brew.jpeg",
    };
    createCartItem(temp);
  }
  
  function addCL() {
    var temp = {
      name: "Caramel Latte",
      price: 5.25,
      quantity: 1,
      imagePath: "./assets/caramel latte.jpg",
    };
    createCartItem(temp);
  }
  
  function addHC() {
    var temp = {
      name: "Hot Chocolate",
      price: 3.5,
      quantity: 1,
      imagePath: "./assets/hot chocolate 1.jpg",
    };
    createCartItem(temp);
  }
  
  function addWHC() {
    var temp = {
      name: "White Hot Chocolate",
      price: 4.25,
      quantity: 1,
      imagePath: "./assets/White Hot Chocolate.jfif",
    };
    createCartItem(temp);
  }
  
  function addChaiTea() {
    var temp = {
      name: "Chai Tea",
      price: 4.25,
      quantity: 1,
      imagePath: "./assets/chai.jpeg",
    };
    createCartItem(temp);
  }
  
  function addMatchaTea() {
    var temp = {
      name: "Matcha Tea",
      price: 4.5,
      quantity: 1,
      imagePath: "./assets/matcha mug 1.jpg",
    };
    createCartItem(temp);
  }
  
  function addBNM() {
    var temp = {
      name: "Banana Nut Muffin",
      price: 3.0,
      quantity: 1,
      imagePath: "./assets/muffins 1.jpg",
    };
    createCartItem(temp);
  }
  
  function addCM() {
    var temp = {
      name: "Chocolate Muffin",
      price: 3.0,
      quantity: 1,
      imagePath: "./assets/chocolate muffin.jpg",
    };
    createCartItem(temp);
  }
  
  function addBEC() {
    var temp = {
      name: "Bacon Egg & Cheese",
      price: 5.5,
      quantity: 1,
      imagePath: "./assets/bacon egg and cheese 2.jpg",
    };
    createCartItem(temp);
  }
  
  function addSEC() {
    var temp = {
      name: "Sausage Egg & Cheese",
      price: 5.5,
      quantity: 1,
      imagePath: "./assets/sausage egg and cheese.jpg",
    };
    createCartItem(temp);
  }
  
  function addSSB() {
    var temp = {
      name: "Sam's Salty Bagel",
      price: 6.0,
      quantity: 1,
      imagePath: "./assets/salt bagel.jpeg",
    };
    createCartItem(temp);
  }
  
  function addAB() {
    var temp = {
      name: "Asiago Bagel",
      price: 4.25,
      quantity: 1,
      imagePath: "./assets/asiago bagel.jpg",
    };
    createCartItem(temp);
  }
  
  var cart = [];
  
  function createCartItem(item) {
    var root = document.createElement("div");
    root.classList.add("cartItem");
    root.innerHTML = `<div class="imageAndTitle">
    <img src="${item.imagePath}" class="cartImage" />
    
    <div class="about">
    <h3 class="title">${item.name}</h3>
    </div>
  </div>
  <div class="qtyAndP>
    <p class="quantity">
      Quantity: ${item.quantity}
    </p>
    <div class="prices">
      <div class="amount">$${item.price}</div>
    </div>
  </div>`;
  
  
    // adding items to page/cart
    document.querySelector(".cartItems").appendChild(root);
    cartTotal.push(item);
    // cartQuantity(item);
  }
  
  // when you click checkout in cart takes you to payment method radio button forms
  document.querySelector(".checkout").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".payOptions").style.display = "block";
    document.querySelector(".mainPage").style.display = "none";
    document.querySelector(".cartItems").style.display = "none";
    document.querySelector(".shoppingCart").style.display = "none";
    document.querySelector(".checkout").style.display = "none";
  });
  // *****when you choose the cash radio button it takes you to cash method form***
  
  const btnPm = document.querySelector(".paymentMethodSubmit");
  const payMethodBtns = document.querySelectorAll(
    'input[name = "paymentMethod"]'
  );
  btnPm.addEventListener("click", (event) => {
    event.preventDefault();
    for (const payMethodBtn of payMethodBtns) {
      if (payMethodBtn.checked) {
        console.log(payMethodBtn.id);
        if (payMethodBtn.id === "cashMethod") {
          document.querySelector(".cashOption").style.display = "block";
          document.querySelector(".payOptions").style.display = "none";
          document.querySelector(".mainPage").style.display = "none";
          document.querySelector(".cartItems").style.display = "none";
          document.querySelector(".checkout").style.display = "none";
        } else if (payMethodBtn.id === "cardMethod") {
          document.querySelector(".cardOption").style.display = "block";
          document.querySelector(".payOptions").style.display = "none";
          document.querySelector(".mainPage").style.display = "none";
          document.querySelector(".cartItems").style.display = "none";
          document.querySelector(".checkout").style.display = "none";
        }
        break;
      }
    }
  });
  
  //cashGiven Receipt
  document.querySelector(".cashSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".receiptPayment").style.display = "block";
    document.querySelector(".cartItems").style.display = "block";
    document.querySelector(".cashGiven").style.display = "block";
    document.querySelector(".cardGiven").style.display = "none";
    document.querySelector(".cashOption").style.display = "none";
    document.querySelector(".orderName").style.display = "none";
    receiptCashGiven();
  });
  //cardGiven Receipt
  document.querySelector(".cardSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".receiptPayment").style.display = "block";
    document.querySelector(".cartItems").style.display = "block";
    document.querySelector(".cashGiven").style.display = "none";
    document.querySelector(".cardGiven").style.display = "block";
    document.querySelector(".cardOption").style.display = "none";
    receiptCardGiven();
  });
  
  //removing all items from cart
  
  function removeItems(e) {
    cartTotal = [];
    var cart = document.querySelector(".cartItems");
    var children = cart.querySelectorAll(".cartItem");
    for (let i = 0; i < children.length; i++) {
      children[i].remove();
    }
    calculateTotal();
  }
  var cartTotal = [];
  function calculateTotal() {
    var subtotal = 0;
    for (let i = 0; i < cartTotal.length; i++) {
      subtotal += cartTotal[i].price;
    }
    document.querySelector(
      ".subtotal"
    ).innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    document.querySelector(".taxes").innerText = `Tax: $${(
      subtotal * 0.06
    ).toFixed(2)}`;
    document.querySelector(".total").innerText = `Total $${(
      subtotal * 0.06 +
      subtotal
    ).toFixed(2)}`;
    total = subtotal * 0.06 + subtotal;
  }
  
  var total = 0;
  
  function receiptCashGiven(e) {
    var givenAmount = document.querySelector("#givenAmount").value;
    document.querySelector(
      ".cashGiven"
    ).innerText = `Amount Given: $${givenAmount}`;
    document.querySelector(".changeAmount").innerText = `Change: $${(
      givenAmount - total
    ).toFixed(2)}`;
  }
  
  function receiptCardGiven(e) {
    var orderName = document.querySelector("#cname").value;
    document.querySelector(
      ".cardGiven"
    ).innerText = `Amount Tendered: $${total.toFixed(2)}`;
    document.querySelector(".orderName").innerText = `Order Name: ${orderName}`;
    document.querySelector(".changeAmount").style.display = "none";
  }
  