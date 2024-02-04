-- Create a table
CREATE TABLE IF NOT EXISTS Users.user (
    userId UUID PRIMARY KEY,
    email TEXT,
    firstName TEXT,
    lastName TEXT,
    friends set<ASCII>
);

INSERT INTO Users.user (userId, email, firstName, lastName, friends)
VALUES (uuid(), 'Ragum@bot.com', 'Ragum', 'Pirani', { '27349844-16b6-402c-aaad-b60366da4fb4' });

INSERT INTO Users.user (userId, email, firstName, lastName, friends)
VALUES (uuid(), 'Meezu@bot.com', 'Meezan', null, {});

INSERT INTO Users.user (userId, email, firstName, lastName, friends)
VALUES (uuid(), 'Abid@bot.com', 'Abid', 'Yay', {});