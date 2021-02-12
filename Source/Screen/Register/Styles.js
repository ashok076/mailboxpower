import {StyleSheet, Dimensions} from 'react-native'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    rowObject: {
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        marginLeft:'37%'
    },
    scrollViewStyl:{
         flex: 1,marginTop:'5%' 
    },
    logo:{ width: 250, height: 150 },
    Logout: {
        alignSelf: 'center'
    },
    // selectionColor:{ colors: { text: '#000',  primary: '#02afef' } },
    // theme:{ colors: { text: '#000', background: 'transparent', primary: '#02afef', } },
    Righttitle: {
        fontSize: 12,
        color: '#E3E3E3',
    },
    forgotPassText:{ color: '#02afef', fontWeight: 'bold',fontSize:17  },
    forgotPass:{ alignSelf: 'flex-end', marginTop: '3%', marginRight: '8%' },
    titleView: {
        width: '100%',
        height: 60,
        // justifyContent: 'center',
        padding: 10,
        backgroundColor: '#02afef',
        borderBottomWidth:1,
        borderBottomColor:'#CDD0D4EB',
        alignSelf:'center',
        flexDirection:'row'

    },
    scrollView:{
        flex:1,
        backgroundColor:'#fafafa',
        borderRadius:30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    topView:{
        margin:'5%'
    },
    topTitleView:{
        width:'100%',
        alignSelf:'center',

    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
      },
      button: {
        width: (deviceWidth * 70) / 100,
        height: (deviceHeight * 8) / 100,
        backgroundColor: '#02afef',
        borderRadius: 5,
        marginVertical: 12,
        paddingVertical: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: '5%',
        marginTop:'10%',
        shadowColor:'#02afef',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity:  0.4,
        shadowRadius: 10,
        elevation: 3,
      },
    
      buttonTouch:{
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: '3%',
    },
    buttonView:{ alignSelf: 'center', width: '90%' },
    input: {
        fontSize: 15,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: 50,
        borderRadius:10,
        width:'90%',
        borderRadius:5,
        alignSelf:'center',
        borderRadius: 20,
      },
    CreateotpInput:{ width: '90%',  height: 55, fontSize: 18, alignSelf: 'center' },
    CreateinputRoot:{height:55, marginTop: '2%',width:'90%',alignSelf:'center' ,borderWidth:1 ,borderRadius:10 ,borderColor:'#DEDEDE'},
})

export default styles;