import Cards from "./Cards.jsx";
import Sales from "./Sales.jsx";
import Statistic from "./Statistic.jsx";
import "./dashboard.css";

export default function Dashboard(){
    return (
        <div className="dashboard">
            <div className="dashboard-section">
                <div className="sales-section">
                    <Cards/>
                    <Sales/>
                </div>
                <Statistic/>
            </div>
        </div>
    );
}