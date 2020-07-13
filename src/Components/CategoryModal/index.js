import React, { useState, useEffect } from 'react';
import { View, Modal, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter';
import Colors from '../../Styles/Colors';
import { getCreditCategories, getDebitCategories, getAllCategories } from '../../Services/Categories'

const CategoryModal = ({ categoryType, onCancel, onConfirm, isVisible }) => {
    // Criações de Estados.
    const [catCredit, setCatCredit] = useState([])
    const [catDebit, setCatDebit] = useState([]);
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        // Função Recupera as Categorias de Debito e Credito.
        async function loadCategorias() {
            setCatDebit(await getDebitCategories());
            setCatCredit(await getCreditCategories());
            setAllCategory(await getAllCategories());
        }
        loadCategorias();
    }, []);

    return (
        <View>
            <Modal animated='slide' transparent={false} visible={isVisible}>
                <View style={styles.modal}>
                    <FlatList
                        data={categoryType === 'all' ? allCategory : categoryType === 'debit' ? catDebit : catCredit}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.modalItem}
                                onPress={() => { onConfirm(item) }}
                            >
                                <Text style={[styles.modalItemText, { color: item.color }]}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <ActionFooter>
                        <ActionPrimaryButton title='Fechar' onPress={onCancel} />
                    </ActionFooter>
                </View>
            </Modal>
        </View>
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
        padding: 20,
    },
    modalItemText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    },
});

export default CategoryModal;