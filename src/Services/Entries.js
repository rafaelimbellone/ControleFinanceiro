import { Alert } from 'react-native';
import moment from '../vendors/moment';
import firestore from '@react-native-firebase/firestore';

// Função add Entries no firebase.
export const addEntry = async entry => {
  let data = {};

  try {
    data = {
      amount: entry.amount,
      description: entry.category,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address,
      photo: entry.photo,
      isInit: entry.isInit || false,
      categorias: entry.category,
      categoriasColor: entry.categoriasColor,
    }
    // adiciona os dados no firebase.
    await firestore().collection('entries').add(data);
  } catch (error) {
    console.error('addEntry :: error on save object: ',
      JSON.stringify(data),
      JSON.stringify(error));
    Alert.alert('Erro', 'Houve um Erro ao salvar este lançamento.');
  }

  return data;
};
// Função Altera Entradas.
export const updateEntry = async (entry, id) => {
  let data = {};
  try {
    data = {
      amount: entry.amount,
      description: entry.category,
      entryAt: entry.entryAt,
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address,
      photo: entry.photo,
      isInit: entry.isInit || false,
      categorias: entry.category,
      categoriasColor: entry.categoriasColor,
    };
    console.log('Id Update: ',id);
    await firestore().collection('entries').doc(id).update(data);
  } catch (error) {
    console.error('updateEntry :: error on save object: ',
      JSON.stringify(error));
    Alert.alert('Erro', 'Houve um Erro ao Atualizar este lançamento.');
  }
  return data;
};

export const deleteEntry = async entry => {
  console.log('Id Delete: ', entry);
  try {
    await firestore().collection('entries').doc(entry).delete();
  } catch (error) {
    console.error('updateEntry :: error on save object: ',
      JSON.stringify(error));
    Alert.alert('Erro', 'Houve um Erro ao Excluir este lançamento.');
  }
}

// Função que lista as entradas de acordo com o filtro de dias.
export const getEntries = async (days, category) => {
  let querySnapshot;
  if (days > 0 ) {
    const date = moment().subtract(days, 'days').toDate();
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .startAt(date)
      .get()
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .get();
  }
  let entries = querySnapshot.docs.map(documentSnapshot => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id }
  })

  // Se catgoria for diferente de Todas Categorias e undefined. filtra a categorias desejada.
  if (category && category != 'Todas Categorias' && category !='undefined') {
    entries = entries.filter(entry => entry.categorias === category);
    console.log('entrou no if categoria', entries)
  }
  return entries;
};





;

