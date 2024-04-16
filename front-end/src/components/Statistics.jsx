import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
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

    const quantityData = salesData[0].map(data => ({ time: new Date(data[0]).toLocaleString(), value: data[1] }));
    const forecastData = salesData[1].map(data => ({ time: new Date(data[0]).toLocaleString(), value: data[1] }));

    return (
        <AreaChart width={800} height={400} data={quantityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" name="Quantity" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="value" name="Forecast" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
    );
};
