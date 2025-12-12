import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { Numbers } from "./Numbers";

export const Hero = () => {
    return <section className="relative pt-32 lg:pt-36">
        {""}
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                
                <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80">
                </span>
            </div>
            <div className="relative flex flex-col items-center text-center 
                            lg:text-left lg:py-8 lg:items-start lg:max-w-none 
                            max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5-xl xl:text-6xl font-bold">Ghostline<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">Synthetic Assets</span></h1>
            <Paragraph className="mt-8">
                Ghostline is a covert intelligence platform built to classify, track, and evaluate next-generation synthetic operatives across the urban grid. Through a secure neural-scan interface, users can access detailed behaviour models, operational histories, and threat diagnostics on any registered unit. Ghostline enables enforcement teams and corporate networks to analyse, predict, and respond to machine-driven events with precision—bringing deep-system clarity to a world where artificial assets evolve faster than the laws built to contain them.            
            </Paragraph>
                <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                    <div className="flex sm:flex-row flex-col gap-5 w-full">
                        <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 
                        shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:shadow-primary focus-within:bg-body
                        focus-within:border-primary">
                            <span className="min-w-max pr-2 border-r border-box-border">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true"
                                    className="w-10 h-10 gray-900 dark:invert"
                                    >
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 7 12.97 12.7a1.94 1.94 0 0 1-1.94 0L2 7" />
                                </svg>
                            </span>
                            <input type="email" placeholder="johndoe@gmail.com" className="text-heading-3 w-full py-3 outline-none bg-transparent"></input>
                            <Button className="min-w-max text-white">
                                <span className="relative z-[5]">Get started</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
                <Container className="flex flex-col items-center justify-center gap-6">
                    {/* Hero Image */}
                    <div className="w-full relative">
                        <img
                        src="/media/Hero.jpg"
                        alt="Hero image"
                        className="w-full h-auto rounded-3xl object-cover"
                        loading="lazy"
                        />
                    </div>

                    {/* Secondary asset stacked below */}
                    <div className="w-full flex justify-center pt-22">
                        <img
                        src="/media/DN-asset.png"
                        alt="Decorative network asset"
                        className="w-auto h-16 md:h-20 lg:h-24 object-contain"
                        loading="lazy"
                        />
                    </div>
                </Container>

        </Container>
        <Numbers/>
    </section>;
}