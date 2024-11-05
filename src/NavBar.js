import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';
import profileImage from './profile/profile.jpeg';
import Logo from './profile/Logo.jpeg'

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <nav className="navbar">
      <img src={Logo}
           alt="Logo"
           style={{width:'200px', height:'100px'}}
      />
      <div
        className="categories"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <a onClick={toggleDropdown}><h5 style={{marginTop: "20px", marginLeft: "10px"}}>Categories</h5></a>
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
      <div className="links" style={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}>
        <a href="/" style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "16px",
          textDecoration: "none"
        }}>
          <FontAwesomeIcon
            inverse={true}
            icon={faPlus}
            style={{color: "gray", backgroundColor: "#fff", fontSize: "30px"}} // Updated color to gray
          />
          <span style={{fontSize: "16px", color: "black", marginTop: "5px"}}>Upload</span>
        </a>
        <a href="/" style={{display: "flex", alignItems: "center", marginLeft: "16px"}}>
          <FontAwesomeIcon
            inverse={true}
            icon={faShoppingCart}
            style={{marginRight: "5px", color: "gray", fontSize: "30px"}} // Updated color to gray
          />
        </a>
        <a href="/create" style={{display: "flex", alignItems: "center", marginLeft: '16px'}}>
          <img
            src={profileImage}
            alt="User Profile"
            style={{width: '60px', height: '60px', borderRadius: '50%'}}
          />
        </a>

      </div>
    </nav>
  )
};

export default NavBar;
