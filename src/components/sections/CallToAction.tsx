import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";

export const CTA = () => {
    return <section className="pb-20 relative">
        {""}
        <Container> 
            <div className="realtive rounded-2xl ">
                 <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5-xl font-bold text-heading-1">Access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Ghostline</span> Network</h1>
                    <Paragraph className="pt-10">
                        Over 5,000 operators, syndicates, and private agencies now rely on Ghostline’s synthetic assassins and cognitive systems. Enter the grid and unlock tools built for infiltration, prediction, and silent execution.                    </Paragraph>
                    <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                        <Button>Get in touch</Button>
                    </div>
                </div>       
            </div>

        </Container>
    </section>;
}