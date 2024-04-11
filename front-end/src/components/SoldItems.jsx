import ItemsCard from "./ItemsCard.jsx";
import React ,{useState, useEffect} from 'react';
import "./solditems.css";

export default function Statistic(){
    const [soldItems, setSoldItems]= useState([
        {id:1,item:"Milk",unit:"333"},
        {id:1,item:"Gum Gum",unit:"323"},
        {id:1,item:"Mira Mira No mi",unit:"322"},
    ]);
    useEffect(()=>{
        const fetchSoldItems = async()=>{
            try{
                const response = await fetch("/items",{
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
    
    return(
        <div className="sold-items">
          <h3 className="sub-heading">Items by sales</h3>
          <div className="pie-chart">
          </div>
          <div className="items-heading">
            <h4>Name</h4>
            <h4>Units</h4>
          </div>
          {soldItems.map((items)=>(
              <ItemsCard
                key={items.id}
                item={items.item}
                unit={items.unit}
              />
          ))}
        </div>
    );
}
                    
