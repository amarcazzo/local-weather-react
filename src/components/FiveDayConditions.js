import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Icon } from 'semantic-ui-react';
import Time from 'react-time';

class FiveDayConditions extends React.Component {
  setIcon(icon){
    switch (icon) {
      case 'Nublado':
      case 'Nubes y sol':
      case 'Mayormente nublado':
        return 'cloud';
      case 'Lluvioso':
      case 'Lluvia':
        return 'rain';
      default:
        return 'sun'
    }
  }

  render () {
    return (
      <Container>
        <Card.Group itemsPerRow={5} stackable centered>
            {
              this.props.conditions.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header><Time value={item.Date} format='dddd'></Time></Card.Header>
                    <Card.Meta>
                      Máx. {item.Temperature.Maximum.Value} °C | Min. {item.Temperature.Minimum.Value} °C
                    </Card.Meta>
                    <Card.Description>
                      <Icon name={this.setIcon(item.Day.IconPhrase)} size='big' />
                      <p>{item.Day.LongPhrase}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              )
            })
          }
        </Card.Group>
      </Container>
    )
  }
}

FiveDayConditions.propTypes = {
  conditions: PropTypes.array
}

export default FiveDayConditions;
