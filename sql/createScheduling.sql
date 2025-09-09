    CREATE TABLE psiDB.scheduling (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        dia DATE NOT NULL,
        hora TIME NOT NULL,
        sessao VARCHAR(20) NOT NULL
    );