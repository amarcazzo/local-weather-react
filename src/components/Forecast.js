import React from 'react';
import CurrentConditions from './CurrentConditions.js';
import FiveDayConditions from './FiveDayConditions.js';
import { Container, Dimmer, Loader, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { config } from '../config.js';

class Forecast extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentConditions: {},
      fiveDayConditions: [],
      isLoading: true,
      position: '2935'
    }

    // this binding
    this.getCurrentConditions = this.getCurrentConditions.bind(this);
    this.getFiveDayConditions = this.getFiveDayConditions.bind(this);
  }

  getLocation = () => {
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((pos) => {

      })
    } else {
    }
  }

  getCurrentConditions = () => {
    axios.get(config.currentUrl+'9-'+this.state.position+'_1_AL?apikey='+config.apiKey+'&details=true&language=es-ar')
      .then(res => this.setState({currentConditions: res.data[0]}))
      .catch(err => console.log(err.message))
      .then(this.getFiveDayConditions())
  }

  getFiveDayConditions = () => {
    axios.get(config.fiveDaysUrl+'9-'+this.state.position+'_1_AL?apikey='+config.apiKey+'&language=es-es&details=true&metric=true')
      .then(res => this.setState({fiveDayConditions: res.data.DailyForecasts, isLoading: false}))
      .catch(err => console.log(err.message))
  }

  componentDidMount(){
    this.getCurrentConditions();
    this.getFiveDayConditions();
  }

  render () {
    const { isLoading, currentConditions, fiveDayConditions } = this.state;

    if(isLoading){
      return (
        <Container>
          <Dimmer active inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        </Container>
      )
    }

    return (
      <div>
        <Container textAlign='center'>
          <CurrentConditions conditions={currentConditions}></CurrentConditions>
          <Divider />
          <FiveDayConditions conditions={fiveDayConditions}></FiveDayConditions>
        </Container>
      </div>
    )
  }
}

export default Forecast;
