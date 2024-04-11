import "./paymentmethod.css";
export default function PaymentMethod(){
    return (
        <>
          <div className="payment-container">
            <h2 className="sub-heading">Payment Method</h2>
            <div className="payment-methods">
              <button className="p-4">UPI</button>
              <button className="p-4">Debit Card</button>
              <button className="p-4">Credit Card</button>
              <button className="p-4">Cash</button>
            </div>
          </div>
        </>
    );
}
