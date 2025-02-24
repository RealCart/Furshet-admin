import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ImageField,
    EditButton,
    DeleteButton,
    ShowButton,
} from 'react-admin';

const BannerList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" label="Заголовок" />
            <ImageField source="image.src" label="Изображение" />
            <EditButton />
            <DeleteButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export default BannerList;
