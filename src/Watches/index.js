import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const WatchPageContainer = styled.div`
  text-align: center;
`;

const BrandListSection = styled.div`
  display: flex;
  justify-content: center;
`;
const LeftBrands = styled.ul``;
const RightBrands = styled.ul``;
const WishListPlug = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Watches() {
  const history = useHistory();

  return (
    <WatchPageContainer>
      <h2>Some of the watches we have provided for our clients:</h2>

      {/* //image carousel */}

      {/* watch brands  */}

      <div>
        <h2>Some of the brands that we have worked with:</h2>
        <BrandListSection>
          <LeftBrands>
            <li>Rolex</li>
            <li>Audemars Piguet</li>
            <li>Baume & Mercier</li>
            <li>Blancpain</li>
            <li>Breitling</li>
            <li>Cartier</li>
            <li>Dubey & Schaldenbrand</li>
            <li>Franck Muller</li>
            <li>Girard-Perregaux</li>
            <li>Frederique Constant</li>
            <li>Hublot</li>
          </LeftBrands>
          <RightBrands>
            <li>IWC</li>
            <li>Jaeger-LeCoultre</li>
            <li>Maurice LeCroix</li>
            <li>Omega</li>
            <li>Panerai</li>
            <li>Patek Philippe</li>
            <li>Piaget</li>
            <li>Tag-Heuer</li>
            <li>Ulysse Nardin</li>
            <li>Vacheron Constantin</li>
          </RightBrands>
        </BrandListSection>
      </div>
      <WishListPlug>
        <h3>
          Be sure to fill out our wishlist here, so we can find you your next
          timepiece
        </h3>
        <button
          onClick={() => {
            history.push("/contact");
          }}
        >
          Fill Out Wish List
        </button>
      </WishListPlug>
    </WatchPageContainer>
  );
}
