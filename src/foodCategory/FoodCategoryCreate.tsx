import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    ImageInput,
    ImageField,
} from 'react-admin';

const FoodCategoryCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="name" label="Название категории" validate={required()} />
            <ArrayInput source="dishes" label="Блюда">
                <SimpleFormIterator>
                    <TextInput source="name" label="Название блюда" validate={required()} />
                    <TextInput source="description" label="Описание" validate={required()} />
                    <NumberInput source="price" label="Цена" validate={required()} />
                    <ImageInput source="pictures" label="Фото блюда" accept={{ 'image/*': ['.png', '.jpg'] }}>
                        <ImageField source="src" title="title" />
                    </ImageInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export default FoodCategoryCreate;
