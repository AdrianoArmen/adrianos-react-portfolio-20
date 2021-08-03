import React from 'react';
import HeroHeadingImg from '../assets/images/hero-heading.png';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';

export default function HeroSection() {
  return (
    <div>
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
            I am a full-stack web developer with a special taste for design and
            front-end technologies. I am passionate about creative projects
            where I can provide the user with a personalized visual experience.
          </PText>
          <Button btnText="check my work" btnLink="/projects" />
        </div>
      </div>
    </div>
  );
}
