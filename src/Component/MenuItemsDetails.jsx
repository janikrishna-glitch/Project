import React from "react";

const MenuItemDetail = ({ item, onClose }) => {

  if (!item) {
    return null; 
  }

  return (
    <div className="item-detail">
      <div className="item-detail-content">
        <button className="close-btn"  onClick={onClose}>X</button>
        {item.img && (
          <img src={item.img} alt={item.title} style={{ height: "200px", width: "200px" }} />
        )}
        <h2>{item.title}</h2>
        <p>Price: ${item.price}</p>
         
      </div>
    </div>
  );
};

export default MenuItemDetail;
