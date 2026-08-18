//jogo da velha
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function TicTacToe() {
  
  const board = Array(9).fill(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da velha</Text>

      {/* Container do Tabuleiro */}
      
      <View style={styles.board}>
        {board.map((_, index) => (
          <Pressable 
            key={index} 
            style={[
              styles.cell,
              // Desenha a linha de baixo apenas nas duas primeiras fileiras (índices de 0 a 5)
              index < 6 ? { borderBottomWidth: 4 } : null,
              // Desenha a linha da direita apenas na 1ª e 2ª coluna
              (index + 1) % 3 !== 0 ? { borderRightWidth: 4 } : null,
            ]}
          >
            <Text style={styles.cellText}></Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 
    alignItems: 'center',       // Centraliza os itens horizontalmente
    justifyContent: 'center',   // Centraliza os itens verticalmente
  },
  title: {
    fontSize: 25,
    fontWeight: 'normal',
    marginBottom: 50,
    color: '#000',
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderColor: '#000', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  cellText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
});
