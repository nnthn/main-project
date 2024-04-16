import ItemsCard from "./ItemsCard.jsx";
import React ,{useState, useEffect} from 'react';
import "./solditems.css";
import base_url from "../config.jsx";
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

export default function Statistic(){
    const [soldItems, setSoldItems]= useState([]);
    useEffect(()=>{
        const fetchSoldItems = async()=>{
            try{
                
                const response = await fetch(`${base_url}/items`,{
                    //add aditional configs
                    
                });
                if(!response.ok){
                    throw new Error("Error fetching sold items");
                    
                }
                const data = await response.json();
                setSoldItems(data);
                
            } catch (error){
                console.error("Error fetching sold items",error);
            }
        };
        fetchSoldItems();
    },[]);
      // Aggregate data and prepare for pie chart
    const preparePieChartData = () => {
        const pieData = soldItems.map(item => ({
            name: item[1].itemName,
            value: item[1].itemInventory // Assuming itemInventory represents the units sold
        }));
        return pieData;
    };
    return(
        <div className="sold-items">
          <h3 className="sub-heading">Items by Availabily</h3>
          <div className="pie-chart">
            <PieChart width={300} height={300}>
              <Pie
                data={preparePieChartData()}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={50}
                fill="#8884d8"
                label
              >
                {
                    preparePieChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                    ))
                }
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="items-heading">
            <h4>Name</h4>
            <h4>Units</h4>
          </div>
          <div className="item-list-container">{soldItems.map((items)=>(
              <ItemsCard
                key={items[0]}
                item={items[1].itemName}
                unit={items[1].itemInventory}
              />
          ))}
          </div>
        </div>
    );
}
                    
