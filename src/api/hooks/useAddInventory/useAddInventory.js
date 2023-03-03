import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Auth } from "aws-amplify";
import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";

const useAddInventory = (options) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = defaultValue(options, {});
  const addInventory = async ({ item }) => {
    const {
      signInUserSession: {
        idToken: { jwtToken },
      },
    } = await Auth.currentAuthenticatedUser();
    const {
      data: { data, errors },
    } = await axios.post(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/products",
      {
        ...item,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: jwtToken,
        },
      }
    );
    formatErrors(errors);

    return data;
  };
  return useMutation(addInventory, {
    onSuccess: async (results) => {
      await queryClient.invalidateQueries(["products"], {
        refetchInactive: true,
      });
      onSuccess && onSuccess(results);
    },
    onError: onError && onError,
  });
};
export default useAddInventory;
