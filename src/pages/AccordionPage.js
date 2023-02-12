import Accordion from "../components/Accordion";

function AccordionPage(){
    const items=[
        {
            id:'sdlfajlk',
            label:'Can I use React on a projet?',
            content:' You can use React on any project you like'
        },
        {
            id:'sdl43k8',
            label:'Can I use javascript on a projet?',
            content:' You can use React on any project you like'
        },
        {
            id:'dsklj4',
            label:'Can I use CSS on a projet?',
            content:' You can use React on any project you like'
        }

    ]


    return <Accordion items={items} />;
}

export default AccordionPage;