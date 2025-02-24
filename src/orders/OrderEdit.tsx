import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    NumberInput,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin';

const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput readOnly  source="id" label="Номер заказа" />
            <TextInput source="user.name" label="Имя клиента" />
            <TextInput source="user.phone" label="Телефон" />
            <DateInput source="created_at" label="Дата заказа" />
            <TextInput source="address" label="Адрес" />
            <NumberInput readOnly  source="total_price" label="Общая сумма заказа" />

            <ArrayInput source="items" label="Список товаров">
                <SimpleFormIterator>
                    <TextInput source="food_item.name_ru" label="Название товара" />
                    <TextInput source="item_type" label="Тип товара" />
                    <NumberInput source="quantity" label="Количество" />
                    <TextInput readOnly  source="price" label="Общая цена товара" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default OrderEdit;
