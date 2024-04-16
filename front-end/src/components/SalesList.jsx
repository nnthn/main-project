import React, { useState, useEffect} from "react";
import "./itemslist.css";

export default function ItemsList(props) {
  const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        changeNos(); 
    },[quantity]);
    
  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
      setQuantity(newQuantity);
  };

  const changeNos = () => {
    props.changeQty({ ...props, quantity: quantity });
  };

  return (
    <>
      <div className="item-container" >
        <h4 className="item-name">{props.itemName}</h4>
        <div className="item-h2 symbol">
          <h4>₹</h4>
          <h4>{props.itemPrice}</h4>
        </div>
        <div className="item-h2 qty">
          <input
            type="number"
            value={quantity}
            onChange={handleChange}
            min="1"
            max={props.itemInventory}
          />
          <h5>nos</h5>
        </div>
        <div className="item-h3 symbol">
          <h4 className="symbol">{props.h4Symbol}</h4>
          <h4 className={props.h4ClassName}>{props.h4Value}</h4>
        </div>
      </div>
    </>
  );
}
