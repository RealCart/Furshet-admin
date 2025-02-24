import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    required,
} from 'react-admin';

const BannerCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="title" label="Заголовок" validate={required()} />
            <ImageInput source="pictures" label="Фото блюда" accept={{ 'image/*': ['.png', '.jpg'] }}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export default BannerCreate;
