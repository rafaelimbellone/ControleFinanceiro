import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings([
    'Virtualized',
    'Failed', 
    'Can','t perform'
]);
const App = ({ navigation }) => {
    return (
        <Routes />
    );
}
export default App;