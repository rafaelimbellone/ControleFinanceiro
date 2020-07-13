import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../Styles/Colors';
import LinerGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';


const BalancePanel = ({onNewEntryPress }) => {
    

    return (
        <View style={styles.container}>
            <LinerGradient colors={[Colors.violet, Colors.blue]} style={styles.painel}>
                <BalancePanelLabel />
                <BalancePanelChart />
            </LinerGradient>
            <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
                <Icon name='add' size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    painel: {
        paddingVertical: 10,
    },
    button: {
        backgroundColor: Colors.green,
        shadowColor: Colors.black,
        elevation: 5,
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: -25,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 35,
        color: Colors.white
    },
})

export default BalancePanel;