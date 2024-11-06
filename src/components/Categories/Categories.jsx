import { useEffect, useState } from "react";


const Categories = () => {
    const [categories,setCategories] = useState();

    useEffect( () => {
        fetch('../../../public/gadgetData.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.length <h2>hi I am categories</h2>
            }
        </div>
    );
};

export default Categories;