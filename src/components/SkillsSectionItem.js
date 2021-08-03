import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .skillsItem__icon {
    svg {
      width: 3rem;
    }
  }
  .skillsItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function SkillsSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="skillsItem">
      <div className="skillsItem__icon">{icon}</div>
      <div className="skillsItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
