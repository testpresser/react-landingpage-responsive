import { useState, useEffect, useCallback } from "react";
import { Container } from "../shared/container";
import logo from "../../assets/logo.svg";
import Theme from "../../assets/theme.svg";
import { NavItem } from "../shared/Navitems";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // ESC key close + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, close]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="relative flex items-center justify-between w-full gap-6">
          {/* --- Logo --- */}
          <a href="/" className="inline-flex items-center gap-3 min-w-max">
            <img src={logo} alt="EdgeAI logo" className="w-16 h-16 " />
            <span className="text-lg font-semibold text-heading-1">Ghostline Operatives</span>
          </a>

          {/* --- Right Section (Nav, CTA, Theme, Hamburger) --- */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Hamburger (mobile only) */}
            <button
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-box-border text-heading-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              onClick={() => setOpen((v) => !v)}
              aria-controls="primary-nav"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {/* Hamburger / X icons */}
              <svg
                className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* --- Backdrop (mobile overlay) --- */}
          <button
            onClick={close}
            className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-200
              ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            aria-hidden="true"
            tabIndex={-1}
          />

          {/* --- Collapsible Nav --- */}
          <div
            id="primary-nav"
            className={`
              absolute left-0 top-full w-full bg-body border-x border-b border-box-border
              lg:static lg:w-auto lg:bg-transparent lg:border-0
              transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden lg:overflow-visible
              ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"} lg:max-h-none lg:opacity-100
            `}
          >
            <div className="px-6 py-4 lg:p-0 lg:flex lg:items-center lg:gap-6">
              {/* --- Nav Links --- */}
              <ul className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 text-lg text-heading-2">
                {navItems.map((item, key) => (
                  <NavItem href={item.href} text={item.text} key={key} onClick={close} />
                ))}
              </ul>

              {/* --- CTA Button --- */}
              <div className="mt-4 lg:mt-0 lg:ml-4 flex items-center gap-3">
                <BtnLink text="Get started" href="#cta" className="" />

                {/* --- Theme Toggle (moved here) --- */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center rounded-full p-2 lg:p-3 border border-box-border text-heading-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-label="Toggle theme"
                >
                  <img
                    src={Theme}
                    className={`w-8 h-8 lg:w-10 lg:h-10 ${theme === "dark" ? "invert" : ""}`}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
