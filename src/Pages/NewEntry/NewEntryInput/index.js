import React, {useState} from  'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../Styles/Colors';

const NewEntryInput = ({value, onchangeDebit, onChangeValue}) => {
    // Criações de Estados.
    // Verifica se o value q esta vindo do NewEntry é Menor ou Maior que 0.
    // Tanto para o Debit quando para o debitPrefix.
    const [debit, setDebit] = useState(value <= 0 ? -1 : 1);
    const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');
    
    // Função responsavel pra mudar o R$ para -R$. Para saber se é as Categorias de Débito
    // ou Crédito para exibir no modal.
    const onChangeDebitCredit = () => {
        if(debit <= 0){
          setDebit(1);
          setDebitPrefix('');
          onchangeDebit(false);
        }else{
          setDebit(-1);
          setDebitPrefix('-');
          onchangeDebit(true);
        }
        // Faz o calculo para salvar no banco a alteração.
        onChangeValue(value * -1)
    }

    return(
      <View style={styles.container}>
          <TouchableOpacity style={styles.debitButton} onPress={onChangeDebitCredit}>
              <Text style={styles.debitButtonPrefix}> {debitPrefix} </Text>
              <Text style={styles.debitButtonText}>R$</Text>
          </TouchableOpacity>
          <TextInputMask 
              style={styles.input}
              type={'money'}
              options={{
                  precision: 2,
                  separator:',',
                  delimiter: '.',
                  unit: '',
                  suffixUnit: '',
              }}
              value={value}
              includeRawValueInChangeText={true}
              onChangeText={(maskedValue, rawValue) => {onChangeValue(rawValue * debit)}}
          />
      </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:Colors.asphalt,
        borderRadius:15,
        marginVertical:10,
        marginHorizontal:20,
    },
    debitButton:{
       flexDirection:'row',
       paddingHorizontal:15,
       paddingVertical:15,
    },
    debitButtonPrefix:{
        fontSize: 28,
        color: Colors.white,
        minWidth: 8,
    },
    debitButtonText:{
        fontSize: 28,
        color: Colors.white,
    },
    input:{
       flex: 1,
       fontSize: 28,
       color: Colors.white,
       textAlign:'right',
       paddingLeft: 0,
       paddingRight: 20,
    },
    

})

export default NewEntryInput;
