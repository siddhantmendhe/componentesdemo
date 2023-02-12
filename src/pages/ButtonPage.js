import Button from "../components/Button";
import { GoDashboard,GoDatabase, GoGlobe, GoLocation,GoMention } from "react-icons/go";

function ButtonPage(){
    return <div>App
        <div>
        <Button primary className="mb-5"><GoDashboard/>Click me</Button>
        </div>
        <div>
        <Button secondary rounded className="mb-5"> <GoDatabase/>Click me</Button>
        </div>
        <div>
        <Button warning outline><GoGlobe/>Click me</Button>
        </div>
        <div>
        <Button success outline><GoLocation/>Click me</Button>
        </div>
        <div>
        <Button danger outline ><GoMention/>Click me</Button>
        </div>
      
    </div>;
}

export default ButtonPage;