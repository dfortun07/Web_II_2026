# 📱 Sistema de Gestión - Usuarios, Artículos y Mascotas

## 🚀 Guía de Instalación y Configuración

### **PARTE 1: Configuración con XAMPP (PHP Local)**

#### 1.1 Requisitos Previos
- XAMPP instalado
- MySQL ejecutándose
- PHP habilitado

#### 1.2 Pasos de Configuración

1. **Copiar archivos al directorio de XAMPP:**
   ```
   C:\xampp\htdocs\Async-promesas\
   ```
   Copia toda la carpeta del proyecto aquí.

2. **Crear la base de datos:**
   - Abre phpMyAdmin: `http://localhost/phpmyadmin`
   - Click en "Nueva" base de datos
   - Nombre: `webII_2026`
   - Click en "Crear"

3. **Ejecutar el script SQL:**
   - En phpMyAdmin, selecciona la BD `webII_2026`
   - Ve a la pestaña "Importar"
   - Selecciona el archivo: `api/setup_database.sql`
   - Click en "Importar"

   **Resultado esperado:** Se crearán 3 tablas:
   - `usuarios` (id, nombre, email)
   - `articulos` (id, nombre, precio, descripcion)
   - `mascotas` (id, nombre, tipo, raza, edad)

4. **Verificar la conexión PHP:**
   - Abre tu navegador: `http://localhost/Async-promesas/screens/lista_usuarios.html`
   - Deberías ver la lista de usuarios (está vacía inicialmente)

#### 1.3 Archivos Principales

**Backend (API):**
- `api/conexion.php` - Gestiona todas las operaciones CRUD

**Frontend - Servicios:**
- `service/usuario_service.js` - Llamadas API para usuarios
- `service/articulo_service.js` - Llamadas API para artículos
- `service/mascota_service.js` - Llamadas API para mascotas

**Frontend - Controladores:**
- `controllers/usuario_controller.js` - Lógica de listado de usuarios
- `controllers/articulo_controller.js` - Lógica de listado de artículos
- `controllers/mascota_controller.js` - Lógica de listado de mascotas
- `controllers/formulario_usuario.js` - Formularios (crear/editar usuarios)
- `controllers/formulario_articulo.js` - Formularios (crear/editar artículos)
- `controllers/formulario_mascota.js` - Formularios (crear/editar mascotas)

**Frontend - Pantallas:**
- Usuarios: `lista_usuarios.html`, `registrar_usuario.html`, `editar_usuario.html`
- Artículos: `lista_articulos.html`, `registrar_articulo.html`, `editar_articulo.html`
- Mascotas: `lista_mascotas.html`, `registrar_mascota.html`, `editar_mascota.html`
- Confirmación: `registro_exitoso.html`, `edicion_completada.html`

---

### **PARTE 2: Migración a Supabase**

#### 2.1 Crear cuenta Supabase
1. Ve a https://supabase.com
2. Click en "Start your project"
3. Crea una cuenta con tu email
4. Crea un nuevo proyecto
5. Nombre: `gestion-app`
6. Región: elige la más cercana

#### 2.2 Crear tablas en Supabase

1. **Accede a SQL Editor** en el panel de Supabase
2. **Ejecuta este script:**

```sql
-- Tabla usuarios
CREATE TABLE usuarios (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla articulos
CREATE TABLE articulos (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla mascotas
CREATE TABLE mascotas (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    raza VARCHAR(100),
    edad INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE articulos ENABLE ROW LEVEL SECURITY;
ALTER TABLE mascotas ENABLE ROW LEVEL SECURITY;

-- Crear políticas públicas (sin autenticación)
CREATE POLICY "Enable all for users" ON usuarios FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for articulos" ON articulos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for mascotas" ON mascotas FOR ALL USING (true) WITH CHECK (true);
```

#### 2.3 Obtener las credenciales de Supabase

1. Ve a **Settings** → **API**
2. Copia:
   - **Project URL** (ejemplo: `https://xxxxx.supabase.co`)
   - **anon public** key

#### 2.4 Actualizar el código para usar Supabase

Abre cada archivo de servicio y actualiza:

**Ejemplo: `service/usuario_service.js`**

```javascript
const SUPABASE_URL = "https://xxxxx.supabase.co";  // Reemplaza con tu URL
const SUPABASE_KEY = "eyJhbGc...";  // Reemplaza con tu key pública
const TABLE = "usuarios";

const listarUsuarios = () => {
    return fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
        headers: {
            'apiKey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json());
};

const crearUsuario = (nombre, email) => {
    return fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
        method: 'POST',
        headers: {
            'apiKey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email })
    })
    .then(response => response.json());
};

// ... resto de funciones similar
```

**Repite esto para:**
- `service/articulo_service.js` (table: "articulos")
- `service/mascota_service.js` (table: "mascotas")

#### 2.5 Pruebas de Supabase

- Abre: `http://localhost/Async-promesas/screens/lista_usuarios.html`
- Crea un nuevo usuario
- Edita un usuario
- Elimina un usuario
- Verifica en Supabase Dashboard que los datos se sincronicen

---

## 📋 URLs de Acceso

**Local (XAMPP):**
- Usuarios: `http://localhost/Async-promesas/screens/lista_usuarios.html`
- Artículos: `http://localhost/Async-promesas/screens/lista_articulos.html`
- Mascotas: `http://localhost/Async-promesas/screens/lista_mascotas.html`

**Supabase Dashboard:**
- URL: `https://app.supabase.com`

---

## 🔧 Solución de Problemas

### Error: "Error de conexión a la base de datos"
- Verifica que XAMPP esté corriendo
- Verifica que MySQL esté iniciado
- Verifica que la BD `webII_2026` exista

### Error: "404 Not Found"
- Verifica que los archivos estén en `C:\xampp\htdocs\Async-promesas\`
- Verifica la ruta en los archivos de servicio

### Cambiar URL de API
Si necesitas cambiar de donde consume la API, edita:
- `service/usuario_service.js` - Variable `API_BASE`
- `service/articulo_service.js` - Variable `API_BASE`
- `service/mascota_service.js` - Variable `API_BASE`

---

## ✅ Checklist de Implementación

- [ ] XAMPP instalado y ejecutando
- [ ] Base de datos `webII_2026` creada
- [ ] Script SQL ejecutado
- [ ] Proyecto copiado a `htdocs`
- [ ] Pantalla de listado de usuarios cargando datos
- [ ] Crear nuevo usuario funcionando
- [ ] Editar usuario funcionando
- [ ] Eliminar usuario funcionando
- [ ] Lo mismo para artículos y mascotas
- [ ] Cuenta Supabase creada
- [ ] Tablas creadas en Supabase
- [ ] Credenciales Supabase actualizadas en servicios
- [ ] Migración a Supabase completa

---

¡Listo! 🎉 Tu aplicación está lista para usar tanto con XAMPP como con Supabase.
