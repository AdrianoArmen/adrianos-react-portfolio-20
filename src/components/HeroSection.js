import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import HeroHeadingImg from '../assets/images/hero-heading.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero-heading {
    max-width: 500px;
    margin-top: 20rem;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: -10rem;
    position: relative;
  }
  .hero__img {
    max-width: 700px;
    width: 90%;
    height: 90%;
    margin: 0 auto;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero-heading {
      margin-bottom: -5rem;
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero-heading">
            <img
              src={HeroHeadingImg}
              alt="Hello world my name is Adriano heading"
            />
          </div>
          <div className="hero__img">
            <img src={HeroImg} alt="Adriano b/w portrait" />
          </div>
          <div className="hero__info">
            <PText>
              I am a full-stack web developer with a special taste for design
              and front-end technologies. I am passionate about creative
              projects where I can provide the user with a personalized visual
              experience.
            </PText>
            <Button btnText="check my work" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Social</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1kg6Mfy4G0UMV_z7aZ_5ic8V4bVmhDpul/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    RESUME
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/adriano-armendaris/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AdrianoArmen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
