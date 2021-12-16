import ImageCarousel from "../Common/Carousel/index";
import { WatchCarouselImages } from "../Common/Carousel/data";
import WatchContent from "./components/Content/index";
import ContactBanner from "../Common/ContactBanner/index";
import { WatchPageContainer, PageTitle } from "./style";
import WatchBrands from "./components/WatchBrands/index";
export default function Watches() {
  return (
    <WatchPageContainer>
      <PageTitle>Pre-Owned Watches</PageTitle>
      <ImageCarousel images={WatchCarouselImages} />
      <WatchContent />
      <WatchBrands />
      <ContactBanner />
    </WatchPageContainer>
  );
}
