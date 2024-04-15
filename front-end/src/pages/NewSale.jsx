import './newsales.css';
import ItemsList from "../components/ItemsList.jsx";
import CustomerCard from "../components/CustomerCard.jsx";
import PaymentMethod from "../components/PaymentMethod.jsx";
import Search from "../components/Search.jsx";
import React ,{useState,useEffect} from "react" ;
import arrowimg from "../assets/arrow.svg";

export default function NewSale(props){
    const [customerId,setCustomerId] =useState();
    const [itemsInCart, setItemsInCart] = useState([]);
     function totalCalculate(){
        let total=0;
         itemsInCart.map((item)=>{
             item.h4Value= parseInt(item.price)*parseInt(item.inventory);
            total=total+ item.h4Value;
        });
        return total;
     }
    const handleSubmitSale = async () => {
        try {
            const response = await fetch('/sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerId: customerId,
                    items: itemsInCart.map(item => [item[0], item[1].quantity])
                })
            });

            if (response.ok) {
                console.log('Sale submitted successfully');
                // Optionally, you can reset the form or perform other actions after successful submission
            } else {
                console.error('Failed to submit sale');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>
          <section id="newsale" className="newsale">
            <div className='hero-container'>
              <h1 className="main-heading">New Sales</h1>
              <Search setSelectedItems={setItemsInCart} selectedItems={itemsInCart}/>
               <div className="card-items-container">
                 <h2 className="sub-heading">Items In Cart</h2>
                 <div className='headings-container'>
                   <h4 className="h1">Name</h4>
                   <h4 className="h2">Rate</h4>
                   <h4 className="h2">Qty</h4>
                   <h4 className="h3">Total</h4>
                 </div>
                 <div className="items-list-container">
                   {itemsInCart.map((item)=>(
                       <ItemsList
                         itemName={item[1].name}
                         h2Value={item[1].price}
                         h3Value={item[1].inventory}
                         h4Symbol="$"
                         h4ClassName="bold"
                         h4Value={item[1].price * item[1].inventory}
                       /> 
                       
                   ))}
                 </div>
               </div>
            </div>
            <div className="sub-section">
              <CustomerCard setCustomerId={setCustomerId}/>
              <PaymentMethod />
              <div className="total-container" >
                <h4 className="sub-heading">Total Amount</h4>
                <div className='amount-container'>
                  <div className="total-card" onClick={handleSubmitSale}>
                    <h3 className="symbol sub-heading">₹</h3>
                    <h3 className="sub-heading total">{totalCalculate()}</h3>
                  </div>
                  <button className="total-submit">
                    <img src={arrowimg}alt="arrow"/>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}
