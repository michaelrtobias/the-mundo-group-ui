import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";

const useDeleteImage = (options) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = defaultValue(options, {});
  const deleteInventory = async ({ item }) => {
    const {
      data: { data, errors },
    } = await axios.delete(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/images",
      {
        data: item,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );
    formatErrors(errors);

    return data;
  };
  return useMutation(deleteInventory, {
    onSuccess: async (results) => {
      await queryClient.invalidateQueries(["products"], {
        refetchInactive: true,
      });
      onSuccess && onSuccess(results);
    },
    onError: onError && onError,
  });
};

export default useDeleteImage;
