import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { createRoot } from 'react-dom/client';
import authProvider from './authProvider';
import customDataProvider from './dataProvider';
import banner from './banner';
import orders from './orders';
import users from './users';
import foodCategory from './foodCategory';
import { queryClient } from './queryClient';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Admin authProvider={authProvider} queryClient={queryClient} dataProvider={customDataProvider} title="My Admin">
            <Resource name="banners" {...banner}    />
            <Resource name="orders" {...orders} />
            <Resource name="users" {...users} />
            <Resource name="foodCategories" {...foodCategory} />
        </Admin>
    </React.StrictMode>
);
