import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";
import { useQuery } from "@tanstack/react-query";

const useGetInventoryByColorway = ({ brand, colorway, options }) => {
  const { onSuccess, onError } = defaultValue(options, {});

  const getInventoryByColorway = async () => {
    const {
      data: { items },
      errors,
    } = await axios.get(
      `https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/watches/watch`,
      {
        params: { brand, colorway },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );
    formatErrors(errors);
    return items;
  };
  return useQuery(["watch"], getInventoryByColorway, {
    onSuccess: onSuccess && onSuccess,
    onError: onError && onError,
  });
};

export default useGetInventoryByColorway;
