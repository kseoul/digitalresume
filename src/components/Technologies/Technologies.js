import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Utilize a range of modern web technologies and libraries to develop seamless solutions from software development to data analysis.<br/><br/>
        Further focus in 4.0 technologies and communication protocols such as OPC-UA and MQTT: edge-driven, report by exception, and lightweight solutions.
      </SectionText>
      <List>
      <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, HTML, CSS, Tailwind<br />
              Bootstrap, Crispy forms
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Backend</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node, Django, and Databases <br />
              PostgreSQL, MySQL, MSSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem"/>
          <ListContainer>
            <ListTitle>Programming</ListTitle>
            <ListParagraph>
              Experience with <br />
              Javascript, Python, Java,<br />
              Visual Basic, Apex, Lightning Components, MVC, MVT
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
