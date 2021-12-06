export const getCurrentUser = async () => {
  return fetch('http://yapi.smart-xwork.cn/mock/66005/api/current-user').then((res) => res.json());
};
