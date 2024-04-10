import SoldItems from "../components/SoldItems.jsx";
import Sales from "../components/Sales.jsx";
import Search from "../components/Search.jsx";
import Statistics from "../components/Statistics.jsx";
import "./dashboard.css";

export default function Dashboard(){
    return (
        <>
            <div className="dashboard-section">
              <div className="sales-section">
                    <Search/>
                    <Statistics/>
                    <Sales/>
                </div>
                <SoldItems/>
            </div>
        </>
    );
}
