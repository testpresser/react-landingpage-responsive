import { Container } from "../shared/container";

export const TwoDroids = () => {
  return (
    <div>
      <Container className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-auto">
        <div>
          <img src="/media/R1.png" alt="AI demo" loading="lazy" className="rounded-3xl object-cover " />
        </div>
        <div>
          <img src="/media/R1.png" alt="AI demo" loading="lazy" className="rounded-3xl object-cover " />
        </div>
      </Container>
    </div>
  );
};