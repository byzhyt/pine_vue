// 超级系统
export const TrinkingRouter = {
  path: '/',
  name: 'root',
  component: () => import('@/views/layout.vue'),
  redirect: 'home',
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue'),
      meta: {
        title: '首页',
        disabled: true,
        icon: 'House'
      }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/account.vue'),
      meta: {
        title: '账号管理',
        disabled: true,
        icon: 'User'
      }
    },
    {
      path: '/role',
      name: 'role',
      component: () => import('@/views/role.vue'),
      meta: {
        title: '角色管理',
        disabled: true,
        icon: 'Connection'
      }
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('@/views/company.vue'),
      meta: {
        title: '公司管理',
        disabled: true,
        icon: 'CopyDocument'
      }
    },
    {
      path: '/depart',
      name: 'depart',
      component: () => import('@/views/depart.vue'),
      meta: {
        title: '部门管理',
        disabled: true,
        icon: 'Collection'
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order.vue'),
      meta: {
        title: '订单管理',
        disabled: true,
        icon: 'Notebook'
      }
    }
  ],
  meta: {
    root: true,
    title: '熊猫管理云系统',
    icon: ''
  }
};
export default [
  TrinkingRouter,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      disabled: false,
      icon: '',
      title: '登录'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notfound.vue'),
    meta: {
      disabled: false,
      icon: '',
      title: '未找到页面'
    }
  }
];
