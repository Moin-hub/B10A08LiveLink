import { Link } from "react-router-dom";


const Gadget = ({gadget}) => {
    const {gadgetId, name, price, image, description} = gadget;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h3 className="font-bold">{name}</h3>
    <h2><span className="font-bold">Price: </span> {price}</h2>
    {/* <p>{description}</p> */}
    <div className="card-actions">
      <Link to={`/gadgets/${gadgetId}`}>
      <button className="btn btn-primary btn-outline rounded-full">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Gadget;