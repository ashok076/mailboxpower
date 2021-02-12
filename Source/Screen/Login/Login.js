import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Alert, AsyncStorage } from 'react-native';

//smart component
import InputView from '../../SmartComponent/InputView/InputView';
import Loader from '../../SmartComponent/Loader/Loader';
import styles from './Styles'


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            passWord: '',
            isLoading: false
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollViewStyl}>
                    <View style={styles.topTitleView}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                source={require('../../Images/Logo.png')}
                                style={styles.logo}
                                resizeMode="center"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: '3%' }}>
                    <InputView
                            value={this.state.email.trim()}
                            example="Email Address"
                            autoCompleteType={true}
                            textContentType="emailAddress"
                            error={this.state.userNameError}
                            onChangeText={(text) => this.setState({ email: text })}
                            style={styles.CreateotpInput}
                        />
                        <View style={{ marginLeft: '5%', marginTop: '5%' }} />

                        <InputView
                            value={this.state.passWord}
                            secureTextEntry={true}
                            example="Password"
                            textContentType="password"
                            error={this.state.passwordError}

                            onChangeText={(text) => this.setState({ passWord: text })}
                            style={styles.CreateotpInput}
                        />

                    </View>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: '3%', marginRight: '8%' }}>
                        <Text style={{ color: '#02afef', fontWeight: 'bold',fontSize:17  }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}>
                        <View
                            style={styles.buttonTouch}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Login</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")} style={{ alignSelf: 'center', marginTop: '5%',  }}>
                        <Text style={{ fontWeight: 'bold',fontSize:17 }}>Don't have an account?<Text style={{ color: '#02afef', fontWeight: 'bold' }}> Sign up here</Text></Text>
                    </TouchableOpacity>

                    <Loader loading={this.state.isLoading} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}