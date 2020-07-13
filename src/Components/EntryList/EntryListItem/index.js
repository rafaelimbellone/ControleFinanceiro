import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import Colors from '../../../Styles/Colors';
import moment from '../../../vendors/moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EntryListItem = ({ entry, isFirstItem, isLastItem, onEntryPress }) => {
    const bulletLineY = isFirstItem ? 25 : 0;
    const bulletLineHeight = isLastItem ? 25 : 50;
    const showBulletLine = !(isFirstItem && isLastItem);
    //const bulletColor = Colors.blue;
    const bulletColor = entry.categoriasColor || Colors.white;

    return (
        <TouchableOpacity onPress={() => { onEntryPress && onEntryPress(entry) }}>
            <View style={styles.container}>
                <View style={styles.bullet}>
                    <Svg height='50' width='30'>
                        {showBulletLine && (
                            <Rect
                                x='9'
                                y={bulletLineY}
                                width='1.5'
                                height={bulletLineHeight}
                                fill={Colors.background}
                            />
                        )}
                        <Circle cx='10'
                            cy='25'
                            r={8}
                            stroke={Colors.background}
                            strokeWidth='1.5'
                            fill={bulletColor}
                        />
                    </Svg>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{entry.description}</Text>
                    <View style={styles.details}>
                        <Icon style={styles.entryAtIcon} name="access-time" size={11} />
                        <Text style={styles.entryAtText}>{moment(entry.entryAt.toDate()).format('DD MMMM YYYY')}</Text>
                        <Icon style={styles.addressIcon} name="person-pin" size={11} />
                        <Text style={styles.addressText}>{entry.address}</Text>
                    </View>
                </View>
                <View style={styles.amount}>
                    <Text style={styles.amountText}>{entry.amount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    bullet: {
        //backgroundColor:Colors.yellow,
    },
    description: {
        flex: 1,
        justifyContent: 'center',
        //backgroundColor:Colors.blue,
    },
    descriptionText: {
        fontSize: 14,
        color: Colors.white,
    },
    amount: {
        justifyContent: 'center',
        //backgroundColor:Colors.green,
    },
    amountText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.white,
    },
    details: {
        flexDirection: 'row',
    },
    entryAtIcon: {
        marginTop: 2,
        marginRight: 2,
        color: Colors.metal,
    },
    entryAtText: {
        fontSize: 12,
        color: Colors.metal,
    },
    addressIcon: {
        marginTop: 2,
        marginRight: 2,
        marginLeft: 5,
        color: Colors.metal,
    },
    addressText: {
        fontSize: 12,
        color: Colors.metal,
    },
})

export default EntryListItem; Svg