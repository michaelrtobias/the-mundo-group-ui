import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
const defaultValue = (value, defaultValue) => {
  return value ? value : defaultValue;
};

const formatErrors = (errors) => {
  if (errors) {
    const errorMessage = errors.reduce((acc, error) => {
      acc += `${error.message}\n`;
      return acc;
    }, "");
    throw new Error(errorMessage);
  }
};

export const useGetAllInventory = (options) => {
  const { onSuccess, onError } = defaultValue(options, {});

  const getAllInventory = async () => {
    //axios call
    const {
      data: { items, errors },
    } = await axios.get(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/inventory"
    );
    formatErrors(errors);
    return items;
  };
  return useQuery(["inventory"], getAllInventory, {
    onSuccess: onSuccess && onSuccess,
    onError: onError && onError,
  });
};
// export const useGetAllInventory = (options) => {
//   const { onSuccess, onError } = defaultValue(options, {});

//   const getAllInventory = async () => {
//     //axios call
//     const {
//       data: { items },
//     } = await axios.get(
//       "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/inventory"
//     );
//     return items;
//   };
//   return useQuery(["inventory"], getAllInventory, {
//     onSuccess: onSuccess && onSuccess,
//     onError: onError && onError,
//   });
// };

export const useAddInventory = (options) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = defaultValue(options, {});
  const addInventory = async ({ item }) => {
    const {
      data: { data, errors },
    } = await axios.post(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/inventory",
      {
        ...item,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    formatErrors(errors);

    return data;
  };
  return useMutation(addInventory, {
    onSuccess: async (results) => {
      await queryClient.invalidateQueries(["inventory"], {
        refetchInactive: true,
      });
      onSuccess && onSuccess(results);
    },
    onError: onError && onError,
  });
};

export const useDeleteInventory = (options) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = defaultValue(options, {});
  const deleteInventory = async ({ item }) => {
    const {
      data: { data, errors },
    } = await axios.delete(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/inventory",
      {
        data: { ...item },
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
      await queryClient.invalidateQueries(["inventory"], {
        refetchInactive: true,
      });
      onSuccess && onSuccess(results);
    },
    onError: onError && onError,
  });
};
export const useDeleteImage = (options) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = defaultValue(options, {});
  const deleteInventory = async ({ item }) => {
    console.log("item", item);
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
      await queryClient.invalidateQueries(["inventory"], {
        refetchInactive: true,
      });
      onSuccess && onSuccess(results);
    },
    onError: onError && onError,
  });
};

export const useEditInventory = (options) => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = defaultValue(options, {});
  const editInventory = async ({ item }) => {
    const {
      data: { data, errors },
    } = await axios.put(
      "https://8zrqystn2h.execute-api.us-east-1.amazonaws.com/prod/inventory",
      {
        ...item,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    formatErrors(errors);

    return data;
  };
  return useMutation(editInventory, {
    onSuccess: async (results) => {
      await queryClient.invalidateQueries(["inventory"], {
        refetchInactive: true,
      });
      onSuccess && onSuccess(results);
    },
    onError: onError && onError,
  });
};