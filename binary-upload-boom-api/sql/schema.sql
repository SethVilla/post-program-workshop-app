-- Connect to PSQL
-- psql -U <username>

-- Create DB
-- DATABASE <dbname>;

-- Connect to DB
-- \c <dbname>

-- Add user roles enum
CREATE TYPE valid_roles AS ENUM ('user', 'admin', 'super_admin');

-- Create Table users
CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role valid_roles DEFAULT 'user' NOT NULL
);

-- Create Table posts
CREATE TABLE posts (
    pid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    cloud_id VARCHAR(255) NOT NULL,
    caption VARCHAR(255) NOT NULL,
    user_id INT references users(uid),
    date_created TIMESTAMP
);

-- Create Table comments
CREATE TABLE comments (
  cid SERIAL PRIMARY KEY,
  comment VARCHAR(255) NOT NULL,
  user_id INT references users(uid)
);

-- DROP TABLE <TABLE NAME> IF YOU WANT TO START OVER

-- Create a .env file in the binary upload boom api folder

-- Paste the following below with your info
-- DB_USER="<your computer username>"
-- HOST="localhost"
-- DATABASE_NAME="<db name>"
-- PASSWORD="<username password>"
-- CLOUD_NAME="<cloudinary sdk name>"
-- CLOUD_API_KEY="<cloudinary api key>"
-- CLOUD_API_SECRET="<cloudinary secret>"