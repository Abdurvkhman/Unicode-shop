import "../styles/home.css";

const Basket = ({ items, setItems }) => {
  function deleteBasketItem(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  return (
    <div className="home-block">
      <div className="home-wrapper">
        {items.map((i) => {
          return (
            <div key={items.id} className="item-block">
              <img src={i.image} alt="error" className="item-img" />
              <p className="item-name">{i.name}</p>
              <p className="item-price">{`${i.price} рублей`}</p>
              <button className="item-btn" onClick={() => deleteBasketItem(i.id)}>
                Удалить из Корзины
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
