import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./ImagePreviewCard/Card.js";
import ImagePreviewCard from "./ImagePreviewCard/index";
import { Paper, List } from "@mui/material";

// const ImagePreviewList = ({
//   images,
//   setSelectedImageIndex,
//   selectedImageIndex,
//   handleDeleteImage,
//   isEdit,
// }) => {
//   return (
//     <>
//       <Paper
//         sx={{
//           height: isEdit ? "40vh" : "20vh",
//           width: "100%",
//           overflow: "auto",
//         }}
//         elevation={4}
//       >
//         <List>
//           {images.map((image, i) => (
//             <ImagePreviewCard
//               url={image.image_url}
//               setSelectedImageIndex={setSelectedImageIndex}
//               selectedImageIndex={selectedImageIndex}
//               handleDeleteImage={handleDeleteImage}
//               key={i}
//               index={i}
//               isEdit={isEdit}
//             />
//           ))}
//         </List>
//       </Paper>
//     </>
//   );
// };

const ImagePreviewList = ({
  images: defaultImages,
  setSelectedImageIndex,
  selectedImageIndex,
  handleDeleteImage,
  isEdit,
}) => {
  const images = defaultImages.map((image, i) => ({
    ...image,
    id: i + 1,
  }));
  console.log("mapped images", images);
  const [cards, setCards] = useState(images);
  console.log("cards", cards);
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderCard = useCallback((card, index) => {
    return (
      <Card key={card.id} index={index} id={card.id} moveCard={moveCard} />
    );
  }, []);
  return (
    <>
      <div>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};

// export default ImagePreviewList;
export default ImagePreviewList;
