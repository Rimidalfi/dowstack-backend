# DowStack API:

This API is designed to manage common _CRUD_ operations for the webapplication DowStack. The Base URL is :`https://dowstack.onrender.com/`
There are the following operations at this point in time:

- login `/login`
- register `/register`
- users `/users`
- income `/in`
- expenses `/out`

<br>

# User Operations:

### Login Operations (POST)

URL: `https://dowstack.onrender.com/login`

POST(client): `{email:String,password:String}`

Return(server):`{
	"msg": "Feedback Message",
    "_id": ObjectId
	"access": Boolean,
	"resCode": number
}`

resCodes:

- 0: -> Access ✅
- 1: -> No User with this Email is found! 🙅‍♂️
- 2: -> Access denied ❌

---

### Registration Operations (POST)

URL: `https://dowstack.onrender.com/register`

POST(client): `{username:String,email:String,password:String,balance:Number}`

Return(server):`{
	"msg": "Feedback Message",
    "user": String
	"created": Boolean,
	"resCode": number
}`

resCodes:

- 0: -> User created ✨
- 1: -> Email already exists! 📬
- 2: -> User NOT created(no data came from client) 🤷‍♂️

Example:

`POST`

`{
	"username":"Donald",
	"email":"donaldf@Duckburg.com",
    "password":"QuakQuak12345#",
	"balance":0
}`

`RETURN`

`{
	"msg": "User created",
	"user": "Donald",
	"created": true,
	"resCode": 0
}`

---

### GET Operations

GetAllUsers:
`https://dowstack.onrender.com/users/all`

GetSingleUserById:
`https://dowstack.onrender.com/users/:id`

---

### PUT Operations

URL:`https://dowstack.onrender.com/users/settings`

PUT(client):
`{
	"userId": ObjectId,
	"updateData":{
		"username":String,
		"password":String,
		"email":String,
		"balance":number
	}
}`

`userId` is required!

`updateData` is an object with the files to update. You can change _username_, _password_, _email_ & _balance_ individualy or all together. For Example `userData:{balance:175}` only changes the balance to 175.

---

### DELETE Operations

URL:`https://dowstack.onrender.com/users/delete`

DELETE(client):
`{
	"userId": ObjectId
}`

`userId` is required!

<br>

---

# Income:

### GET Operations

GetAllIncome:
`https://dowstack.onrender.com/in/all`

GetSingleUserById:
`https://dowstack.onrender.com/in/users`

GET(client):
`{
	"userId": ObjectId,
}`

---

### PUT Operations

URL:`https://dowstack.onrender.com/users/settings`

PUT(client):
`{
	"userId": ObjectId,
	"updateData":{
		"username":String,
		"password":String,
		"email":String,
		"balance":number
	}
}`

`userId` is required!

`updateData` is an object with the files to update. You can change _username_, _password_, _email_ & _balance_ individualy or all together. For Example `userData:{balance:175}` only changes the balance to 175.

---

### DELETE Operations

URL:`https://dowstack.onrender.com/users/delete`

DELETE(client):
`{
	"userId": ObjectId
}`

`userId` is required!

---
