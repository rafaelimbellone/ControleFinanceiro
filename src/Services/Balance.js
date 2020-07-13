import React from 'react';
import moment from '../vendors/moment';
import firestore from '@react-native-firebase/firestore';


// Função busca o Saldo Atual do Firebase.
export const getBalance = async (untilDays = 0) => {
    let querySnapshot;

    if (untilDays > 0) {
        const date = moment().subtract(untilDays, 'days').toDate();
        querySnapshot = await firestore()
            .collection('entries')
            .orderBy('entryAt')
            .endBefore(date);
    } else {
        querySnapshot = await firestore()
            .collection('entries')
            .get();
    }
    //console.log(querySnapshot.docs);
    return (querySnapshot.docs).reduce((total, doc) => {
        return total + doc.data().amount;
    }, 0);

    
}

export const getBalanceSumByDate = async days => {
    let querySnapshot;
    const startBalance = await getBalance(days);

    if (days > 0) {
        const date = moment().subtract(days, 'days').toDate();
        querySnapshot = await firestore().collection('entries').orderBy('entryAt').startAt(date).get()
    } else {
        querySnapshot = await firestore().collection('entries').orderBy('entryAt').get();
    }
    let entries = querySnapshot.docs.map(documentSnapshot =>
        documentSnapshot.data(),
    );
    entries = _(entries).groupBy(({ entryAt }) => moment(entryAt)
        .format('YYYYMMDD')).map(entry => _.sumBy(entry, 'amount'))
        .map((amount, index, collection) => {
            return (
                (index === 0 ? startBalance : 0) + _.sum(_.slice(collection, 0, index)) + amount
            );
        });

    //console.log('getBalanceSumByDate :: ', JSON.stringify(entries));
    return entries;
};


