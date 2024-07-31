import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

import { Link } from "react-router-dom";

export default function FooterFunct() {
  return (
    <Footer container className="bghead static bottom-0">
      <div className=" w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
          <FooterBrand
            className="text-white"
            href="#"
            src="../images/logo.svg"
            alt="Ragdoll Logo"
          />
          <FooterLinkGroup className="!text-white">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterCopyright
          className="text-white"
          href="#"
          by="Ragdoll Motors"
          year={2024}
        />
      </div>
    </Footer>
  );
}
