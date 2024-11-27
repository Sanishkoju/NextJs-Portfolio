import Link from "next/link";
import NavLink from "./NavLink";


const navLinks = [
  {
    title: "About",
    path: "//#about",
  },
  {
    title: "Projects",
    path: "//#project",
  },
  {
    title: "Contact",
    path: "//#contact",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
];


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