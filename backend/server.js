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
    const { user_name, user_email, user_password } = req.body;
    const hashedPassword = bcrypt.hashSync(user_password, 10); // Хешируем пароль

    // Проверяем, существует ли уже пользователь с такой почтой или именем
    const checkExistingUserSql = 'SELECT * FROM users WHERE user_email = ? OR user_name = ?';
    db.query(checkExistingUserSql, [user_email, user_name], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Registration failed' });
        }

        if (result.length > 0) {
            // Пользователь с такой почтой или именем уже существует
            return res.status(400).json({ error: 'User with this email or username already exists' });
        }

        // Добавляем нового пользователя, если нет существующих записей с такой почтой или именем
        const insertUserSql = 'INSERT INTO users (user_name, user_email, user_password, user_role) VALUES (?, ?, ?, ?)';
        const values = [user_name, user_email, hashedPassword, 'user']; // Добавляем 'user' как значение роли по умолчанию
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
    const { user_email, user_password } = req.body;

    const sql = 'SELECT * FROM users WHERE user_email = ?';
    db.query(sql, [user_email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Login failed' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'User not found' });
        }

        const user = result[0];
        if (!bcrypt.compareSync(user_password, user.user_password)) { // Сравниваем хешированный пароль
            return res.status(401).json({ error: 'Invalid password' });
        }

        // После успешной аутентификации добавляем роль пользователя в объект user
        const responseObject = {
            id: user.user_id,
            username: user.user_name,
            email: user.user_email,
            role: user.user_role // Добавляем роль в объект
        };

        return res.status(200).json(responseObject);
    });
});

app.post('/adduser', (req, res) => {
    const { user_name, user_email, user_password, user_role } = req.body;
    const hashedPassword = bcrypt.hashSync(user_password, 10); // Хешируем пароль

    // Проверяем, существует ли уже пользователь с такой почтой или именем
    const checkExistingUserSql = 'SELECT * FROM users WHERE user_email = ? OR user_name = ?';
    db.query(checkExistingUserSql, [user_email, user_name], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Registration failed' });
        }

        if (result.length > 0) {
            return res.status(400).json({ error: 'User with this email or username already exists' });
        }
        const insertUserSql = 'INSERT INTO users (user_name, user_email, user_password, user_role) VALUES (?, ?, ?, ?)';
        const values = [user_name, user_email, hashedPassword, user_role];
        db.query(insertUserSql, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Registration failed' });
            }
            return res.status(200).json({ message: 'Registration successful' });
        });
    });
});


// // Защищенный маршрут для получения информации о текущем пользователе
// app.get('/current-user', (req, res) => {
//     if (!req.session.user) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
//     return res.status(200).json(req.session.user);
// });



// Изменение пользователя
app.put('/users/:user_id', (req, res) => {
    const userId = req.params.id;
    const { user_name, user_email, user_password, user_role } = req.body;
    const hashedPassword = bcrypt.hashSync(user_password, 10);
  
    const sql = 'UPDATE users SET user_name = ?, user_email = ?, user_password = ?, user_role = ? WHERE user_id = ?';
    const values = [user_name, user_email, hashedPassword, user_role, userId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update user' });
      }
      return res.status(200).json({ message: 'User updated successfully' });
    });
});
  
// Удаление пользователя
app.delete('/users/:user_id', (req, res) => {
    const userId = req.params.user_id;
    
    const sql = 'DELETE FROM users WHERE user_id = ?';
        
    db.query(sql, [userId], (err, result) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete user' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
    });
});


// app.put('/games/:game_id', (req, res) => {
//     const userId = req.params.id;
//     const { user_name, user_email, user_password, user_role } = req.body;
//     const hashedPassword = bcrypt.hashSync(user_password, 10);
  
//     const sql = 'UPDATE games SET game_name = ?, game_email = ?, game_password = ?, user_role = ? WHERE user_id = ?';
//     const values = [user_name, user_email, hashedPassword, user_role, userId];
  
//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Failed to update user' });
//       }
//       return res.status(200).json({ message: 'User updated successfully' });
//     });
// });
  
// Удаление игры
app.delete('/games/:game_id', (req, res) => {
    const gameId = req.params.game_id;
    
    const sql = 'DELETE FROM games WHERE game_id = ?';
        
    db.query(sql, [gameId], (err, result) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete user' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
    });
});



app.get('/users', (req, res) => {
    const sql = 'SELECT user_id, user_name, user_email, user_role, registration_date FROM users';
    db.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch users' });
      }
      return res.status(200).json(results);
    });
});

const sharp = require('sharp');

app.get('/games', (req, res) => {
    const sql = 'SELECT game_id, game_name, game_image, game_tags, game_ranks, game_mods FROM games';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to fetch users' });
        }

        // Преобразование изображений
        results.forEach(result => {
            if (result.game_image instanceof Buffer) {
                sharp(result.game_image)
                    .resize({ width: 200 }) // Указать желаемую ширину
                    .toBuffer((err, data, info) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        result.game_image = data.toString('base64');
                    });
            }
        });

        return res.status(200).json(results);
    });
});


  
  

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000')
});
