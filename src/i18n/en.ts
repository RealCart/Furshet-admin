import englishMessages from 'ra-language-english';

export const messages = {
    simple: {
        action: {
            close: 'Закрыть',
            resetViews: 'Сбросить просмотры',
        },
        'create-post': 'Новый пост',
    },
    ...englishMessages,
    resources: {
        posts: {
            name: 'Пост |||| Посты',
            fields: {
                commentable_short: 'Ком.',
                commentable: 'Можно комментировать',
                notifications: 'Получатели уведомлений',
                nb_view: 'Просмотры',
                nb_comments: 'Комментарии',
                password: 'Пароль (если пост защищен)',
                pictures: 'Связанные изображения',
            },
            notifications: {
                created: 'Пост создан |||| %{smart_count} постов создано',
                updated: 'Пост обновлен |||| %{smart_count} постов обновлено',
                deleted: 'Пост удален |||| %{smart_count} постов удалено',
            },
        },
        comments: {
            name: 'Комментарий |||| Комментарии',
            fields: {
                post_id: 'Пост',
            },
            notifications: {
                created: 'Комментарий создан |||| %{smart_count} комментариев создано',
                updated: 'Комментарий обновлен |||| %{smart_count} комментариев обновлено',
                deleted: 'Комментарий удален |||| %{smart_count} комментариев удалено',
            },
        },
        users: {
            name: 'Пользователь |||| Пользователи',
            fields: {
                name: 'Имя',
                role: 'Роль',
            },
            notifications: {
                created: 'Пользователь создан |||| %{smart_count} пользователей создано',
                updated: 'Пользователь обновлен |||| %{smart_count} пользователей обновлено',
                deleted: 'Пользователь удален |||| %{smart_count} пользователей удалено',
            },
        },
    },
    post: {
        list: {
            search: 'Поиск',
        },
        form: {
            summary: 'Кратко',
            body: 'Содержимое',
            miscellaneous: 'Разное',
            comments: 'Комментарии',
        },
        edit: {
            title: 'Пост "%{title}"',
        },
        action: {
            save_and_edit: 'Сохранить и редактировать',
            save_and_add: 'Сохранить и добавить',
            save_and_show: 'Сохранить и показать',
            save_with_average_note: 'Сохранить с оценкой',
        },
    },
    comment: {
        list: {
            about: 'О',
        },
    },
    user: {
        list: {
            search: 'Поиск',
        },
        form: {
            summary: 'Кратко',
            security: 'Безопасность',
        },
        action: {
            save_and_add: 'Сохранить и добавить',
            save_and_show: 'Сохранить и показать',
        },
    },
};

export default messages;
