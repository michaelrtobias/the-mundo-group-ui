import axios from "axios";
import defaultValue from "../../utils/defaultValue";
import formatErrors from "../../utils/formatErrors";
import { useMutation } from "@tanstack/react-query";

const useSendLeadMessage = (options) => {
  const { onSuccess, onError } = defaultValue(options, {});

  const sendLeadMessage = async ({ body }) => {
    const {
      data: { data, errors },
    } = await axios.post(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/wishlist",
      {
        ...body,
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
  return useMutation(sendLeadMessage, {
    onSuccess: onSuccess && onSuccess,
    onError: onError && onError,
  });
};
export default useSendLeadMessage;
