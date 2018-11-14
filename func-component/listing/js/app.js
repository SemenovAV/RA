'use strict'
const status = (response) => (response.status >= 200 && response.status < 300) ?
  Promise.resolve(response) :
  Promise.reject(new Error(response.statusText))

fetch('https://neto-api.herokuapp.com/etsy').
  then(status).
  then(res => res.json()).
  then(items => ReactDOM.render(<Listing items={items}/>,
    document.getElementById('root'))).
  catch(console.log)

const Listing = ({items}) => (
  <div className="item-list">{
    items.map((item) => (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage['url_570xN']}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{
            (item.title.length > 50)
            ? [...item.title].slice(0, 50).join('') + ' ...'
            : item.title}</p>
          <p className="item-price">{
            new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: item.currency_code,
            currencyDisplay: 'symbol',
            minimumFractionDigits: '2',
          }).format(item.price)}</p>
          <p className={
            (item.quantity <= 10) ?
              'item-quantity level-low' :
              (item.quantity > 10 && item.quantity <= 20) ?
                'item-quantity level-medium' :
                'item-quantity level-high'
          }
          >{item.quantity}</p>
        </div>
      </div>
    ))
  }
  </div>
)

Listing.defaultProps = {
  lists: {},
}


