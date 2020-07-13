import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinerGradient from 'react-native-linear-gradient';
import Colors from '../../Styles/Colors';
import { TextInputMask } from 'react-native-masked-text';
import { getBalance } from '../../Services/Balance';

const BalanceLabel = ({ currentBalance }) => {

  const [saldoAtual, setSaldoAtual] = useState();

  useEffect(() => {
    // Função Carrega Saldo Atual
    async function loadSaldo() {
      const data = await getBalance();
      setSaldoAtual(data);
    }
    loadSaldo();
  }, [setSaldoAtual]);

  return (

    <View style={styles.conatiner}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinerGradient colors={[Colors.violet, Colors.blue]} style={styles.panel}>
        <TextInputMask
          style={styles.value}
          type={'money'}
          options={{
            precision: 2,
            separator: '.',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          }}
          value={saldoAtual}
          includeRawValueInChangeText={false}
        />
      </LinerGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    color: Colors.white,
  },
  panel: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
})
export default BalanceLabel;