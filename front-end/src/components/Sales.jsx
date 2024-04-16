import RecentCards from "./RecentCards.jsx";
import React, { useState, useEffect } from 'react';
import './sales.css';
import BASE_URL from "../config.jsx";

export default function Sales() {
    const [recentSales, setRecentSales] = useState([[0, {}]]);

    useEffect(() => {
        const fetchRecentSales = async () => {
            try {
                const response = await fetch(`${BASE_URL}/sales`, {
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

    // Function to format UTC date string to desired format
    const formatDate = (utcDate) => {
        const date = new Date(utcDate);
        return date.toLocaleString(); // Format the date as per browser locale
        // Alternatively, you can use a library like moment.js for more control over formatting
        // return moment.utc(utcDate).format('YYYY-MM-DD HH:mm:ss');
    };

    return (
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
                        key={sale[0]}
                        customerId={sale[1].saleCustId}
                        date={formatDate(sale[1].saleDatetime)} // Format the date here
                        amount={sale[1].saleAmount}
                    />
                ))}
            </div>
        </div>
    );
}
