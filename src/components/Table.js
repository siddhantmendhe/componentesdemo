import { Fragment } from "react";
function Table({data,config,keyFn}){

    const renderedHeaders=config.map((column)=>{
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return (
            
            <th key={column.label}>{column.label}</th>
        )
    });

    const renderedRows=data.map((rowData)=>{
        const renderedCels=config.map(column=>{
           
            return <td key={column.label}>{column.render(rowData)}</td>;    

        });
        return (

            
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCels}

            </tr>
        )
    })


    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                   {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;