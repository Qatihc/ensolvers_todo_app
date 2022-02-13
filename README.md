# Ensolvers todo app
### App creada para el desafio de ensolvers.

##### Frontend desarrollado con react y styled componentes.

##### Backend desarrollado con nodejs, express y sequelize con postgresql como base de datos.

Es necesario tener instalado npm 8

Para correr la app localmente
1. Crear el archivo .env en el directorio backend
2. En el archivo .env establecer en la variable de entorno JWT_SECRET un string que la app usara como secreto JWT
3. Establecer tambien la variable DB_URI, que debe contener una URI a una base de datos postgresql.
4. Ejecutar start.sh en el directorio raiz del repo.

Por defecto la app es hosteada en localhost:5501, el puerto pude ser modificado con la variable de entorno PORT.