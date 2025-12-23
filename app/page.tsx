import Navbar from "../components/Navbar"
import CookieVideo from "../components/CookiesVideo"
import Footer from "@/components/Footer"
import FreshlyBaked from "@/components/FreshlyBaked"

import CookiesBox from "@/components/CookiesBox"
import { CookieCategories } from "@/components/CookieCategories"
import CookieIngre from "@/components/CookieIngre"
import CompanyInfo from "@/components/CompanyInfo"
import Contact from "@/components/Contect"


const page = () => {
  return (
    <div className="bg-[#fff7e8]">
      <Navbar />
      <CookieVideo />
      <FreshlyBaked />
      <CookiesBox />
      <CompanyInfo />

      <CookieCategories />
      <CookieIngre />
      <Contact/>
      <Footer />
    </div>
  );
}

export default page
