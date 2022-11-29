import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login1() {
    return (
        <View>

            <Text style={styles.heading}>Boffin Study Hub</Text>

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://www.webhostingzone.org/wp-content/uploads/2020/06/lms-scaled.jpg' }} style={{ width: "70%", height: 200, marginVertical: 40 }} />

                <TextInput style={styles.txtField} placeholder='Student ID' />
                <TextInput style={styles.txtField} placeholder='Password' />

                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 17, }}>Login </Text>
                </TouchableOpacity>

                <Text>Forgot Password ?</Text>
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
        borderColor: 'darkblue',
        borderWidth: 2,
        width: '80%',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        fontSize: 15,
        marginVertical: 15,
    },
    btn: {
        backgroundColor: 'darkblue',
        width: '80%',
        borderRadius: 20,
        padding: 12,
        marginVertical: 15,
        alignItems: 'center',
    }
})