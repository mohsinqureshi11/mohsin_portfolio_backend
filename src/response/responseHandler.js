export const sendSuccess = (res, message, data = null) => {
  res.status(200).json({ success: true, message, data });
};

export const sendError = (res, statusCode = 500, message = "Error") => {
  res.status(statusCode).json({ success: false, message });
};
