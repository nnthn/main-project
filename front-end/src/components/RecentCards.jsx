import "./recentcard.css";
export default function RecentCards(props){
    return (
        <div className="recent-card">
          <h4 className="customerid">{props.customerId}</h4>
          <h4 className="date">{props.date}</h4>
          <h4>{props.amount}</h4>
        </div>
    );
}
