import Footer from "../Footer/Footer";
import "./Main.css";
import Details from "./MainSectionComponents/Details";
export default function Main() {
  return (
    <div>
    <div className="main_container container">
      <div className="main_wrapper">
        <div className="img_comtainer">
          <img
            className="tower_img"
            decoding="async"
            src="https://ghaleblake.ir/wp_themes/nader/wp-content/uploads/elementor/thumbs/sebastiano-corti-ZAN1CYe6_Ag-unsplash-scaled-1-r0rci6w4ndgqu56q3v3m2b57u5rrscjf6vvunwsdrg.jpg"
            title="sebastiano-corti-ZAN1CYe6_Ag-unsplash"
            alt="sebastiano-corti-ZAN1CYe6_Ag-unsplash"
            loading="lazy"
          ></img>
        </div>

        <div className="left_content">
          <p className="company">Company</p>
          <p className="company_title">Nader Iranian architectural design</p>
          <p className="copmpany_description">
            An architect is someone who plans, designs and supervises the
            construction of a building or structure. The meaning of architecture
            is to provide services related to the design of buildings and the
            interior and surrounding spaces where people live or use them. The
            architect is the final supervisor and coordinator of all the plans
            of a building, including architectural and design plans – structural
            calculation plans and facility plans.
          </p>

          <div className="bottom_content">
            <div className="aboutUS_container">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="b_icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
              <span className="About">About Us</span>
            </div>
            <div className="catalog_container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
               className="b_icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              <span className="About">Download catalog</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ditailes">


            <Details/>
            <Details/>
            <Details/>
         
      </div>


    </div>
          <div className="tower_design">

          <div className="tower_image_container">
          <img className="towe_image" src="https://ghaleblake.ir/wp_themes/nader/wp-content/uploads/2022/08/esteban-chinchilla-CAv9fX_pJfc-unsplash-scaled-1-683x1024.jpg
            " alt="" />
          </div>
    
            <div className="design_container container">
            <p className="Unique_design" >Unique commercial tower design</p>
            <p className="Unique_description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! Porro.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! PorroLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! PorroLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! PorroLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! Porro</p>
    
    
            </div>
    
    
    
    
    
          </div>


            {/* sad */}
    
            <div className=" second_tower_design">



  <div className="Second_design_container container">
  <p className="Second_Unique_design" >Unique commercial tower design</p>
  <p className="Second_Unique_description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! Porro.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! PorroLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! PorroLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! PorroLorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut voluptates expedita nesciunt minus harum corporis molestias exercitationem ea! Porro</p>


  </div>

  <div className="tower_image_container">
<img className="towe_image" src="https://ghaleblake.ir/wp_themes/nader/wp-content/uploads/2022/08/esteban-chinchilla-CAv9fX_pJfc-unsplash-scaled-1-683x1024.jpg
  " alt="" />
</div>





</div>  



         


          </div>    




  );
}
