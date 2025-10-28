import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Service } from "../../utils/services-data";
import { ServiceCard } from "../cards/serviceCard";


export const Services = () => {
    return <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title> Our AI Services </Title>
                <Paragraph>
                    At EdgeAI, we offer a comprehensive suite of AI services designed to meet the diverse needs of modern businesses. Our offerings include:
                </Paragraph>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {Service.map((service, key) =>(
                    <ServiceCard 
                        key={key} 
                        title={service.title} 
                        description={service.description} 
                        icon={service.icon}
                        /> 
                ))}
            </div>
        </Container>
    </section>
}