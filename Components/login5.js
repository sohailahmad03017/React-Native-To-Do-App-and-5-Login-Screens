import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login5() {
    return (
        <View style={{ backgroundColor: '#6c757d' }}>

            <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: 70, }}>LOGIN</Text>

            <View style={{ backgroundColor: 'white', marginTop: 70, borderTopLeftRadius: 50, borderTopEndRadius: 50, paddingHorizontal: '15%', height: '80%' }}>


                <View style={{ paddingTop: 50, }}>

                    <Text style={styles.label}>Enter Email: </Text>
                    <View style={styles.shadow}>
                        <TextInput style={styles.txtField} placeholder='Type Email Here' />
                    </View>

                    <Text style={styles.label}>Enter Password: </Text>
                    <View style={styles.shadow}>
                        <TextInput style={styles.txtField} placeholder='Type Password Here' />

                    </View>


                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 17, }}>Login </Text>
                    </TouchableOpacity>

                    <View style={{ marginVertical: 15, flexDirection: 'row', marginTop: 20, alignSelf:'center' }}>

                        <Text>Don't Have an Account ? </Text>
                        <Text style={{ borderBottomColor: 'gray', borderBottomWidth: 1,}}>Sign Up</Text>

                    </View>



                </View>



            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: 'darkblue',
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        fontWeight: '600',
        color: 'white',
    },
    txtField: {
        padding: 8,
        paddingHorizontal: 20,
        fontSize: 15,
    },
    shadow: {
        width: '100%',
        elevation: 12,
        shadowColor: 'grey',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 15,
    },
    btn: {
        backgroundColor: '#6c757d',
        width: '100%',
        borderRadius: 20,
        padding: 12,
        paddingHorizontal: 40,
        marginVertical: 15,
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 8,
        fontWeight: '600',
    }
})