import { instance } from "./base";
console.log(instance);
export const loginAction =  async ({ phoneNumber, code, areaCode, accessToken, tokenType }) => {
  return await instance.post('/api/admin/user/capital/phone/token', { phoneNumber, code, areaCode }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `${tokenType} ${accessToken}`,
      realm: 0
    }
  });
};