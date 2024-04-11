import './listcomponent.css';
import ItemsList from "./ItemsList.jsx";

export default function ListComponent(props){
    return(
        <>
          <div className="card-items-container">
            <h2 className="sub-heading">{props.subHeading}</h2>
            <div className='headings-container'>
              <h4 className="h1">{props.heading1}</h4>
              <h4 className="h2">{props.heading2}</h4>
              <h4 className="h2">{props.heading3}</h4>
              <h4 className="h3">{props.heading4}</h4>
            </div>
            <div className="items-list-container">
              <ItemsList
                itemName={props.itemName}
                h2Value={props.h2Value}
                h3Value={props.h3Value}
                h4Symbol={props.h4Symbol}
                h4Value={props.h4Value}
              />
            </div>
          </div>
        </>
    );
}
