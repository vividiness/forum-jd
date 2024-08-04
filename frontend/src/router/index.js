import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue';
import UserForm from '../components/UserForm.vue';
import UserDetail from '../components/UserDetail.vue';
import TopicHome from '@/components/TopicHome.vue';

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/users/create',
    name: 'CreateUser',
    component: UserForm
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true
  },
  {
    path: '/users/edit/:id',
    name: 'EditUser',
    component: UserForm,
    props: true
  },
  {
    path: '/topics/',
    name: 'TopicHome',
    component: TopicHome,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
