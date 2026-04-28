<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webII_2026";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Error de conexión: " . $conn->connect_error]));
}

$conn->query("CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$conn->query("CREATE TABLE IF NOT EXISTS articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$conn->query("CREATE TABLE IF NOT EXISTS mascotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    raza VARCHAR(100),
    edad INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$tabla = $_GET['tabla'] ?? 'usuarios';
$id = $_GET['id'] ?? null;
$method = $_SERVER['REQUEST_METHOD'];

$tablas_permitidas = ['usuarios', 'articulos', 'mascotas'];
if (!in_array($tabla, $tablas_permitidas)) {
    http_response_code(400);
    echo json_encode(["error" => "Tabla no válida"]);
    exit();
}

switch ($method) {

    case 'GET':
        if ($id) {
            $stmt = $conn->prepare("SELECT * FROM $tabla WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $registro = $result->fetch_assoc();

            if ($registro) {
                echo json_encode($registro);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Registro no encontrado"]);
            }
        } else {
            $result = $conn->query("SELECT * FROM $tabla");
            $registros = [];

            while ($row = $result->fetch_assoc()) {
                $registros[] = $row;
            }

            echo json_encode($registros);
        }
    break;

    case 'POST':
        $input = json_decode(file_get_contents("php://input"), true);

        if ($tabla === 'usuarios') {
            if (!isset($input['nombre']) || !isset($input['email'])) {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos: nombre, email"]);
                break;
            }
            $stmt = $conn->prepare("INSERT INTO usuarios (nombre, email) VALUES (?, ?)");
            $stmt->bind_param("ss", $input['nombre'], $input['email']);
            
        } elseif ($tabla === 'articulos') {
            if (!isset($input['nombre']) || !isset($input['precio'])) {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos: nombre, precio"]);
                break;
            }
            $descripcion = $input['descripcion'] ?? '';
            $stmt = $conn->prepare("INSERT INTO articulos (nombre, precio, descripcion) VALUES (?, ?, ?)");
            $stmt->bind_param("sds", $input['nombre'], $input['precio'], $descripcion);
            
        } elseif ($tabla === 'mascotas') {
            if (!isset($input['nombre']) || !isset($input['tipo'])) {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos: nombre, tipo"]);
                break;
            }
            $raza = $input['raza'] ?? '';
            $edad = $input['edad'] ?? 0;
            $stmt = $conn->prepare("INSERT INTO mascotas (nombre, tipo, raza, edad) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("sssi", $input['nombre'], $input['tipo'], $raza, $edad);
        }

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode([
                "message" => "Registro creado",
                "id" => $conn->insert_id
            ]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al crear: " . $stmt->error]);
        }
    break;

    case 'PUT':
        $input = json_decode(file_get_contents("php://input"), true);

        if ($tabla === 'usuarios') {
            if (!isset($input['id']) || !isset($input['nombre']) || !isset($input['email'])) {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos"]);
                break;
            }
            $stmt = $conn->prepare("UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?");
            $stmt->bind_param("ssi", $input['nombre'], $input['email'], $input['id']);
            
        } elseif ($tabla === 'articulos') {
            if (!isset($input['id']) || !isset($input['nombre']) || !isset($input['precio'])) {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos"]);
                break;
            }
            $descripcion = $input['descripcion'] ?? '';
            $stmt = $conn->prepare("UPDATE articulos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?");
            $stmt->bind_param("sdsi", $input['nombre'], $input['precio'], $descripcion, $input['id']);
            
        } elseif ($tabla === 'mascotas') {
            if (!isset($input['id']) || !isset($input['nombre']) || !isset($input['tipo'])) {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos"]);
                break;
            }
            $raza = $input['raza'] ?? '';
            $edad = $input['edad'] ?? 0;
            $stmt = $conn->prepare("UPDATE mascotas SET nombre = ?, tipo = ?, raza = ?, edad = ? WHERE id = ?");
            $stmt->bind_param("sssii", $input['nombre'], $input['tipo'], $raza, $edad, $input['id']);
        }

        if ($stmt->execute()) {
            echo json_encode(["message" => "Registro actualizado"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al actualizar: " . $stmt->error]);
        }
    break;

    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID no proporcionado"]);
            break;
        }

        $stmt = $conn->prepare("DELETE FROM $tabla WHERE id = ?");
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Registro eliminado"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error al eliminar: " . $stmt->error]);
        }
    break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}

$conn->close();
?>