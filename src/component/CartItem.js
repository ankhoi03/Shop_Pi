import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CartItem = () => {

    return (
        <View style={styles.container} >
            <Image style={styles.img} source={require('../images/sony.jpg')} />

            <View style={styles.rightView}>
                <View style={styles.rowCenterView}>
                    <Text style={styles.text}>Sony Xperia 1 IV</Text>
                    <TouchableOpacity>
                        <Image source={require('../images/del.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.rowCenterView, { marginTop: 20 }]}>
                    <Text style={styles.cost}>$1299,99</Text>
                    <View style={styles.btnView}>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Image source={require('../images/Minus.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.quatityView}>
                            <Text style={styles.quatityText}>1</Text>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Image source={require('../images/Plus.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        height: 104,
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,
        elevation: 1,
        marginBottom: 5,
        flexDirection: 'row'
    },
    img: {
        width: 72,
        height: 72
    },
    rightView: {
        height: 72,
        marginStart:10
    },
    rowCenterView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 230
    },
    text: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
    },
    cost: {
        color: '#40BFFF',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
    },
    btnView: {
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,
        height: 28,
        width: 104,
        flexDirection: 'row'
    },
    btn: {
        alignItems: 'center',
        width: 32,
        justifyContent: 'center'
    },
    quatityView: {
        backgroundColor: '#EBF0FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40
    },
    quatityText: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
    }
})