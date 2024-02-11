# SETUP THE PROJECT
---
```bash
# clone the project with link:
git clone https://github.com/CrocAx/Express.js-MongoDB_task.git
```

### Create .env file for the database
```bash
# add .env file to the backend directory
touch Backend/.env
```

#### In the .env file you have to specify your database URL:
```bash
# default database url
MONGO_URI=mongodb://localhost:27017/*YourDatabaseName*
```
- Default API port is 3000. It can be modified in Frontend/src/contacts.js

```js
const BASE_URL = 'http://localhost:3000'; // Update with your backend URL
```

---
### Install Vite dependencies
```bash
# go to frontend directory 
cd Frontend/
npm install vite
```

### Install Express.js modules
```bash
# go to backend directory
cd Backend/
npm install express
```
---
## RUN THE PROJECT

```bash
# go to the root directory
npm run start
```