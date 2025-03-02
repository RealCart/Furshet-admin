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

const DishesArrayInput = () => {
    const { control, getValues, setValue } = useFormContext();
    const dishes = useWatch({ name: 'dishes', control });

    React.useEffect(() => {
        if (dishes && dishes.length) {
            const lastIndex = dishes.length - 1;
            const lastDish = dishes[lastIndex];
            if (!lastDish.id) {
                const maxId = dishes.reduce((max, dish) => {
                    const dishId = dish && dish.id ? Number(dish.id) : 0;
                    return dishId > max ? dishId : max;
                }, 0);
                setValue(`dishes.${lastIndex}.id`, maxId + 1);
            }
        }
    }, [dishes, setValue]);

    return (
        <ArrayInput source="dishes" label="Блюда">
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
            <DishesArrayInput />
        </SimpleForm>
    </Edit>
);

export default FoodCategoryEdit;