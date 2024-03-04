const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json())
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gamemates'
})

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10); // Хешируем пароль

    // Проверяем, существует ли уже пользователь с такой почтой или именем
    const checkExistingUserSql = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(checkExistingUserSql, [email, username], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Registration failed' });
        }

        if (result.length > 0) {
            // Пользователь с такой почтой или именем уже существует
            return res.status(400).json({ error: 'User with this email or username already exists' });
        }

        // Добавляем нового пользователя, если нет существующих записей с такой почтой или именем
        const insertUserSql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
        const values = [username, email, hashedPassword, 'user']; // Добавляем 'user' как значение роли по умолчанию
        db.query(insertUserSql, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Registration failed' });
            }
            return res.status(200).json({ message: 'Registration successful' });
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Login failed' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const user = result[0];
        if (!bcrypt.compareSync(password, user.password)) { // Сравниваем хешированный пароль
            return res.status(401).json({ error: 'Invalid password' });
        }

        // После успешной аутентификации добавляем роль пользователя в объект user
        const responseObject = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role // Добавляем роль в объект
        };

        return res.status(200).json(responseObject);
    });
});

// // Защищенный маршрут для получения информации о текущем пользователе
// app.get('/current-user', (req, res) => {
//     if (!req.session.user) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
//     return res.status(200).json(req.session.user);
// });



app.listen(5000, () => {
    console.log('Server started on http://localhost:5000')
});
