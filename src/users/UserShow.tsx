import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    NumberField,
    ReferenceManyField,
    Datagrid,
    ShowButton,
} from 'react-admin';

const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="fullName" label="ФИО" />
            <TextField source="email" label="Почта" />
            <TextField source="phone" label="Номер телефона" />
            <DateField source="dateOfBirth" label="Дата рождения" />
            <TextField source="instagram" label="Instagram" />
            <NumberField source="bonuses" label="Бонусы" />
            <ReferenceManyField label="История заказов" reference="orders" target="user_id">
                <Datagrid>
                    <TextField source="orderNumber" label="Номер заказа" />
                    <DateField source="orderDate" label="Дата заказа" />
                    <NumberField
                        source="total"
                        label="Сумма"
                        options={{ style: 'currency', currency: 'USD' }}
                    />
                    <ShowButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

export default UserShow;
