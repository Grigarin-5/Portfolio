'use client';

import CardNav from './react-bits/CardNav';

const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", href: "#about", ariaLabel: "About Me" },
        { label: "Skills", href: "#skills", ariaLabel: "Skills" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#projects", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", href: "#contact", ariaLabel: "Email me" },
        { label: "LinkedIn", href: "#linkedin", ariaLabel: "LinkedIn" },
        { label: "GitHub", href: "#github", ariaLabel: "GitHub" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/next.svg"
      logoAlt="Portfolio Logo"
      items={items}
      baseColor="transparent"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Header;