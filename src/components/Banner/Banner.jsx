import { LineChart } from 'recharts';
import bannerIMG from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#9538E2] relative pb-40 mb-28 lg:mb-48 ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-white">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      
      <button className="btn btn-primary text-white">Shop Now</button>

      <img className='rounded-xl absolute lg:-bottom-[30%] lg:right-[25%] md:-bottom-[20%] -bottom-[10%] right-[20%] w-1/2' src={bannerIMG} alt="" />
      <br />
      
    </div>
  </div>
</div>
    );
};

export default Banner;