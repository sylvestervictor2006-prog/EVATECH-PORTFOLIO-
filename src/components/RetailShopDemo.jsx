import { useMemo, useState } from "react";
import "./RetailShopDemo.css";

const products = [
  {
    id: 1,
    name: "Everyday Backpack",
    category: "Bags",
    price: 18500,
    description: "A practical bag for work, school, and everyday use.",
    symbol: "🎒",
  },
  {
    id: 2,
    name: "Classic Wristwatch",
    category: "Accessories",
    price: 24000,
    description: "A simple everyday accessory with a timeless look.",
    symbol: "⌚",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 32000,
    description: "Enjoy music, videos, and calls on the go.",
    symbol: "🎧",
  },
  {
    id: 4,
    name: "Canvas Tote Bag",
    category: "Bags",
    price: 8500,
    description: "A lightweight carry bag for daily essentials.",
    symbol: "👜",
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Home",
    price: 16500,
    description: "A useful light for reading and working at a desk.",
    symbol: "💡",
  },
  {
    id: 6,
    name: "Insulated Water Bottle",
    category: "Home",
    price: 7500,
    description: "A reusable bottle for your daily routine.",
    symbol: "🧴",
  },
];

const categories = [
  "All",
  "Bags",
  "Accessories",
  "Electronics",
  "Home",
];

function formatPrice(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function RetailShopDemo() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [basket, setBasket] = useState({});
  const [showBasket, setShowBasket] = useState(false);

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const basketItems = useMemo(
    () =>
      products
        .filter((product) => basket[product.id])
        .map((product) => ({
          ...product,
          quantity: basket[product.id],
        })),
    [basket]
  );

  const basketCount = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const basketTotal = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function changeQuantity(productId, amount) {
    setBasket((current) => {
      const nextQuantity = (current[productId] || 0) + amount;
      const next = { ...current };

      if (nextQuantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = nextQuantity;
      }

      return next;
    });
  }

  function prepareEnquiry() {
    if (basketItems.length === 0) {
      alert("Add at least one sample product to your basket first.");
      return;
    }

    const message = [
      "EVATECH RETAIL SHOP DEMO ENQUIRY",
      "",
      "This is a demonstration enquiry, not a confirmed order.",
      "",
      ...basketItems.map(
        (item) =>
          `${item.name} x ${item.quantity} — ${formatPrice(
            item.price * item.quantity
          )}`
      ),
      "",
      `Demo total: ${formatPrice(basketTotal)}`,
      "",
      "Please contact me to discuss a similar retail website.",
    ].join("\n");

    window.open(
      `https://wa.me/2349067782204?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="retail-demo section-wrap" id="retail-demo">
      <div className="retail-demo-heading">
        <div>
          <p className="eyebrow">EVATECH WEB DEVELOPMENT DEMO</p>
          <h2>
            A shop built for <span>easy browsing.</span>
          </h2>
          <p className="retail-demo-intro">
            Explore a sample retail storefront with searchable products,
            category filters, and a working shopping basket.
          </p>
        </div>

        <button
          type="button"
          className="retail-basket-toggle"
          onClick={() => setShowBasket((current) => !current)}
        >
          Basket ({basketCount})
        </button>
      </div>

      <div className="retail-demo-notice">
        <span>DEMO STORE</span>
        Sample products and prices are for demonstration only. No real
        inventory, payment, or order processing is connected.
      </div>

      <div className="retail-toolbar">
        <label className="retail-search">
          <span>Search products</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try “bag” or “headphones”"
          />
        </label>

        <div className="retail-categories" aria-label="Product categories">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="retail-demo-layout">
        <div className="retail-products">
          {visibleProducts.length === 0 ? (
            <p className="retail-empty">
              No matching products. Try another search.
            </p>
          ) : (
            visibleProducts.map((product) => (
              <article className="retail-product-card" key={product.id}>
                <div className={`retail-product-art retail-art-${product.id}`}>
                  <span aria-hidden="true">{product.symbol}</span>
                  <small>{product.category}</small>
                </div>

                <div className="retail-product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong>{formatPrice(product.price)}</strong>

                  <button
                    type="button"
                    className="retail-add-button"
                    onClick={() => changeQuantity(product.id, 1)}
                  >
                    Add to basket <span>+</span>
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <aside className={`retail-basket ${showBasket ? "basket-open" : ""}`}>
          <div className="retail-basket-heading">
            <div>
              <p className="eyebrow">YOUR SELECTION</p>
              <h3>Demo basket</h3>
            </div>
            <span>{basketCount} items</span>
          </div>

          {basketItems.length === 0 ? (
            <p className="retail-empty">
              Your basket is empty. Add a product to try the shopping flow.
            </p>
          ) : (
            <div className="retail-basket-items">
              {basketItems.map((item) => (
                <div className="retail-basket-item" key={item.id}>
                  <div className="retail-basket-item-info">
                    <strong>{item.name}</strong>
                    <span>
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  <div className="retail-quantity">
                    <button
                      type="button"
                      aria-label={`Remove one ${item.name}`}
                      onClick={() => changeQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Add one ${item.name}`}
                      onClick={() => changeQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="retail-basket-total">
            <span>Demo total</span>
            <strong>{formatPrice(basketTotal)}</strong>
          </div>

          <button
            type="button"
            className="retail-enquiry-button"
            onClick={prepareEnquiry}
          >
            Prepare WhatsApp enquiry <span>↗</span>
          </button>

          <p className="retail-basket-note">
            This button prepares a sample enquiry. It does not place an order
            or process payment.
          </p>
        </aside>
      </div>
    </section>
  );
}
