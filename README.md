# <p align = "center"> Project 21 - Tests Sign me a song </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Icaro Pavani-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/Icaro-pavani/projeto21-singmeasong?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description

Sign me a song is an app to post your favorites songs and these posts can be upvoted or downvoted by multiple people to create a ranking. Although, this project is focused in implemented tests suites to validate all functions and design of the application.

---

## :computer: Technologies and concepts

- REST APIs
- JWTs
- Node.js
- TypeScript
- PostgreSQL
- Prisma
- Express
- Jest
- Cypress

---

## 🏁 Running the tests

### Back-end

This project was created using TypeScript, [Node.js](https://nodejs.org/en/download/) and [PostgresSQL](https://www.postgresql.org/) as database. So, make sure do you have the last version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running localy.

Start cloning the in you local machine:

```
git clone https://github.com/Icaro-pavani/projeto21-singmeasong
```

After that, inside the [back-end](https://github.com/Icaro-pavani/projeto21-singmeasong/tree/main/back-end) cloned folder, run the command below to install the project dependencies.

```
npm install
```

After intall all packages, create a `.env` file with the right path to the database it will be used, as shown in `.env.example` file.

The test in the back-end are separate in two types:

- Integration tests: tests which will check the functionality of all routes of the project. These can be started with the command below.

```
npm run test:int
```

- Unity tests: tests which will check the functionality of all services functions of the application. These can be started with the command below.

```
npm run test:unit
```

Finally, all tests can be run together with:

```
npm test
```

### Front-end

This project was created using React create app. So, make sure do you have the last version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running localy.

Start cloning the in you local machine:

```
git clone https://github.com/Icaro-pavani/projeto21-singmeasong
```

After that, inside the [front-end](https://github.com/Icaro-pavani/projeto21-singmeasong/tree/main/front-end) cloned folder, run the command below to install the project dependencies.

```
npm install
```

After intall all packages, create a `.env` file as shown in `.env.example` file.

To run the tests at front-end, first is necessary to make the back-end online, so in the back-end folder run:

```
npm run dev:test
```

Now, back to the front-end folder, just need to execute the command:

```
npx cypress open
```

At last, navigate through Cypress application and select the tests you want to run:

```
add_music_post.cy.js

top_random_pages.cy.js

vote_music_post.cy.js
```
