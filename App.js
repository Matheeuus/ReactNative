import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!"
      </Text>
      <Text style={styles.subtitle}>
        -Matheus

      </Text>
      <button title="enviar"></button>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: "#8F2D56",
    fontSize: "3rem",
    fontWeight:"bold"    
  },

  subtitle: {
    color: "#D81159",
    fontSize: "2rem",
    fontWeight:"bold"    
  }
});
