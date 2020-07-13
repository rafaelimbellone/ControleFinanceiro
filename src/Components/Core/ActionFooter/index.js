import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../../Styles/Colors';


const ActionFooter = ({children}) => {
    return (
       <View style={styles.container}>
           <View style={styles.inner}>{children}</View>
        </View>
    )
}

export const ActionPrimaryButton = ({title, onPress}) => {
    return(
      <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{title}</Text>
      </TouchableOpacity>
    )
};

export const ActionSecondaryButton = ({title, onPress}) => {
    return(
      <TouchableOpacity onPress={onPress} style={styles.secondeButton}>
        <Text style={styles.secondeButtonText}>{title}</Text>
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      paddingVertical:10,
    },
    inner:{
        flexDirection:'row',
        justifyContent:'center',
    },
    primaryButton:{
      borderRadius:50,
      borderWidth:1,
      borderColor: Colors.green,
      paddingVertical:10,
      paddingHorizontal:20,
    },
    primaryButtonText:{
        fontSize:18,
        textAlign:'center',
        color:Colors.green,
    },
    secondeButton:{
        paddingVertical:10,
        paddingHorizontal:20,
      },
    secondeButtonText:{
          fontSize:18,
          textAlign:'center',
          color:Colors.white,
      }
})
export default ActionFooter;