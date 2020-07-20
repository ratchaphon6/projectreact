import React, { Component } from 'react';
import '../Styles/App.css';
import { Link } from 'react-router';
class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pokemon: [
        'grass', 'fire', 'water', 'bug', 'normal', 'poison',
      'electric', 'ground', 'fighting', 'water', 'psychic', 'rock', 'ghost', 'ice', 'dragon',
      ],
      items: [],
      items2: [],
      allPokemons : [
        {
          "name": "Bulbasaur",
          "attack": 49,
          "defense": 49,
          "evolveLevel": 16,
          "evolveTo": "2",
          "type": "grass",
          "moves": [
            "tackle",
            "vine whip"
          ],
          "curve": 1.3,
          "levels": [
            5,
            10
          ],
          "probability": 3
        },
        {
          "name": "Ivysaur",
          "attack": 62,
          "defense": 63,
          "evolveLevel": 32,
          "evolveTo": "3",
          "type": "grass",
          "moves": [
            "tackle",
            "vine whip",
            "razor leaf"
          ],
          "curve": 1.3
        },
        {
          "name": "Venusaur",
          "attack": 82,
          "defense": 83,
          "type": "grass",
          "moves": [
            "tackle",
            "vine whip",
            "razor leaf"
          ],
          "curve": 1.3
        },
        {
          "name": "Charmander",
          "attack": 52,
          "defense": 43,
          "evolveLevel": 16,
          "evolveTo": "5",
          "type": "fire",
          "moves": [
            "scratch",
            "ember",
            "metal claw"
          ],
          "curve": 1.3,
          "levels": [
            5,
            10
          ],
          "probability": 3
        },
        {
          "name": "Charmeleon",
          "attack": 64,
          "defense": 58,
          "evolveLevel": 36,
          "evolveTo": "6",
          "type": "fire",
          "moves": [
            "scratch",
            "ember",
            "metal claw",
            "flamethrower"
          ],
          "curve": 1.3
        },
        {
          "name": "Weedle",
          "attack": 35,
          "defense": 30,
          "evolveLevel": 7,
          "evolveTo": "14",
          "type": "bug",
          "moves": [
            "poison sting"
          ],
          "curve": 1.6,
          "levels": [
            2,
            7
          ],
          "probability": 15
        },
        {
          "name": "Pidgey",
          "attack": 45,
          "defense": 40,
          "evolveLevel": 18,
          "evolveTo": "17",
          "type": "normal",
          "moves": [
            "tackle",
            "gust"
          ],
          "curve": 1.3,
          "levels": [
            2,
            10
          ],
          "probability": 15
        },
        {
          "name": "Pidgeotto",
          "attack": 60,
          "defense": 55,
          "evolveLevel": 36,
          "evolveTo": "18",
          "type": "normal",
          "moves": [
            "tackle",
            "gust",
            "wing attack"
          ],
          "curve": 1.3
        },
        {
          "name": "Pidgeot",
          "attack": 80,
          "defense": 75,
          "type": "normal",
          "moves": [
            "tackle",
            "gust",
            "wing attack"
          ],
          "curve": 1.3
        },
       {
          "name": "Ekans",
          "attack": 60,
          "defense": 44,
          "evolveLevel": 22,
          "evolveTo": "24",
          "type": "poison",
          "moves": [
            "poison sting",
            "bite"
          ],
          "curve": 1.6,
          "levels": [
            5,
            15
          ],
          "probability": 15
        },
        {
          "name": "Arbok",
          "attack": 85,
          "defense": 69,
          "type": "poison",
          "moves": [
            "poison sting",
            "bite",
            "acid"
          ],
          "curve": 1.6
        },
        {
          "name": "Raichu",
          "attack": 90,
          "defense": 55,
          "type": "electric",
          "moves": [
            "thundershock",
            "thunderbolt"
          ],
          "curve": 1.6
        },
        {
          "name": "Sandshrew",
          "attack": 75,
          "defense": 85,
          "evolveLevel": 22,
          "evolveTo": "28",
          "type": "ground",
          "moves": [
            "scratch",
            "poison sting"
          ],
          "curve": 1.6,
          "levels": [
            5,
            15
          ],
          "probability": 10
        },
        {
          "name": "Sandslash",
          "attack": 100,
          "defense": 110,
          "type": "ground",
          "moves": [
            "scratch",
            "poison sting",
            "slash",
            "swift"
          ],
          "curve": 1.6
        },
        {
          "name": "Nidoran",
          "attack": 47,
          "defense": 52,
          "evolveLevel": 16,
          "evolveTo": "30",
          "type": "poison",
          "moves": [
            "scratch"
          ],
          "curve": 1.3,
          "levels": [
            5,
            8
          ],
          "probability": 15
        },
        {
          "name": "Rattata",
          "attack": 56,
          "defense": 35,
          "evolveLevel": 20,
          "evolveTo": "20",
          "type": "normal",
          "moves": [
            "tackle",
            "hyper fang"
          ],
          "curve": 1.6,
          "levels": [
            2,
            7
          ],
          "probability": 20
        },
        {
          "name": "Raticate",
          "attack": 81,
          "defense": 60,
          "type": "normal",
          "moves": [
            "tackle",
            "hyper fang"
          ],
          "curve": 1.6
        },{
          "name": "Spearow",
          "attack": 60,
          "defense": 30,
          "evolveLevel": 20,
          "evolveTo": "22",
          "type": "normal",
          "moves": [
            "peck"
          ],
          "curve": 1.6,
          "levels": [
            5,
            15
          ],
          "probability": 10
        },
        {
          "name": "Fearow",
          "attack": 90,
          "defense": 65,
          "type": "normal",
          "moves": [
            "peck",
            "drill peck"
          ],
          "curve": 1.6
        }
      ],
      allPokemons2:[
        {
        "name": "Meowth",
        "attack": 45,
        "defense": 35,
        "evolveLevel": 28,
        "evolveTo": "53",
        "type": "normal",
        "moves": [
          "scratch",
          "bite"
        ],
        "curve": 1.6,
        "levels": [
          8,
          20
        ],
        "probability": 10
      },]
    };
    this.onFilterPokemonTypeChange=this.onFilterPokemonTypeChange.bind(this)
    this.filterList=this.filterList.bind(this)
    this.componentWillMount=this.componentWillMount.bind(this)
    // this.filterLists=this.filterLists.bind(this)
    // this.handelcheck=this.handelcheck.bind(this)
  }
  
  onFilterPokemonTypeChange(e){
    this.setState({ value: e.target.value })
  }
  filterList(event){
    var updatedList = this.state.allPokemons
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  componentWillMount(){
    this.setState({items: this.state.allPokemons})
  }




  render() {
    let a = this.state.pokemon.map(function (item, i) {
      return <option key={i} value={item}>{item}</option>
    })
    let value = this.state.value
    let number = 1
    return (
      <div className="App">
      <label>ประเภท: </label>
      <select onChange={this.onFilterPokemonTypeChange}>
        <option>ALL</option>
        {a}
      </select> &emsp;
        <label>ชื่อ: </label><input type="text"  placeholder="Search" onChange={this.filterList}/>
        
      {/* {this.state.items.map((item,i)=><p key={i}>
        {((value=='ALL')||(value==''))&&<label>{item.name},{item.type}</label>}
        {(value==item.type)&&<label>{item.name} {item.type}</label>}
      </p>)} */}
      <center>
        <tr>
        <th className="setcenter">ลำดับ</th>
          <th className="setcenter">ชื่อโปเกมอน</th>
          <th className="setcenter">ประเภทโปเกมอน</th>
          <th className="setcenter">พลังโจมตี</th>
          <th className="setcenter">พลังป้องกัน</th>
        </tr>
        {this.state.items.map((item,i)=><tr key={i}>
          <td className="setcenter">{((value=='ALL')||(value==''))&&<label>{number++}</label>}
          {(value==item.type)&&<label>{number++}</label>}</td>
          <td className="setcenter">{((value=='ALL')||(value==''))&&<label>{item.name}</label>}
          {(value==item.type)&&<label>{item.name}</label>}</td>
          <td className="setcenter">{((value=='ALL')||(value==''))&&<label>{item.type}</label>}
          {(value==item.type)&&<label>{item.type}</label>}</td>          
          <td className="setcenter">{((value=='ALL')||(value==''))&&<label>{item.attack}</label>}
          {(value==item.type)&&<label>{item.attack}</label>}</td>              
          <td className="setcenter">{((value=='ALL')||(value==''))&&<label>{item.defense}</label>}
          {(value==item.type)&&<label>{item.defense}</label>}</td>
        </tr>)}
        </center>
      <br/><br/><br/><br/><br/><br/><br/>
      <Link to="/" >ย้อนกลับ</Link>
      </div>
    );
  }
}

export default Offer;
