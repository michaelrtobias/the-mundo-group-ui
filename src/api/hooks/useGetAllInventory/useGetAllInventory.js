import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";
import { useQuery } from "@tanstack/react-query";

const useGetAllInventory = (options) => {
  const { onSuccess, onError } = defaultValue(options, {});

  const getAllInventory = async () => {
    //axios call
    const {
      data: { items, errors },
    } = await axios.get(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/products"
    );
    formatErrors(errors);
    return items;
  };
  return useQuery(["products"], getAllInventory, {
    onSuccess: onSuccess && onSuccess,
    onError: onError && onError,
  });
};

export default useGetAllInventory;
