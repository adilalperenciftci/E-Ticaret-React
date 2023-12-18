import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
   <>
      <PageHero title="Hakkımızda" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Bizim Hikayemiz</h2>
            <div className="underline"></div>
          </div>
          <p>
          Biz küresel mobilya endüstrisinde uzmanlaşmış bir şirketiz. Bizim
          tasarımlar en yüksek kalitede, en ucuz fiyatlarla ve en yeni tasarımlardan oluşur
          </p>
          <br />
          <div className="title">
            <h2>İletişim</h2>
            <div className="underline"></div>
          </div>
          <p>Aşağıdaki yollarla bizimle iletişime geçebilirsiniz E-mail: <b>adilalperenciftci@gmail.com</b><br />

          Aşağıdaki numaradan herhangi bir ürün hakkında bilgi alabilirsiniz.: <br />
<b>(+90) (5555555555)</b></p>
        </article>
      </Wrapper>
      </>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
