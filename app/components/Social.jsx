import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/manurubik" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/manuelprietodeanton/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@m.p_speedcuber" },
  { icon: <FaTwitter />, path: "https://x.com/ManuRubik" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
