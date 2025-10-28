import { Container } from "../shared/container";
import logo from "../../assets/logo.svg";
import Theme from "../../assets/theme.svg";
import { NavItem } from "../shared/Navitems";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
    {href: "#", text: "Home"},
    {href: "#services", text: "Services"},
    {href: "#about-us", text: "About Us"},
    {href: "#pricing", text: "Pricing"},
];

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();

    return <header className="absolute inset-x-0 z-50 py-6">
        <Container>
            <nav className="w-full flex justify-between gap-6 relative">   
                {/* Logo */}
                <div className="min-width-max inline-flex relative">
                    <a href="/" className="relative flex items-center gap-3">
                        <img src={logo} alt="Edge Ai logo" className="w-10 h-10"/>
                        <div className="inline-flex text-lg font-semibold text-heading-1">
                            EdgeAI
                        </div>
                    </a> 
                </div>

                <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                                absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x 
                                border-x-box-border lg:border-x-0 lg:height-auto">

                </div>
                <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 
                    flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full 
                    lg:justify-center lg:items-center overflow-hidden">
                    {navItems.map((item, key) => (
                    <NavItem href={item.href} text={item.text} key={key} />
                    ))}
                </ul>
                <div className="lg:min-w-max flex items-center  sm:w-max w-full pb-6 lg:pb-0 
                border-b border-box-border lg:border-0 px-6 lg:px-0">
                    <BtnLink text="Get started" href="#cta" className=""/>
                </div>
                <div className="min-w-max flex item-center gap-x-3">
                    <button onClick={toggleTheme} className="outline-hidden flex relative text-heading-2 rounded-full p-1 border border-box-border cursor-pointer">
                        {
                            theme === 'dark' ? (
                               <img src={Theme} className="w-10 h-10 invert"/> 
                            ) : (
                                <img src={Theme} className="w-10 h-10"/>
                            )
                        }

                    </button>
                </div>
            </nav>
        </Container>
    </header>;
}