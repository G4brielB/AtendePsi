CREATE TABLE psiDB.users(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(20),
    userType ENUM('admin','paciente'),
    password VARCHAR(255)
);