import React, { useState } from 'react';
import './other-css/create-product.css'; // Import your CSS file here

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    phone: '',
    condition: '',
    location: '',
    availableFrom: '',
    availableTo: '',
    dailyRentPrice: 0,
    deposit: false,
    images: null,
    otherInfo: '',
    sellingPrice: 0, // Added for selling
  });

  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [isRent, setIsRent] = useState(true); // State to toggle between Rent and Sell

  const categories = {
    'Clothing': ['Shirts', 'Pants', 'Dresses'],
    'Accessories': ['Jewelry', 'Bags', 'Hats'],
    'Shoes': ['Sneakers', 'Boots', 'Sandals']
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubcategory(''); // Reset subcategory when category changes
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation for Rent and Sell conditions
    if (isRent && new Date(formData.availableFrom) >= new Date(formData.availableTo)) {
      alert("Available from date must be before available to date.");
      return;
    }

    console.log(formData);
    // Submit data to your API...

    // Reset form
    setFormData({
      name: '',
      size: '',
      phone: '',
      condition: '',
      location: '',
      availableFrom: '',
      availableTo: '',
      dailyRentPrice: 0,
      deposit: false,
      images: null,
      otherInfo: '',
      sellingPrice: 0, // Reset selling price
    });
    setCategory('');
    setSubcategory('');
    setIsRent(true); // Reset to Rent by default
  };

  const renderImagePreview = () => {
    if (!formData.images) return null;
    return (
      <div className="image-preview">
        {Array.from(formData.images).map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Preview ${index}`}
            className="preview-image"
          />
        ))}
      </div>
    );
  };

  return (

    <div className="create-product">
      <h1 className="title">Create Product Listing</h1>
      <div className="tabs">
        <button
          className={`tab ${isRent ? 'active' : ''}`}
          onClick={() => setIsRent(true)}
        >
          Rent
        </button>
        <button
          className={`tab ${!isRent ? 'active' : ''}`}
          onClick={() => setIsRent(false)}
        >
          Sell
        </button>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Size</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={handleCategoryChange} required>
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {category && (
          <div className="form-group">
            <label>Subcategory</label>
            <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} required>
              <option value="">Select Subcategory</option>
              {categories[category].map((subcat) => (
                <option key={subcat} value={subcat}>{subcat}</option>
              ))}
            </select>
          </div>
        )}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Condition</label>
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="condition"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>

        {isRent && ( // Rent-specific fields
          <>
            <div className="form-group">
              <label>Available from</label>
              <input
                type="date"
                name="availableFrom"
                value={formData.availableFrom}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Available to</label>
              <input
                type="date"
                name="availableTo"
                value={formData.availableTo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Daily Rent Price: ${formData.dailyRentPrice}</label>
              <input
                type="range"
                name="dailyRentPrice"
                min="0"
                max="100"
                value={formData.dailyRentPrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Deposit</label>
              <input
                type="checkbox"
                name="deposit"
                checked={formData.deposit}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}

        {!isRent && ( // Sell-specific fields
          <div className="form-group">
            <label>Selling Price: ${formData.sellingPrice}</label>
            <input
              type="number"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Add Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
          {renderImagePreview()}
        </div>
        <div className="form-group">
          <label>Other Information</label>
          <textarea
            name="otherInfo"
            value={formData.otherInfo}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">
          {isRent ? 'Rent' : 'Sell'}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
