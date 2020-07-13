import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Modal, RecyclerViewBackedScrollViewComponent } from 'react-native';
import BalanceLabel from '../../Components/BalanceLabel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
import Colors from '../../Styles/Colors';
import ActionFooter, { ActionPrimaryButton } from '../../Components/Core/ActionFooter';
import RelativeDaysModal from '../../Components/RelativeDaysModal';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CategoryModal from '../../Components/CategoryModal';


const Report = ({ navigation }) => {

  // Estados Modal por Dias.
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false);
  // Estados Modal por Categorias.
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  // Estado relativeDays inicia com 7.
  const [relativeDays, setRelativeDays] = useState(7);
  // Estado Categorias.
  const [category, setCategory] = useState('Todas Categorias');
   
  // Função pega os dias escolhidos no modal RealativeDaysModal.
  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  }
  // Função Fecha o Modal RealativeDaysModal.
  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  }

  // Função pega os dias escolhidos no modal categoryModalVisible.
  const onRelativeCategory = item => {
    setCategory(item.name);
    onCategoryClosePress();
  }
  // Função Fecha o Modal categoryModalVisible.
  const onCategoryClosePress = () => {
    setCategoryModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.filterButton} onPress={() => { setRelativeDaysModalVisible(true) }}>
          <Text style={styles.filterButtonText}>Últimos {relativeDays} dias.</Text>
          <Icon name='keyboard-arrow-down' size={20} color={Colors.champagneDark} />
        </TouchableOpacity>

        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirmed={onRelativeDaysPress}
          onCancel={onRelativeDaysClosePress}
        />

        <TouchableOpacity style={styles.filterButton} onPress={() => {setCategoryModalVisible(true)}}>
          <Text style={styles.filterButtonText}>{category}</Text>
          <Icon name='keyboard-arrow-down' size={20} color={Colors.champagneDark} />
        </TouchableOpacity>
        <CategoryModal
          categoryType={'all'}
          isVisible={categoryModalVisible}
          onConfirm={onRelativeCategory}
          onCancel={onCategoryClosePress}
        />
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} category={category}/>
      </ScrollView>

      <ActionFooter>
        <ActionPrimaryButton title='Fechar' onPress={() => navigation.goBack()} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: Colors.champagneDark,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginTop: -10,
    marginBottom: 5,
  },
  filterButtonText: {
    color: Colors.champagneDark,
    textAlign: 'center',
  },
});

export default Report;
