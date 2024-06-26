import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import "./statistics.css";
import baseUrl from '../config.jsx';

export default function Statistic() {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/sales/future`);
                if (response.status === 200) {
                    setSalesData(response.data);
                } else {
                    console.error('Failed to fetch sales data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    if (salesData.length === 0) {
        return <div>Loading...</div>;
    }

    // Extract previous sales data
    const previousSales = salesData[0].map(data => ({
        time: new Date(data[0]).toLocaleString(),
        value: data[1],
        type: 'Previous Sales'
    }));

    // Extract future forecast data
    const futureForecast = salesData[1].map(data => ({
        time: new Date(data[0]).toLocaleString(),
        value: data[1],
        type: 'Future Forecast'
    }));

    // Combine both previous sales and future forecast data into one array
    const combinedData = [...previousSales, ...futureForecast];

    return (
        <div>
          <h3 className="sub-heading">Statistics</h3>
          <div className="forecast-graph">
            
            <AreaChart width={400} height={400} data={previousSales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" name="Sales" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            <AreaChart width={400} height={400} data={futureForecast}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="value" name="future" stroke="#72BD6F" fill="#72BD6F" />
            </AreaChart>

          </div>
        </div>
    );
};
