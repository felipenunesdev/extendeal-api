# Extendeal API

1. Clonar proyecto
2. Instalar dependencias
```
npm install
```
3. Levantar la API

```
npm run start:dev
```

Este proyecto usa la dependencia ```lowdb``` para utilizar un archivo json como base de datos: ```src/db/productos-db.json```

## Docker
----
### Levantar la app

```
docker build -t extendeal-api .
docker run -p 3001:3001 --name extendeal-api extendeal-api
```

- Se levanta la API en http://localhost:3001