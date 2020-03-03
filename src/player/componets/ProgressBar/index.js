import React from 'react';
import {StyleSheet, ProgressBarAndroid} from 'react-native';

export const ProgressBar = props => {
  return (
    <ProgressBarAndroid
      color="#606060"
      indeterminate={false}
      styleAttr="Horizontal"
      progress={props.progress}
      style={styles.progressBarAndroid}
    />
  );
};
const styles = StyleSheet.create({
  progressBarAndroid: {
    width: '40%',
    marginLeft: 10,
    marginRight: 10,
  },
});
// import React from 'react';
// import {StyleSheet, Slider} from 'react-native';

// export const ProgressBar = props => {
//   return (
//     <Slider
//       maximumValue={props.duration}
//       minimumValue={0}
//     //   onValueChange={props.onChangeStarted}
//       onSlidingComplete={props.onChangeFinished}
//       style={styles.progressBarAndroid}
//       value={props.progress}
//       // step={duration / 10000}
//       maximumTrackTintColor="rgba(255, 255, 255, .40)"
//       minimumTrackTintColor="#98ca3f"
//       thumbTintColor="white"
//     />
//   );
// };
// const styles = StyleSheet.create({
//   progressBarAndroid: {
//     width: '60%',
//     marginLeft: 10,
//   },
// });
