import React, { useState } from "react";
import "../styles.css";

const MenuPage = () => {
  const [items] = useState([
    {
      id: 1,
      name: "Classic Vanilla",
      category: "Ice Creams",
      price: 50,
      rating: 4.5,
      popular: true,
      new: false,
      image: "vanila.jpeg",
      description: "Creamy vanilla bean ice cream"
    },
    {
      id: 2,
      name: "Black Raspberry",
      category: "Ice Creams",
      price: 0.8,
      rating: 4.0,
      popular: true,
      new: false,
      image: "black-raspberry-ice-cream-jp-220816-45f6d6.avif",
      description: "Creamy vanilla bean ice cream"
    },
    {
      id: 3,
      name: "BANANA-NUT",
      category: "Ice Creams",
      price: 0.8,
      rating: 4.0,
      popular: true,
      new: false,
      image: "banana-nut-ice-cream-jp-220816-8da6b7.avif",
      description: "Creamy vanilla bean ice cream"
    },
    // Add more items...
  ]);

  const [filters, setFilters] = useState({
    category: "All",
    special: "None",
    sortBy: "default"
  });

  const [cart, setCart] = useState([]);

  const filteredItems = items
    .filter(
      (item) => filters.category === "All" || item.category === filters.category
    )
    .filter((item) => {
      if (filters.special === "Only Ice Creams") return item.category === "Ice Creams";
      if (filters.special === "Popular") return item.popular;
      if (filters.special === "New Arrivals") return item.new;
      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === "price") return a.price - b.price;
      if (filters.sortBy === "popularity") return b.rating - a.rating;
      if (filters.sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>

      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value="All">All Categories</option>
          <option value="Ice Creams">Ice Creams</option>
          <option value="Desserts">Desserts</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, special: e.target.value })}>
          <option value="None">No Filter</option>
          <option value="Only Ice Creams">Only Ice Creams</option>
          <option value="Popular">Popular</option>
          <option value="New Arrivals">New Arrivals</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}>
          <option value="default">Sort By</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            {item.new && <span className="badge">New!</span>}
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div>
              <span>₹{item.price}</span>
              <button onClick={() => setCart([...cart, item])}>
                Add to Cart ({cart.filter((c) => c.id === item.id).length})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
