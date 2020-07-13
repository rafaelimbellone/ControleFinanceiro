
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';
import Color from '../../../Styles/Colors';
import CategoryModal from '../../../Components/CategoryModal';


const NewEntryCategoryPiker = ({ debit, category, onChangeCategories, categoryColor }) => {
  
  // Criações de Estados.
  const [modalVisible, setModalVisible] = useState(false);

  // Array para pegar a cor da categoria.
  const Categeorias = [
    {
      name: 'Impostos e Taxas',
      color: '#e74c3c',
    },
    {
      name: 'Salário',
      color: '#487eb0',
    },
    {
      name: 'Família e Filhos',
      color: '#d35400',
    },
    {
      name: 'saldo inicial',
      color: '#27ae60',
    },
    {
      name: 'Mercado',
      color: '#bdc3c7',
    },
    {
      name: 'Empréstimos',
      color: '#273c75',
    },
    {
      name: 'Casa',
      color: '#3498db',
    },
    {
      name: 'Outras Despesas',
      color: '#95a5a6',
    },
    {
      name: 'Compras',
      color: '#9b59b6',
    },
    {
      name: 'Investimentos',
      color: '#c0392b',
    },
    {
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
    },
    {
      name: 'Alimentação',
      color: '#1abc9c',
    },
    {
      name: 'Investimentos',
      color: '#4cd137',
    },
    {
      name: 'Lazer',
      color: '#ecf0f1',
    },
    {
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
    },
    {
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
    },
    {
      name: 'Educação',
      color: '#e67e22',
    },
    {
      name: 'Outras Receitas',
      color: '#8c7ae6',
    },
  ];

  // Função Mostra categoria no Modal e Fechar o Modal quando Clicar na opção.
  const onCategoryPress = item => {
    // Faz um filtro no array se a categoria que está vindo do modal
    // For igual a categoria do array seta a cor da categoria.
    Categeorias.filter((category => {
      if (category.name === item.name) {
        categoryColor(category.color);
        onChangeCategories(item.name);
        onClosePress();
      } else {
        return null;
      }
    }));
   
  }
  // Função para fechar o Modal.
  const onClosePress = () => {
    setModalVisible(false);
  }

  return (
    <View>
      <TouchableOpacity style={styles.pickerButton} onPress={() => { setModalVisible(true) }}>
        <Text style={styles.pikerButtonText}>{category}</Text>
      </TouchableOpacity>
      <CategoryModal 
        categoryType={debit ? 'debit' : 'credit'} 
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: Color.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pikerButtonText: {
    fontSize: 22,
    color: Color.white,
    textAlign: 'center',
  },

})
export default NewEntryCategoryPiker;