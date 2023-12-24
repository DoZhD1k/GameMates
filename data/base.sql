CREATE TABLE user_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT,
    rank VARCHAR(255),
    game VARCHAR(255),
    language VARCHAR(255),
    game_mode VARCHAR(255)
);

CREATE TABLE valorant_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    age INT,
    language VARCHAR(255),
    rank VARCHAR(255),
    game_modes VARCHAR(255),
    microphone BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES user_profiles(id)
);
