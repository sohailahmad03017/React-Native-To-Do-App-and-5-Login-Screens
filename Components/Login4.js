import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login4() {
    return (
        <View style={{ backgroundColor: 'black', height: '100%' }}>

            {/* <Text style={styles.heading}>2nd Login</Text> */}

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://marketplace-images-production.s3-us-west-2.amazonaws.com/items/preview-533c6f39-a804-4bcb-9ebb-5e720a140b28-1180x660.png' }} style={{ width: "70%", height: 120, marginTop: 60 }} />

                <Text style={{ fontSize: 35, marginVertical: 45, fontWeight: 'bold', color: 'white' }}>LOGIN</Text>


                <View style={styles.shadow}>
                    <TextInput style={styles.txtField} placeholder='Email ID' />
                </View>
                <View style={styles.shadow}>
                    <TextInput style={styles.txtField} placeholder='Password' />

                </View>

                <Text style={{ alignSelf: 'flex-end', marginRight: 40, marginVertical: 15, color: 'orange' }}>Forgot Password ?</Text>

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 17, }}>Login </Text>
                </TouchableOpacity>

                <View style={{ marginVertical: 15, flexDirection: 'row', marginTop: 60 }}>

                    <Text style={{ color: 'white' }}>Don't Have an Account? </Text>
                    <Text style={{ color: 'orange' }}>Create Account</Text>

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
        borderRadius: 20,
        elevation: 12,
        shadowColor: 'lightgrey',
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: 15,
    },
    btn: {
        backgroundColor: 'darkorange',
        borderRadius: 20,
        padding: 12,
        paddingHorizontal: 40,
        marginVertical: 15,
        alignItems: 'center',
    }
})