const formatErrors = (errors) => {
  if (errors) {
    const errorMessage = errors.reduce((acc, error) => {
      acc += `${error.message}\n`;
      return acc;
    }, "");
    throw new Error(errorMessage);
  }
};

export default formatErrors;
