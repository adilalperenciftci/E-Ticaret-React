import React from "react";
import styled from "styled-components";
import { Filters, ProductList, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <>
      <PageHero title="Ürünler" />
      <Wrapper className="page">
        <div className="section-center products ">
          <Filters />
          <div>
      
            <ProductList />
          </div>
        </div>
      </Wrapper>
      </>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
