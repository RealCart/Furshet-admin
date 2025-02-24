import * as React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin';

const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="fullName" label="ФИО" />
            <TextInput source="email" label="Почта" />
            <TextInput source="phone" label="Номер телефона" />
            <DateInput source="dateOfBirth" label="Дата рождения" />
            <TextInput source="instagram" label="Instagram" />
            <NumberInput source="bonuses" label="Бонусы" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
