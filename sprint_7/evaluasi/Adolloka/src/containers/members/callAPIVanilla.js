import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const Coba = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    })

    useEffect(() => {
        //Call API Method GET
        // fetch('https://reqres.in/api/users?page=2')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(error => console.log(error))

        //call API MEthod POST
        // var dataForAPI = {
        //     name: "morpheus",
        //     job: "leader"
        // }

        // console.log('data object:', dataForAPI);
        // console.log('data string :', JSON.stringify(dataForAPI))
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {'Content-Type' : 'application/json'},
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('Post response: ', json)
        // })
    }, []);

        const postData = () => {
            const dataForAPI = {
                name: 'Ismail',
                job: 'Entreprenuer'
            }

            fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(dataForAPI)
            })
            .then(response => response.json())
            .then(json => {
                console.log('Post response: ', json)
                setDataJob(json)
            }) 
        }

    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call API dengan vanilla JS</Text>
            <Button title='GET DATA' onPress={getData}/>
            <Text>Response GET DATA</Text>
            <Image source={{uri: 'dataUser.avatar'}} style={styles.avatar}/>
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{`${dataUser.email}`}</Text>

            <View style={styles.line}/>
            <Button title='POST DATA' onPress={postData}/>
            <Text>Response POST DATA</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center', fontSize: 20},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {height: 100, width: 100, borderRadius: 100}
})

export default Coba;