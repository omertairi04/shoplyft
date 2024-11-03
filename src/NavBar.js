import {useState} from "react";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <nav className="navbar">
      <h1>ShopLyft</h1>
      <div
        className="categories"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <a onClick={toggleDropdown}>Categories</a>
        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown">
            <a href="/category/electronics">Electronics</a>
            <a href="/category/clothing">Clothing</a>
            <a href="/category/home">Home</a>
            <a href="/category/books">Books</a>
            <a href="/category/sports">Sports</a>
          </div>
        )}
      </div>
      <div className="links">
        <a href="/">Link1</a>
        <a href="/create">Link2</a>
      </div>
    </nav>
  )
};

export default NavBar;
