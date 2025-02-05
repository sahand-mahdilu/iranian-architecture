import "./Footer.css"
import FooterBox from "./FooterComponent/FooterBox"
export default function Footer() {
  return (
    <div className="footer_container">
        <div className="footer_text_container">
            <p className="footer_first_Text">Ways of communication</p>
            <p className="footer_cesond_Text">Ways to contact the rare Iranian architecture</p>
        </div>
        <div className="footer_box_container">
        <FooterBox/>
        <FooterBox/>
        <FooterBox/>

        </div>

        <div className="footer_info">
            
                <input  type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <button className="send">Send</button>            

        </div>


    </div>
  )
}
