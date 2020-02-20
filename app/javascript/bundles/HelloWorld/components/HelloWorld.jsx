// import PropTypes from 'prop-types';
import React from 'react';
import Button from 'terra-button';
import {IntlProvider} from 'react-intl';

export default class HelloWorld extends React.Component {

  render() {
    return (
      <div>
        <IntlProvider locale="es">
          <Button type="button"> This is an alert!</Button>
        </IntlProvider>


        <h3>
          Hello!
        </h3>
        <hr />
      </div>
    );
  }
}
