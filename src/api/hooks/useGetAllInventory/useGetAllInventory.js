import { Auth } from "aws-amplify";
import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";
import { useQuery } from "@tanstack/react-query";

const useGetAllInventory = (options) => {
  const { onSuccess, onError } = defaultValue(options, {});
  const getAllInventory = async () => {
    const {
      signInUserSession: {
        idToken: { jwtToken },
      },
    } = await Auth.currentAuthenticatedUser();
    //axios call
    const {
      data: { items, errors },
    } = await axios.get(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/products",
      {
        headers: {
          Authorization: jwtToken,
        },
      }
    );
    formatErrors(errors);
    return items;
  };
  return useQuery(["products"], getAllInventory, {
    onSuccess: (items) => {
      onSuccess?.(items);
    },
    onError,
  });
};

export default useGetAllInventory;
