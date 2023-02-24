import SortableTable from "../components/SortableTable";

function TablePage(){
    const data=[
        {name:'Orange', color:'bg-orange-500', score:5},
        {name:'Apple', color:'bg-red-500', score:3},
        {name:'Banana', color:'bg-yellow-500', score:1},
        {name:'Lime', color:'bg-green-500', score:4},

    ];

    const config=[
        {label:'Name',
         render:(fruit)=> <td className="p-3">{fruit.name}</td>,
         SortValue:(fruit)=> fruit.name},
        {label:'Color',
         render:(fruit)=> <div className={`p-3 m-2 ${fruit.color}`}></div>},
        {label:'Score',
         render:(fruit)=> <td className="p-3">{fruit.score}</td>,
         SortValue:(fruit)=> fruit.score
        },
    ];

    const keyFn=(fruit)=>{
        return fruit.name;

    }

    return(
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;