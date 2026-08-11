import { StatusBar } from 'expo-status-bar';

import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Pressable style={[styles.box, styles.cachorro]}>
        <Text style={styles.icon}>  </Text>
        <Text style={styles.label}>cachorro</Text>
      </Pressable>

      <Pressable style={[styles.box, styles.gato]}>
        <Text style={styles.icon}>  </Text>
        <Text style={styles.label}>gato</Text>
      </Pressable>

      <Pressable style={[styles.box, styles.leao]}>
        <Text style={styles.icon}>  </Text>
        <Text style={styles.label}>leao</Text>
      </Pressable>

      <Pressable style={[styles.box, styles.tigre]}>
        <Text style={styles.icon}>  </Text>
        <Text style={styles.label}>tigre</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  box: {
    width: '50%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cachorro: {
    backgroundColor: 'rgb(88, 222, 240)'
  },

  gato: {
    backgroundColor: 'rgb(95, 121, 145)',
  },

  leao: {
    backgroundColor: 'rgb(145, 101, 228)'
  },

  tigre: {
    backgroundColor: 'rgb(96, 71, 185)',
  },

  icon: {
    fontSize: 22,
    marginBottom: 4,
  },

  label: {
    fontSize: 30,
    color: '#000',
  },
});
