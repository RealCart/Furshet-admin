import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderCreate from './OrderCreate';
import OrderEdit from './OrderEdit';
import OrderList from './OrderList';
import OrderShow from './OrderShow';

export default {
    list: OrderList,
    create: OrderCreate,
    edit: OrderEdit,
    show: OrderShow,
    icon: ShoppingCartIcon,
    recordRepresentation: 'orderNumber',
};
