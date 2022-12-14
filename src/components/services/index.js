import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/image1.png"
import Icon2 from "../../images/image2.png"
import Icon3 from "../../images/image3.png"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Donec quis</ServicesH2>
          <ServicesP>
            Fusce fringilla est ut velit finibus ultricies. Pellentesque id
            eleifend erat.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Maecenas ac posuere</ServicesH2>
          <ServicesP>
            Donec nec maximus sapien. Aenean efficitur urna sed felis varius, ut
            convallis odio tempor. Sed volutpat nulla aliquam egestas cursus.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Duis et lectus</ServicesH2>
          <ServicesP>
            Aenean in egestas lectus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.s
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
