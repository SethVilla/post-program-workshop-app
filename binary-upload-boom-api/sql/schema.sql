CREATE TYPE valid_roles AS ENUM ('user', 'admin', 'super_admin');

CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role valid_roles DEFAULT 'user' NOT NULL
);

CREATE TABLE posts (
    pid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    cloud_id VARCHAR(255) NOT NULL,
    caption VARCHAR(255) NOT NULL,
    user_id INT references users(uid),
    date_created TIMESTAMP
);

CREATE TABLE comments (
  cid SERIAL PRIMARY KEY,
  comment VARCHAR(255) NOT NULL,
  user_id INT references users(uid)
);