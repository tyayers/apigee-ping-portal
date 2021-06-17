import React from 'react';
import { useEffect } from 'react';
import PfAuthnWidget from '@ping-identity/pf-authn-js-widget'

export default function SignIn(props) {

  const [authenticated, setAuthenticate] = React.useState(false);

  useEffect(() => {
    var baseUrl = 'https://apigee.ping-devops.com:9031';
    var authnWidget = new PfAuthnWidget(baseUrl, {divId: 'authnwidget', useActionParam: true})

    var config = {
      client_id: "PingRedirectless",
      response_type: "code",
      scope: ['openid', 'profile', 'email', 'address', 'phone'],
      nonce: Math.floor((Math.random()) * 0x100000).toString(16),
      
      onAuthorizationSuccess: function(response) {
        console.log("Authentication successful");
        console.log(response);

        setAuthenticate(true);

      }
    };
    authnWidget.initRedirectless(config);

  });

  return (
    <div>
      <br></br>
      <div id="authnwidget" style={!authenticated ? {} : { display: 'none' }}></div>
    </div>
    
  );
}