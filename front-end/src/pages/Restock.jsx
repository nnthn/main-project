import "./restock.css";
import arrowimg from "../assets/arrow.svg";
import ItemsList from "../components/ItemsList.jsx";
import React, {useState, useEffect } from "react";

export default function NewSale(){
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemsInInventory, setItemsInInventory] = useState([
        {id:1, itemName:"Soap", h2Value:"33",h3Value:"34",h4Value:"4333"},
        {id:2, itemName:"Gum Gum no Mi", h2Value:"343",h3Value:"33",h4Value:"4333"}, {id:3, itemName:"Mira Mira No Mi", h2Value:"3",h3Value:"4",h4Value:"633"},
        {id:4, itemName:"Soap", h2Value:"33",h3Value:"34",h4Value:"4333"},
        {id:5, itemName:"Gum Gum no Mi", h2Value:"343",h3Value:"33",h4Value:"4333"}, {id:6, itemName:"Mira Mira No Mi", h2Value:"3",h3Value:"4",h4Value:"633"},
        {id:7, itemName:"Soap", h2Value:"33",h3Value:"34",h4Value:"4333"},
       
    ]);
   
    const handleItemClick =(item) =>{
        setSelectedItem(item);
    };
    const handleQuantityChange= (event)=>{
        const newValue = event.target.textContent;
        setSelectedItem({
            ...selectedItem,
            h4Value: newValue
        });
    };
   
    return (
        <>
          <section id="restock" className="restock">
            <div className='hero-container'>
              <h1 className="main-heading">Restock</h1>
              <h3>search component</h3>
               <div className="card-items-container">
                 <h2 className="sub-heading">Inventory</h2>
                 <div className='headings-container'>
                   <h4 className="h1">Name</h4>
                   <h4 className="h2">Rate</h4>
                   <h4 className="h2">Stock</h4>
                   <h4 className="h3">Forecast</h4>
                 </div>
                 <div className="items-list-container">
                   {itemsInInventory.map((item)=>(
                       <ItemsList
                         itemName={item.itemName}
                         h2Value={item.h2Value}
                         h3Value={item.h3Value}
                         h4Symbol="+"
                         h4ClassName="nm-wght"
                         h4Value={item.h4Value}
                         onItemClick={handleItemClick}
                       />
                       
                       
                   ))}
                 </div>
               </div>
            </div>
            <div className="sub-section">
              <div>
                <h2 className="sub-heading">Item Details</h2>
                   {selectedItem && (
                      <div className="item-detail">
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Produck Name :</h3>
                          <h2>{selectedItem.itemName}</h2>
                        </div>
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Stock Left :</h3>
                          <h2>{selectedItem.h3Value}</h2>
                        </div>
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Price :</h3>
                          <h2>{selectedItem.h2Value}</h2>
                        </div>
                        
                      </div>

                  )}
               </div>
              <div className="total-container">
                <h4 className="sub-heading">Restock Quantity</h4>
                <div className='amount-container'>
                  <div className="total-card">
                    <h3 className="sub-heading restock-quantity">{selectedItem && (
                        <h3 className="restock-quantity" contentEditable="true" onBlur={handleQuantityChange}>{selectedItem.h4Value}</h3>)}</h3>
                  </div>
                  <div className="total-submit">
                    <img src={arrowimg}alt="arrow"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}
