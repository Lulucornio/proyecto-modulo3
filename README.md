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
Nuestro proyecto consiste en desarrollar un sistema con la temática de una red social para la comunidad de Bedu. Nuestro propósito es crear una red social con las funcionalidades propias de un sistema como este, cumpliendo con las especificaciones del proyecto al implementar los temas que vemos en clase y complementando con nuestra investigación para lograr el mejor resultado.  

“Las redes sociales son comunidades formadas por diferentes usuarios y organizaciones que se relacionan entre sí en plataformas de Internet.” Rosario Peiró (03 de octubre, 2017).
Con esto en mente al momento de crear nuestro proyecto hemos establecido que las funcionalidades sean características que permitan cumplir con la finalidad de estas plataformas y que a la vez nos permitan implementar una API pues van de la mano en la manera que se necesita la información para su correcto funcionamiento.

El proyecto toma la temática central de la comunidad Bedu. Se permite la creación de cuenta para nuevos usuarios, ingresar información que detalla su perfil como Username, Nombre, perfil de Github, cursos tomados. [In progress...  ]


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
 1. Como nuevo usuario quiero registrarme en la red social para tener un perfil y acceder 
 2. Como usuario existente quiero acceder a la red social
 3. Como usuario quiero elegir un avatar (dentro de los que se muestran disponibles en la red social) en mi perfil
 4. Como usuario quiero agregar una descripción en mi biografía
 5. Como usuario quiero agregar cursos (de la lista) que he tomado
 6. Como usuario quiero eliminar cursos que he tomado
 7. Como usuario quiero acceder para mirar el muro con las publicaciones realizadas por los demás usuarios
 8. Como usuario quiero acceder al muro para agregar una publicación 
 9. Como usuario quiero acceder al muro para buscar personas
 10. Como usuario quiero hacer click al resultado de búsqueda de persona para mirar su perfil
 11. Como usuario quiero dar follow(anónimo) a una persona dentro de su perfil
 12. Como usuario quiero acceder a mi perfil para editar los campos permitidos
 13. Como usuario quiero eliminar mi publicacion
 14. Como usuario quiero acceder al muro para filtrar publicaciones por cantidad seleccionada
 15. Como usuario quiero acceder al muro para filtrar por tema de publicación

### Casos de uso
* Perfil
  - Registrarse (creación de perfil)
  - Modificar perfil
  - Ver perfil (propio o de otro usuario)
  
* Publicación
  - Crear publicación
  - Ver publicación (propia o de otro usuario)
  - Eliminar publicación (propia)
  
* Curso
  - Ver curso
  - Agregar curso (a la lista de cursos tomados)
  - Eliminar curso (de la lista de cursos tomados)
 
* Ver muro (todas las publicaciones)
* Buscar persona
* Mirar perfil externo
* Dar follow (anonimo)
* En el muro : Filtrar por tema de publicación
* En el muro : Filtrar publicaciones por cantidad



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



