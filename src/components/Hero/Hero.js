import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Industry 4.0 Engineering
      </SectionTitle>
      <SectionText>
        Using software and technology to develop client-driven applications with precision engineered functionality and visually aesthetic solutions
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/kseoul'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;