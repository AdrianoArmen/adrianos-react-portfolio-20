import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SkillsSectionItem from './SkillsSectionItem';

const SkillsItemsStyles = styled.div`
  padding: 10rem 0;
  .skills__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .skills__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function SkillsSection() {
  return (
    <SkillsItemsStyles>
      <div className="container">
        <SectionTitle subheading="My developing" heading="Skills" />
        <div className="skills__allItems">
          <SkillsSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="UI/UX design for custom needs, creating original components to fit the project's needs"
          />
          <SkillsSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="Full-stack web development technologies understanding and strategies to approach future challenges."
          />
          <SkillsSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Development"
            desc="Mobile-first development approach. MERN-stack knowledge to create device versatile projects. "
          />
        </div>
      </div>
    </SkillsItemsStyles>
  );
}
