import RecentCards from "./RecentCards.jsx";
import React, {useState, useEffect} from 'react';
import './sales.css';
export default function Sales(){
    const [recentSales, setRecentSales] = useState([
        { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },  { id: 1, customerId: "123", date: "2024-04-10", amount: 100 },
        { id: 2, customerId: "456", date: "2024-04-09", amount: 200 },
       

    ]);

    useEffect(() => {
        const fetchRecentSales = async () => {
            try {
                const response = await fetch("/sales", {
                    // You can add any additional configurations
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch recent sales");
                }
                const data = await response.json();
                setRecentSales(data); // Update the state with fetched data
            } catch (error) {
                console.error("Error fetching recent sales:", error);
            }
        };

        fetchRecentSales();
    }, []);

    return(
        <div className="sales">
          <h1 className="recent-sales sub-heading">Recent Sales</h1>
          <div className="card-headings">
            <h4 className="customer-id">Customer Id</h4>
            <h4 className="date">Date</h4>
            <h4 className="amount-title">Amount</h4>
          </div>
          <div className="list-container">
            {recentSales.map((sale) => (
                <RecentCards
                  key={sale.id}
                  customerId={sale.customerId}
                  date={sale.date}
                  amount={sale.amount} 
                />
            ))}
          </div>   
        </div>
    );
}
