import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    useMediaQuery,
    Theme,
} from '@mui/material';
import jsonExport from 'jsonexport/dist';
import {
    ListBase,
    ListToolbar,
    ListActions,
    Pagination,
    SearchInput,
    SimpleList,
    TextField,
    Title,
    downloadCSV,
    useListContext,
    useTranslate,
    Exporter,
    EditButton,
    ShowButton,
} from 'react-admin';

const userFilters = [
    <SearchInput source="q" alwaysOn placeholder="Поиск пользователей" />,
];

const exporter: Exporter = (records) => {
    const data = records.map(record => {
        const { id, fullName, phone, dateOfBirth, email, instagram, bonuses } = record;
        return { id, fullName, phone, dateOfBirth, email, instagram, bonuses };
    });
    const headers = ['id', 'fullName', 'phone', 'dateOfBirth', 'email', 'instagram', 'bonuses'];
    return jsonExport(data, { headers }, (error, csv) => {
        if (error) {
            console.error(error);
        }
        downloadCSV(csv, 'users');
    });
};

const UserGrid = () => {
    const { data } = useListContext();
    const translate = useTranslate();

    if (!data) return null;
    return (
        <Grid spacing={2} container>
            {data.map(record => (
                <Grid item key={record.id} sm={12} md={6} lg={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardHeader
                            title={<TextField record={record} source="fullName" />}
                            subheader={<TextField record={record} source="email" />}
                            avatar={
                                <Avatar>
                                    <AccountCircleIcon />
                                </Avatar>
                            }
                        />
                        <CardContent>
                            <Typography variant="body2">
                                Номер телефона: {record.phone}
                            </Typography>
                            <Typography variant="body2">
                                Дата рождения:{' '}
                                {record.dateOfBirth
                                    ? new Date(record.dateOfBirth).toLocaleDateString()
                                    : ''}
                            </Typography>
                            <Typography variant="body2">
                                Instagram: {record.instagram}
                            </Typography>
                            <Typography variant="body2">
                                Бонусы: {record.bonuses}
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="caption" color="textSecondary">
                                История заказов
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                            <EditButton record={record} />
                            <ShowButton record={record} />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

const UserMobileList = () => (
    <SimpleList
        primaryText={record => record.fullName}
        secondaryText={record => record.email}
        tertiaryText={record => record.phone}
        leftAvatar={() => <AccountCircleIcon />}
    />
);

const UserList = () => (
    <ListBase exporter={exporter} perPage={6}>
        <ListView />
    </ListBase>
);

const ListView = () => {
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    const { defaultTitle } = useListContext();
    return (
        <>
            <Title defaultTitle={defaultTitle} />
            <ListToolbar filters={userFilters} actions={<ListActions />} />
            {isSmall ? <UserMobileList /> : <UserGrid />}
            <Pagination rowsPerPageOptions={[6, 9, 12]} />
        </>
    );
};

export default UserList;
