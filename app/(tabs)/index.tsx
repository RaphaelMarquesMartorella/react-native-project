import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking, ScrollView } from 'react-native';

export default function HomeScreen() {
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/+5583981577251');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Bem-vindo ao Ministério Infantil!</Text>
        <Image source={require('@/assets/images/kids-ministry-logo.png')} style={styles.image} />
        <Text style={styles.description}>
          Um espaço acolhedor e alegre onde as crianças aprendem e crescem em sua fé.
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.aboutContainer}>
        <Text style={styles.subtitle}>Sobre Nós</Text>
        <Text style={styles.text}>
          Nosso objetivo é ensinar e inspirar as crianças em sua jornada de fé com amor e alegria. Junte-se a nós para
          uma experiência transformadora.
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.contactContainer}>
        <Text style={styles.subtitle}>Contate-nos</Text>
        <Text style={styles.text}>Av. Sen. Ruy Carneiro, s/n - Brisamar, João Pessoa - PB, 58033-455</Text>
        <Text style={styles.text}>Telefone: (83) 98157-7251</Text>
        <Button title="Fale Conosco no WhatsApp" onPress={openWhatsApp} color="#25D366" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 15,
  },
  homeContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#da4eb2',
    borderBottomWidth: 3,
    borderBottomColor: '#FF69B4',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    marginBottom: 20,
  },
  aboutContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#da4eb2',
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
    borderRadius: 15,
    marginBottom: 20,
  },
  contactContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#058fa5',
    borderRightWidth: 4,
    borderRightColor: '#25D366',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FF69B4',
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 10,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#4A90E2',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    lineHeight: 25,
    marginBottom: 10,
  },
});
