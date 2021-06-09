# apigee-ping-portal

This is a project to demonstrate a custom static developer portal using PING Federate as IDP and Apigee as API Management solution.

## Live version
You can test a live version of this portal running at [https://apigee-ping.web.app](https://apigee-ping.web.app)

## Run
To run the client locally for testing, simply execute:

```
cd src/devportalclient
npm install
npm start
```

This will install the dependencies and start a test version of the portal client.

## Deploy
You can deploy the client in a couple of different ways.

1. Deploy to Firebase Hosting.  You can do this by first building the client, and then deploying to firebase.

```
cd src/devportalclient
npm run build
firebase deploy
```

2. Deploy to any nodejs host or containerized environment, you can use the devportalservice component.

First build the client, and copy the output into the server's public directory for hosting.

```
cd src/devportalclient
./build.sh
```

Then run the service app.

```
cd ../devportalserver
node src
```


