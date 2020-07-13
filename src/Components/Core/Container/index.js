import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../../Styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Container = ({title, actionLabelText, actionButtonText, onPressActionButton, children}) => {
    return(
       <View style={styles.conatiner}>
           {title && <Text style={styles.textCategorias}>{title}</Text>}

           {children}
           
           {(actionLabelText || actionButtonText) && (
                <View style={styles.actionContainer}>
                    {actionLabelText && (
                        <Text style={styles.actionLabel}>{actionLabelText}</Text>
                    )}
                    {actionButtonText && (
                        <TouchableOpacity style={styles.actionButton} onPress={onPressActionButton}>
                            <Icon name='insert-chart' size={15} style={styles.actionButtonIcon} />
                            <Text style={styles.actionButtonText}>{actionButtonText}</Text>
                        </TouchableOpacity>
                    )}
                </View> 
            )}
       </View>
    )
};

const styles = StyleSheet.create({
    conatiner:{
      backgroundColor:Colors.asphalt,
      borderRadius:5,
      borderStyle:'solid',
      borderWidth:1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      margin:5,
      padding:8,
    },
    textCategorias: {
        fontSize: 14,
        color: Colors.white,
        marginBottom:5,
     },
     actionContainer:{
         flexDirection:'row',
         alignItems:'stretch',
     },
     actionLabel:{
       flex:1,
       fontSize:14,
       color:Colors.white,
     },
     actionButton:{
      flexDirection:'row',
      color:Colors.white,
     },
     actionButtonIcon:{
      color:Colors.white,
      marginTop:3,
      marginRight:2,

     },
     actionButtonText:{
      fontSize:14,
      color:Colors.white,
      
    },
})

export default Container;