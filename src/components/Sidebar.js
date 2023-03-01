import Link from './Link';

function Sidebar(){
    const links=[
        {label:'Dropdown', path:'/dropdown'},
        {label:'Accordion', path:'/accordion'},
        {label:'Buttons', path:'/buttons'},
        {label:'Modal', path:'/modal'},
        {label:'Table', path:'/table'},
        {label:'Counter', path:'/counter'},



    ];
    const renderedLink=links.map((link)=>{
        return <Link key={link.label} to={link.path} addClass="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    });

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLink}
        </div>
    )
}

export default Sidebar;