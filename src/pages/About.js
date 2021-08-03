import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Adriano Armendaris</span>
              </p>
              <h2 className="about__heading">A Full-stack Web Developer</h2>
              <div className="about__info">
                <PText>
                  Full-stack web developer with extensive experience in sales
                  and customer service who leverages his multimedia production
                  background to build a captivating user experience that meets
                  the desired goal of the product. Certificate from Tecnológico
                  de Monterrey in full-stack web technologies, including
                  JavaScript, CSS, HTML, and my favorite React.
                  <br /> <br />
                  Known as an innovative problem solver passionate about
                  developing healthy business relationships into successful
                  projects both online and offline wise. Passionate about
                  approaching tech challenges through a human perspective
                  focusing on interpersonal relationships as the fundamental
                  milestone of every business.
                  <br />
                  <br />
                  Aditional to my tech skills I also have a deep connection with
                  arts in general. I am an amateur songwriter and a graphic
                  designer. My experience in various lines of business makes me
                  a valuable member of any organization that focuses on
                  fostering collaborative work to develop tech products and make
                  them profitable for all parties.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Coding"
                items={['Tenonógico de Monterrey']}
              />
              <AboutInfoItem title="Bootcamp" items={['Full-stack Web Dev']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Tech</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MongoDB']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Canva', 'Figma']}
              />
              <AboutInfoItem
                title="Music Prod"
                items={['Logic Pro', 'Pro Tools', 'Cubase']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
