<<<<<<< HEAD
import App from "../../App"

export default function HomeScreen() {
  return <App />
}
=======
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

export default function IndexScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
});
>>>>>>> c904f70772befe8a758a85d1c1cc830db6e6f351
