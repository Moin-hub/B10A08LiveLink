import { useLoaderData, useParams } from "react-router-dom";



const GadgetDetail = () => {
    const {gadgetId} = useParams();

    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.gadgetId == gadgetId)
    
    const {image, name, gadgetId: Id, price, description} = gadget;

    console.log(gadgetId);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3><span className="text-xl font-bold">Price: </span> {price}</h3>
    <p><small>{description}</small></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default GadgetDetail;