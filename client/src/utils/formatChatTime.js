const utils = {};

utils.formatChatTime = (dataString) => {
  if (!dataString) return "";

  const messageDate = new Date(dataString);
  const today = new Date();

  if (messageDate.getTime() === today.getTime()) {
    return "now";
  }

  // check if day, month, and year all match today
  const isToday =
    messageDate.getDate() === today.getDate() &&
    messageDate.getMonth() === today.getMonth() &&
    messageDate.getFullYear() === today.getFullYear();

  if (isToday) {
    // Return time format like "3:30AM"
    return messageDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  } else {
    // Return date format like "10/11/26" (2-digit year)
    return messageDate.toLocaleDateString([], {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  }
};

export default utils;
