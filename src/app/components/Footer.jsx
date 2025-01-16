import Link from "next/link";
import NavLink from "./NavLink";
import { navLinks } from "../NavData";

const Footer = () => {
    return(
        <div className="menu md:w-auto h-auto" id="navbar">
        <ul className="flex p-4 md:flex-row md:space-x-8 mt-0 justify-center border-top">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    )
}
export default Footer;