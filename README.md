# full-stack-project

A simple web browser game utilizing the PERN stack.

## Getting Started

---

### Use this template to create a new repo on your GitHub account

1. Click the green/blue `Use this template` button, select `Create a new repository`
   1. Under `Owner` select your username
   1. Give your repository a name. Name it after your application. The name `full-stack-project` is _not_ a good name.
   1. (Optional) Add a description
   1. Leave repository as `Public`
   1. **DO NOT** Include all branches
   1. Click the green `Create repository from template` button

---

## Demo

---

 - Live AWS Link: http://shield-knight-dev.us-west-1.elasticbeanstalk.com/

### Clone Newly created repo into `lfz-code`

1. From your newly created repo on GitHub, click the green/blue `<> Code` button, then copy **HTTPS**/**SSH** URL
1. Open `VS code`, click on `><` button in bottom left
   1. Select `Clone Repository in Container Volume...`
   1. Paste **HTTPS**/**SSH** URL for your repo, click `Clone git repository from URL`

---

### Run and test project setup

#### Getting Started

1. Install all dependencies with `npm install`.

#### Create the database

If your project will be using a database, create it now.

1. Start PostgreSQL
   ```sh
   sudo service postgresql start
   ```
1. Create database (replace `name-of-database` with a name of your choosing, such as the name of your app)
   ```sh
   createdb name-of-database
   ```
1. In the `server/.env` file, in the `DATABASE_URL` value, replace `changeMe` with the name of your database, from the last step
1. While you are editing `server/.env`, also change the value of `TOKEN_SECRET` to a custom value, without spaces.
1. Make the same changes to `server/.env.example`.

If your project will _not_ be using a database, edit `package.json` to remove the `dev:db` script.

#### Start the development servers

1. Start all the development servers with the `"dev"` script:
   ```sh
   npm run dev
   ```
1. Later, when you wish to stop the development servers, type `Ctrl-C` in the terminal where the servers are running.

#### Verify the client

1. A React app has already been created for you.
1. Go to the browser and enter http://localhost:5173/, the app should be running

#### Set up the database

1. In a separate terminal, run `npm run db:import` to create your tables (rename them as you wish, but make sure the names are changed in ever table they are referenced).
1. Use `psql` to verify your tables were created successfully (see [LFZ Database Guide](https://lms.learningfuze.com/code-guides/Learning-Fuze/curriculum/database) for tips).
1. After any changes to `database/schema.sql` or `database/data.sql` re-run the `npm run db:import` command to update your database. Use `psql` to verify your changes were successfully applied.

---

### Available `npm` commands explained

Below is an explanation of all included `npm` commands in the root `package.json`. Several are only used for deployment purposes and should not be necessary for development.

1. `start`
   - The `start` script starts the Node server in `production` mode, without any file watchers.
1. `build`
   - The `build` script executes `npm run build` in the context of the `client` folder. This builds your React app for production. This is used during deployment, and not commonly needed during development.
1. `db:import`
   - The `db:import` script executes `database/import.sh`, which executes the `database/schema.sql` and `database/data.sql` files to build and populate your database.
1. `dev`
   - Starts all the development servers.
1. `lint`
   - Runs ESLint against all the client and server code.
1. Not directly used by developer
   1. `install:*`
   - These scripts install dependencies in the `client` and `server` folders, and copy `.env.example` to `.env` if it doesn't already exist.
   1. `dev:*`
   - These scripts start the individual development servers.
   1. `lint:*`
   - These scripts run lint in the client and server directories.
   1. `postinstall`
      - The `postinstall` script is automatically run when you run `npm install`. It is executed after the dependencies are installed. Specifically for this project the `postinstall` script is used to install the `client` and `server` dependencies.
   1. `prepare`
      - The `prepare` script is similar to `postinstall` — it is executed before `install`. Specifically for this project it is used to install `husky`.
   1. `deploy`
      - The `deploy` script is used to deploy the project by pushing the `main` branch to the `pub` branch, which triggers the GitHub Action that deploys the project.
