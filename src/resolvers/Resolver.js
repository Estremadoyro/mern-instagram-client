export const resolver = async (promise) => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await promise;
  } catch (err) {
    resolved.error = err.response.data.error;
    console.log(resolved.error);
  }
  return resolved;
};
