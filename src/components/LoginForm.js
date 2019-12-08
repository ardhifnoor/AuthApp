import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'

import { Button, Card, CardSection, Input } from './common'

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    }

    onButtonPress = () => {
        const { email, password } = this.state

        this.setState({ error: '' })

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch(this.setState({ error: 'Authentication Failed.'}))
            })
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="username@gmail.com"
                        value={ this.state.email }
                        onChangeText={ email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry 
                        label="Password" 
                        placeholder="password"
                        value={ this.state.password }
                        onChangeText={ password => this.setState({ password })}
                    />
                </CardSection>
                
                <Text style={ styles.errorTextStyle }>
                    { this.state.error }
                </Text>

                <CardSection>
                    <Button onPress={ this.onButtonPress }> Log In </Button>
                </CardSection>
            </Card>
        )
    }
}