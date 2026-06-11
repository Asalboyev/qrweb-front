import axios from 'axios';

export const useApi = () => {
	const config = useRuntimeConfig();

	const { locale } = useI18n();

	const baseURL = import.meta.server
		? config.apiBaseUrl || config.public.apiBaseUrl
		: config.public.apiBaseUrl;

	const api = axios.create({
		baseURL,
		headers: { 'Content-Type': 'application/json' },
		timeout: import.meta.server ? 5_000 : 15_000,
	});

	api.interceptors.request.use(
		(config) => {
			config.headers['Accept-Language'] = locale.value;
			return config;
		},
		(error) => Promise.reject(error)
	);

	api.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	return api;
};
