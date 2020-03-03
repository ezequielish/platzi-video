import React from 'react';
import {Text} from 'react-native';

export const Time = ({duration, time}) => {

  let newTime = time.replace('.', ':');
  let newDuration = duration.replace('.', ':');
  return (
    <Text>
      {newTime} / {newDuration}
    </Text>
  );
};
