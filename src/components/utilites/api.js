const onResponse = (res)=>{ 
    return res.ok ? res.json(): Promise.reject(`ошибка : ${res.status}`);
}; // асинхронщина. если пришел ответ от сервера, то обрабатываем его json-ом, если нет - то вернет номер ошибки

class Api{ // задаем класс апи, делаем конструктор
constructor ({baseUrl, headers}){
this._headers = headers;
this._baseUrl = baseUrl
}
getPostList(){  // делаем запрос на сервер на получение постов, согласно документации от "бэка"
    return fetch(`${this._baseUrl}/v2/group-9/posts`,{headers: this._headers}).then(onResponse).then((result) => {
        // console.log(result);
        return result; // обязательно ретерним результат
      });
}

getUserInfo(){  // делаем запрос на сервер на получение информацию о пользователе, согласно документации от "бэка"
    return fetch(`${this._baseUrl}/users/me`,{headers: this._headers}).then(onResponse).then((result) => {
        // console.log(result);
        return result;
      });
};

changeLikePosts(postId, isLike) {

    return fetch(`${this._baseUrl}/v2/group-9/posts/likes/${postId}`,
    {headers: this._headers,
        method: isLike ? 'DELETE' : 'PUT',
    }).then(onResponse).then((result) => {
        // console.log(result);
        return result;
      });
}
getPostsById(idPost) {
    return fetch(`${this._baseUrl}/v2/group-9/posts/${idPost}`, {
        headers: this._headers
    }).then(onResponse)
}
}


const config = {
    baseUrl : ' https://api.react-learning.ru',
    headers : {
        "Content-Type": "application/json",
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2QyZTRmMjU5Yjk4YjAzOGY3N2FjNjciLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2NzQ3NjU2NjUsImV4cCI6MTcwNjMwMTY2NX0.X1_UMZ32ET1bh0_ZGfv2t3RFqL7YTcpU7q1EA_GgHJc'

    },
    groupId: '/v2/group-9'




}

const api = new Api(config); // создаем экземпляр класса и прокидываем конфиг, указанный в документации от "бэка"
export default api; // экспортируем наш экземпляр
