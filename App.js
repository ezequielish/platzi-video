import React from 'react';
import {Text} from 'react-native';
import {Home} from './src/screens/Home';
import {Header} from './src/sections/components/Header'
type Props = {};

export const App = () => {
  return (
    <Home>
      <Header />
    </Home>
  );
};
