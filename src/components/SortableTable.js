import { useState } from "react";
import Table from "./Table";

function SortableTable(props){

    const {config, data}= props;

    //States for sortnig
    const [sortOrder,setSortOrder]= useState(null);
    const [sorBy, setSortBy]= useState(null);

    const handleClick=(label)=>{
        if(sortOrder===null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder==='asc'){
            setSortOrder('desc');
            setSortBy(label);

        }
        else{
            setSortOrder(null);
            setSortBy(null);

        }
    }
    const updatedConfig=config.map((column)=>{
        if(!column.SortValue){
            return column;
        }
        return{
            ...column,
            header:()=> <th onClick={()=>handleClick(column.label)}> {column.label} Is Sortable </th>
        };
    });

    //only sort data if sortOrde and sortBy are not null
    //make a copy of the 'data' prop
    //Fiind the correct sortValue function and use it for sorting data
    let sortedData=data;
    if(sortOrder && sorBy){
       const {SortValue}= config.find(column=> column.label===sorBy);
       sortedData=[...data].sort((a,b)=>{
        const valueA=SortValue(a);
        const valueB=SortValue(b);

        const reverseOrder=sortOrder==='asc'? 1:-1;
        if(typeof valueA==='string')
        {
            return valueA.localeCompare(valueB)*reverseOrder;
        }
        else{
            return (valueA-valueB)*reverseOrder;
        }

       });

    };
    return <div>
        {sortOrder}-{sorBy}
        <Table {...props} data={sortedData} config={updatedConfig}/></div>
}

export default SortableTable;