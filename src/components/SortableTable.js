import { useState } from "react";
import Table from "./Table";
import { GoChevronUp,GoChevronDown } from "react-icons/go";

function SortableTable(props){

    const {config, data}= props;

    //States for sortnig
    const [sortOrder,setSortOrder]= useState(null);
    const [sorBy, setSortBy]= useState(null);

    const handleClick=(label)=>{

        if(sorBy && label!==sorBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }


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
            header:()=> <th className="cursor-pointer hover:bg-gray-100" onClick={()=>handleClick(column.label)}>
                <div className="flex item-center">
                {getIcons(column.label,sorBy,sortOrder)}
                
                 {column.label} </div></th>
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
    return(<Table {...props} data={sortedData} config={updatedConfig}/>);

        
}

function getIcons(label,sorBy,sortOrder){
    if(label!==sorBy){
        return <div>
        <GoChevronDown/>
        <GoChevronUp/>
        </div>
    }

    if(sortOrder===null){
        return <div>
        <GoChevronDown/>
        <GoChevronUp/>
        </div>;
    } else if(sortOrder==='asc'){
        return <GoChevronUp/> ;
    }
    else{
        return <GoChevronDown/>;
        ;
    }
}

export default SortableTable;