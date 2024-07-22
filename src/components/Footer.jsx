import Signed from "../assets/signed.png";
import Vector from "../assets/Vector.png";
import { Mail, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start flex-wrap bg-footer text-white p-4">
      <div className="links-section mb-8">
        <div className="footer-section mb-8 px-6">
          <ul className="space-y-4">
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section mb-4 flex flex-col lg:flex-row items-center justify-center px-6">
          <div className="contact-info flex items-center mb-2 lg:mr-4">
            <Mail />
            <p className="ml-2">claims.ariz@gmail.com</p>
          </div>
          <div className="contact-info flex items-center">
            <Smartphone />
            <p className="ml-2">+2348106144760</p>
          </div>
        </div>
        <div className="footer-section mb-8">
          <div className="copyright px-6">
            <p>© All rights reserved ARIZ 2024</p>
          </div>
        </div>
        <div className="footer-section mb-8">
        </div>
      </div>
      <div className="contact-section mb-8">
        <div className="footer-section mb-4">
          <div className="contact-info flex items-center mb-2">
            <ul className="space-y-4">
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
           </div>
        </div>
      </div>
      <div className="rights-section mb-8">
        <ul className="space-y-4">
          <li>
            <a href="#">Legal Information</a>
          </li>
          <li>
            <a href="#">Customer Support</a>
          </li>
        </ul>
      </div>
      <div className="social-media-icons">
        <img src={Signed} alt="Signed Image" className="mr-4 " />
        <img src={Vector} alt="Social Media Icons" />
      </div>
    </footer>
  );
};

export default Footer;
