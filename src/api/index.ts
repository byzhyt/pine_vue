export const authOauthToken = {
  url: '/oauth/token',
  type: 'post',
  loading: '登录中...',
  showMessage: true,
  prefix: '/auth',
  request: 'data'
};

export const authOauthCaptcha = {
  url: '/sso/verification',
  type: 'get',
  prefix: '/auth',
  request: 'data'
};

// 用户信息
export const authUserInfo = {
  url: '/user/user-info',
  type: 'get',
  prefix: '/auth',
  request: 'data'
};
// 所属租户
export const tenantList = {
  url: '/tenant/list',
  type: 'get',
  prefix: '/auth',
  request: 'data'
};

  