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
import { useFormContext, useWatch } from 'react-hook-form';

const ItemsArrayInput = () => {
    const { control, getValues, setValue } = useFormContext();
    const items = useWatch({ name: 'items', control });

    React.useEffect(() => {
        if (items && items.length) {
            const lastIndex = items.length - 1;
            const lastDish = items[lastIndex];
            if (!lastDish.id) {
                const maxId = items.reduce((max, dish) => {
                    const dishId = dish && dish.id ? Number(dish.id) : 0;
                    return dishId > max ? dishId : max;
                }, 0);
                setValue(`items.${lastIndex}.id`, maxId + 1);
            }
        }
    }, [items, setValue]);

    return (
        <ArrayInput source="items" label="Блюда">
            <SimpleFormIterator>
                <TextInput source="id" label="ID блюда" readOnly />
                <TextInput source="name" label="Название блюда" validate={required()} />
                <TextInput source="description" label="Описание" validate={required()} />
                <NumberInput source="price" label="Цена" validate={required()} />
                <ImageInput
                    source="image_path"
                    label="Фото блюда"
                    accept={{ 'image/*': ['.png', '.jpg'] }}
                >
                    <ImageField source="src" title="Фото блюда" />
                </ImageInput>
            </SimpleFormIterator>
        </ArrayInput>
    );
};

const FoodCategoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TranslatableInputs locales={['en']}>
                <TextInput source="name" label="Название категории" validate={required()} />
            </TranslatableInputs>
            <ItemsArrayInput />
        </SimpleForm>
    </Edit>
);

export default FoodCategoryEdit;