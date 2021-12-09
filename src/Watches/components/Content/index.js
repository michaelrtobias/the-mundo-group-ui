import { BrandListSection, LeftBrands, RightBrands } from "./style.js";

export default function WatchContent() {
  return (
    <>
      {/*paragraph saying what we do with wathes and how we work with people all over the us in order to get the best watch for the best price. Add something about how we can make your dream timepiece a reality */}
      <h2>Some of the watches we have provided for our clients:</h2>

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
    </>
  );
}
