CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mascotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    raza VARCHAR(100),
    edad INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email) VALUES 
('Juan García', 'juan@example.com'),
('María López', 'maria@example.com');

INSERT INTO articulos (nombre, precio, descripcion) VALUES 
('Alimento Premium para Perros', 45.99, 'Alimento de alta calidad para perros adultos'),
('Collar Ajustable', 15.50, 'Collar ajustable para mascotas pequeñas');

INSERT INTO mascotas (nombre, tipo, raza, edad) VALUES 
('Max', 'Perro', 'Labrador', 3),
('Luna', 'Gato', 'Persa', 2);
