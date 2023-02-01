import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  Tooltip,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import { useEditInventory, useDeleteImage } from "../../../../api/index";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LoadingButton from "@mui/lab/LoadingButton";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import AddInventoryImageManager from "../../../../Common/AddInventoryImageManager/index";
import { inventorySchema } from "../../../../utils/validate";
import DraftSwitch from "../../../../Common/DraftSwitch/index";
import CancelModal from "../CancelModal/index";

const defaultEditInventoryDataSetter = (item) => ({
  brand: item?.brand ?? "",
  model: item?.model ?? "",
  model_number: item?.model_number ?? "",
  dial: item?.dial ?? "",
  bezel: item?.bezel ?? "",
  bracelet: item?.bracelet ?? "",
  size: item?.size ?? "",
  description: item?.description ?? "",
  draft: item?.draft ?? false,
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
  const [isDraft, setIsDraft] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [imagesToBeDeleted, setImagesToBeDeleted] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMove, setIsMove] = useState(false);

  const { mutate: editInventory, isLoading } = useEditInventory({
    onSuccess: () => {
      // setEditInventoryData(defaultEditInventoryData);
      setIsEdited(false);
      setValidationErrors({});
    },
  });
  const { mutate: deleteImage, isDeleteLoading } = useDeleteImage({
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
    setEditInventoryData(defaultEditInventoryData);
    setIsDraft(defaultEditInventoryData.draft);
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
      editInventory({ item: { ...editInventoryData, draft: isDraft } });
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
      editInventoryData.images
        .map((image) => image.image_url.split("Z-")[1])
        .includes(url.split("Z-")[1])
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

  const handleResetChanges = () => {
    setEditInventoryData(defaultEditInventoryData);
    setIsDraft(defaultEditInventoryData.draft);
    setValidationErrors({});
  };

  useEffect(() => {
    const editData = Object.keys(editInventoryData);
    for (let key = 0; editData.length > key; key++) {
      if (
        editInventoryData[editData[key]] !==
          defaultEditInventoryData[editData[key]] ||
        editInventoryData.images.length !==
          defaultEditInventoryData.images.length ||
        defaultEditInventoryData.draft !== isDraft
      ) {
        setIsEdited(true);
        break;
      } else {
        setIsEdited(false);
      }
    }
  }, [editInventoryData, defaultEditInventoryData, isDraft]);
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
        <DialogTitle id="alert-dialog-title">
          Edit Images
          <Grid container>
            <Grid item xs={12}>
              <FormControlLabel
                label="Draft"
                control={
                  <DraftSwitch setIsDraft={setIsDraft} isDraft={isDraft} />
                }
                sx={{
                  position: "absolute",
                  right: 48,
                  top: 16,
                }}
              ></FormControlLabel>
            </Grid>
            <Grid item xs={12}>
              <Tooltip title="Reset Changes" placement="left">
                <span>
                  <IconButton
                    onClick={handleResetChanges}
                    disabled={!isEdited}
                    color="warning"
                    sx={{
                      position: "absolute",
                      right: 24,
                      top: 16,
                    }}
                  >
                    <RotateLeftIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </Grid>
          </Grid>
        </DialogTitle>
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
          <CancelModal
            isEdited={isEdited}
            isDraft={isDraft}
            setIsDraft={setIsDraft}
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
