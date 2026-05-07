//Task1
console.log("API Integration");

//  1. API Integration
const API = "https://fakestoreapi.com/products/";

// Use the API:
fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data); 
  })

  //error handling
  .catch((e) => {
    console.log("Error", e);
  });

console.clear();


// Clean code for fetching and displaying products
// Select HTML elements
let statusText = document.getElementById("status");
let product = document.querySelector(".products");

let allProducts = [];

// Fetch API data
fetch(API)

.then((res) => res.json())
.then((data) => {
    
    allProducts = data;
    
    statusText.innerText = "";
    
    displayProducts(allProducts);
    loadCategories(allProducts);
    updateCartCount();
})

// Error handling
.catch((e) => {
    
    console.log("Error:", e);
    statusText.innerText = "Failed to load data";
});


// Reusable function to display products 
// Display products
let displayProducts = (data1) => {
    
    product.innerHTML = "";
    

 // Check product data
    if (data1.length === 0) {
        product.innerHTML = "<h3>No Products Found</h3>";
        return;
    }


 // Loop through all products
     
    data1.forEach((c) => {
        
        let card = document.createElement("div");
        
        // Product card data 
         
        card.innerHTML = `
        <h2>${c.title.slice(0, 50)}...</h2>
        <img src="${c.image}" alt="${c.category}">
        <h4>Price: $${c.price}</h4>
        <p>${c.description.slice(0, 60)}...</p>
        
        <button class="viewBtn">View More</button>
        <button class="cartBtn">Add to Cart</button>`;
        
        
        // View button click event
         
        card.querySelector(".viewBtn").addEventListener("click", () => {
            
            alert(`
            Title: ${c.title}
            Category: ${c.category}
            Description: ${c.description}
            Price: $${c.price}
            `);
        });


            // Add to cart button click event
             
            card.querySelector(".cartBtn").addEventListener("click", () => {
                
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                
                let exists = cart.find((item) => item.id === c.id);
                
                if (!exists) {
                    
                    cart.push(c);
                    
                    localStorage.setItem("cart", JSON.stringify(cart));

                    updateCartCount();

                    alert("Added to Cart");
                
                } else {
                    
                    alert("Already in Cart");
                
                }
            });
            
            
            // Add card to product section
             
            product.append(card);
        
        });
    
    };



 // Search products
 document.getElementById("search").addEventListener("input", (e) => {
    
    let value = e.target.value.toLowerCase();
    
    let filterData = allProducts.filter((p) => {
        
        return p.title.toLowerCase().includes(value);
    });
    
    displayProducts(filterData);

 });


 // Load categories

 let loadCategories = (data1) => {
    
    let catSelect = document.getElementById("category");
    
    let categories = [...new Set(data1.map((a) => a.category))];
    
    categories.forEach((cat) => {
        
        let option = document.createElement("option");
        
        option.value = cat;
        
        option.innerText = cat;
        
        catSelect.append(option);
    
    });

};

// Filter products by category
document.getElementById("category").addEventListener("change", (e) => {

  let value = e.target.value;

  let filtered =
    value === "All"
      ? allProducts
      : allProducts.filter((a) => a.category === value);

  displayProducts(filtered);

});


// Sort products
document.querySelector(".sort").addEventListener("change", (e) => {
    
    let value = e.target.value;
    
    let sorted = [...allProducts];
    
    // Low to High
     
    if (value === "low") {
        
        sorted.sort((a, b) => a.price - b.price);
    }
    
    // High to Low
     
    else if (value === "high") {
        
        sorted.sort((a, b) => b.price - a.price);
    }
    
    displayProducts(sorted);
    console.log(sorted);

});


// Update cart count
function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cartCount").innerText = cart.length;
}

// View cart button
document.querySelector("#viewCart").addEventListener("click", () => {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    console.log("Cart Items:", cart);
    
    alert("Check console for cart items");

});

updateCartCount();