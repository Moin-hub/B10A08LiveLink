

const Footer = () => {
    return (
  <section className="pt-12 ">
    <div className="flex flex-col text-center bg-white">
    <h2 className="text-4xl font-bold">Gadget Heaven</h2>
    <p className="text-xs mt-2">Leading the way in cutting-edge technology and innovation.</p>
    </div>
        <footer className="footer bg-white text-black p-10 justify-center gap-40 text-center">
  
  <nav className="flex flex-col items-center">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col items-center">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col items-center">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </section>
    );
};

export default Footer;