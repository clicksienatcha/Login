import React from 'react';
import { ScrollView, RefreshControl, StyleSheet, View, Image, TextInput,Label } from 'react-native';
import {
  Container,
 
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  List,
  ListItem,
  Thumbnail,
  Card,
  


} from "native-base";


export default class HomePage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'LOGIN',
      headerStyle: {
        backgroundColor: '#f4511e',
      },

    };
  }

  state= {
    bg:'red'
  }
  constructor(props) {

    super(props);
    
    this.state = {
      items: [],
      loading: true,
      password: '',
      email: '',
      nodata:''
    };

  }


  async componentDidMount() {
    console.log('erer');
  

  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  userRegistor = () => {

    const { email } = this.state;
    const { password } = this.state;
    
    if(email=='natcha@gmail.com' && password=='123456'){
      alert('Login Successed');
      this.setState({
        nodata:'',
      });
    }else{
                  this.setState({
                    nodata:'E-mail or Password is incorrect',
                  });
    }
    
}


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>

        <Content>
        <Image
        
          style={{width: 180, height: 180,padding: '10%', alignSelf: 'center'}}
          source={{uri: 'http://mis.oae.go.th/app_api_insert/images/logo.png'}}
        />
            
            <Text  style={styles.text}>Emaill Address</Text>
          
              
            <Input onChangeText={email => (this.setState({ email }))} 
     style={{
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: this.state.bc1,
      margin:10,
      backgroundColor:this.state.bg1
      }}   placeholder="example@olufy.com" />
            

            <Text style={styles.text}>Password</Text>
            
            <Input secureTextEntry={true} onChangeText={password => (this.setState({ password }))} 
    
    style={{
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: this.state.bc2,
      margin:10,
      backgroundColor:this.state.bg2
      }} 
      placeholder="Password" />
              <Text  style = {{ color:'red', alignSelf: 'center'}}>{this.state.nodata}</Text>
              <Button  onPress={this.userRegistor} info style = {{ borderRadius: 5,padding: '10%', alignSelf: 'center'}}> 
                <Text>LOGIN</Text>
              </Button>

           
              <Text>Forgot Password ?</Text>
              <Text>Create a new account</Text>
            
           
        </Content>

      </Container>


    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'ghostwhite'
  },
  button:{
   
        flex:1,
        alignItems:'center', //<-----
        width:200,
        alignItems: 'center',
      justifyContent: 'center',
  },
  input:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin:10,
    

   
  },
  text:{
    //backgroundColor: 'red',
    padding:10
  }
});
