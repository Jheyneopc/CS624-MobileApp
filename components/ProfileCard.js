import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/user.png')}  // Corrected path
        style={styles.avatar}
      />
      <Text style={styles.name}>Jheyne Cordeiro</Text>
      <Text style={styles.occupation}>React Native Developer</Text>
      <Text style={styles.description}>
        Jheyne is passionate about building beautiful and functional mobile apps.
        She enjoys using React Native to create smooth and enjoyable user experiences.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4da6ff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  occupation: {
    fontSize: 16,
    color: '#e6f2ff',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#f0f8ff',
    textAlign: 'center',
  },
});

export default ProfileCard;
