import NavBar from "./NavBar/NavBar"
import "./Header.css"
import Info from "./HeaderComponent/Info"
export default function Header() {
  return (

    <div>

       <NavBar/> 

    <div className=" header_container">

   <div className="container  herder_wrapper">
   <div className="title_container">
    <p className="Header_title">NADER IRANIAN ARCHITECTURE COMPANY</p>
    </div>

    
   </div>
   <div className="header_info ">

        <div className="fist_box">
            <p className="years">10+</p>
            <span className="tears_text"> YEARS OF EXPERIENCE</span>
        </div>
        <Info/>
        <Info/>
        <Info/>
        <Info/>
        
    </div>

    </div>


    </div>
  )
}


