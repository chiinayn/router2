import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListComponent.vue';
import Home from './components/HomeComponent.vue';
import Detail from './components/DetailComponent.vue';
import ErrPage from './components/ErrComponent.vue';
import Author from './components/AuthorComponent.vue'
import Comment from './components/CommentComponent.vue'

const routes = [
    {
        path : '/detail/:id',
        component : Detail,
        children : [
            {
                path : 'author',
                component : Author
            },
            {
                path : 'comment',
                component : Comment
            }
        ]
    },
    {
        path : '/list',
        component : List
    },
    {
        path : '/',
        component : Home
    },
    {
        path : '/:anything(.*)',
        component : ErrPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;