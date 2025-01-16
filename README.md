# Plantilla del proyecto Noticias
Esta plantilla realizada con `React + Vite` será la encargada de recibir los
datos tratados en la API de noticias hecha con `Laravel`.

## Aspectos a tomar en cuenta
Debido a que este proyecto se basa en la API hecha en `Laravel`, pueden surgir 
los siguientes aspectos:

1. El tiempo de entrega de datos al frontend puede tomar alrededor de `1.4` a `1.8` 
segundos, dejando una experiencia de usuario algo lenta.

2. La API debe traer las imágenes de las noticias de la carpeta `public` seguido de las
carpetas `storage` y `multimedia`. El endpoint solo debe tener a la carpeta `storage` de
forma constante en la url. Por ejemplo: 
`https://www.tuservicioweb.com/storage/carpeta-multimedia/archivo-multimedia`

3. La url base para realizar la conexión con cualquier API debe ir de la siguiente forma:
`https://www.tuservicioweb.com/api`

> [!NOTE]
> Si necesitas cambiar los endpoints de cada ruta a la que vas a acceder, entra en la carpeta `api`, ahí encontrarás todos los archivos encargados de realizar las peticiones al backend y modificas el parámetro de las peticiones hechas con axios.

4. Los `hooks` son los encargados de manejar las peticiones `GET` hacía el backend, y cada hook
funciona con una configuración de `axios` diferente, por lo que deberás crear un archivo de
peticiones al modelo que necesites en la carpeta `api` y creando la configuración base de axios.

## Instalación
1. Antes de descargar o clonar el proyecto, debes tener las siguientes aplicaciones instaladas:
- [x] Node.js (la versión `22` o `20`, preferiblemente)

> **NOTA:** El proyecto puede ser clonado desde cualquier parte de tu equipo local, bien sea en el escritorio o junto a la API (como proyecto local) de la que vayas a consumir información.

2. Crea un archivo `.env` en el directorio raíz de tu proyecto con la URL para acceder a la API,
también deberás crear otra variable de entorno que simule un ID de usuario de prueba para poder
simular un administrador para que puedas crear y editar. Deberás nombrarlos de la siguiente forma
```ENV
VITE_API_URL='aquí pondrías la URL'
VITE_TEST_USER_ID=aquí pondrías un ID (numérico)
```

3. En el directorio raíz del proyecto, instala las dependencias del proyecto con el siguiente comando:
```BASH
npm install # o también puedes usar `npm i`
```

4. Ejecuta el proyecto con el siguiente comando:
```BASH
npm run dev
```