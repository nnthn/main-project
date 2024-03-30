import RecentCards from "./RecentCards.jsx";
import './sales.css';
export default function Sales(){
    return(
        <div className="sales">
          <h3 className="recent-sales">Recent Sales</h3>
          <div className="card-headings">
            <h4 className="heading-name">Name</h4>
            <h4 className="rest-title">Date</h4>
            <h4 className="rest-title">Status</h4>
            <h4 className="rest-title">Amount</h4>
          </div>
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
          
        </div>
    );
}
