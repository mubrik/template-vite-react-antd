import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:5001/api/",
	timeout: 20000,
	headers: {
		Accept: "application/json",
		"Content-type": "application/json",
	},
});

// regular request interceptors
apiClient.interceptors.request.use(
	function (config) {
		/* config.headers.Authorization = `Bearer`; */
		/* const accessToken = localStorage.getItem("accessToken"); */
		return config;
	},
	function (error) {
		// Do something with request error
		// add refresh token logic later
		return Promise.reject(error);
	}
);

// regular response interceptors
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default apiClient;
