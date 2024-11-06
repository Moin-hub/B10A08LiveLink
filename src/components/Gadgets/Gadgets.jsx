import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";




const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect( () => {
        fetch('../../../public/gadgetData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center md:mt-56 mt-8">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.gadgetId}></Gadget>)
                }
            </div>
            
        </div>
    );
};

export default Gadgets;