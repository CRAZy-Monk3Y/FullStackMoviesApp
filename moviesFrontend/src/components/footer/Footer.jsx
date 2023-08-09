import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialHandles = [
    {
      title: "facebook",
      icon: <CiFacebook size={30} />,
      url: "https://www.facebook.com/",
    },
    {
      title: "twitter",
      icon: <AiFillTwitterCircle size={30} />,
      url: "https://www.x.com/",
    },
    {
      title: "linkedin",
      icon: <FaLinkedinIn size={30} />,
      url: "https://www.linkedin.com/",
    },
    {
      title: "github",
      icon: <AiFillGithub size={30} />,
      url: "https://www.github.com/",
    },
  ];

  return (
    <div className="p-2 footer">
      <div className="footer_socialHandles">
        {socialHandles.map((socialHandle, index) => (
          <a
            key={index}
            href={socialHandle.url}
            target="_blank"
            className={index !== 0 ? "social_icons" : ""}
          >
            {socialHandle.icon}
          </a>
        ))}
      </div>
      <div className="footer_description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          dolores? Animi aliquam, quia et doloribus odio architecto veniam qui
          vitae officiis nam error vel minima voluptatem hic velit ullam
          necessitatibus a eaque rerum eveniet cumque quibusdam ipsa eos omnis.
          Cumque commodi sequi ipsum asperiores beatae cum neque accusantium
          maxime corrupti.
        </p>
      </div>

      <div className="footer_copyRight">
        © 2023 Made with 💗 by Tathagata Chakraborty
      </div>
    </div>
  );
};

export default Footer;
