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
    <Footer container className="bg-orange-100">
      <div className=" w-full text-center mt-10">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="#"
            src="../images/logoblack.svg"
            alt="Ragdoll Logo"
            name="Ragdoll Motors"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Ragdoll Motors" year={2024} />
      </div>
    </Footer>
  );
}
