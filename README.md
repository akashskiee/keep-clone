# keep-mern
A keeper clone MERN stack application. The Client React is taken from Angela Yu's "The Complete 2020 Web Development Bootcamp" course,
I have added Mongo DB to store the keeps and have included Authentication (Register, Login, Forgot Password) for users.

checkout the app at - https://afternoon-everglades-28958.herokuapp.com/


# Quick Start 🚀

## Git clone or Fork the repository

## Add a .env file

```dotenv
DB_USER=[Your mongodb atlas/ localdb user]
DB_PASS=[Your mongodb atlas/ localdb password]
JWT_SECRET=[Any long secret string]
EMAIL_LOGIN=[Your email id to send the reset password email using nodemailer]
EMAIL_PASSWORD=[Your email password]
```

## Install server dependencies

```javascript
npm install
```

## Install client dependencies

```javascript
cd client
npm install
```

## Run both Express & React from root folder

```javascript
npm run dev
```
---

# Screenshots

![Home page](https://github.com/akashpk97/keep-mern/blob/master/client/public/images/home.JPG)

![Home-edit page](https://github.com/akashpk97/keep-mern/blob/master/client/public/images/home-edit.JPG)

---

# App Info

## Author
Akash P Kumar

## Version
1.0.0

## Todo
- [ ] Profile Page
- [ ] Upload Avatar
- [ ] Edit Keep
- [ ] Share Keep
- [ ] Mobile Responsive
