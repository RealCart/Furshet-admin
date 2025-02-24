import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    ArrayField,
    Datagrid,
    NumberField,
    ImageField,
} from 'react-admin';

const FoodCategoryShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name.en" label="Название категории" />
            <ArrayField source="dishes" label="Блюда">
                <Datagrid>
                    <TextField source="name" label="Название блюда" />
                    <TextField source="description" label="Описание" />
                    <NumberField
                        source="price"
                        label="Цена"
                        options={{ style: 'currency', currency: 'USD' }}
                    />
                    <ImageField source="photo.src" label="Фото блюда" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export default FoodCategoryShow;
