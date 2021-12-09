import ImageCarousel from "../Common/Carousel/index";
import { WatchCarouselImages } from "../Common/Carousel/data";
import WatchContent from "./components/Content/index";
import WatchContactLink from "./components/ContactLink/index";
import { WatchPageContainer } from "./style";
export default function Watches() {
  return (
    <WatchPageContainer>
      <ImageCarousel images={WatchCarouselImages} />
      <WatchContent />
      <WatchContactLink />
    </WatchPageContainer>
  );
}
