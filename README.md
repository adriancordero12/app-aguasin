# app-agua

Aplicación multiplataforma en computadoras para efectuar facturas, para un negocio de agua potable.

# Debes instalar:

1. Node.js
2. Git
3. NPM (CLI {npm install -g})

# Vamos a una Linea de comandos donde pondremos:

git clone https://github.com/adriancordero12/app-agua.git

# Entramos a nuestra carpeta llamada "app-agua" con: 
 
cd app-agua

# Luego instalamos todos los paquetes con:

"npm install" o "npm i"

# Estando en la carpeta "app-agua", ponemos a correr el programa:

"npm start"

# Para hacer un ejecutable de la aplicación, debemos instalar una dependencia

"npm i electron-packager -g"

# Por ultimo en nuestra linea de comandos, introducimos el comando, depende de nuestra plataforma y la arquitectura de unos computador. 

macOs:

electron-packager . --platform=darwin --arch=x64

Windows:

electron-packager . --platform=win32 --arch=x64