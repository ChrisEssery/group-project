#### HTTP

Web APIs are designed according to the Representational State Transfer (REST) architectural style.

The data is sent and returned in a uniform format using JSON Object

| status code | Meaning                              | Notes                                                        |
| ----------- | ------------------------------------ | ------------------------------------------------------------ |
| 200         | OK                                   |                                                              |
| 201         | CREATED                              |                                                              |
| 204         | DELETED                              |                                                              |
| 400         | BAD REQUEST                          | The requested address does not exist or contains an unsupported parameter |
| 401         | UNAUTHORIZED                         |                                                              |
| 403         | FORBIDDEN                            |                                                              |
| 404         | NOT FOUND                            |                                                              |
| 409         | Conflict                             | A validation error occurred while creating an object         |
| 422         | Unprocesable entity [POST/PUT/PATCH] | A validation error occurred while creating an object         |
| 500         | INTERNAL SERVER ERROR                |                                                              |

### ERROR

When an error occurs, the HTTP Status Code is 4xx error, such as 400,403,404

Format:
return a error message

```
{
  error: 'username invalid'
}
```


### Create a new game instance

**Request:**

HTTP Method: `POST`

Path: `/api/games/memorygame` OR `/api/games/connect4`


```
{
   "player1": "aa",
   "player2": "bb",
}
```

**Response:**

status code: 201
```
{
   "gamename" : "memory game".
   "player1": "aa",
   "player2": "bb",
    "date" : "YYYY-mm-dd"
}
```

### Add a winning record to a player

**Request**

HTTP Method: `POST`

Path: `/api/users/wins/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username     |


**Response:**

status code: 201
```
{
   "result message" :"OK"
}
```


### Create a new user (to be completed using token)

HTTP Method: `POST`

Path: `/api/users`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |
| email      | YES        | email       |
| Password   | YES        | password    |

```
{
   "username": "lily",
   "email": "lily@email.com",
   "password": "12345"
}
```


### Get the friendlist of a user

**Request**

HTTP Method: `GET`

Path: `/api/users/friends/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |


**Response**
status code: 200

```
{
   "friends" : [
   {
   "username": "lily",
   "age": "",
   "location": "",
   "gender": "",
   "name": "",
   "surname": "",
   },
   {
   "username": "bob",
   "age": "",
   "location": "",
   "gender": "",
   "name": "",
   "surname": "",
   },
   {
   "username": "tom",
   "age": "",
   "location": "",
   "gender": "",
   "name": "",
   "surname": "",
   }]
}
```


### Get the personal information of a user

**Request**

HTTP Method: `GET`

Path: `/api/users/info/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |


**Response**
status code: 200
```
{
   "username": "lily",
   "age": "",
   "location": "",
   "gender": "",
   "name": "",
   "surname": "",
}
```


### Get the game instances of a user
**Request**

HTTP Method: `GET`

Path: `/api/users/game_instances/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |


**Response**
status code: 200

```
{
   "gameinstance": [
   {
   "gamename" : "memory game".
   "player1": "aa",
   "player2": "bb",
    "date" : "YYYY-mm-dd"
   },
   {
   "gamename" : "connect 4".
   "player1": "aa",
   "player2": "cc",
    "date" : "YYYY-mm-dd"
   }]
}
```


### Add a friend to a user's friendlist
**Request**

HTTP Method: `POST`

Path: `/api/users/friends/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

**Response**
status code : 201

```
{
   "username": "lily",
   "age": "",
   "location": "",
   "gender": "",
   "name": "",
   "surname": "",
}
```



### Update a user's personal information
**Request**

HTTP Method: `PUT`

Path: `/api/users/info/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

**Response**
```
{
   "result message": "OK",
}
```



### Get the rank based on user win times
**Request**

HTTP Method: `GET`

Path: `/api/leaderboard/:limit`

| parameters | isRequired | explanation       |
| ---------- | ---------- | ----------------- |
| limit      | YES        | top numbers limit |

**Response**
status code: 200
```
{
   [
   {
   "rank" : 1,
   "username" : "aaa"
   "wins": 10
   },
   {
    "rank" : 2,
    "username" : "bbb",
    "wins": 8
   },
   {
    "rank" : 3,
    "username" : "ccc",
    "wins": 6
   }]
}
```


## [test database](https://cloud.mongodb.com/v2/607757d7e20e220444c4632a#metrics/replicaSet/60775a4bd3357825deb23168/explorer/test/users/find)


## User

**User Register**

HTTP method: POST

Request path: /api/users

Request:

```
{
   "email": "aaa@email.com",
   "password": "123456",
   "userName": "aaa",
}
```

Response:

if successful:

```
//generate a token for user authentication
const token = jwt.encode({
    iss: body.id, 
    exp: moment().add('days', 7).valueOf() 
  }, 'itcast')
```

Status: 201

```
{
   "userId": 1,
   "username": "xxx",
   "email": "xxxx"
}
```



```
JSON OBJECT
{
   token,
   "user": body
}
```

```
res.status(201).json({
   token,
   user: body
})
```



if conflict:

Status: 409

```
//JSON OBJECT
{
   "error": "Username conflict"
}
```

