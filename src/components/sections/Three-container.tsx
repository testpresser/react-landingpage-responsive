import { Container } from "../shared/container";
import ProfileCard from "../shared/ProfileCard";

export const ThreeDroids = () => {
  return (
    <div>
      <Container className="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 min-h-screen">

        {/* Card 1 */}
        <div className="flex justify-center items-center relative p-4 lg:p-0">
          {/* On mobile: static. On large screens: absolute overlay. */}
          <div className="lg:absolute">
            <ProfileCard
              name="VEX-09 Specter"
              title="Edge Division File: Ghostline Series"
              handle="Specter_AI"
              status="Online"
              contactText="Shadow Deploy"
              avatarUrl="/media/avatar.png"
              miniAvatarUrl="/media/avatar.png"
              iconUrl="/media/iconpattern.png"
              grainUrl="/media/grain.webp"
              showUserInfo
              enableTilt
              enableMobileTilt={false}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center items-center relative p-4 lg:p-0">
          <div className="lg:absolute">
            <ProfileCard
              name="NEX-Δ Wraith"
              title="Asset Guardian Subsystem"
              handle="NXWraith"
              status="Standby"
              contactText="Initiate Guard"
              avatarUrl="/media/avatar2.png"
              miniAvatarUrl="/media/avatar2.png"
              iconUrl="/media/iconpattern2.png"
              grainUrl="/media/grain.webp"
              showUserInfo
              enableTilt
              enableMobileTilt={false}
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center relative p-4 lg:p-0">
          <div className="lg:absolute">
            <ProfileCard
              name="ARA-7 Sentinel"
              title="Perimeter AI Recon"
              handle="ARA7"
              status="Online"
              contactText="Deploy"
              avatarUrl="/media/avatar3.png"
              miniAvatarUrl="/media/avatar3.png"
              iconUrl="/media/iconpattern.png"
              grainUrl="/media/grain.webp"
              showUserInfo
              enableTilt
              enableMobileTilt={false}
            />
          </div>
        </div>

      </Container>
    </div>
  );
};
