import React, {Component} from 'react';
import { View,Text, StyleSheet,Image,TouchableOpacity, } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        img: require('./assets/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muitos conhecimento.',
      'O riso é a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o obvio, pense no improvável e conquiste o impossivel.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' +  this.frases[numeroAleatorio] + '" ',
      img: require('./assets/biscoitoAberto.png')
    });
  }

  render(){

    return(
      <View style={styles.container}>
        
        <Image
          source={this.state.img}
          style={styles.img}
        />

    <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 300,
    height: 300,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
    },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;

