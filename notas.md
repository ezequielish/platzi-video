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
3. hitSlop = Crear un radio al rededor del botón que si no presionamos el botón justo dentro pero si en el radio también se ejecuta la función

