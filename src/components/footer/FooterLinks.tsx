function FooterLinks() {
  return (
    <section className="hidden flex-1 md:grid grid-cols-3 gap-10 text-[12px]">
      <div className="">
        <h1 className="font-jakarta text-primary font-bold">Product</h1>
        <ul className="text-muted flex flex-col gap-2 pt-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-jakarta font-bold text-primary">Company</h1>
        <ul className="text-muted flex flex-col gap-2 pt-5">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="font-jakarta font-bold text-primary">Legal</h1>
        <ul className="text-muted flex flex-col gap-1 pt-5">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterLinks;
