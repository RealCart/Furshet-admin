import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    TranslatableInputs,
    ImageInput,
    ImageField,
} from 'react-admin';

const FoodCategoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TranslatableInputs locales={['en']}>
                <TextInput source="name" label="Название категории" validate={required()} />
            </TranslatableInputs>
            <ArrayInput source="dishes" label="Блюда">
                <SimpleFormIterator>
                    <TextInput source="name" label="Название блюда" validate={required()} />
                    <TextInput source="description" label="Описание" validate={required()} />
                    <NumberInput source="price" label="Цена" validate={required()} />
                    <ImageInput
                        source="image_path"
                        label="Фото блюда"
                        accept={{ 'image/*': ['.png', '.jpg'] }}
                        format={value => (typeof value === 'string' ? { src: value } : value)}
                        parse={value => (value && value.src ? value.src : value)}
                    >
                        <ImageField source="src" title="Фото блюда" />
                    </ImageInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default FoodCategoryEdit;

