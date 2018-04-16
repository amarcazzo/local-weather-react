import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Icon } from 'semantic-ui-react';


class CurrentConditions extends React.Component {
  setIcon(icon){
    switch (icon) {
      case 'Nublado':
      case 'Nubes y sol':
        return 'cloud';
      case 'Lluvioso':
        return 'rain';
      default:
        return 'sun'
    }
  }

  render () {
    const currentConditions = this.props.conditions;
    return (
      <Container>
        <Card centered>
          <Card.Content>
            <Card.Header>
              {currentConditions.Temperature.Metric.Value} °C
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Viento (km/h) {currentConditions.Wind.Speed.Metric.Value}  | Humedad {currentConditions.RelativeHumidity}%
              </span>
            </Card.Meta>
            <Card.Description>
              <Icon name={this.setIcon(currentConditions.WeatherText)} size='big' />
              <p>{currentConditions.WeatherText}</p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

CurrentConditions.propTypes = {
  conditions: PropTypes.object
}

export default CurrentConditions;
