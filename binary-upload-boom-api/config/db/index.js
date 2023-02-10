const {Pool} = require('pg');
const bcrypt = require("bcryptjs")

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD,
    port: 5432
})
const emailExists = async (email) => {
    const data = await pool.query("SELECT uid, first_name as firstName, last_name as lastName, username, email, password FROM users WHERE email=$1", [
        email,
    ]);

    if (data.rowCount === 0) return false;
    return data.rows[0];
};
const createUser = async ({username, lastName, firstName, email, password}) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const data = await pool.query(
        "INSERT INTO users(username, first_name, last_name, email, password) VALUES ($1, $2, $3,$4,$5) RETURNING uid, username, first_name as firstName, last_name as lastName, email",
        [username, firstName, lastName, email, hash]
    );

    if (data.rowCount === 0) return false;
    return data.rows[0];
};

const matchPassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
};

module.exports = {pool, emailExists, createUser, matchPassword};