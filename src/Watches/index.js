import ImageCarousel from "../Common/Carousel/index";
import { WatchCarouselImages } from "../Common/Carousel/data";
import WatchContent from "./components/Content/index";
import ContactBanner from "../Common/ContactBanner/index";
import { WatchPageContainer } from "./style";
export default function Watches() {
  return (
    <WatchPageContainer>
      <ImageCarousel images={WatchCarouselImages} />
      <WatchContent />
      <ContactBanner />
    </WatchPageContainer>
  );
}
