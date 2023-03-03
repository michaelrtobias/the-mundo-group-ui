import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";
import { useQuery } from "@tanstack/react-query";

const useGetWatches = (options) => {
  const { onSuccess, onError } = defaultValue(options, {});

  const getWatches = async () => {
    const {
      data: { items, errors },
    } = await axios.get(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/watches"
    );
    formatErrors(errors);
    return items;
  };
  return useQuery(["watches"], getWatches, {
    onSuccess: onSuccess && onSuccess,
    onError: onError && onError,
  });
};
export default useGetWatches;
