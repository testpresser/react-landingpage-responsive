import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Service } from "../../utils/services-data";
import { ServiceCard } from "../cards/serviceCard";


export const Services = () => {
    return <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title> Operational Divisions </Title>
                <Paragraph>
                    At Ghostline, we provide a specialized network of synthetic operatives and cognitive systems built for precision, adaptability, and zero-trace outcomes. Each asset is engineered to serve distinct operational demands across urban, digital, and off-world environments.                
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