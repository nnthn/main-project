import "./itemscard.css";
export default function ItemsCard(props){
    return (
        <div className="items-card">
          <h4 className="items-name">{props.item}</h4>
          <h4 className="item-unit">{props.unit}</h4>
        </div>
    );
}
