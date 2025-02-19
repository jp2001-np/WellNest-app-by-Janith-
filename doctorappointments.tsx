import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const DoctorAppointments = () => {
  useEffect(() => {
    console.log("Navigated to Doctor Appointments Screen");
  }, []);

  const handleBookAppointment = () => {
    console.log("Navigating to booking screen...");
    // Logic for navigating to booking screen or showing a form
  };

  const handleManageAppointments = () => {
    console.log("Navigating to manage appointments screen...");
    // Logic for navigating to manage appointments screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Doctor Appointments</Text>
      <Text style={styles.body}>Easily book and manage your medical checkups.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleManageAppointments}>
          <Text style={styles.buttonText}>Manage Appointments</Text>
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
    backgroundColor: '#6200EE',
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

export default DoctorAppointments;
