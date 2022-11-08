## Nodejs + CI + CD

### Setup

#### 1,

```js
npm init -y
```

#### 2,

```js
npm i express morgan cors helmet dotenv body-parser
```

#### 3,

```js
npm i -D nodemon colors mocha supertest
```

#### 4, Add script

```js
"start": "node src/index.js",
"dev": "nodemon --inspect src/index.js",
"test": "mocha ./__test__/* --exit"
```

### Start server

```js
npm run dev
```

### Test

```js
npm test
```
