import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="Contacts"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Fell Free To Reach Out!</h3>
      </div>
      <ul className="text-sm md:text-2xl  m-5">
        <li className="flex gap-2 items-center m-5">
             <MdOutlineEmail size={20} /> 
             anishkhanpro2@gmail.com
        </li>
        <li className="flex gap-2 items-center m-5">
             <CiLinkedin  />
             Linkden.com
        </li>
        <li className="flex gap-2 items-center m-5">
             <FaGithub  />
             Anish8955.com 
         </li>
      </ul>
    </div>
  );
};
export default Footer;
