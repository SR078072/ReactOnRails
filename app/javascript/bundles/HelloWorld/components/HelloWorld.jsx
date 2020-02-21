
import React, { useRef, useState } from 'react';
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Alert from 'terra-alert';
import { IntlProvider } from 'react-intl';


export default class HelloWorld extends React.Component {

  render() {
    return (
      <IntlProvider locale="en-US">
        <div>
          <Button text="Press Me!" variant="emphasis"/>
          <hr/>
          <Button text="Press Me!" variant="utility" icon={<IconEdit />}/>
          <hr />
          <Alert type="success">Hello!</Alert>
        </div>  
      </IntlProvider>
    );
  }
}