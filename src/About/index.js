import ImageCarousel from "../Common/Carousel/index";
import { WatchCarouselImages } from "../Common/Carousel/data";
import WatchContent from "./components/Content/index";
import ContactBanner from "../Common/ContactBanner/index";
import { WatchPageContainer } from "./style";
import WatchBrands from "./components/WatchBrands/index";
export default function About() {
  return (
    <WatchPageContainer>
      <ImageCarousel images={WatchCarouselImages} />
      <WatchContent />
      <WatchBrands />
      <ContactBanner />
    </WatchPageContainer>
  );
}
