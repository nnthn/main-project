import './newsales.css';
import SalesList from "../components/SalesList.jsx";
import CustomerCard from "../components/CustomerCard.jsx";
import PaymentMethod from "../components/PaymentMethod.jsx";
import Search from "../components/Search.jsx";
import React ,{useState,useEffect} from "react" ;
import arrowimg from "../assets/arrow.svg";
import baseUrl from '../config.jsx';
export default function NewSale(props){
    const [customerId,setCustomerId] =useState();
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalAmnt, setTotalAmount] = useState(0); // Initialize total amount state

    // Function to calculate total amount
    function totalCalculate(){
        let total = 0;
        itemsInCart.forEach((item) => {
            const itemTotal = parseInt(item[1].itemPrice) * parseInt(item.quantity);
            total += itemTotal;
        });
        return total;
    }

    // Function to handle quantity change
    function handleChange(item){
        console.log(item);
        let x = [...itemsInCart];
        x[item.index].quantity = item.quantity;
        setItemsInCart(x);
    }

    // Update total amount state when items in cart change
    useEffect(() => {
        setTotalAmount(totalCalculate());
    }, [itemsInCart]);

    // Function to handle sale submission
    const handleSubmitSale = async () => {
        console.log(itemsInCart);
        try {
            const response = await fetch(`${baseUrl}/sales`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phoneNumber: customerId,
                    items: itemsInCart.map(item => [item[0], item.quantity]),
                    totalAmount: totalAmnt // Use the totalAmnt state here
                })
            });

            if (response.ok) {
                console.log('Sale submitted successfully');
                setItemsInCart([]);
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
                   {itemsInCart.map((item, index)=>(
                       <SalesList
                         key ={index}
                         index={index}
                         itemName={item[1].itemName}
                         itemPrice={item[1].itemPrice}
                         itemInventory={item[1].itemInventory}
                         h4Symbol="$"
                         h4ClassName="bold"
                         h4Value={item[1].itemPrice * item.quantity}
                         quantity={1}
                         changeQty={handleChange}
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
                <div className='amount-container' onClick={handleSubmitSale}>
                  <div className="total-card" >
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
