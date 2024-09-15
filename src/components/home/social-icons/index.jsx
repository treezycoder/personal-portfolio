import { FaInstagram, FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";

export default function SocialIconsHome({ theme = "dark", isHome = true }) {
  const [iconAnimating, setIconAnimating] = useState(true);
  const isDarkTheme = theme === "dark";

  // Define colors based on the theme
  const iconColor = isDarkTheme
    ? "text-gray-300 dark:text-gray-600"
    : "text-gray-600";
  const hoverColor = isDarkTheme
    ? "hover:text-gray-200 "
    : "hover:text-gray-400";

  // Array of social icons
  const socialLinks = [
    {
      href: "https://www.instagram.com/treezy_muntini?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr",
      title: "Instagram",
      ariaLabel: "Instagram",
      icon: FaInstagram,
    },
    {
      href: "https://www.linkedin.com/in/tresor-ngahame-0004a5287",
      title: "LinkedIn",
      ariaLabel: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/treezycoder",
      title: "Github",
      ariaLabel: "Github",
      icon: FaGithub,
    },
    {
      href: "https://join.skype.com/invite/NCSmqwtf73CH",
      title: "Skype",
      ariaLabel: "Skype",
      icon: FaSkype,
    },
  ];

  return (
    <div
      onMouseEnter={() => setIconAnimating(false)}
      // onMouseLeave={() => setIconAnimating(true)}
      className="social-icons-container flex justify-center items-center gap-4 lg:gap-6"
    >
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            style={{
              animation: `${
                iconAnimating ? "animate-icons 2s ease-in-out infinite" : ""
              }`,
              animationDelay: `${iconAnimating ? `calc(0.1s * ${index})` : ""}`,
              animationPlayState: "running",
            }}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={link.ariaLabel}
            className={`${iconColor} ${
              !isHome
                ? hoverColor
                : "hover:text-gray-900 dark:hover:text-gray-300"
            } ${
              isHome ? iconColor : "text-gray-700 dark:text-gray-500"
            } transition-colors`}
            title={link.title}
          >
            <IconComponent className={`${isHome ? "text-3xl" : "text-2xl"}`} />
          </a>
        );
      })}
    </div>
  );
}
