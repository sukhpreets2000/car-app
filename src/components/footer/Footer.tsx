import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-darkblue py-[100px] p-3">
      <div className="container mx-auto">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-[40px]">
          <div className="flex items-center text-yellow sm: mt-2">
            <h1 className="text-3xl">Car Care</h1>
          </div>
          <div className="flex items-center gap-5 sm: mt-2">
            <div className="bg-yellow py-[20px] px-[22px] rounded-full cursor-pointer hover:bg-darkblue duration-500">
              <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />
            </div>
            <div>
              <h3 className="text-white">Phone:</h3>
              <p className="text-grey">12 (845) 3342 78 92</p>
            </div>
          </div>
          <div className="flex items-center gap-5 sm: mt-2">
            <div className="bg-yellow py-[20px] px-[25px] rounded-full cursor-pointer hover:bg-darkblue duration-500">
              <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-white" />
            </div>
            <div>
              <h3 className="text-white">Location:</h3>
              <p className="text-grey">221 Beker St, Los Angeles, USA</p>
            </div>
          </div>
          <div className="flex items-center gap-5 sm: mt-2">
            <div className="bg-yellow py-[20px] px-[22px] rounded-full cursor-pointer hover:bg-darkblue duration-500">
              <FontAwesomeIcon icon={faClock} size="lg" className="text-white sm: text-1xl" />
            </div>
            <div>
              <h3 className="text-white">Opening hours:</h3>
              <p className="text-grey">Mon. - Sat. 9:00AM - 10:00PM</p>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-lightgrey" />
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-[40px]">
          <div>
            <h3 className="text-white text-2xl">About Us</h3>
            <p className="text-grey mt-2 text-[14px]">A Cars Online we consider ourselves a part of the big
              automobile community. We service all makes and models and take pride in every repair.</p>
            <div className="mt-6 flex gap-2">
              <a href="#" className="bg-white py-[10px] px-[18px] rounded-full cursor-pointer hover:bg-yellow duration-500">
                <FontAwesomeIcon icon={faLocationDot} size="sm" className="text-black" />
              </a>
              <a href="#" className="bg-white py-[10px] px-[18px] rounded-full cursor-pointer hover:bg-yellow duration-500">
                <FontAwesomeIcon icon={faLocationDot} size="sm" className="text-black" />
              </a>
              <a href="#" className="bg-white py-[10px] px-[18px] rounded-full cursor-pointer hover:bg-yellow duration-500">
                <FontAwesomeIcon icon={faLocationDot} size="sm" className="text-black" />
              </a>
              <a href="#" className="bg-white py-[10px] px-[18px] rounded-full cursor-pointer hover:bg-yellow duration-500">
                <FontAwesomeIcon icon={faLocationDot} size="sm" className="text-black" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-2xl">Quick Links</h3>
            <div className="flex flex-col text-grey mt-2">
              <a href="#" className="hover:text-yellow duration-500">
                Home
              </a>
              <a href="#" className="hover:text-yellow duration-500">
                About
              </a>
              <a href="#" className="hover:text-yellow duration-500">
                Services
              </a>
              <a href="#" className="hover:text-yellow duration-500">
                Team
              </a>
              <a href="#" className="hover:text-yellow duration-500">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-2xl">Our Services</h3>
            {/* <ul>
              <li>Engine Repair</li>
              <li>Car Windshield Maintenance</li>
              <li>Oil Filter</li>
              <li>Engine Coolant</li>
              <li>Air Conditioner Service</li>
              <li>Tyre Replacement</li>
            </ul> */}
          </div>
          <div>04</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer