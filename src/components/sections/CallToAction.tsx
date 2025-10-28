import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";

export const CTA = () => {
    return <section className="pb-20 relative">
        {""}
        <Container> 
            <div className="realtive rounded-2xl ">
                 <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5-xl font-bold text-heading-1">Quick start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">own AI</span> bussiness</h1>
                    <Paragraph className="pt-10">
                        Join over 5,000+ businesses already growing with EdgeAI. Start your free trial today and experience the power of AI-driven solutions tailored to your needs.
                    </Paragraph>
                    <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                        <Button>Get in touch</Button>
                    </div>
                </div>       
            </div>

        </Container>
    </section>;
}