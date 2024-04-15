import "./restock.css";
import arrowimg from "../assets/arrow.svg";
import ItemsList from "../components/ItemsList.jsx";
import Search from "../components/Search.jsx";
import React, {useState, useEffect } from "react";

export default function NewSale(){
    const [newItem,setNewItem] =useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemsInInventory, setItemsInInventory] = useState([]);
    const [restockQuantity, setRestockQuantity] = useState(selectedItem ? selectedItem.quantity : '');
   
    const handleItemClick =(item) =>{
        setSelectedItem(item);
        setNewItem(false);
    };

    const handleChange = (e) => {
        setRestockQuantity(e.target.value);
    };
    useEffect(() => {

        if (selectedItem) {
            setRestockQuantity(selectedItem.quantity);
        }
        const fetchItems = async () => {
            try {
                const response = await fetch('/items');
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
        if (!selectedItem ) return;
        try {
            const response = await fetch(`/items/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(quantity)
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

   
    return (
        <>
          <section id="restock" className="restock">
            <div className='hero-container'>
              <h1 className="main-heading">Restock</h1>

               <div className="card-items-container">
                 <div className="inventory-heading ">
                   <h2 className="sub-heading">Inventory</h2>
                   <button onClick={()=>setNewItem(!newItem)}>add</button>
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
                           itemName={item[1].name}
                           h2Value={item[1].price}
                           h3Value={item[1].inventory}
                           h4Symbol="+"
                           h4ClassName="nm-wght"
                           h4Value={item.h4Value}
                           onItemClick={()=> handleItemClick(item)}
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
                          <h2>{selectedItem.h3Value}</h2>
                        </div>
                        <div className="title-and-desc">
                          <h3 className="normal-weight">Price :</h3>
                          <h2>{selectedItem.h2Value}</h2>
                        </div>
                        
                      </div>

                  )}
              </div>
              {
                  !newItem && (
                      <div className="total-container">
                        <h4 className="sub-heading">Restock Quantity</h4>
                        {selectedItem &&(
                            <div className='amount-container'>
                          <div className="total-card" onClick={updateItemQuantity(selectedItem[0],restockQuantity)}>

                            <h3 className="sub-heading restock-quantity">{ selectedItem && (
                                <input value={restockQuantity} type="text" onChange={handleChange}>{restockQuantity}</input>)}</h3>
                          </div>
                          <button className="total-submit" >
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
    
    try {
      const response = await fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          inventory: formData.inventory,
          qtyType: formData.quantity,
          price: formData.price
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
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="inventory">Inventory:</label>
        <input
          type="number"
          id="inventory"
          name="inventory"
          value={formData.inventory}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity Type:</label>
        <select
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        >
          <option value="">Select quantity</option>
          <option value="1">nos</option>
          <option value="2">kg</option>
          <option value="3">l</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


