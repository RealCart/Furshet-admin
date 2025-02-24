import FoodCategoryCreate from "./FoodCategoryCreate";
import FoodCategoryEdit from "./FoodCategoryEdit";
import FoodCategoryList from "./FoodCategoryList";
import FoodCategoryShow from "./FoodCategoryShow";

export default {
    create: FoodCategoryCreate,
    edit: FoodCategoryEdit,
    list: FoodCategoryList,
    show: FoodCategoryShow,
    recordRepresentation: 'name.en', // представление записи по полю name на английском
};
