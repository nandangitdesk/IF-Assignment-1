import React from 'react';
import { RiInstagramLine, RiTwitterFill, RiFacebookFill } from 'react-icons/ri';
import Logo from '../assets/assinmentLogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] mt-10 py-10 w-full ">
      <div className=" px-4 py-8 md:px-[104px]">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={Logo} 
              alt="Food Truck Logo" 
              className="md:w-[161px] md:h-[125px] w-[75px] h-[58px]"
            />
          </div>

          {/* Contact Us */}
          <div className='px-6'>
            <h3 className="mb-4 text-base font-bold text-[#0E2368]">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm leading-6 text-[#646874]">
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road,
              </p>
              <p className="text-sm leading-6 text-[#646874]">
                Phartosh Gate near YTM Market, XYZ-343434
              </p>
              <p className="mt-4 text-sm leading-6 text-[#646874]">
                example2020@gmail.com
              </p>
              <p className="text-sm leading-6 mt-6 text-[#646874]">
                (904) 443-0343
              </p>
            </address>
          </div>

          {/* More */}
          <div className='px-6 md:ml-28 '>
            <h3 className="mb-4 text-base font-bold text-[#0E2368]">More</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm leading-6 text-[#646874] hover:text-[#0E2368]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-[#646874] hover:text-[#0E2368]">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-[#646874] hover:text-[#0E2368]">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-[#646874] hover:text-[#0E2368]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:space-y-[90px] space-y-6 md:items-end">
            <div>
              <h3 className="mb-4 text-base font-bold text-[#0E2368]">Social Links</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-[#0E2368] hover:text-[#E23744]" aria-label="Instagram">
                  <RiInstagramLine className="h-[21px] w-[21px]" />
                </a>
                <a href="#" className="text-[#0E2368] hover:text-[#E23744]" aria-label="Twitter">
                  <RiTwitterFill className="h-[21px] w-[21px]" />
                </a>
                <a href="#" className="text-[#0E2368] hover:text-[#E23744]" aria-label="Facebook">
                  <RiFacebookFill className="h-[21px] w-[21px]" />
                </a>
              </div>
            </div>
            <div className="text-center text-sm  text-[#828B9C] md:text-left">
              © 2022 Food Truck Example
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
