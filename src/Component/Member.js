import React, { Component } from 'react';
import '../Styles/App.css';
import { Jumbotron, Container, Button, FormGroup, Label, Input , Row, Col} from 'reactstrap';
import kw from "../Styles/kw.png";
import P from "../Styles/P.png";
import Head from './Head';

class Member extends Component {
  constructor(props) {
    super(props);
    this.state={
        click: true,
        click2: true,
        number: '',
        number2: '',
        number3: '',
        sumkw : '',
        numberP: '',
        numberP2: '',
        numberP3: '',
        sumP : '' ,
        numberE: '',
        sumE: ''
    }
  }

  handlenumber(e) {
    this.setState({number: e.target.value});
  }
  
  handlenumber2(e) {
    this.setState({number2: e.target.value});
  }

  handlenumber3(e) {
    this.setState({number3: e.target.value});
  }

  handlenumberP(e) {
    this.setState({numberP: e.target.value});
  }
  
  handlenumberP2(e) {
    this.setState({numberP2: e.target.value});
  }

  handlenumberP3(e) {
    this.setState({numberP3: e.target.value});
  }

  handlenumberE(e) {
    this.setState({numberE: e.target.value});
  }

  handleClick(){
    this.setState({click2: true})
    this.setState({click: false})
  }

  handleClick2(){
    this.setState({click: true})
    this.setState({click2: false})
  }
  
  handleClick3(){
    if (this.state.number&&this.state.number2&&this.state.number3 !== '') {
      this.state.sumkw = (3600*this.state.number)/(this.state.number2*this.state.number3);
      this.setState({sumkw : this.state.sumkw});
    } else {
      alert('error');
    }
  }

  handleClickP(){
    if (this.state.numberP&&this.state.numberP2&&this.state.numberP3 !== '') {
      this.state.sumP = (this.state.numberP*this.state.numberP2*this.state.numberP3)/1000;
      this.setState({sumP : this.state.sumP});
    } else {
      alert('error');
    }
  }

  handleClickE(){
    if (this.state.numberE !== '') {
      this.state.sumE = (((this.state.sumP||this.state.sumkw)-1)/this.state.numberE)*100;
      this.setState({sumE : this.state.sumE});
    } else {
      alert('error');
    }
  }

  render() {
    console.log('hello' + this.state.click)
    if(this.state.click2 == false){                   //สูตรคำนวณ P
    return (
      <div>
      <Jumbotron fluid>
        <Head />
        <Container fluid>
          <center>
          <h1 className="display-4">สูตรคำนวณ</h1>
          </center>
        </Container>
      </Jumbotron>

      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <br/> 
          <div className='card text-center'>
          <div className='overflow'>
            <img src={kw} alt='image1' className='card-img-top' />
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร kW</h4>
              <a className='btn btn-outline-success'  onClick={this.handleClick.bind(this)}>
                Click
              </a>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <br/> 
        <div className='card text-center'>
          <div className='overflow'>
            <img src={P} alt='image1' className='card-img-top' />
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร P</h4>
            <button className='btn btn-outline-success' disabled>  Click </button>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <br/> 
        <div className='card text-center'>
          <div className='overflow'>
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร P</h4>
            <br/>
            <Container>
              <Row xs="3">
                <Col><FormGroup>
                <Input
                  type="number"
                  name="number"
                  value={this.state.numberP}
                  onChange={this.handlenumberP.bind(this)}
                  placeholder="Vn"
                  /></FormGroup></Col>
                <Col><FormGroup>
                <Input
                  type="number"
                  name="number"
                  value={this.state.numberP2}
                  onChange={this.handlenumberP2.bind(this)}
                  placeholder="I"
                /></FormGroup></Col>
                <Col><FormGroup>
                <Input
                  type="number"
                  name="number"
                  value={this.state.numberP3}
                  onChange={this.handlenumberP3.bind(this)}
                  placeholder="CosO"
                /></FormGroup></Col>
                <Col></Col>
                <Col>1000</Col>
                <Col></Col>
                <Col></Col>
                <Col>
                  <br/>
                  <a className='btn btn-outline-success' onClick={this.handleClickP.bind(this)}>Click</a>
                </Col>
              </Row>
              <h3><br/>P = {this.state.sumP}</h3>
            </Container>
          </div>
        </div>
      </div> 
        </div>  
      </div>
      <br/><br/>
      <Jumbotron fluid>
        <Container fluid>
          <center>
          <h1 className="display-4">คำนวณค่าความคลาดเคลื่อน</h1>
          </center>
        </Container>
      </Jumbotron>
      <center>
      <div className='col-md-4'>
        <br/> 
        <div className='card text-center'>
          <div className='overflow'>
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร E</h4>
            <br/>
            <Container>
              <Row xs="3">
                <Col>({this.state.sumP}</Col>
                <Col>-1)</Col>
                <Col>100</Col>
                <Col><FormGroup>
                <Input
                  type="number"
                  name="number"
                  value={this.state.numberE}
                  onChange={this.handlenumberE.bind(this)}
                  placeholder="P"
                  /></FormGroup></Col>
                <Col>
                  <br/><br/>
                  <a className='btn btn-outline-success' onClick={this.handleClickE.bind(this)}>Click</a>
                </Col>
              </Row>
              <h3><br/>E = {this.state.sumE} % </h3>
            </Container>
          </div>
        </div>
      </div> 
      </center>
      <br/><br/>
    </div>
    );
    }else if(this.state.click == false){                //สูตรคำนวณ kW
      return (
        <div>
        <Jumbotron fluid>
        <Head />
          <Container fluid>
            <center>
            <h1 className="display-4">สูตรคำนวณ</h1>
            </center>
          </Container>
        </Jumbotron>
  
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-4'>
            <br/> 
            <div className='card text-center'>
          <div className='overflow'>
             <img src={kw} alt='image1' className='card-img-top' />
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร kW</h4>
            <button className='btn btn-outline-success' disabled>  Click </button>
          </div>
        </div>
            </div>
            <div className='col-md-4'>
          <br/> 
          <div className='card text-center'>
        <div className='overflow'>
           
        </div>    
        <div className='card-body text-dark'>
          <h4 className='card-title'>สูตร kW</h4>
          <br/>
          <Container>
      <Row xs="2">
        <Col>3600</Col>
        <Col><FormGroup>
        <Input
          type="number"
          name="number"
          value={this.state.number}
          onChange={this.handlenumber.bind(this)}
          placeholder="จำนวนรอบ"
        />
      </FormGroup></Col>
        <Col><FormGroup>
        <Input
          type="number"
          name="number"
          value={this.state.number2}
          onChange={this.handlenumber2.bind(this)}
          placeholder="ค่าคงที่"
        />
      </FormGroup></Col>
        <Col><FormGroup>
        <Input
          type="number"
          name="number"
          value={this.state.number3}
          onChange={this.handlenumber3.bind(this)}
          placeholder="เวลาที่จับได้"
        />
        
      </FormGroup></Col>
      <Col  xs="12"><a className='btn btn-outline-success' onClick={this.handleClick3.bind(this)}>
              Click
            </a>
            </Col>
      </Row>
      <h3><br/>kW = {this.state.sumkw}</h3>
      </Container>
        </div>
      </div>
          </div>  
            <div className='col-md-4'>
          <br/> 
          <div className='card text-center'>
        <div className='overflow'>
           <img src={P} alt='image1' className='card-img-top' />
        </div>    
        <div className='card-body text-dark'>
          <h4 className='card-title'>สูตร P</h4>
          <a className='btn btn-outline-success' onClick={this.handleClick2.bind(this)}>
              Click
            </a>
        </div>
      </div>
          </div>
          </div> 
             
        </div>
        <br/><br/>
      <Jumbotron fluid>
        <Container fluid>
          <center>
          <h1 className="display-4">คำนวณค่าความคลาดเคลื่อน</h1>
          </center>
        </Container>
      </Jumbotron>
      <center>
      <div className='col-md-4'>
        <br/> 
        <div className='card text-center'>
          <div className='overflow'>
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร E</h4>
            <br/>
            <Container>
              <Row xs="3">
                <Col>({this.state.sumkw}</Col>
                <Col>-1)</Col>
                <Col>100</Col>
                <Col><FormGroup>
                <Input
                  type="number"
                  name="number"
                  value={this.state.numberE}
                  onChange={this.handlenumberE.bind(this)}
                  placeholder="P"
                  /></FormGroup></Col>
                <Col>
                  <br/><br/>
                  <a className='btn btn-outline-success' onClick={this.handleClickE.bind(this)}>Click</a>
                </Col>
              </Row>
              <h3><br/>E = {this.state.sumE} % </h3>
            </Container>
          </div>
        </div>
      </div> 
      </center>
      <br/><br/>
      </div>
      );
    }else if(this.state.click ==true &&this.state.click2==true){
      return (
        <div>
        <Jumbotron fluid>
        <Head />
          <Container fluid>
            <center>
            <h1 className="display-4">สูตรคำนวณ</h1>
            </center>
          </Container>
        </Jumbotron>
  
  
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-4'>
            <br/> 
            <div className='card text-center'>
          <div className='overflow'>
             <img src={kw} alt='image1' className='card-img-top' />
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร kW</h4>
              <a className='btn btn-outline-success'  onClick={this.handleClick.bind(this)}>
                Click
              </a>
          </div>
        </div>
            </div>
            <div className='col-md-4'>
              
            </div>
            <div className='col-md-4'>
            <br/> 
            <div className='card text-center'>
          <div className='overflow'>
             <img src={P} alt='image1' className='card-img-top' />
          </div>    
          <div className='card-body text-dark'>
            <h4 className='card-title'>สูตร P</h4>
            <a className='btn btn-outline-success' onClick={this.handleClick2.bind(this)}>
                Click
              </a>
          </div>
        </div>
            </div>    
          </div>    
        </div>
        
      </div>
      );
    }
  }
}

export default Member;



