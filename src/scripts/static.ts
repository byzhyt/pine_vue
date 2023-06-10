// 菜单集
export const menuList = [
  {
    key: '100',
    describe: '状态',
    data: [
      {
        label: '启用',
        value: true
      },
      {
        label: '禁用',
        value: false
      }
    ]
  },
  {
    label: 'code',
    key: '1',
    request: 'data',
    describe: '物模型单位',
    value: 'prod_func_analog_unit'
  },
  {
    label: 'code',
    request: 'data',
    key: '2',
    describe: '解析类型',
    value: 'proto_handler_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '3',
    describe: '事件类型',
    value: 'system_prodfun_event_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '4',
    describe: '夜狼协议产品类型',
    value: 'protocol_yelang_product_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '5',
    describe: '夜狼协议状态',
    value: 'protocol_yelang_status'
  },
  {
    label: 'code',
    request: 'data',
    key: '6',
    describe: '物模型功能名称',
    value: 'system_prod_funct_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '7',
    describe: '夜狼设备类型',
    value: 'protocol_yelang_product_mdoel'
  },
  {
    label: 'code',
    request: 'data',
    key: '8',
    describe: '菜单类型',
    value: 'menu_category'
  },
  {
    label: 'code',
    request: 'data',
    key: '9',
    describe: '物模型数据类型',
    value: 'system_prod_funct_data_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '10',
    describe: '按钮功能',
    value: 'button_func'
  },
  {
    label: 'code',
    request: 'data',
    key: '11',
    describe: '国标系统类型',
    value: 'GB26875_system_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '12',
    describe: '国标部件类型',
    value: 'GB26875_unit_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '13',
    describe: '用户平台',
    value: 'user_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '14',
    describe: '计量单位',
    value: 'analog_quantity'
  },
  {
    label: 'code',
    request: 'data',
    key: '15',
    describe: '系统第三方账号类型',
    value: 'system_account_type'
  },
  {
    label: 'code',
    request: 'data',
    key: '16',
    describe: '产品状态',
    value: 'system_product_status'
  },
  {
    key: '17',
    describe: '所属角色',
    request: 'data',
    axios: rolePage
  },
  {
    key: '18',
    describe: '所属项目',
    request: 'data',
    axios: projectTenantList
  },
  {
    key: '19',
    describe: '所属租户',
    request: 'data',
    axios: tenantList
  }
];


