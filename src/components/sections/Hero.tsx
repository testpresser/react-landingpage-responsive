import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { Numbers } from "./Numbers";

export const Hero = () => {
    return <section className="relative pt-32 lg:pt-36">
        {""}
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                                skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-10 z-0
                                blur-xl opacity-60 lg:opacity-95 lg:block hidden"
                                >

                </span>
                <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80">
                </span>
            </div>
            <div className="relative flex flex-col items-center text-center 
                            lg:text-left lg:py-8 lg:items-start lg:max-w-none 
                            max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5-xl xl:text-6xl font-bold" >Empower Your Bussiness <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">with AI</span></h1>
            <Paragraph className="mt-8">
                EdgeAI is a cutting-edge AI SaaS platform designed to help businesses automate workflows, uncover insights, and scale smarter. With powerful machine learning models accessible through an intuitive dashboard, EdgeAI empowers teams to build, deploy, and monitor AI solutions—no coding required. From predictive analytics to real-time decision-making, EdgeAI brings enterprise-grade intelligence to your fingertips.
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

            <div className="flex flex-1 lg:w-1/2 lg:-auto relative lg:max-w-none lg:mx-0 max-w-3xl mx-auto">
                <img src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?aut0=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hero image"
                width={2350}
                height={2359}
                className="lg:absolute lg:w-full lg:height-full rounded-3xl object-cover lg:max-h-none max-h-96"
                />

            </div>
        </Container>
        <Numbers/>
    </section>;
}