import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FitnessGuide = () => {
  useEffect(() => {
    console.log("Navigated to Fitness Guide Screen");
  }, []);

  const fitnessCategories = [
    {
      title: 'Cardio Workouts',
      description: 'Improve heart health and stamina with running, cycling, and jump rope exercises.',
    },
    {
      title: 'Strength Training',
      description: 'Build muscle and increase endurance with weightlifting, bodyweight exercises, and resistance training.',
    },
    {
      title: 'Flexibility & Mobility',
      description: 'Enhance movement and prevent injuries with yoga, stretching, and mobility exercises.',
    },
    {
      title: 'HIIT (High-Intensity Interval Training)',
      description: 'Burn fat efficiently with short bursts of high-energy exercises followed by brief rest periods.',
    },
    {
      title: 'Mind-Body Workouts',
      description: 'Combine physical fitness with mindfulness through pilates, Tai Chi, and breathing exercises.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Fitness Guide</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {fitnessCategories.map((category, index) => (
          <View key={index} style={styles.topicCard}>
            <Text style={styles.topicTitle}>{category.title}</Text>
            <Text style={styles.body}>{category.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F4FA', // Light Blue Background
    paddingTop: 40, // Space for header
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', // White text for contrast
    backgroundColor: '#0077B6', // Deep Blue Header Background
    paddingVertical: 15,
    borderBottomLeftRadius: 25, // Curved bottom edges
    borderBottomRightRadius: 25,
    marginBottom: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 15,
  },
  topicCard: {
    width: '90%',
    backgroundColor: '#FFFFFF', // White card
    padding: 20,
    borderRadius: 20, // Rounded edges like the design
    marginBottom: 20,
    shadowColor: '#000', // Darker shadow for depth
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, // Android shadow
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0077B6', // Deep Blue
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#4B5563', // Dark Gray for readability
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default FitnessGuide;
