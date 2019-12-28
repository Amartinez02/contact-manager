# contact-manager
Aplicación móvil en Ionic 4 para gestionar contactos - Backend en Nodejs, Express, TypeORM, MongoDB

# Guiar para poner en funcinamiento la aplicacion móvil contact-manager-app

1 - Ejecutar el siguientes comandos de docker para subir la base de datos de MongoDB:
    
    $ docker pull mongo
    $ docker run --name mongodb -d -p 27017:27017 mongo
    
2 - Entrar al proyecto contact-manager-backend y ejecutar la siguiente instrucción para instalar todas las dependecias del proyecto:
    
    $ npm i 
    
3 - Luego ejecutar el siguiente comando para correr el proyecto:

    $ npm start

4 - Por último, entrar al proyecto de ionic contact-manager-app y ejecutar los siguientes comandos para instalar las dependecias de la aplicación y luego subirla desde el browser:
    
    $ npm i
    $ ionic serve
    $ ionic cordova run ios (ejecutar en teléfono ios o emulador)
    $ ionic cordova run android (ejecutar en teléfono android o emulador)
