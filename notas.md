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

```
1. <View /> = [<div>, <article>, <section>]
2. <Text /> = [<p>, <strong>, span, etc]
3. <Image /> = <img src />

```



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


### Listas en React Native

Debemos saber que las listas como un *<ul>* no se manejan igual que en la web para crear listas de item debemos importar un componente de rn

**¿Cuál es el componente que debemos llamar?**

El componente se llama **<FlatList>**


```

import { FlatList } from 'react-native'

```

**¿Cuales son las propiedades que recibe este componente?**


1. data
2. renderItem


Este componente funciona como un map ya que la propiedad data es a la que le pasaremos nuestros datas array preferiblemente.
**NOTA IMPORTANTE** la data que recibe el componente siempre debe tener un indentificador

luego esta la propiedad **renderItem** vendria siendo como el map y este es el que se va a encargar de hacer el bucle a nuestra data.

```

  const list = [
    {
      title: 'Ezequiel',
      key: '1',
    },
    {
      title: 'nidas',
      key: '2',
    },
  ];
  return (
    <FlatList data={list} renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};


```

**¿Que sucede si estamos consumiendo un api externa y nuestra key para identificar no se llamar key?**

Propiedad **keyExtractor**
Para esto necesitamos colocarle una propiedad al componente indicandole cual sera la propiedad key normalmente suele ser el id.

**NOTA**: El valor que recibe esta propiedad debe ser un string es decir si el id no es como el de mongodb si no que es más como de msqyl que es númerico debemos pasarlo a string

```

 <FlatList
          keyExtractor={ item => item.id.toString()}
/>
```

### Propiedades para componentes vacíos y separador de componentes.

En el ejemplo anterior creamos un componente que hace un recorrido de los items y los imprime, pero si ese lista de elementos nos llegara vacía?

Pues existe un propiedad dentro de React-Native que nos permite menejar este tipo de condiciones ej:


1. ejemplo 1: **ListEmptyComponent**.

Para llamar a esta propiedad debemos pasarla al componente como **ListEmptyComponent** y recibe un componente que se va a renderizar si los datos son vacíos.


```

  const list = [];
  const emptyComponent = () => <Text>Sin resultados...</Text>;

  return (
    <FlatList 
	data={list} 
	ListEmptyComponent={() => emptyComponent()}
	renderItem={({item}) => <Text>{item.title}</Text>} />
  );
};


```

2. ejemplo 2: **ItemSeparatorComponent**

Esta propiedad nos permite crear seperadores entre nuestros items del array algo asi parecido a un <hr> pero personalizado a nuestro gusto y se renderizada por cada iten del bucle.

```
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const VerticalSeparator = props => {
  return (
    <View
      style={[
        styles.separator,
        {borderTopColor: props.color ? props.color : '#eaeaea'},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});


 const emptyComponent = () => <EmptyResponse text="Sin resultados" />;
  const VSeparator = () => <VerticalSeparator color={'red'} />;
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        ItemSeparatorComponent={() => VSeparator()}
        ListEmptyComponent={() => emptyComponent()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </Layout>
  );
};á


```


### Propiedad horizontal


La propiedad horizontal nos permite básicamente hacer algo parecido a un overflow-x: scroll

ej:


```
    
		<FlatList
          	horizontal
          	keyExtractor={this.keyExtractor}
          	data={this.props.list}
          	ListEmptyComponent={this.renderEmtpy}
          	ItemSeparatorComponent={this.itemSeparator}
          	renderItem={this.renderItem}
        />
```


### Component  ImageBackground

Este componente nos permite colocar una imagen de background a un componente.



### Instalando plugins de la comunidad


Cuando instalamos una dependencia para que esta funcione correctamente dentro de nuestra app debemos hacer un **npm install**

ej:

```

npm isntall --save react-native-video

npm install

```

Una vez que hayamos instalado la dependencia como no es una native debemos enlazarla con un link esto lo hacemos de la siguiente manera:

```

react-native link react-native-video

```

Luego de instalar una dependencia debemos correr de nuevo el build de andoird o ios.



### Componente ActivityIndicator 

Este componente crear un spinner nativo.


### Component TouchableHighlight

Este componente nos ayuda a manejar el touch en los botones de nuestra inteface vendria siendo como un <button> como un onClick llamado **onPress** este componente recibe varias propiedades.


1. onPress = Una función que se ejecuta cuando hace touch.
2. underlayColor = color de background cuando se hace touch.
3. hitSlop = Crear un radio al rededor del botón que si no presionamos el botón justo dentro pero si en el radio también se ejecuta la función.


### Persistiendo datos


Esta es una herramienta que nos permite utilizar algo parecido al localStorage pero dentro de react native para que nuestra app pueda funcionar de forma offline, de hecho también nos sirve para persistir los datos en la web pero con *localStorage* aquí usamos **AsyncStorage**.

[persist redux](https://github.com/rt2zz/redux-persist)


Lo que debemos hacer es persistir los datos y luego dentro de un componente llamado **<PersistGate />** que va como hijo del componente **<Provider />** 

```
 <PersistGate loading={<Text>cargando...</Text>} persistor={persistor}>

```

con esta dependencia podemos agregar estados a una lista negra por ejempl si quisieramos agregar un estamos como este a la lista negra para que no persita:


**reducers/categoires.js**


```

import {GET_CATEGORIES, LOADING, ERROR} from '../types/categoriesType';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.payload, loading: false};

    case LOADING:
      return {...state, error: '', loading: true};

    case ERROR:
      return {...state, loading: false, error: action.payload};

    default:
      return state;
  }
};


```

**./store.js**

```

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['categories']
};

```

Con esto ya nuestro estado de categoires no va a persistir.


**NOTA**

Los componentes smart son los que debe conectarse a redux.



### Componente Web view


Es la forma de embeber un navegadr en nuestra app es decir podemos colocar html css y js dentro de un elemento embebido.

```
//una url de una web
<WebView source={{uri: 'url'}} style={{marginTop: 20}} /> 

//inyectar directamente html
<WebView source={{html: '<html>'}} style={{marginTop: 20}} />

```


### Componente TextInput

Este componente es el que debemos utilizar para manejar cualquier input dentro de nuestra app, ya con otras propiedades dentro del mismo podemos configurar si es para password, email, date, etc.


```

  <TextInput
      placeholder="Busca una película"
      autoCorrent={false} //auto corrector
      autoCapitalize="none" //todas las letras en minuscula
      underlineColorAndroid="transparent"
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangeText}
      style={styles.input}
    />

```

### Animaciones en react-native

react-native cuenta con un metodo que cuenta con varios componentes de animaciones que es muy extenso las posibilidades que tiene para crear animaciones.

```
import {Animated} from 'react-native';

<Animated.View>

```

Ejemplo de un View con animacion de opacity

```
import React, {useState, useEffect} from 'react';
import MovieLayout from '../../components/MovieLayout';
import Player from '../../../player/containers/Player';
import {Header} from '../../../sections/components/Header';
import {Arrow} from '../../../sections/components/ArrowHeader';
import {Details} from '../../../video/components/Details';
import {Animated} from 'react-native';
import {connect} from 'react-redux';
import * as moviesActions from '../../../../actions/moviesActions';

export const Movie = props => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const arrowBack = () => {
    props.cleanMovieSelected();
  };
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
    }).start();

    // return {};
  }, []);
  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        opacity: opacity,
      }}>
      <MovieLayout>
        <Header>
          <Arrow onPress={arrowBack} />
        </Header>
        <Player />
        <Details {...props.get_movie_selected} />
      </MovieLayout>
    </Animated.View>
  );
};

const mapStateToProps = ({moviesReducer}) => moviesReducer;
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, moviesActions)(Movie);


```

Como vemos para poder utilizar mejor las animaciones creamos una instacia dentro de un estado y le damos un valor a la propiedad que queremos animar.

```

//de esta forma configuramos la animacion.

   Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
    }).start();


   Animated.timing(valorActual, {
      toValue: nuevoValor,
      duration: duracion,
    }).start();

```


### Generar apk firmado


**Ubicación del apk**

📂️android-app/build/outpus/apk


1. **paso 1**: Crear una llave firmada para identificar nuestra app.

```

keytool -genkey -v platziVideo.keystore -alias -platziVideo-alias -keylag RSA -keysize 2048 -validity 10000
keytool -genkey -v myNameApp.keystore -alias -my-name-alias -keylag RSA -keysize 2048 -validity 10000

```

Esto nos va a generar un platziVideo.keystore

2. **paso 2**: Mover el archivo generado el .keystore a el directorio 📂️ android/app

3. **paso 3**: editar el archivo del proyecto **~/.gradle/gradle.properties or /android/gradle.properties**

colocar al final del archivo


```

MYAPP_UPLOAD_STORE_FILE=platziVideo.keystore
MYAPP_UPLOAD_KEY_ALIAS=platziVideo-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

```

4. **paso 4**: hacer la configuración para el release en el archivo **android/app/build.gradle**

Solo debemos agregar en el key **signingConfigs** la opción de **release**
y en el key de **buildTypes** igual la opcion de   **release**

```
signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
 	release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }

    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://facebook.github.io/react-native/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
	    signingConfig signingConfigs.release
        }
    }

```

5. **paso 5**: ir al directorio **android** y correr el comando

```

./gradlew assembleRelease

```


**docs oficial**

[generar apk](https://reactnative.dev/docs/signed-apk-android)


