# Ensolvers todo app
### App creada para el desafio de ensolvers.

Aplicacion todo simple que permite crear, editar y borrar todos, y tambien almacenarlos en distintas carpetas.
Implementa funcionalidad de login basica haciendo uso de JWT. El cliente para autentificarse envia su token como header de todas sus peticiones.
Para mantener persistencia de sesiones guardo el token en el local storage del navegador.

## Deploy
Deployed en [Heroku](https://ensolvers-to-do-app.herokuapp.com/folder)

#### Usuario de prueba
testUser : 123456

## Tecnologias

Frontend desarrollado con react y styled componentes.

Backend desarrollado con nodejs, express y sequelize ORM con postgresql como base de datos.

---

## Para correr la app localmente
Es necesario tener instalado npm >= 8 y node >=16

1. Crear el archivo .env en el directorio backend
2. En el archivo .env establecer en la variable de entorno JWT_SECRET un string que la app usara como secreto JWT
3. Establecer tambien la variable DATABASE_URL, que debe contener una URL a una base de datos postgresql.
4. Ejecutar start.sh en el directorio raiz del repo.

Por defecto la app es hosteada en localhost:5501, el puerto pude ser modificado con la variable de entorno PORT.

---

## Algunos cambios que hubiera hecho si hubiese tenido mas tiempo:

* Hashear las contraseñas antes de guardarlas en la base de datos
* Mejorar la validacion de input en las rutas del backend
* Implementar test para los servicios del backend
* Implementar las optimistic update del cliente con alguna libreria.

---

#### Mas sobre las optimistic update

La forma en la que estan implementadas en este momento tiene algunos fallos, si el usuario interactura con un objeto creado por una optimistic update antes de que el servidor responda, la accion sera ejecutada con la id temporal del objeto en lugar de con la id que le asigno el servidor. Para arreglar esto se me ocurren dos soluciones:
1. Usar una libreria que realice las request, como apollo o react query
2. Cuando ejecuto una accion sobre un objeto que tiene una id temporal, espero a que el server responda y la envio pasado ese momento. 
