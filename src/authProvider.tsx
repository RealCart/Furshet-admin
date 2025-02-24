import { AuthProvider } from 'react-admin';
import axios from 'axios';

const DEFAULT_IDENTITY = {
    id: 'login',
    fullName: 'John Doe',
    avatar: 'data:image/jpeg;base64,...',
};

const accessControlStrategies = {
    admin: () => {
        return true;
    },
    user: ({ resource, action }) => {
        const deniedResources = ['posts.authors', 'users.role', 'users.id'];
        const deniedActions = ['batch_create'];
        return (
            !deniedResources.includes(resource) &&
            !deniedActions.includes(action)
        );
    },
    default: ({ resource, action }) => {
        const deniedResources = [
            'users',
            'posts.authors',
            'users.role',
            'users.id',
        ];
        const deniedActions = ['batch_create'];
        return (
            !deniedResources.includes(resource) &&
            !deniedActions.includes(action)
        );
    },
};

const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        try {
            const response = await axios.post('https://16d3-37-150-82-158.ngrok-free.app/api/admin/login', {
                login: username,
                password: password,
            }, {
                headers: {
                    'ngrok-skip-browser-warning': 'true'
                },
                withCredentials: true,
            });

            console.log(response)

            const data = response.data;

            // Если сервер вернул, например, 200 ОК, и в теле есть нужные поля
            localStorage.setItem('not_authenticated', '');
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.fullName || 'NoName');
            localStorage.setItem('login', data.role || 'default');
            localStorage.setItem('role', data.role || 'default');

            if (data.avatar) {
                localStorage.setItem('avatar', data.avatar);
            } else {
                localStorage.removeItem('avatar');
            }

            return Promise.resolve();
        } catch (error) {
            // При любой ошибке ставим флаг not_authenticated
            // и кидаем reject, чтобы RA показал сообщение об ошибке
            localStorage.setItem('not_authenticated', 'true');
            return Promise.reject(error);
        }
    },

    logout: () => {
        localStorage.setItem('not_authenticated', 'true');
        localStorage.removeItem('role');
        localStorage.removeItem('login');
        localStorage.removeItem('user');
        localStorage.removeItem('avatar');
        localStorage.removeItem('token');
        return Promise.resolve();
    },

    checkError: ({ status }) => {
        // Если сервер вернул 401/403, просим RA разлогиниться
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    },

    checkAuth: () => {
        return localStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    },

    getIdentity: () => {
        const id = localStorage.getItem('login');
        if (!id) {
            return Promise.resolve(DEFAULT_IDENTITY);
        }
        return Promise.resolve({
            id,
            fullName: localStorage.getItem('user') ?? '',
            avatar: localStorage.getItem('avatar') ?? '',
        });
    },

    canAccess: async ({ resource, action }) => {
        const role = localStorage.getItem('role') || 'default';
        return accessControlStrategies[role]({ resource, action });
    },
};

export default authProvider;
