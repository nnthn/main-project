import "./restock.css";
import axios from "axios";
import arrowimg from "../assets/arrow.svg";
import baseUrl from "../config.jsx";
import ItemsList from "../components/ItemsList.jsx";
import Search from "../components/Search.jsx";
import React, {useState, useEffect } from "react";
import addBtn from "../assets/add.svg";
import submitBtn from "../assets/submit.svg";
import deleteBtn from '../assets/delete.svg';


export default function NewSale(){
    const [newItem,setNewItem] =useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemsInInventory, setItemsInInventory] = useState([]);
    const [restockQuantity, setRestockQuantity] = useState(selectedItem ? selectedItem.forecast : '');
    
    const handleItemClick =(item) =>{
        console.log(item);
        setSelectedItem(item);
        setNewItem(false);
    };

    const handleChange = (e) => {
        setRestockQuantity(e.target.value);
    };
    // /item/itemid/future --> get
  
    useEffect(() => {

        if (selectedItem) {
            setRestockQuantity(selectedItem.quantity);
        }
        const fetchItems = async () => {
            try {
                const response = await fetch(`${baseUrl}/items`);
                if (response.ok) {
                    const data = await response.json();
                    setItemsInInventory(data);
                } else {
                    console.error('Failed to fetch items');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchItems();
    }, [selectedItem]);
    const updateItemQuantity = async (itemId, quantity) => {
        console.log("Updating item quantity:", itemId, quantity);
        if (!selectedItem ) return;
        try {
            const response = await fetch(`${baseUrl}/item/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'restockQty' : parseInt(quantity)
                })
            });

            if (response.ok) {
                console.log(`Item ${itemId} quantity updated successfully`);
            } else {
                console.error(`Failed to update quantity for item ${itemId}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    async function deleteItem(itemId) {
        try {
            const response = await fetch(`${baseUrl}/item/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log(`Item with ID ${itemId} deleted successfully`);
            } else {
                console.error(`Failed to delete item with ID ${itemId}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
   
    return (
        <>
          <section id="restock" className="restock">
            <div className='hero-container'>
              <h1 className="main-heading">Restock</h1>

               <div className="card-items-container">
                 <div className="inventory-heading ">
                   <h2 className="sub-heading">Inventory</h2>
                   <button onClick={()=>setNewItem(!newItem)} className="addbtn"><img src={addBtn} alt="addbtn"/>Add an Item</button>
                 </div>
                 <div className='headings-container'>
                   <h4 className="h1">Name</h4>
                   <h4 className="h2">Rate</h4>
                   <h4 className="h2">Stock</h4>
                   <h4 className="h3">Forecast</h4>
                 </div>
                 <div className="items-list-container">
                   {itemsInInventory.map((item)=>(
                       <a className="items-a-tag">
                         <ItemsList
                           key={item[0]}
                           itemId ={item[0]}
                           itemName={item[1].itemName}
                           itemPrice={item[1].itemPrice}
                           itemInventory={item[1].itemInventory}
                           itemType={item[1].itemQtyType}
                           h4ClassName="nm-wght"
                           onItemClick={handleItemClick}
                          />
                      </a>
                       
                       
                   ))}
                   
                 </div>
               </div>
            </div>
            <div className="sub-section">
              <div>
                <h2 className="sub-heading">Item Details</h2>
                {newItem ?
                 <ProductForm />
                 : selectedItem && (
                      <div className="item-detail">
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Produck Name :</h3>
                          <h2>{selectedItem.itemName}</h2>
                        </div>
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Stock Left :</h3>
                          <h2>{selectedItem.itemInventory}</h2>
                        </div>
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Price :</h3>
                          <h2>{selectedItem.itemPrice}</h2>
                        </div>
                        <button className="delete-button" onClick={()=>deleteItem(selectedItem.itemId)}><img  src={deleteBtn} alt="deletebtn"/></button>
                      </div>


                  )}
              </div>
              {
                  !newItem && (
                      <div className="total-container">
                        <h4 className="sub-heading">Restock Quantity</h4>
                        {selectedItem &&(
                            <div className='amount-container'>
                             <div className="total-card" >
  { selectedItem && (
      <input value={restockQuantity} type="number" onChange={handleChange}></input>)}
 
                          </div>
                          <button className="total-submit"onClick={() => updateItemQuantity(selectedItem.itemId, restockQuantity)} >
                            <img src={arrowimg}alt="arrow"/>
                          </button>
                        </div>
                        )}
                      </div>
                  )
              }
            </div>
          </section>
        </>
    );
}



function ProductForm(){
  const [formData, setFormData] = useState({
    name: '',
    inventory: 0,
    quantity: '',
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        console.log(JSON.stringify({
            itemName: formData.name,
            itemInventory: formData.inventory,
            itemQtyType: formData.quantity,
            itemPrice: formData.price
        }));
        
        try {
            const response = await fetch(`${baseUrl}/items`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    itemName: formData.name,
                    itemInventory: parseInt(formData.inventory),
                    itemQtyType: formData.quantity,
                    itemPrice: parseInt(formData.price)
                })
            });

            if (response.ok) {
                console.log('Product added successfully');
                // Optionally, you can reset the form after successful submission
                setFormData({
                    name: '',
                    inventory: 0,
                    quantity: '',
                    price: 0
                });
            } else {
                console.error('Failed to submit sale');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

 


  return (
    <form onSubmit={handleSubmit}>
      <div className="label-input">
        <label htmlFor="name"><h3 className="normal-weight">Name:</h3></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="inventory"><h3 className="normal-weight">Inventory:</h3></label>
        <input
          type="number"
          id="inventory"
          name="inventory"
          value={formData.inventory}
          onChange={handleChange}
          required
        />
      </div>
      <div className="label-input">
        <label htmlFor="quantity"><h3 className="normal-weight">Quantity Type:</h3></label>
        <select
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        >
          <option value="">Select quantity</option>
          <option value="nos">nos</option>
          <option value="kg">kg</option>
          <option value="l">l</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="label-input">
        <label className="" htmlFor="price"><h3 className="normal-weight">Price:</h3></label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button className="item-submit-button" type="submit"><img src={submitBtn} alt="submit"/></button>
    </form>
  );
};


