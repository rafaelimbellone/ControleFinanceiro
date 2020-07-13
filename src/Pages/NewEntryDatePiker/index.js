
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Styles/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';


const NewEntryDatePiker = ({value, onChange}) => {
    const [modalVisible, setModalVisible] = useState(false);

    // Função que irá abrir o Modal após o click no botão.
    const showDatePicker = () => {
        setModalVisible(true);
    };
    
    // Função para Fechar Modal da Data.
    const onCancel = () => {
        setModalVisible(false);
      };
    
    return (
        <View>
            <TouchableOpacity style={styles.buttom} onPress={showDatePicker}>
              <Icon name='today' size={30} color={Colors.white}/>
            </TouchableOpacity>
            <DateTimePicker mode='date' 
                    date={value}
                    isVisible={modalVisible}
                    onConfirm={onChange(value), onCancel}
                    onCancel={onCancel} 
                />
        </View>
    )
}

const styles  = StyleSheet.create({
    buttom:{
      backgroundColor: Colors.asphalt,
      width:59,
      height:59,
      borderRadius: 50,
      alignItems:'center',
      justifyContent:'center',
      margin: 2,
    },
})

export default NewEntryDatePiker;