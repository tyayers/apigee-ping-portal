import React from 'react';
import { useEffect } from 'react';
import PfAuthnWidget from '@ping-identity/pf-authn-js-widget'
import { useHistory } from "react-router-dom";

export default function SignIn(props) {

  const [authenticated, setAuthenticate] = React.useState(false);
  const history = useHistory();

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
        var code = response.code;
        console.log(code);
        setAuthenticate(true);
        props.onUserChange({user: "user", code: code})
        history.push("/apis");
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