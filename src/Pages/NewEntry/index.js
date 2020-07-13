import React, { useState, isValidElement } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import BalanceLabel from '../../Components/BalanceLabel';
import Colors from '../../Styles/Colors';
import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../Components/Core/ActionFooter';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPiker from './NewEntryCategoryPiker';
import NewEntryDatePiker from '../NewEntryDatePiker';
import NewEntryDeleteAction from '../NewEntryDeleteAction';
import { addEntry, updateEntry, deleteEntry } from '../../Services/Entries';


const NewEntry = ({ navigation, route }) => {

    const isEdit = route.params?.isEdit ? route.params.isEdit : false;
    console.log(isEdit)
    // entry recebe os parametros vindo da page main. Se não houver é um lançamento novo.
    const entry = route.params?.entry ? route.params.entry : {
        id: null,
        amount: 0,
        categorias: 'Selecione',
        //categoriasColor: null,
    }
    const [amount, setAmount] = useState(entry.amount);
    const [debit, setDebit] = useState(entry.amount <= 0);
    const [category, setCategory] = useState(entry.categorias);
    const [categoryColor, setCategoryColor] = useState(entry.categoriasColor ? entry.categoriasColor : categoryColor);
    const [entryAt, setentryAt] = useState(entry.entryAt ? entry.entryAt.toDate() : new Date());
    
    const onSave = () => {
        const data = {
            amount: parseFloat(amount),
            description: category,
            category: category,
            categoriasColor: categoryColor,
            entryAt: entryAt,
        };
        // Função que adciona ou altera dados no firebase. // está na Services/entries.js
        // Se isEdit for true então faz um updateEntry senão addEntry.
        isEdit ? updateEntry(data, entry.id) : addEntry(data);
        navigation.goBack();
    };
    // Função que exclui dados no firebase. // está na Services/entries.js
    const onDelet = () => {
        console.log('Delete :', entry.id)
        deleteEntry(entry.id);
        onClose();
    }
    // Navega para pagina anterior.
    const onClose = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.conatiner}>
            <BalanceLabel />
            <View style={styles.formContainer}>
                <NewEntryInput value={amount} onChangeValue={setAmount} onchangeDebit={setDebit} />
                <NewEntryCategoryPiker debit={debit} category={category}
                    onChangeCategories={setCategory} categoryColor={setCategoryColor}
                />
                <View style={styles.formActionContainer}>
                    <NewEntryDatePiker value={entryAt} onChange={setentryAt} />
                    <NewEntryDeleteAction entry={entry} onOkPress={onDelet} />
                </View>
            </View>
            <View>
                <ActionFooter>
                    <ActionPrimaryButton title='Salvar' onPress={() => onSave()} />
                    <ActionSecondaryButton title='Cancelar' onPress={() => navigation.goBack()} />
                </ActionFooter>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.background,
    },
    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    formContainer: {
        flex: 1,
        paddingVertical: 20,
    }
})
export default NewEntry;