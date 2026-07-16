import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

// Override the global fetch function to use Axios
window.fetch = async (url, options = {}) => {
  try {
    // convert fetch options to axios config
    const axiosConfig = {
      url: url,
      method: options.method || "GET",
      headers: options.headers || {},
      data: options.body ? JSON.parse(options.body) : undefined,
      ...options,
    };

    // Execute the request using Axios
    const response = await axiosInstance(axiosConfig);

    // Mock the native fetch Response object
    return {
      ok: response.status >= 200 && response.status < 300,
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers),
      // Mock the .json() nethod for existing code that expects a fetch Response object
      json: async () => response.data,
      // Mock the .text() method for existing code that expects a fetch Response object just in case
      text: async () =>
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data),
    };
  } catch (error) {
    // Handle Axios error to match fetch's rejection behavior
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        ok: false,
        status: error.response.status,
        statusText: error.response.statusText,
        headers: new Headers(error.response.headers),
        json: async () => error.response.data,
        text: async () =>
          typeof error.response.data === "string"
            ? error.response.data
            : JSON.stringify(error.response.data),
      };
    }

    // Network errors or aborted requests throw error in fetch
    throw new TypeError("Failed to fetch");
  }
};
