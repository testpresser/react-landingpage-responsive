import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const ContentSplit = () => {
  return (
    <div>
      <Container className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-16 h-auto">
       

        {/* Video Section */}
        <div className="mt-4 lg:mt-0 relative w-full aspect-video bg-body rounded-3xl overflow-hidden">
          {/* optional poster — remove if not needed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/media/FinalVideo-light.jpg"
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover bg-transparent"
          >
            <source src="/media/Droid 2.mp4" type="video/mp4" />
          </video>
        </div>

         {/* Text Column */}
        <div className="flex flex-col py-8">
          <Title>
            VEX-09 Specter
          </Title>
          <Paragraph className="w-full max-w-9/10">
            Built for precision, discretion, and total autonomy. The Ghostline droid integrates hyper-neural targeting, adaptive motion cloaking, and real-time behavioural synthesis. Whether it’s infiltration, neutralisation, or data retrieval—Ghostline executes with zero latency and zero witnesses. Humanity optional.
          </Paragraph>
        </div>
      </Container>
    </div>
  );
};
