# Backend of Webapplication **"DowStack"**

## DowStack API:

### Basic Get Operations

GetAllUsers:
`https://dowstack.onrender.com/users/all`

GetSingleUserById:
`https://dowstack.onrender.com/users/:id`

---

### Login Operations

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

### Registration Operations

URL: `https://dowstack.onrender.com/register`

POST(client): `{username:String,email:String,password:String,balance:Number}`

Return(server):`{
	"msg": "Feedback Message",
    "email": String
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
