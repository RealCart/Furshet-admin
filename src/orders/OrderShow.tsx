import * as React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, NumberField } from 'react-admin';

const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="orderNumber" label="Номер заказа" />
            <TextField source="customerName" label="Имя клиента" />
            <DateField source="orderDate" label="Дата заказа" />
            <NumberField
                source="total"
                label="Сумма"
                options={{ style: 'currency', currency: 'USD' }}
            />
            {/* Другие поля */}
        </SimpleShowLayout>
    </Show>
);

export default OrderShow;
