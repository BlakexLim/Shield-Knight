# full-stack-project

A simple web browser game utilizing the PERN stack.

Goal of the game is to reach the dragon as quickly as possible.
There are obstacles such as mountains and fireballs you must overcome.

---

## Demo
 - Live AWS Link: http://shield-knight-dev.us-west-1.elasticbeanstalk.com/
---

## Developing on this project

### Clone into your code editor container volume

1. Click the green/blue `<> Code` button, then copy **HTTPS**/**SSH** URL
1. Open your code editor
   1. Select `Clone Repository in Container Volume...`
   1. Paste **HTTPS**/**SSH** URL, click `Clone git repository from URL`


### Run and test project setup

#### Getting Started

1. Install all dependencies with `npm install`.

#### Create the database

1. Start PostgreSQL
   ```sh
   sudo service postgresql start
   ```
1. Create database
   ```sh
   createdb shieldKnight
   ```

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

1. In a separate terminal, run `npm run db:import` to create the tables.
1. Use `psql` to verify the tables were created successfully.

        psql -d shieldKnight -c '\dt'
