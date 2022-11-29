import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login3() {
    return (
        <View style={{ backgroundColor: 'white ' }}>

            {/* <Text style={styles.heading}>2nd Login</Text> */}

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://logodix.com/logo/557717.png' }} style={{ width: "38%", height: 120, marginTop: 60 }} />

                <Text style={{ fontSize: 25, marginVertical: 3, }}>Welcome Back!</Text>
                <Text style={{ marginBottom: 50 }}>Login to Your Account</Text>

                <View style={styles.shadow}>
                    <TextInput style={styles.txtField} placeholder='Email ID' />
                </View>
                <View style={styles.shadow}>
                    <TextInput style={styles.txtField} placeholder='Password' />

                </View>

                <Text style={{ alignSelf: 'flex-end', marginRight: 40, marginVertical: 15, }}>Forgot Password ?</Text>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 17, }}>Login </Text>
                </TouchableOpacity>

                <View style={{ marginVertical: 15, flexDirection: 'row', marginTop: 20 }}>

                    
                    <Text >Don't Have an Account ?</Text>

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
        width: '80%',
        elevation: 12,
        shadowColor: 'grey',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: 15,
    },
    btn: {
        backgroundColor: 'black',
        width: '80%',
        borderRadius: 20,
        padding: 12,
        paddingHorizontal: 40,
        marginVertical: 15,
        alignItems: 'center',
    }
})