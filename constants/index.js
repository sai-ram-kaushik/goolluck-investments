import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

export const menuLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "Stock Market Training", path: "/stock-market-training" },
    { label: "Life@Goolluck", path: "/life-at-goolluck" },
];

export const socials = [
    {
        label: "Instagram",
        icon: <BsInstagram size={20} />,
        path: "https://instagram.com/goolluck_investments?igshid=MTk0NTkyODZkYg==",
        key: "Instagram",
    },
    {
        label: "Facebook",
        icon: <FaFacebookF size={20} />,
        path: "https://www.facebook.com/goolluckinvestment/",
        key: "facebook",
    },
    {
        label: "LinkedIn",
        icon: <AiFillLinkedin size={20} />,
        path: "http://www.linkedin.com/in/goolluck-investments-8a5a862a0",
        key: "LinkedIn",
    },
    {
        label: "Twitter",
        icon: <RiTwitterXFill size={20} />,
        path: "https://twitter.com/Goolluck_Invest",
        key: "Twitter",
    },
];
