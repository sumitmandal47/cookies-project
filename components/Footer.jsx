import Image from "next/image";
import FooterImage from "../app/assets/images/footer-image.png"
const Footer = () => {
  return (
    <footer className="bg-[#ff5522] text-[#f8f3ea] px-[30px] py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address & Phone */}

        <div>
          <p>
            123 Maple Street,
            <br />
            Springfield, IL 62704
          </p>
          <p className="mt-4">(555) 123-4567</p>
        </div>

        <div>
          <p>
            Monday – Friday:
            <br />
            12:00 PM – 10:00 PM
          </p>
          <p className="mt-4">
            Saturday – Sunday:
            <br />
            10:00 AM – 6:00 PM
          </p>
        </div>

      
        <div>
          <p className="mb-2">Shop all</p>
          <p className="mb-2">FAQs</p>
        </div>

       
        <div>
          <p className="mb-2">Cookies club</p>
          <p className="mb-2">Chocolate based</p>
          <p className="mb-2">Fruit & Spice</p>
          <p className="mb-2">Crunchy</p>
        </div>
      </div>

    
      <div className="text-center font-extrabold text-[80px] md:text-[120px] mt-6 tracking-tighter">
        <Image src={FooterImage } alt="footer-image" className="w-full"/>
        
      </div>
     

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm font-bold">
        <div className="flex gap-6">
          <span>© 2025</span>
          <span>SHIPPING & DELIVERY</span>
          <span>PRIVACY POLICY</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>TWITTER (X)</span>
          <span>GITHUB</span>
          <span>LINKEDIN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
