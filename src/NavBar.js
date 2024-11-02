import { useState } from 'react';

const NavBar = () => {
  // State to control the visibility of the form
  const [showForm, setShowForm] = useState(false);

  // Toggle form visibility when clicking "New Item"
  const handleNewItemClick = (e) => {
    e.preventDefault();  // Prevents navigation
    setShowForm(!showForm);
  };

  return (
    <nav className="navbar">
      <h1>Shop Lyft</h1>
      <div className="links">
        <a
          href="/create"
          onClick={handleNewItemClick} // Trigger form display
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Item
        </a>
      </div>

      {/* Conditionally render the form based on showForm state */}
      {showForm && (
        <div className="new-item-form">
          <h2>Add New Item</h2>
          <form>
            <label>Item Name:</label>
            <input type="text" placeholder="Enter item name" />

            <label>Item Quantity:</label>
            <input type="number" placeholder="Enter quantity" />

            <button type="submit">Add Item</button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
