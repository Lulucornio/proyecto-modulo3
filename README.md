# proyecto-modulo3
Proyecto Final de la Fase 2 Modulo 3 BEDU-Santander

## Equipo 1
 
### Integrantes del equipo
[add ...]
* Juliet Guadalupe Quintero Rocha
 
# Definicion general del proyecto #
## Descripcion
Nuestro proyecto consiste en desarrollar un sistema con la temática de una red social para la comunidad de Bedu. Se permite al usuario crear una cuenta para acceder a la red social, editar su perfil, follow(amigo) con los usuarios, mirar el contenido (publicaciones) realizadas por los demás usuarios a los que se les ha dado follow, mirar el perfil de los usuarios,  se permite agregar publicaciones, editar las propias publicaciones y eliminar dichas publicaciones del perfil del usuario que la ha creado, se pueden agregar cursos que el usuario ha tomado en bedu y qué profesor ha impartido el curso y un rating de la experiencia.

## Estructura del proyecto
## Descripcion de entidades
Las entidades que interactúan en nuestro proyecto son :

Usuarios, Profesores,  Cursos,  Publicaciones, Perfiles

Estas entidades cuentan con los atributos:

Usuarios : Nombre de usuario, Nombre, Apellido, Correo, Password
Profesores : Nombre de usuario, Nombre, Apellido, Correo, Password
Cursos: Nombre de curso
Publicaciones : Autor, Contenido
Perfiles: Nombre de usuario, Publicaciones, Usuarios seguidos, Cursos tomados, Profesor del curso

Podemos ver la interacción entre :

Usuarios - Perfiles : Pues los perfiles obtienen la información en base a sus usuarios, quienes pueblan la entidad (es dependiente de)

Cursos - Profesores : Los cursos son impartidos por profesores 

Usuarios - Publicaciones : Los usuarios tienen la capacidad de hacer, editar, borrar publicaciones

Publicaciones - Perfiles : Los perfiles (entre otra información) tienen publicaciones 

Usuarios - Usuarios : Los usuarios pueden dar follow a otros usuarios para observar sus publicaciones en la red social


## Historias de usuario
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

## Casos de uso
* Registrarse
* Agregar publicación
* Editar publicación
* Eliminar publicación
* Ver perfil personal
* Editar perfil
* Ver muro
* Ver perfil externo
* Agregar amigo
* Registrar curso, profesor y calificación del desempeño del docente
* Editar curso, profesor y calificación del desempeño del docente
* Eliminar registrar del curso, profesor y calificación del desempeño del docente

[Diagramas de casos de uso](https://app.diagrams.net/#G1Q9Vrauep4LrImQzg6h1PACLoq0dmqOqh)
  
  
## Herramientas empleadas


## Estructura de las carpetas del proyecto


## Instalación de dependencias
  
