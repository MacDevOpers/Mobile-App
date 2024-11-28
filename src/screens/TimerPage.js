import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const TimerPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countdown Timer</Text>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={60} // 60 seconds timer
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
        onComplete={() => setIsPlaying(false)}>
        {({remainingTime}) => <Text style={styles.time}>{remainingTime}</Text>}
      </CountdownCircleTimer>
      <Button
        title={isPlaying ? 'Pause Timer' : 'Start Timer'}
        onPress={() => setIsPlaying(!isPlaying)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  time: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TimerPage;
