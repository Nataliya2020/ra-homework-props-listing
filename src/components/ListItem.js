import PropTypes from "prop-types";

import getCode from '../utility/utility';
import {getQuantity} from '../utility/utility';

function ListItem({item}) {

  if(item.state !== 'active') {
    return null;
  }

  const {url, MainImage, title, currency_code, price, quantity} = item;

  const urlImg = MainImage.url_570xN;

return(

    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={urlImg} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</p>
        <p className="item-price">{getCode({currency_code},{price})}</p>
        <p className={`item-quantity ${getQuantity({quantity})}`}>{quantity} left</p>
      </div>
    </div>
)
}

ListItem.propTypes = {
  url: PropTypes.string,
  MainImage: PropTypes.object,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}

ListItem.defaultProps = {
  url: '',
  MainImage: {},
  title: '',
  currency_code: '',
  price: '',
  quantity: 0
}

export default ListItem;
