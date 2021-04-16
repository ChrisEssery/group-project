## API Descriptions / Specification

- API address:  http://localhost:3000/api (default)   ||   http://localhost:${process.env.PORT}/api
- Interface authentication: Uniform use of Token authentication (based on JSON Web Token)
- Interfaces that require authorization must provide the request header field X-Access-Token information
- Use the HTTP Status Code to identify the Status
- The data is transferred in a uniform format using JSON
- Web APIs are designed according to the Representational State Transfer (REST) architectural style.
<br>
<br>

### Returned Status Code Specification

| status code | Meaning                              | Notes                                                        |
| ----------- | ------------------------------------ | ------------------------------------------------------------ |
| 200         | OK                                   |                                                              |
| 201         | CREATED                              |                                                              |
| 204         | DELETED                              |                                                              |
| 400         | BAD REQUEST                          | The requested address does not exist or contains an unsupported parameter |
| 401         | UNAUTHORIZED                         | A validation error occurred while checking permission (e.g. invalid username or password) |
| 403         | FORBIDDEN                            |                                                              |
| 404         | NOT FOUND                            |                                                              |
| 409         | CONFLICT                             | A validation error occurred while creating an object, (e.g. conflict username) |
| 422         | Unprocesable entity [POST/PUT/PATCH] | A validation error occurred while creating an object         |
| 500         | INTERNAL SERVER ERROR                |                                                              |

<br>

### Handling Error 

When an error occurs, the HTTP Status Code is 4xx error, such as `400,403,404`

**Example response**

case: the user attempts to login with incorrect password

returned status code: `401`

returned data:

```
{
  error: 'invalid password'
}
```
<br>
<br>

## API Request & Response

**Overview**

- [x] [User Register](#User_Register)
- [x] [User Log in](#User_Log_In)
- [x] [User Sign out](#User_Log_Out)
- [ ] [Get a user 's personal information](#Get_a_user's_personal_information)
- [ ] [Get a user's friendlist](#Get_a_user's_friendlist)
- [ ] [Get a user's game history]#(Get_a_user's_game_history)
- [ ] [Update a user's personal information](#Update_a_user's_personal_information)
- [ ] [Add a friend to a user's friendlist](#Add_a_friend_to_a_user's_friendlist)
- [ ] [Add a new game instance](#Add_a_new_game_instance)
- [ ] [Get top users according to winning times](#Get_top_users_according_to_winning_times)
- [ ] [Get top users of a specific game according to the game score](#Get_top_users_of_a_specific_game_according_to_the_game_score)

<br>
<br>

### User Register

**Request:**

- HTTP Method: `POST`
- Path: `/users`
- Sent data:

```
{
   "username": "aaa",
   "email": "aaa@email.com",
   "password": "12345"
}
```

**Response:**

- Status code: `201`
- Returned data:

```
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTkxMzkxODY1OTN9.TaeRt9GQIF8tewkNj8hUtV_2OV3Nv8jO3slV1A7Cr50",
    "user": {
        "username": "aaa",
        "email": "aaa@email.com"
    }
}
```
<br>

### User Log In

**Request:**

- HTTP Method: `POST`
- Path: `/users/session`
- Sent data:

```
{
   "username": "ccc",
   "password": "12345"
}
```

**Response:**

- Status code: `201`
- Returned data:

```
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2MDc4ZTAzZTBiNWEzMDNmNGNmZjJmYTciLCJleHAiOjE2MTkxMzkzNzgyMzh9.ag0HFpkeDdIecpKRpEi9GXYDTHZWPwm_9VcXDxwQ_Co",
    "user": {
        "username": "ccc",
        "email": "ccc@email.com",
        "password": "12345"
    }
}
```
<br>
### User Log Out

**Request:**

- HTTP Method: `DELETE`
- Path: `/users/session`

**Response:**

- Status code: `204`



### Get a user 's personal information

**Request:**

- HTTP Method: `GET`
- Path: `/users/info/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

**Response:**

- Status code: `200`
- Returned data:

```
{
    "user": {
        "username": "aaa",
        "email": "aaa@email.com",
        "name": "aaa" ,
        "surname": "Smith",
        "age": 70,
        "gender": "male",
        "location": "bristol",
    }
}
```
<br>
### Get a user's friendlist

**Request:**

- HTTP Method: `GET`
- Path: `/users/friends/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

**Response:**

- Status code: `200`
- Returned data:

```
{
   "friends" : [
   {"username": "lily"},
   {"username": "bob"},
   {"username": "tom"}]
}
```
<br>
### Get a user's game history

**Request:**

- HTTP Method: `GET`
- Path: `/users/games/:username&&limit`

| parameters | isRequired | explanation                                      |
| ---------- | ---------- | ------------------------------------------------ |
| username   | YES        | username                                         |
| limit      | YES        | the number of games returned (according to time) |

**Response:**

- Status code: `200`
- Returned data:

```
{
   "username" : "aa",
   "gamesPlayed": [
   {
   "gamename" : "memory game".
   "playedWith": "bb",
   "date" : "2021-01-10",
   "result": "win"
   },
   {
   "gamename" : "connect 4".
   "playedWith": "cc",
   "date" : "2021-02-02",
   "result": "lose"
   }]
}
```
<br>
### Update a user's personal information

**Request:**

- HTTP Method: `PUT`
- Path: `/users/info/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

- Sent data:

```
{
   "email": "aaa@email.com",
   "name": "aaa" ,
   "surname": "Smith",
   "age": 70,
   "gender": "male",
   "location": "bristol",
}
        
```

**Response:**

- Status code: `201`
- Returned data:

```
{
    "result": "updated successfully"
}
```
<br>
### Add a friend to a user's friendlist

**Request:**

- HTTP Method: `POST`
- Path: `/users/friends/:username`

| parameters | isRequired | explanation |
| ---------- | ---------- | ----------- |
| username   | YES        | username    |

- Sent data:

```
{
   "friendName": "aaa"
}
        
```

**Response:**

- Status code: `201`
- Returned data:

```
{
    "result": "friend added successfully"
}
```
<br>

### Add a new game instance

#### 1. Add a new memory game instance

**Request:**

- HTTP Method: `POST`
- Path: `/api/games/memorygame`
- Sent data:


```
{
   "player1": "aaa", //player1's username
   "player2": "bbb",//player2's username
    "result": {
        "winners": ["aaa", "bbb"], //winners can be one or two
        "score": 12,
    },
    "difficultyLevel": "easy" //if there is a choice of difficulty level
}
```

**Response:**

- status code: 201

```
{
   "result": "game added successfully"
}
```

#### 2. Add a new connect 4 game instance

**Request:**

- HTTP Method: `POST`
- Path:  `/api/games/connect4`
- Sent Data


```
{
   "player1": "aa",
   "player2": "bb",
}
```

**Response:**

- status code: 201
- Returned data:

```
{
   "player1": "aaa", //player1's username
   "player2": "bbb",//player2's username
   "winner": "bbb"
   "difficultyLevel": "easy" //if there is a choice of difficulty level
}
```

<br>

### Get top users according to winning times

**Request:**

- HTTP Method: `GET`
- Path:  `/api/users/leaderboard/:limit`

| parameters | isRequired | explanation                        |
| ---------- | ---------- | ---------------------------------- |
| Limit      | YES        | the number of top players returned |

**Response:**

- status code: 200
- Returned data:

```
{
   "limit" : 3,
   "users": [
   {
   "username" : "aaa".
   "wins": 23,
   },
   {
   "username" : "bbb".
   "wins": 20,
   },
   {
   "username" : "ccc".
   "wins": 19,
   }]
}
```

<br>

### Get top users of a specific game according to the game score

**Request:**

- HTTP Method: `GET`
- Path:  `/api/games/memorygame/leaderboard`/:limit

| parameters | isRequired | explanation                        |
| ---------- | ---------- | ---------------------------------- |
| Limit      | YES        | the number of top players returned |

**Response:**

- status code: 200
- Returned data:

```
{
   "limit" : 3,
   "users": [
   {
   "username" : "aaa".
   "score": 10,
   },
   {
   "username" : "bbb".
   "score": 12,
   },
   {
   "username" : "ccc".
   "score": 13,
   }]
}
```

