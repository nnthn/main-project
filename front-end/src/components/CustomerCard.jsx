import customerIcon from "../assets/customer-icon.svg";
import "./customercard.css";

export default function CustomerCard(){
    return (
        <>
          <div className="customer-card">
            <img src={customerIcon} alt="user"/>
            <div className="customer-details">
              <h4 className="normal-weight">CustomerId</h4>
              <input className="customer-number" type="input" required />
            </div>
          </div>
        </>
    );
}
