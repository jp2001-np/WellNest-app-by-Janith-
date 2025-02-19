import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HealthyRecipes = () => {
  useEffect(() => {
    console.log("Navigated to Healthy Recipes Screen");
  }, []);

  const handleViewRecipes = () => {
    console.log("Navigating to Recipes List...");
    // Logic to navigate to recipe list
  };

  const handleMealPlanner = () => {
    console.log("Navigating to Meal Planner...");
    // Logic to navigate to meal planner
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Healthy Recipes</Text>
      <Text style={styles.body}>
        Discover nutritious and delicious meals for a balanced diet.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleViewRecipes}>
          <Text style={styles.buttonText}>View Recipes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleMealPlanner}>
          <Text style={styles.buttonText}>Meal Planner</Text>
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#FF9800',
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

export default HealthyRecipes;
