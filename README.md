## Getting Started

### Setting up the Database

First, install docker

```bash
npm run db:install
```

Use 'db:up' command to start up the server

Use 'db:down' command to shut down the server

```bash
# Starts up the database
npm run db:up

# Shuts down the database
npm run db:down
```

### Start the server

First, run the development server:

```bash
npm run dev
```

### Check the database

First access the cqlsh (CQL shell) in docker

```bash
# Runs the cqlsh on the database
npm run db:cqlsh
```

Then run commands to check the data

```cqlsh
SELECT * FROM Users.user;
```
