## React Native


### Instalación de react native
Creamos un directorio y corremos:

```
npm install -g react-native-cli

```


**Java Development Kit** lo descargas desde aquí http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html.

En la instalación elige la modalidad personalizada y ten activados estos items.

- Android SDK
- Android SDK Platform
- Android Virtual Device

### Configurar variable de entorno para android




**¿Cómo ejecutar Android Estudio?**


**Existen varias forma actualmente de correr un app para desarrollar esto es importante saberlo**

1. La primera forma es la tradicional abriendo el andorid manager y correr un emulador(*esto consume mucha ram*)
2. La segunda es con el modo debbuger en nuestro telf.


**1ra forma**


primero debemos ir al directorio en donde tenemos instalado Android la ruta puede variar dependiendo de donde se hayán instalado.

En este caso en linux la ruta es: 

```

/opt/android-studio/

```

puede ser también:

```

/usr-share-android-studio 

//sin root

```

Una vez instalado ejecutar dentro del directorio andoid-studio-bin

```
/opt/android-studio/bin

studio.sh 

```

**Paso 2**

**Matamos todos los procesos para limpiar(opcional)**

```

adb kill-server

```

**Encedemos adb**
```

adb start-server

```

**Listamod los dispositivos si queremos verlos**
```

adb devices -l

```


**Nuestro teléfono movil debe estar en modo debug**

Esto se configurar en las opciones de desarrollador dentro del celular.



### Creando un proyecto React-native

**¿Cómo creamos el proyecto de ReactNative?**

El nombre siempre debe ser en camelCase


```

react-native init platziVideo

```

**¿Cómo corremos nuestra app?**


Tenemos dos opciones la primera a menos que tengas una mac será 

 
```

react-native start
react-native run-ios

```

y para los demas

```

react-native start
react-native run-android

```


Una vez que corramos run-android deberia abrir la apo en nuestro celular android.


### Componentes en React native

React native tiene una ventaja encina de algunos framework como cordoba ya que este lo que hace es trabaja cobre un navegador embebido en el android.

Por otra parte React native crea un punto en el cual el código pasa a ser nativo, no es mejor que el nativo android pero si que los que hacen un embebido del navegador.

**Componentes principales en React Native**

1. <View /> = [<div>, <article>, <section>
2. <Text /> = [<p>, <strong>, span, etc]
3. <Image /> = <img src/>



**¿Cómo importamos estos componentes?**

Lo hacemos desde *react-native*


```

import {

	Platform,
	StyleSheet,
	Text,
	View

} from 'react-native'

```

El componente Platform nos permite ejecutar un bloque de codigo dependiendo si el sistema operativo es *ios* o *android*


El componente <Image> tiene dos formas de trar la imagen una vez de forma externa que este en un servidor en la nube y la segunda es que este dentro del propio dispositivo.

Por ahora veremos una de las opciones luego mas adenlante la otra opcion.

```

<Image source={require('/path')}
       style={{width: 300, heigth: 80}}
 />

```



### Estilos en React Native

Para crear estilos en React Native vamos a usar el componente StyleSheet con su método create

```

import {
  Platform,
  StyleSheet,
} from 'react-native';


 render() {
    return (
      <View style={styles.container}>
      
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.select({ //de esta forma indicamos que el backgroundColor según el sistema operativo
      ios: 'blue',
      android: 'purple',
    }),
  },
}),

```




