
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';


export const getAllCategories = async () => {
  let querySnapshot = await firestore()
    .collection('categorias')
    .orderBy('order').get();
  const allCategories = querySnapshot.docs.map(documentSnapshot => {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id
    }
  });
  return allCategories;
}
export const getDebitCategories = async () => {
  const querySnapshot = firestore()
   .collection('categorias')
   .where('isDebit', '==', true)
   .where('isInit', '==', false)
   .orderBy('order')
   .get();
   const debitCategories = (await querySnapshot).docs.map(documentSnapshot => {
     return{
       ...documentSnapshot.data(),
       id: documentSnapshot.id
     }
   });
   return debitCategories;
};

export const getCreditCategories = async () => {
  const querySnapshot = firestore()
   .collection('categorias')
   .where('isCredit', '==', true)
   .where('isInit', '==', false)
   .orderBy('order')
   .get();
   const creditCategories = (await querySnapshot).docs.map(documentSnapshot => {
     return{
       ...documentSnapshot.data(),
       id: documentSnapshot.id
     }
   });
   return creditCategories;
};


// Busca os dados iniciais do app.
export const getInitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categorias')
    .where('isInit','==', true)
    .get();
    // Retorna os dados e o id. Firebase não retorna o id nos data.
    // por isso tem q fazer id: querySnapshot.docs[0].id.
    return {...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id};
};
