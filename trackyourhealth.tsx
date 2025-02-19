import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const HealthTracker = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerIcons}>
        <Text style={styles.icon}>🚶</Text>
        <Text style={styles.icon}>🚴</Text>
        <Text style={styles.icon}>🏋️</Text>
        <Text style={styles.icon}>🚵</Text>
      </View>
      
      <View style={styles.progressContainer}>
        <ProgressChart
          data={{ data: [0.82] }}
          width={screenWidth * 0.6}
          height={screenWidth * 0.6}
          strokeWidth={10}
          radius={50}
          chartConfig={{
            backgroundGradientFrom: '#1E2A38',
            backgroundGradientTo: '#1E2A38',
            color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
          }}
          hideLegend={true}
        />
        <Text style={styles.progressText}>82% Completed</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <Text style={styles.stepsLabel}>Steps</Text>
        <Text style={styles.stepsCount}>12,538</Text>
        <Text style={styles.caloriesBurned}>🔥 2,358 Calories Burned</Text>
      </View>

      <View style={styles.weeklyStatsContainer}>
        <Text style={styles.weeklyTitle}>Weekly Activity</Text>
        <View style={styles.weeklyRow}>
          <Text style={styles.weeklyItem}>🚶 Walking: 32,538 steps</Text>
          <Text style={styles.weeklyItem}>🏃 Running: 18,347 steps</Text>
          <Text style={styles.weeklyItem}>🚴 Cycling: 17.3 km</Text>
          <Text style={styles.weeklyItem}>🚵 Hiking: 15.4 hrs</Text>
          <Text style={styles.weeklyItem}>🏋️ Gym: 13.4 hrs</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.addActivityButton}>
        <Text style={styles.addActivityText}>+ Add Activity</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    color: '#4CAF50',
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -30,
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  stepsLabel: {
    fontSize: 18,
    color: '#ccc',
  },
  stepsCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  caloriesBurned: {
    fontSize: 18,
    color: '#FF9800',
    marginTop: 5,
  },
  weeklyStatsContainer: {
    width: '100%',
    marginTop: 20,
  },
  weeklyTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weeklyRow: {
    backgroundColor: '#1E2A38',
    borderRadius: 10,
    padding: 15,
  },
  weeklyItem: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 6,
  },
  addActivityButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  addActivityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HealthTracker;
