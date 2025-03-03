import simpleRestProvider from 'ra-data-simple-rest';
import { DataProvider, HttpError, fetchUtils } from 'react-admin';
import addUploadFeature from './addUploadFeature';
import axios from 'axios';

const API_URL = 'https://158.179.207.250/api';

const httpClient = (url: string, options: RequestInit = {} as RequestInit) => {
    if (!options.headers) {
        options.headers = new Headers({
            Accept: 'application/json',
            'ngrok-skip-browser-warning': 'true',
        });
    } else {
        if (options.headers instanceof Headers) {
            options.headers.set('ngrok-skip-browser-warning', 'true');
        } else if (typeof options.headers === 'object') {
            options.headers = {
                ...options.headers,
                'ngrok-skip-browser-warning': 'true',
            };
        }
    }
    options.credentials = 'include';
    return fetchUtils.fetchJson(url, options);
};


const baseDataProvider = simpleRestProvider(API_URL, httpClient);
const uploadCapableDataProvider = addUploadFeature(baseDataProvider);

const customDataProvider: DataProvider = new Proxy(uploadCapableDataProvider, {
    get: (target, name) => async (resource : any, params: any) => {
        if (typeof name === 'symbol' || name === 'then') {
            return;
        }

        if (localStorage.getItem('session_ended')) {
            return Promise.reject(new HttpError('Session ended', 403));
        }

        if (resource === 'orders' && name === 'getList') {
            const url = `${API_URL}/orders`;
            const response = await axios.get(url, {
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                },
                withCredentials: true
            });

            return {
                data: response.data,
                total: response.data.length,
            };
        }
        
        if (resource === 'orders' && name === 'getOne') {
            try {
                const { id } = params;
                console.log('getOne вызван для orders с id:', id);
                const response = await axios.get(`${API_URL}/orders/${id}`, {
                    headers: {
                        'Accept': 'application/json',
                        'ngrok-skip-browser-warning': 'true'
                    },
                    withCredentials: true,
                });
                console.log('Ответ getOne:', response);
                if (!response.data || typeof response.data !== 'object' || Array.isArray(response.data)) {
                    throw new Error('Неверный формат данных для getOne. Ожидается объект.');
                }
                return { data: response.data };
            } catch (error: any) {
                console.error('Ошибка в getOne для orders:', error);
                return Promise.reject(
                    new HttpError('Не удалось загрузить заказ', error.response?.status || 500)
                );
            }
        }

        if (resource === 'foodCategories' && name === 'getList') {
            const url = `${API_URL}/categories`;
            const response = await axios.get(url, {
                headers: { 'ngrok-skip-browser-warning': 'true' },
                withCredentials: true,
            });
        
            console.log(response);
        
            const categories = response.data;
        
            const records = categories.map(category => ({
                id: category.id,
                name: { en: category.name },
                dishes: category.items || [],
            }));
        
            return {
                data: records,
                total: records.length,
            };
        }        

        if (resource === 'foodCategories' && name === 'getOne') {
            const {id} = params; 
            const response = await axios.get(`${API_URL}/categories/${id}`, {
                headers: { 'ngrok-skip-browser-warning': 'true' },
                withCredentials: true,
            });
            console.log(response)

            return response
        }

        if (resource === 'foodCategories' && name === 'update') {
            const { id, data } = params;
            try {
                const url = `${API_URL}/categories/${id}`;
                console.log('Changed DATA: ', data);
                const response = await axios.put(url, data, {
                    headers: {
                        'Accept': 'application/json',
                        'ngrok-skip-browser-warning': 'true'
                    },
                    withCredentials: true,
                });
                
                console.log("Server response: ", response);
                return { data: response.data };
            } catch (error: any) {
                console.error('Ошибка обновления foodCategories:', error);
                return Promise.reject(
                    new HttpError('Не удалось обновить категорию', error.response?.status || 500)
                );
            }
        }

        if (resource === 'foodCategories' && name === 'create') {
            const {data} = params
            try {
                const url = `${API_URL}/categories`
                console.log('posting data: ', data);
                const response = await axios.post(url, data, {
                    headers: {
                        'Accept': 'application/json',
                        'ngrok-skip-browser-warning': 'true'
                    },
                    withCredentials: true,
                });

                console.log("Post categories: ", response);

                return response;
            } catch (error: any) {
                console.error('Ошибка обновления foodCategories:', error);
                return Promise.reject(
                    new HttpError('Не удалось обновить категорию', error.response?.status || 500)
                );
            }
        }
        

        return uploadCapableDataProvider[name](resource, params);
    },
});

export default customDataProvider;
