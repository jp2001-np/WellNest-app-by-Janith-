import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MentalWellBeing = () => {
  useEffect(() => {
    console.log("Navigated to Mental Well-being Screen");
  }, []);

  const handleGuidedMeditation = () => {
    console.log("Navigating to Guided Meditations...");
    // Logic for navigating to guided meditations
  };

  const handleBreathingExercises = () => {
    console.log("Navigating to Breathing Exercises...");
    // Logic for navigating to breathing exercises
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mental Well-being</Text>
      <Text style={styles.body}>
        Relax your mind with meditation and breathing exercises.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGuidedMeditation}>
          <Text style={styles.buttonText}>Guided Meditations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleBreathingExercises}>
          <Text style={styles.buttonText}>Breathing Exercises</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#555',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#03A9F4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MentalWellBeing;
