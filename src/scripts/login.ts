export default {
  rules: {
    username: [
      { required: true, message: '输入的用户名格式有误', pattern: /\S{2,10}/ }
    ],
    password: [
      {
        required: true,
        message: '输入的登录密码格式有误',
        pattern: /\S{2,20}/
      }
    ]
  },
  items: [
    {
      eltype: 'content',
      placeholder: '登录，物联网管理系统',
      className: 'font-30 font-weight text-primary text-center flex',
      visible: true,
      align: 'center'
    },
    {
      name: 'username',
      eltype: 'input',
      visible: true,
      maxlength: '20',
      minlength: '1',
      type: 'text',
      required: true,
      prefixIcon: 'el-icon-user',
      placeholder: '请输入手机号',
      className: ''
    },
    {
      name: 'password',
      eltype: 'input',
      type: 'password',
      maxlength: '20',
      minlength: '1',
      visible: true,
      required: true,
      prefixIcon: 'el-icon-lock',
      placeholder: '请输入密码'
    },
    {
      required: true,
      visible: true,
      name: 'code',
      append: true,
      eltype: 'authCode',
      request: 'data.image',
      maxlength: '6',
      minlength: '1',
      load: authOauthCaptcha,
      placeholder: '请输入验证码'
    },
    {
      eltype: 'button',
      visible: true,
      list: [
        {
          type: 'primary',
          path: '/home',
          visible: true,
          text: '登录',
          className: 'width-full button-primary'
        }
      ]
    }
  ]
};
export const footerList = [
  {
    label: '联网单位',
    divider: true,
    path: ''
  },
  {
    label: '监管单位',
    divider: true,
    path: ''
  },
  {
    label: '运维系统',
    divider: true,
    path: ''
  },
  {
    label: '物联网系统',
    divider: true,
    path: ''
  },
  {
    label: '联系我们',
    divider: true,
    path: ''
  },
  {
    label: '关于我们',
    path: ''
  }
];
export const getUserInfo = async () => {
  const { data } = await request(authUserInfo);
  return Promise.resolve(data.user);
};
