import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

export default function Projects() {
  const [projectsData] = useState(ProjectsInfo);

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle heading="Projects" subheading="My recent work" />
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
