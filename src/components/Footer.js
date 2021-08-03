import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import FooterImg from '../assets/images/footer-logo.png';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <img
            className="footer-img"
            src={FooterImg}
            alt="React Adriano logo"
          />
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Sections"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+5618096296',
                path: 'tel:+525618096296',
              },
              {
                title: 'adriano.armendaris@gmail.com',
                path: 'mailto:adriano.armendaris@gmail.com',
              },
              {
                title: 'Mexico City',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Let's connect"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/adriano-armendaris/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/AdrianoArmen',
              },
              {
                title: 'Resume',
                path:
                  'https://drive.google.com/file/d/1kg6Mfy4G0UMV_z7aZ_5ic8V4bVmhDpul/view?usp=sharing',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Adriano Armendaris | Designed By </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
