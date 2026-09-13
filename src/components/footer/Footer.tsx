import Logo from "../../assets/logo-text.png";
import FooterLinks from "./FooterLinks";
function Footer() {
  return (
    <footer className="pb-10 px-2">
      <div className="flex justify-between gap-10 pb-10 container mx-auto">
        <div className="flex flex-col gap-3 items-center md:items-start w-full md:max-w-90 pb-5">
          <img width={150} height={40} src={Logo} alt="Logo" />
          <p className="text-[#94A3B8] text-[12px] text-center md:text-left">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-5 md:pt-3 text-[12px] text-[#4B5563] list-disc md:list-none">
            <li className="list-none">
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <FooterLinks />
      </div>
      <div className="text-[11px] text-[#94A3B8] border-t-2 border-t-[#F3F4F6] pt-4 md:pt-10">
        <div className="container mx-auto flex justify-between items-center ">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex gap-2">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
