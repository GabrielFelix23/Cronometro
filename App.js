import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class App extends React.Component{
  timer = null

  state = {
    numero: 0,
    ultimo: 0,
    botao: "Vai"
  }

  vai = () => {
    if(this.timer != null){
      //Vai parar o timer
      clearInterval(this.timer)
      this.timer = null
      this.setState({botao: "Vai"})
    }else{
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
        this.setState({botao: "Parar"})
      }, 100)
    }
  }

  limpar = () => {
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      ultimo: this.state.numero,
      botao: "Vai",
      numero: 0
    })
  }
  
  render(){
    return(
      <View style={styles.container}> 
          <Image 
            source={require("./src/img/cronometro.png")}
          />
          <View style={styles.corpoTimer}>
            <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
          </View>

          <View style={styles.corpoBtn}>
            <TouchableOpacity 
              style={styles.btn}
              onPress={this.vai}
              >  
                <Text style={styles.btnTexto}>{this.state.botao}</Text>   
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.btn}
              onPress={this.limpar}
              >  
                <Text style={styles.btnTexto}>Limpar</Text>  
            </TouchableOpacity>
          </View>

          <View style={styles.corpoUltimo}>
            <Text style={styles.btnUltimo}>
              Ultimo tempo: {this.state.ultimo.toFixed(1)}
            </Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aeef"
  },
  corpoTimer:{
      marginTop: -90
  },
  timer:{
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold"
  },
  corpoBtn:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50
  },
  btn:{
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 10
  },
  btnTexto:{
    fontSize: 20,
    color: "#00aeef",
    fontWeight: "bold"
  },
  corpoUltimo:{
    margin: 20
  },
  btnUltimo:{
    fontSize: 25,
    fontStyle: "italic",
    color: "#fff"
  }
})