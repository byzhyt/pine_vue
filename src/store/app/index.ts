export const useConfig = defineStore({
  id: 'config',
  state() {
    return {
      appVersion: 'pc' as string
    };
  },
  getters: {
    getAppVersion(state) {
      return state.appVersion;
    }
  },
  actions: {
    setAppVersion(data: string) {
      this.appVersion = data;
    }
  }
});

export const useToken = defineStore({
  id: 'token',
  state() {
    return {
      token: '' as string
    };
  },
  getters: {
    getToken(state) {
      return state.token;
    }
  },
  actions: {
    setToken(data: string = '') {
      this.token = data;
    }
  }
});

export const useUserInfo = defineStore({
  id: 'userInfo',
  state() {
    return {
      userInfo: {} as object
    };
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  actions: {
    setUserInfo(datas: Object = {}) {
      this.userInfo = datas;
    }
  }
});

// 快速获取
export const getUserInfo = () => useUserInfo().getUserInfo;
export const setUserInfo = (data: any) => useUserInfo().setUserInfo(data);
export const setToken = (data: string) => useToken().setToken(data);
export const getToken = () => useToken().getToken;
export const ConfigRunWindow = () => useConfig().setAppVersion(getAppVersion());
