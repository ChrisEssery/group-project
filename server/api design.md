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
| 422         | Unprocesable entity [POST/PUT/PATCH] | A validation error occurred while creating an object         |
| 500         | INTERNAL SERVER ERROR                |                                                              |

### ERROR

When an error occurs, the HTTP Status Code is 4xx error, such as 400,403,404

Format:

```
{
  error: 'username invalid'
}
```

## Return value:

- GET /collection：Returns a list (array) of resource objects

- GET /collection/resource：Returns a single resource object
- POST /collection：
- PUT /collection/resource：
- PATCH /collection/resource:
- DELETE /collection/resource：

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



**USER Login**

HTTP method: GET

Request path: /api/users



**Get User specific info**

HTTP method: GET

Request path: /api/users/(specific title)



**Add friend**

HTTP method: PATCH/PUT

Request path: /api/users/(parameters? like two user ids)



**Sign out**

WAY 1:

PATCH

Api/users/online



WAY2:

Using express session

DELETE 

Api/session



**CREATE A GAME INSTANCE**

POST

Api/games/:game_name



**END A GAME INSTANCE**

DELETE

 DELETE localhost:3000/api/game_instance

 POST localhost:3000/api/endagameinstance

save the record to the user db

https://www.youtube.com/watch?v=vjf774RKrLc



## GAME: 

### Create a new game instance

HTTP Method: `POST`

Path: `/api/games/memorygame` OR `/api/games/connect4`

Request:

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| player1    | YES        | user_id     |
| player2    | YES        | user_id     |

```
{
   "player1": 1,
   "player2": 2,
}
```



### Add a winning record to a player

HTTP Method: `POST`

Path: `/api/users/wins`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | user_id     |

```
{
   "username": lily
}
```



### Create a new user

HTTP Method: `POST`

Path: `/api/users`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |
| email      | YES        | email       |
| Password   | YES        | password    |

```
{
   "username": lily,
   "email": lily@email.com,
   "password": 12345
}
```



### Get the friendlist of a user

HTTP Method: `GET`

Path: `/api/users/friends`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

```
{
   "username": lily,
}
```



### Get the personal information of a user

HTTP Method: `GET`

Path: `/api/users/info`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

```
{
   "username": lily,
}
```



### Get the game instances of a user

HTTP Method: `GET`

Path: `/api/users/game_instances`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

```
{
   "username": lily,
}
```



### Add a friend to a user's friendlist

HTTP Method: `POST`

Path: `/api/users/friends`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

```
{
   "username": lily,
}
```



### Update a user's personal information

HTTP Method: `POST`

Path: `/api/users/info`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

```
{
   "username": lily,
}
```



### Get the rank based on user win times

HTTP Method: `GET`

Path: `/api/leaderboard`

| parameters | isRequired | explanation       |
| ---------- | ---------- | ----------------- |
| limit      | YES        | top numbers limit |

```
{
   "limit": 10,
}
```

## [test database](https://cloud.mongodb.com/v2/607757d7e20e220444c4632a#metrics/replicaSet/60775a4bd3357825deb23168/explorer/test/users/find)
