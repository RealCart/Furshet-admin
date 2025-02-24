import * as React from 'react';
import {
    Create,
    SimpleFormConfigurable,
    TextInput,
    DateInput,
    NumberInput,
} from 'react-admin';

const UserCreate = () => (
    <Create redirect={false}>
        <SimpleFormConfigurable sx={{ maxWidth: { md: 'auto', lg: '30em' } }}>
            <TextInput source="fullName" label="ФИО" />
            <TextInput source="email" label="Почта" />
            <TextInput source="phone" label="Номер телефона" />
            <DateInput source="dateOfBirth" label="Дата рождения" />
            <TextInput source="instagram" label="Instagram" />
            <NumberInput source="bonuses" label="Бонусы" />
        </SimpleFormConfigurable>
    </Create>
);

export default UserCreate;
