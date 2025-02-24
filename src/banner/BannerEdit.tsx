import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from 'react-admin';

const BannerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" label="Заголовок" validate={required()} />
            <ImageInput source="pictures" label="Фото блюда" accept={{ 'image/*': ['.png', '.jpg'] }}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export default BannerEdit;
