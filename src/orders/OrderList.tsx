import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
    ShowButton,
} from 'react-admin';

const OrderList = () => (
    <List sort={{ field: 'orderDate', order: 'DESC' }}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="id" />
            <TextField source="user.phone" />
            <DateField source="created_at" />
            <NumberField
                source="total_price"
                options={{ style: 'currency', currency: 'KZT' }}
            />
            <EditButton />
        </Datagrid>
    </List>
);

export default OrderList;
