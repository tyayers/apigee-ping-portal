import { useEffect } from 'react';
import PfAuthnWidget from '@ping-identity/pf-authn-js-widget'

export default function SignIn(props) {

  useEffect(() => {
    var baseUrl = 'https://localhost:9031';
    var authnWidget = new PfAuthnWidget(baseUrl, {divId: 'authnwidget', useActionParam: true})
    authnWidget.init();
  });

  return (
    <div>
      <br></br>
      <div id="authnwidget"></div>
    </div>
    
  );
}