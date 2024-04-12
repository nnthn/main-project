import './newsales.css';
import ItemsList from "../components/ItemsList.jsx";
import CustomerCard from "../components/CustomerCard.jsx";
import PaymentMethod from "../components/PaymentMethod.jsx";
import React ,{useState,useEffect} from "react" ;
import arrowimg from "../assets/arrow.svg";

export default function NewSale(props){
    const [itemsInCart, setItemsInCart] = useState([
        {id:1, itemName:"Soap", h2Value:"30",h3Value:"34"},
        {id:2, itemName:"Pencil", h2Value:"3",h3Value:"33"},
        {id:3, itemName:"Pen", h2Value:"3",h3Value:"40"},
        {id:4, itemName:"Chocolate", h2Value:"20",h3Value:"70"},
        {id:5, itemName:"Cup", h2Value:"30",h3Value:"33"},
     ]);
     function totalCalculate(){
        let total=0;
         itemsInCart.map((item)=>{
             item.h4Value= parseInt(item.h2Value)*parseInt(item.h3Value);
            total=total+ item.h4Value;
        });
        return total;
    }
    return (
        <>
          <section id="newsale" className="newsale">
            <div className='hero-container'>
              <h1 className="main-heading">New Sales</h1>
              <h3>search component</h3>
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
                         itemName={item.itemName}
                         h2Value={item.h2Value}
                         h3Value={item.h3Value}
                         h4Symbol="$"
                         h4ClassName="bold"
                         h4Value={item.h4Value}
                       /> 
                       
                   ))}
                 </div>
               </div>
            </div>
            <div className="sub-section">
              <CustomerCard />
              <PaymentMethod />
              <div className="total-container">
                <h4 className="sub-heading">Total Amount</h4>
                <div className='amount-container'>
                  <div className="total-card">
                    <h3 className="symbol sub-heading">₹</h3>
                    <h3 className="sub-heading total">{totalCalculate()}</h3>
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
