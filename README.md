# Uso de CPU 📝

En este proyecto se realizó una aplicación flotante con [Electron.js](https://www.electronjs.org/) que muestra el uso de CPU actual utilizando la libreria de NodeJS [systeminformation](https://www.npmjs.com/package/systeminformation)

## Instalar dependencias

Para instalar las dependencias ejecturar en la raíz del proyecto el siguiente comando:

```
npm install
```

## Ejecución de la aplicación

Una vez instaladas las dependencias, correr el siguiente comando para visualizar la aplicación:

```
npm start
```

## Desplegar la aplicación para windows: ✨

Para desplegar la aplicación ejecutar el siguiente comando:

```
npm run package-win
```

Este comando ejecuta el script configurado previamente en el package.json que realiza lo siguiente:

```
...
"package-win": "electron-packager . overlay-cpu-usage
                  --overwrite --asar=true --platform=win32
                  --arch=ia32 --icon=assets/icons/win/icon.ico
                  --prune=true --out=release-builds
                  --version-string.CompanyName=CE --version-string.FileDescription=CE
                  --version-string.ProductName=\"Electron Tutorial App\"",
...
```

El ejecutable quedará dentro de la carpeta _"realse-builds\NOMBRE_APLICACION\NOMBRE_APLICACION.exe"_

## Captura de pantalla:

![Alt text](/assets/screenshot.png?raw=true "Captura")
