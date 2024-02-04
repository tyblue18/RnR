-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS Users WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

SOURCE './db/Users/user.cql';