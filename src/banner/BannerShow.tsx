import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    ImageField,
} from 'react-admin';

const BannerShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" label="Заголовок" />
            <ImageField source="image.src" label="Изображение" />
        </SimpleShowLayout>
    </Show>
);

export default BannerShow;
