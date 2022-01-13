import PropTypes from "prop-types";
import ListItem from "./ListItem";

function Listing({items}) {

  return(
    <div className="item-list">
      {
        items.map((item) => {
          return (
            <ListItem key={item.listing_id} item={item}/>
          )
        })
      }
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.array,
}

Listing.defaultProps = {
  items: []
}



export default Listing;
