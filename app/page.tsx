
import CookieVideo from "../components/CookiesVideo"

import FreshlyBaked from "@/components/FreshlyBaked"

import CookiesBox from "@/components/CookiesBox"
import { CookieCategories } from "@/components/CookieCategories"
import CookieIngre from "@/components/CookieIngre"
import CompanyInfo from "@/components/CompanyInfo"

import Move from "@/components/Move";


const page = () => {
  return (
    <div>
      
      <CookieVideo />
      <FreshlyBaked />
      <CookiesBox />
      <CompanyInfo />
      <Move/>
      <CookieCategories />
      <CookieIngre />
      
     
    </div>
  );
}

export default page
