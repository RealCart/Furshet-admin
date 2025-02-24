import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin';

const OrderCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="orderNumber" label="Номер заказа" />
            <TextInput source="customerName" label="Имя клиента" />
            <DateInput source="orderDate" label="Дата заказа" />
            <NumberInput source="total" label="Сумма" />
        </SimpleForm>
    </Create>
);

export default OrderCreate;
