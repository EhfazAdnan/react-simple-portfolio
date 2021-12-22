import React from 'react';
import { DiFirebase, DiMysql, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </SectionText>
    <List>

      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, Laravel, PDO, OOP
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMysql size="3rem"/>
        <ListContainer>
          <ListTitle>DBMS</ListTitle>
          <ListParagraph>
            Experience with <br />
            MYSQL, NOSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
