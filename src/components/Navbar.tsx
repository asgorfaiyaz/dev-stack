import Logo from "../assets/logo-text.png";
import Menu from "../assets/hamburger.png";

function Navbar() {
  return (
    <header className="text-[#475569] px-2 text-[14px] font-jakarta font-medium xl:text-[16px]  h-20 border-[1.5px] border-[#F1F5F9] sticky z-50 top-0 bg-white">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-between">
          <button className="flex md:hidden">
            <img src={Menu} alt="" />
          </button>
          <a className="" href="#">
            <img className="" src={Logo} alt="logo" />
          </a>

          <ul className="hidden md:flex justify-center items-center gap-5 lg:gap-8 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="flex sm:gap-5">
            <button className="btn btn-sm sm:btn-md btn-ghost text-[9px] sm:text-[14px]">
              Sign in
            </button>
            <button className="btn btn-sm sm:btn-md btn-primary bg-primary text-[9px] sm:text-[14px] rounded-4xl text-white font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
