import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-500">
      <div className="flex items-center justify-center sm:py-10 py-6 px-6 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-between sm:w-3/4 md:w-[60%] w-full gap-3 sm:gap-0">
          <div>
            <img
              className="w-24 rounded-lg"
              src={LOGO_URL}
              alt="Website Logo"
            />
            <h3 className="mt-2 text-gray-200 text-lg">
              © {currentYear} Food Express Limited
            </h3>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-2">Company</h4>
            <Link to="/" className="text-gray-200 block">
              Home
            </Link>
            <Link to="/cart" className="text-gray-200 ">
              Cart
            </Link>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-2">
              Contact Us
            </h4>
            <Link to="/contact" className="text-gray-200 ">
              Help & Support
            </Link>
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold mb-2">
              Social Links
            </h4>
            <div>
              <a
                href="https://www.linkedin.com/in/aayushyadavz/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin fa-lg text-white "></i>
              </a>
              <a
                href="https://www.instagram.com/aayushyadavz/?next=%2F"
                target="_blank"
              >
                <i class="fa-brands fa-instagram mx-3 fa-lg text-white"></i>
              </a>
              <a href="https://github.com/aayushyadavz" target="_blank">
                <i class="fa-brands fa-github fa-lg text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3 text-gray-200">
        <p>Made with ❤ by Ayush Yadav</p>
      </div>
    </div>
  );
};

export default Footer;
