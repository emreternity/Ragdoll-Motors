import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function Foot() {
  return (
    <Footer container className="bghead">
      <div className=" w-full text-center mt-10 ">
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
        <FooterDivider />
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
