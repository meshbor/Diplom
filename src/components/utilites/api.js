const onResponse = (res)=>{
    return res.ok ? res.json(): Promise.reject(`ошибка : ${res.status}`);
}; 

class Api{
constructor ({baseUrl, headers}){
this._headers = headers;
this._baseUrl = baseUrl
}
getPostList(){
    return fetch(`${this._baseUrl}/v2/group-9/posts`,{headers: this._headers}).then(onResponse).then((result) => {
        console.log(result);
        return result;
      });
}

getUserInfo(){
    return fetch(`${this._baseUrl}/users/me`,{headers: this._headers}).then(onResponse).then((result) => {
        console.log(result);
        return result;
      });
};

}
const config = {
    baseUrl : ' https://api.react-learning.ru',
    headers : {
        "Content-Type": "application/json",
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2QyZTRmMjU5Yjk4YjAzOGY3N2FjNjciLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2NzQ3NjU2NjUsImV4cCI6MTcwNjMwMTY2NX0.X1_UMZ32ET1bh0_ZGfv2t3RFqL7YTcpU7q1EA_GgHJc'

    },
    groupId: '/v2/group-9'

// baseUrl : ' https://api.react-learning.ru',
  //   headers : {
    //    "Content-Type": "application/json",
      //   authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2QyZTRmMjU5Yjk4YjAzOGY3N2FjNjciLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2NzQ3NjU2NjUsImV4cCI6MTcwNjMwMTY2NX0.X1_UMZ32ET1bh0_ZGfv2t3RFqL7YTcpU7q1EA_GgHJc'

     //},
   



}

const api = new Api(config);
export default api;
