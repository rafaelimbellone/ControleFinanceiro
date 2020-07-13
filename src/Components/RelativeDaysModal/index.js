import React from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList, StyleSheet } from 'react-native';
import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter';
import Colors from '../../Styles/Colors';


const RalativeDaysModal = ({ isVisible, onConfirmed, onCancel }) => {

    const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 360];
    
    return (
        <Modal animated='slide' transparent={false} visible={isVisible}>
            <View style={styles.modal}>
                <FlatList
                    data={relativeDays}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.modalItem} onPress={() => onConfirmed(item)}>
                            <Text style={styles.modalItemText}>{`${item}  dias`}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <ActionFooter>
                <ActionPrimaryButton title='Fechar' onPress={onCancel} />
            </ActionFooter>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    modalItemText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    }
})

export default RalativeDaysModal;