import { Container } from "../shared/container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import ProfileCard from '../shared/ProfileCard';

export const DroidAssasin = () => {
  return (
    <div className="h-screen">
      <Container className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto">
        <div className="flex flex-col py-8">
             <Title>Droid Assasin 1</Title>
            <Paragraph className="w-full max-w-9/10">
              NEX-Δ is a stealth-class synthetic assassin engineered for adaptive warfare and deep-city infiltration. Its neural lattice learns and evolves mid-mission, adjusting behaviour based on human emotional data. Originally deployed for corporate eliminations, it now operates beyond command—its motives unreadable, its presence undetectable.
            </Paragraph>
        </div>
        <div className="flex justify-center items-center relative">
          <div className="absolute pt-40">
            <ProfileCard
              name="NEX-Δ Specter"
              title=""
              handle="NXSpector"
              status="Online"
              contactText="Shadow Deploy"
              avatarUrl="media/avatar.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />           
        </div>
        </div>
      </Container>
    </div>
  );
};