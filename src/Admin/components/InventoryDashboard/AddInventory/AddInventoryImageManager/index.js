import UploadImage from "../../../../../Common/UploadImage/index";
import AddImageImageList from "./AddImageImageList/index";
const AddInventoryImageManager = ({ handleImageChange, validationErrors }) => {
  return (
    <>
      {/*
    list of images
    carousel of images
    */}
      <AddImageImageList />
      <UploadImage
        handleImageChange={handleImageChange}
        validationErrors={validationErrors}
        pathKey="inventory"
      />
    </>
  );
};

export default AddInventoryImageManager;
