import React, { Component } from 'react';
import '../Styles/App.css';
import { Link } from 'react-router';
import calculator from "../Styles/calculator.png";
import note from "../Styles/note.png";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <br/> <br/> <br/>
            <div className='card text-center'>
              <div className='overflow'>
                <img src={calculator} alt='image1' className='card-img-top' />
              </div>    
              <div className='card-body text-dark'>
                <h4 className='card-title'>เครื่องคำนวณ</h4>
                <Link to="/member">
                  <a className='btn btn-outline-success'>Click</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
          </div>
          
          <div className='col-md-4'>
            <br/> <br/> <br/>
          <div className='card text-center'>
        <div className='overflow'>
           <img src={note} alt='image1' className='card-img-top' />
        </div>    
        <div className='card-body text-dark'>
          <h4 className='card-title'>ตารางข้อมูล</h4>
          <Link to="/form">
            <a className='btn btn-outline-success'>
              Click
            </a>
          </Link>
        </div>
      </div>
          </div>    
        </div>    
      </div>
    );
  }
}

export default Home;




