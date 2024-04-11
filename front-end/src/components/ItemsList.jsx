import "./itemslist.css";

export default function ItemsList(props){
    return (
        <>
          <div className="item-container">
            <h4 className="item-name">{props.itemName}</h4>
            <div className="item-h2 symbol">
              <h4>₹</h4>
              <h4 >{props.h2Value}</h4>
            </div>
            <div className="item-h2 qty">
              <h4>{props.h3Value}</h4>
              <h5>nos</h5>
            </div>
            <div className="item-h3 symbol">
              <h4 className="symbol">{props.h4Symbol}</h4>
              <h4 className ={props.h4ClassName}> {props.h4Value}</h4>
            </div>

          </div>
        </>
    );
}
