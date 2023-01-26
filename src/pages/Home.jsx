import "../styles/home.css";

const Home = ({ products, addItems, items }) => {
  return (
    <div className="home-block">
      <div className="home-wrapper">
        {products.map((i) => {
          return (
            <div key={items.id} className="item-block">
              <img src={i.image} alt="error" className="item-img" />
              <p className="item-name">{i.name}</p>
              <p className="item-price">{`${i.price} рублей`}</p>
              <button
                disabled={items.includes(i)}
                className="item-btn"
                onClick={() => addItems(i)}
              >
                {items.includes(i) ? "Уже  в корзине" : "Добавить в корзину"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
