const ShopItem = item => {
  const {brand,title,description,descriptionFull,currency} = item.item;
  const price = new Intl.NumberFormat('en-EN',{minimumFractionDigits:2}).format(item.item.price);
  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{currency}{price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}