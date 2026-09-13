import logo from "../assets/logo-devstack.png";

const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const SOCIALS = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
              {SOCIALS.map((social) => (
                <a key={social} href={`#${social.toLowerCase()}`} className="focus-ring hover:text-slate-900">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="focus-ring text-sm text-slate-500 hover:text-slate-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="focus-ring hover:text-slate-700">
              Privacy
            </a>
            <a href="#terms" className="focus-ring hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
