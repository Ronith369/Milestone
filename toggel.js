// const dishes = [
//     { name: "Vanilla Ice Cream 🍦" },
//     { name: "Chocolate Ice Cream 🍫" },
//     { name: "Strawberry Sundae 🍓" },
//     { name: "Mango Kulfi 🥭" },
//     { name: "Brownie Delight 🍮" },
//     { name: "Oreo Blizzard 🍪" },
//   ];
  
//   const dishGrid = document.getElementById("dishGrid");
//   const searchInput = document.getElementById("searchInput");
//   const darkToggle = document.getElementById("darkToggle");
//   const cartCount = document.getElementById("cartCount");
//   let cartItems = 0;
  
//   function renderDishes(filter = "") {
//     dishGrid.innerHTML = "";
//     dishes
//       .filter(d => d.name.toLowerCase().includes(filter.toLowerCase()))
//       .forEach(dish => {
//         const card = document.createElement("div");
//         card.className = "col-md-4 d-flex justify-content-center";
//         card.innerHTML = `
//           <div class="card p-3 text-center w-100">
//             <h5>${dish.name}</h5>
//             <button class="btn btn-success mt-2">Add to Cart</button>
//           </div>
//         `;
//         const addBtn = card.querySelector("button");
//         addBtn.onclick = () => {
//           cartItems++;
//           cartCount.textContent = cartItems;
//         };
//         dishGrid.appendChild(card);
//       });
//   }
  
//   // Search handler
//   searchInput.addEventListener("input", (e) => {
//     renderDishes(e.target.value);
//   });
  
//   // Dark mode toggle
//   darkToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     document.querySelectorAll(".card").forEach(c => c.classList.toggle("dark-mode"));
//   });
  
//   renderDishes(); // Initial render
  

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('main-navbar').classList.toggle('navbar-dark-mode');
  });