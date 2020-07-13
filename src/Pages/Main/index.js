import React,{useEffect} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import BalanceLabel from '../../Components/BalanceLabel'
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
import Color from '../../Styles/Colors';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
        <EntryList onEntryPress={entry => {navigation.navigate('NewEntry', { entry: entry, isEdit: true}
            );
          }}
          onPressActionButton={() => navigation.navigate('Report')}
        />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});

export default Main;
