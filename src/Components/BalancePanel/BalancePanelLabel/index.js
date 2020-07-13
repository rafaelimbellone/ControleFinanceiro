import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../Styles/Colors';
import {TextInputMask} from 'react-native-masked-text';
import { getBalance } from '../../../Services/Balance';

const BalancePanelLabel = ({}) => {
  const [saldoAtual, setSaldoAtual] = useState();
  useEffect(() => {
    // Função Carrega Saldo Atual
    async function loadSaldo() {
        const data = await getBalance();
        setSaldoAtual(data);
    }
    loadSaldo();
}, [saldoAtual]);
    return(
        <View style={styles.conatiner}>
            <Text style={styles.label}>Saldo Atual</Text>
            <TextInputMask 
              style={styles.value}
              type={'money'}
              options={{
                  precision: 2,
                  separator:',',
                  delimiter: '.',
                  unit: 'R$',
                  suffixUnit: '',
              }}
              value={saldoAtual}
              includeRawValueInChangeText={false}              
          />
         </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
      //flex:1,
      alignItems:'center',
    },
    label:{
      fontSize:14,
      color:Colors.white,
    },
    value:{
      fontSize:36,
      color:Colors.white,
    },
    button:{
        borderRadius:50,
    }
})

export default BalancePanelLabel;