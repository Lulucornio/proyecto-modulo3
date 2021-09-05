# Proyecto: BEDU SOCIAL
Proyecto Final de la Fase 2 Módulo 3 BEDU-Santander

## Equipo 1
 
### Integrantes del equipo
* Gabriela Aideé Castillo Del Valle 
* Marco Antonio Galíndez Cortés 
* Karina Lizeth Ortiz Muñoz
* Lourdes Araceli García Eulogio 
* Juliet Guadalupe Quintero Rocha
 
# Definición general del proyecto #
## Descripción
Nuestro proyecto consiste en desarrollar un sistema con la temática de una red social para la comunidad de Bedu, el propósito principal es que los usuarios puedan ver los cursos que otros han tomado, y seguir a otros usuarios de su interés mediante un *follow* para ver sus publicaciones. 
El usuario podrá crear una cuenta para acceder a la red social, editar su perfil añadiendo información como su perfil de GitHub y los cursos que ha tomado en Bedu, también puede agregar publicaciones, así como editarlas y eliminarlas de su perfil. El usuario puede dar follow a otros usuarios de manera anónima para ver el contenido (publicaciones) realizadas por los demás en su muro y puede mirar los perfiles de otros para consultar información básica y cursos tomados por dichos usuarios.

## Estructura del proyecto
### Descripción de entidades
Las entidades que interactúan en nuestro proyecto son :

Usuarios, Publicaciones y Cursos

Estas entidades cuentan con los atributos:

* Usuarios : Id, Nombre de usuario, Nombre, Apellido, Correo, Password, Usuario de Github, Tipo (estudiante o profesor), Avatar, Lista de Cursos, Cantidad de Followers.
* Cursos: Id, Nombre del curso, Código del Curso.
* Publicaciones : Id, Título, Descripción (contenido), Tema, Autor.


Podemos ver la interacción entre :

* Usuarios - Cursos : Los usuarios añaden a su perfil los cursos que han tomado.

* Usuarios - Publicaciones : Los usuarios tienen la capacidad de hacer, editar, borrar y ver publicaciones.

* Usuarios - Usuarios : Los usuarios pueden dar follow a otros usuarios para observar sus publicaciones en la red social


### Historias de usuario
 1. Como usuario quiero registrarme en la red social para tener un perfil y acceder         
 2. Como usuario quiero acceder para mirar el muro con las publicaciones realizadas por los demás usuarios
 3. Como usuario quiero ir a mi perfil para subir una publicación
 4. Como usuario quiero dar click dentro de mi perfil a un usuario para mirar su perfil
 5. Como usuario quiero acceder al perfil de un usuario para agregarlo como amigo(follow)
 6. Como usuario quiero agregar  publicaciones para subir contenido 
 7. Como usuario quiero editar mis publicaciones para cambiar su contenido 
 8. Como usuario quiero borrar publicaciones para quitarlas de mi perfil
 9. Como usuario quiero agregar cursos, el profesor y la calificación de su desempeño en los cursos  que he participado
 10. Como usuario quiero editar mi informacion en mi perfil
 11. Como usuario quiero editar el curso, profesor que imparte y su calificación en mi perfil
 12. Como usuario quiero eliminar el curso, profesor que imparte y su calificación en mi perfil

### Casos de uso
* Perfil
  - Registrarse (creación de perfil)
  - Modificar perfil
  - Ver perfil (propio o de otro usuario)
  
* Publicación
  - Crear publicación
  - Ver publicación (propia o de otro usuario)
  - Editar publicación (propia)
  - Eliminar publicación (propia)
  
* Curso
  - Ver curso
  - Agregar curso (a la lista de cursos tomados)
  - Eliminar curso (de la lista de cursos tomados)
 
* Ver muro
* Dar follow a un amigo


[Diagramas de casos de uso](https://app.diagrams.net/#G1Q9Vrauep4LrImQzg6h1PACLoq0dmqOqh)
  
  
## Herramientas empleadas

En el proyecto utilizaremos Express para realizar el ruteo de la aplicación.
Se hará uso de body-parser para facilitar a Express leer el cuerpo de la petición.
Otra herramienta a utilizar es nodemon, ya que actualizará automáticamente el servidor a medida que vamos realizando cambios.

Para la base de datos se utilizará MongoDB.

## Estructura de las carpetas del proyecto

```bash

proyecto-modulo3/
├── config/
├── controllers/
│   ├── courses.js
│   ├── posts.js
│   └── users.js
│
├── models/
│   ├── Course.js
│   ├── Post.js
│   └── User.js
│
├── routes/
│   ├── courses.js
│   ├── index.js
│   ├── posts.js
│   └── users.js
│
├── app.js
├── package-lock.json
├── package.json
├── .gitignore
└── README.md

```


## Instalación de dependencias

Para la instalación de las principales dependencias se deberá ejecutar el siguiente comando en la carpeta raíz del proyecto
```
npm i
```
Para utilizar nodemon, este se deberá instalar de forma global

```
npm install -g nodemon
```



