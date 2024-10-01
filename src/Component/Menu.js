import React, { useState } from "react";
import MenuItemDetail from "./MenuItemsDetails";

const menuItems = [
  {
    id: 1,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/menu-1.a0b16a8f9d4b6cca2862.png",
    title: "Burger",
    price: 100,
  },
  {
    id: 2,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/menu-2.24f3692350f004b8004a.png",
    title: "Fries",
    price: 80,
  },
  {
    id: 3,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/menu-4.102bafe3a5e4f81cf81d.png",
    title: "Pizza",
    price: 120,
  },
  {
    id: 4,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/menu-5.55373ba7056ffc971050.png",
    title: "Frenky",
    price: 150,
  },
  {
    id: 5,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/menu-6.1e627e81ea9cffd96843.png",
    title: "Coffee",
    price: 60,
  },
];

const Menu = ({ addToCart }) => {
  const [search, setSearch] = useState("");
  const [state, setState] = useState(menuItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [ascending, setAscending] = useState(true);
  const [showItemDetail, setShowItemDetail] = useState(false);

  function handleSort() {
    const sortedData = [...state];
    if (ascending) {
      sortedData.sort((a, b) => a.price - b.price);
    } else {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setState(sortedData);
    setAscending(!ascending);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const filteredItems = state.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowItemDetail(true);
  };

  const closeItemDetail = () => {
    setShowItemDetail(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="search-bar">
          <input type="text" placeholder="Search menu items..." value={search} onChange={handleSearch}
          style={{ margin: '20px 0', padding: '10px', width: '40%' }} />
          <button onClick={handleSort} style={{ padding: "10px" }}>
            sort by {ascending ? "asc" : "desc"}
          </button>
        </div>

        {!showItemDetail && (
          <div
            className={`box-container ${
              search ? "reduced-width-container" : ""
            }`}
          >
            {filteredItems.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.img} style={{ height: "120px" }} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="price">
                  {item.price}$ <span>20.99</span>
                </div>
                <button onClick={() => handleAddToCart(item)} className="btn"> add to cart</button>
              </div>
            ))}
          </div>
        )}
      </section>

      {showItemDetail && (
        <div className="centered-item-detail-container">
          <div className="centered-item-detail">
            <MenuItemDetail
              item={selectedItem}
              addToCart={addToCart}
              onClose={closeItemDetail}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
