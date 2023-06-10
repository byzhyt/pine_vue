import routes from './indexRouter';
window.onresize = () => ConfigRunWindow();
const router: any = createRouter({
  history: createWebHistory(),
  strict: true,
  routes
});
router.beforeEach((to: any, from: any, next: Function) => {
  next();
});

export default router;
