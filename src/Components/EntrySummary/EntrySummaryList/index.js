import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const EntrySummaryList = ({entradas}) => {
  
    return(
        <View style={styles.conatiner}>
            <FlatList
                data={entradas}
                renderItem={({item}) => 
                  <Text>{item.description}  {item.amout}</Text>
                }
            />    
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
      //flex:1,
    },
    label:{

    },
    value:{

    },
    textCategorias: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
})

export default EntrySummaryList;