import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  CardMedia,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Tooltip,
  DialogTitle,
} from "@mui/material";
import {
  useEditInventory,
  useGetAllInventory,
  useDeleteImage,
} from "../../../../api/index";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LoadingButton from "@mui/lab/LoadingButton";
import AddInventoryImageManager from "../../../../Common/AddInventoryImageManager/index";
import CancelEditModal from "../EditInventory/CancelEditModal";
import { inventorySchema } from "../../../../utils/validate";

const defaultEditInventoryDataSetter = (item) => ({
  brand: item?.brand ?? "",
  model: item?.model ?? "",
  model_number: item?.model_number ?? "",
  dial: item?.dial ?? "",
  bezel: item?.bezel ?? "",
  bracelet: item?.bracelet ?? "",
  size: item?.size ?? "",
  description: item?.description ?? "",
  images: item?.images ?? [],
});

const EditImages = ({ watch }) => {
  const defaultEditInventoryData = defaultEditInventoryDataSetter(watch);
  const [isOpen, setIsOpen] = useState(false);
  const [editInventoryData, setEditInventoryData] = useState(
    defaultEditInventoryData
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [imagesToBeDeleted, setImagesToBeDeleted] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMove, setIsMove] = useState(false);

  const {
    mutate: editInventory,
    isLoading,
    isSuccess,
  } = useEditInventory({
    onSuccess: () => {
      // setEditInventoryData(defaultEditInventoryData);
      setIsEdited(false);
      setValidationErrors({});
    },
  });
  const {
    mutate: deleteImage,
    isDeleteLoading,
    isError,
  } = useDeleteImage({
    onSuccess: () => {
      setImagesToBeDeleted([]);
    },
  });

  const isValid = async () => {
    try {
      await inventorySchema.validate(editInventoryData, {
        abortEarly: false,
      });

      setValidationErrors({});
      return true;
    } catch (e) {
      if (e.inner) {
        const errors = e.inner.reduce((obj, error) => {
          obj[error.path] = error.message;
          return obj;
        }, {});
        setValidationErrors(errors);
      } else {
        setValidationErrors({ brand: e.message });
      }
      return false;
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSave = async () => {
    if (await isValid()) {
      if (imagesToBeDeleted.length > 0) {
        deleteImage({
          item: imagesToBeDeleted.map((url) => ({
            fileName: url.split("inventory/")[1],
            pathKey: "inventory",
          })),
        });
      }
      editInventory({ item: { ...editInventoryData } });
      setIsOpen(false);
      setImagesToBeDeleted([]);
    }
  };
  const handleConfirmCancelModal = () => {
    setSelectedImageIndex(0);
    setEditInventoryData(defaultEditInventoryData);
    setIsEdited(false);
    setValidationErrors({});
    setImagesToBeDeleted([]);
    setIsCancelModalOpen(false);
    setIsOpen(false);
  };
  const isDuplicateImage = (url) => {
    if (
      editInventoryData.images.map((image) => image.image_url).includes(url)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddImage = (url, fileName) => {
    if (!isDuplicateImage(url)) {
      setEditInventoryData({
        ...editInventoryData,
        images: [...editInventoryData.images, { image_url: url }],
      });
      const tempErrors = { ...validationErrors };
      delete tempErrors.images;
      setValidationErrors({ ...tempErrors });
    } else if (isDuplicateImage(url)) {
      setValidationErrors({
        ...validationErrors,
        images: `Image: ${fileName} has already been added to this inventory item. Please choose a different image.`,
      });
    }
  };

  const handleDeleteImage = (index, image) => {
    const tempImages = [...editInventoryData.images];
    tempImages.splice(index, 1);
    setEditInventoryData({
      ...editInventoryData,
      images: [...tempImages],
    });
    setImagesToBeDeleted([...imagesToBeDeleted, image]);
  };

  const handleMoveImage = (destinationIndex, currentIndex) => {
    setIsMove(true);
    const tempImages = [...editInventoryData.images];
    const removedItem = tempImages.splice(currentIndex, 1)[0];
    tempImages.splice(destinationIndex, 0, removedItem);
    setEditInventoryData({
      ...editInventoryData,
      images: [...tempImages],
    });
    setSelectedImageIndex(destinationIndex);
  };

  const handleClose = () => {
    if (isEdited) {
      setIsCancelModalOpen(true);
    } else {
      setIsOpen(false);
      setSelectedImageIndex(0);
      setEditInventoryData(defaultEditInventoryData);
      setValidationErrors({});
      setImagesToBeDeleted([]);
    }
  };

  useEffect(() => {
    const editData = Object.keys(editInventoryData);
    for (let key = 0; editData.length > key; key++) {
      if (
        editInventoryData[editData[key]] !==
          defaultEditInventoryData[editData[key]] ||
        editInventoryData.images.length !==
          defaultEditInventoryData.images.length
      ) {
        setIsEdited(true);
        break;
      } else {
        setIsEdited(false);
      }
    }
  }, [editInventoryData]);
  return (
    <>
      <IconButton aria-label="images" onClick={handleOpen}>
        <ImageSearchIcon />
      </IconButton>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">Edit Images</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AddInventoryImageManager
                handleAddImage={handleAddImage}
                validationErrors={validationErrors.images}
                images={editInventoryData.images}
                handleDeleteImage={handleDeleteImage}
                isEdit={true}
                isMove={isMove}
                setIsMove={setIsMove}
                selectedImageIndex={selectedImageIndex}
                setSelectedImageIndex={setSelectedImageIndex}
                handleMoveImage={handleMoveImage}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <CancelEditModal
            isEdited={false}
            handleClose={handleClose}
            isCancelModalOpen={isCancelModalOpen}
            setIsCancelModalOpen={setIsCancelModalOpen}
            handleConfirmCancelModal={handleConfirmCancelModal}
            handleSave={handleSave}
          />

          <LoadingButton
            variant="contained"
            color="primary"
            loading={isLoading || isDeleteLoading}
            disabled={!isEdited}
            onClick={handleSave}
          >
            Save
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditImages;
