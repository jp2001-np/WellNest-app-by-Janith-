import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HealthEducation = () => {
  useEffect(() => {
    console.log('Navigated to Health Education Screen');
  }, []);

  const healthTopics = [
    {
      title: 'Nutrition & Healthy Eating',
      description:
        'Eating a balanced diet is essential for maintaining good health. Proper nutrition helps prevent chronic diseases like diabetes, obesity, and heart disease.',
    },
    {
      title: 'Physical Activity & Exercise',
      description:
        'Regular physical activity boosts overall health, strengthens muscles, improves mood, and helps prevent chronic diseases.',
    },
    {
      title: 'Mental Health & Well-being',
      description:
        'Mental health is just as important as physical health. It affects emotions, thoughts, and behaviors.',
    },
    {
      title: 'Disease Prevention & Vaccination',
      description:
        'Preventive healthcare includes vaccinations, regular checkups, and hygiene practices to avoid illnesses.',
    },
    {
      title: 'Sleep & Rest',
      description:
        'Good sleep is necessary for brain function and overall well-being. Poor sleep leads to stress, fatigue, and health problems.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Health Education</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {healthTopics.map((topic, index) => (
          <View key={index} style={styles.topicCard}>
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <Text style={styles.body}>{topic.description}</Text>
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

export default HealthEducation;
