import {
  BrandList,
  BrandsSection,
  LeftBrands,
  RightBrands,
  WatchParagraph,
  WatchSlogan,
  SloganBox,
  WatchDualPictureContainer,
  Image,
} from "./style.js";

import { Paper } from "@mui/material/";

const Pictures = [
  {
    src: "Omega-Speedmaster-3861-2021-Unboxing-WatchGecko10.jpeg",
    alt: "speedmaster",
  },
  {
    src: "rolex-2171961_1280.jpeg",
    alt: "sideways-batman",
  },
];
export default function WatchContent() {
  return (
    <>
      <SloganBox>
        <WatchSlogan>
          Time is valuable, so are you. <br></br>
          Make your time even more valuable.
        </WatchSlogan>
      </SloganBox>
      <WatchParagraph>
        The Mundo Group is dedicated to finding our clients the timepieces they
        desire at the best price possible. After being in the jewlery industry
        for over 20 years we know exactly how to get the watch that you have
        been looking for. Working nationwide, The Mundo Group is commited to
        working with parteners all over the USA to source our products. No
        request is too small or too big. We work around the clock in order to
        find what you are looking for. Weither it be a different color dial on
        that rolex or a diamond bezel to be added to you current timepiece, we
        can make you wishes come true. Give us a call today, or send us a
        message and we can work to find what you need. Let us help you find the
        watch of your dreams!
      </WatchParagraph>

      <WatchDualPictureContainer>
        {Pictures.map((picture) => (
          <Paper elevation={18}>
            <Image
              src={`https://the-mundo-group-media.s3.amazonaws.com/${picture.src}`}
              alt={picture.alt}
            />
          </Paper>
        ))}
      </WatchDualPictureContainer>
      <BrandsSection>
        <h2>Some of the brands that we have provided our clients with:</h2>
        <BrandList>
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
        </BrandList>
      </BrandsSection>
    </>
  );
}
