class Api{
constructor ({baseUrl, headers}){
this._headers = headers,
this.baseUrl = baseUrl
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