import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo3.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const socialIcons = [
  {
    Icon: FaFacebookF,
    link: "https://www.facebook.com/share/1DK43pKtrY/?mibextid=wwXIf",
  },
  { Icon: FaTwitter, link: "" },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/_efinancial?igsh=MWw5MGZmb2plczd6ZA==",
  },
  { Icon: FaLinkedinIn, link: "" },
];
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "#", label: "Services" },
  { href: "/book-appointment", label: "Booking" },
];
const infoLinks = [
  { href: "/faq", label: "FAQ’s" },
  { href: "/contact-us", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];
const contactItems = [
  { id: 1, href: "/", icon: FaPhone, text: "+321-999-5639", size: 16 },
  {
    id: 2,
    href: "/",
    icon: MdEmail,
    text: "support@efinancial.info",
    size: 16,
  },
  {
    id: 3,
    href: "/",
    icon: IoLocationOutline,
    text: (
      <>
        <Link
          href="https://www.google.com/maps/search/?api=1&query=775+S+Kirkman+Rd+Ste+105,+Orlando,+FL+32811"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          775 S Kirkman Rd Ste 105, Orlando, FL 32811
        </Link>
      </>
    ),
    size: 20,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1F18] text-white py-10 mb-">
      <div className="bg-[#28543F] p-10 container mx-auto rounded-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Image
                src={logo}
                alt="Logo"
                width={115}
                height={80}
                className="mr-2"
              />
            </h2>
            <div className="flex space-x-2">
              {socialIcons?.map(({ Icon, link }, i) => (
                <Link
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full cursor-pointer transition duration-200 hover:bg-white hover:text-green-800 inline-flex"
                  style={{ borderColor: "#FFFFFF1C" }}
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <ul className="space-y-2 text-sm">
            {navLinks?.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-gray-400 text-[#EBEBEB] md:text-base  gap-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Section 3 */}
          <ul className="space-y-2 text-sm">
            {infoLinks?.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-gray-400 text-[#EBEBEB] md:text-base  gap-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              {contactItems.map(({ id, href, icon: Icon, text, size }) => (
                <li key={id}>
                  {typeof text === "string" ? (
                    <Link
                      href={href}
                      className="hover:text-gray-400 text-[#EBEBEB] md:text-base gap-2 flex items-center"
                    >
                      <Icon size={size} /> {text}
                    </Link>
                  ) : (
                    <div className="gap-2 flex items-center">
                      <Icon size={size} /> {text}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center md:text-base   text-[#EBEBEB] ">
          &copy; {new Date().getFullYear()} | EFINANCIAL All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
