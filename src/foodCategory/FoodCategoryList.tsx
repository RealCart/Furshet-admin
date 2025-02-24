import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    FunctionField,
    EditButton,
    ShowButton,
} from 'react-admin';

const FoodCategoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name.en" label="Название категории" />
            <FunctionField
                label="Количество блюд"
                render={record => (record.dishes ? record.dishes.length : 0)}
            />
            <EditButton />
        </Datagrid>
    </List>
);

export default FoodCategoryList;
