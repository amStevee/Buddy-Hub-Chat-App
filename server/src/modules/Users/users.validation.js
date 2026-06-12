function checkUserRequestBody(reqBody) {
  if (
    !reqBody ||
    typeof reqBody !== "object" ||
    Array.isArray(reqBody) ||
    Object.keys(reqBody).length === 0
  ) {
    const error = new Error("Invalid or missing user data in request body");
    error.statusCode = 400;
    throw error;
  }
  return reqBody;
}

export { checkUserRequestBody };
