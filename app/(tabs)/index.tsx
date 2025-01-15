import { Image, Text, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <Text style={styles.mainTitle}>Hello</Text>

  );
}

const styles = StyleSheet.create({
  mainTitle: {
    textAlign: 'center'
  }
});
