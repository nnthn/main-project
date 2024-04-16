import "./itemslist.css";
import baseUrl from '../config.jsx';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function ItemsList(props){
    const handleClick=()=>{
        props.onItemClick(props);

    };
    const [itemFuture,setItemFuture] =useState(0.0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/item/${props.itemId}/future`);
                if (response.status === 200) {
                    console.log(response.data);
                    setItemFuture(response.data);
                } else {
                    console.error(`Failed to get future item for itemId ${props.itemId}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(); // Call the async function immediately

    }, []);

    return (
        <>
          <div className="item-container" onClick={handleClick}>
            <h4 className="item-name">{props.itemName}</h4>
            <div className="item-h2 symbol">
              <h4>₹</h4>
              <h4 >{props.itemPrice }</h4>
            </div>
            <div className="item-h2 qty">
              <h4>{props.itemInventory}</h4>
              <h5>  {props.itemType}</h5>
            </div>
            <div className="item-h3 symbol">
              <h4 className="symbol">{props.h4Symbol}</h4>
              <h4 className ={props.h4ClassName}> {itemFuture}</h4>
            </div>

          </div>
        </>
    );
}
