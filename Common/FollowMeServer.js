/* Connection configuration */
var express = require('express');
var followMeDBConnect = require('./FollowMeServerDbConnect');
var followMeApi = require('./FollowMeServerAPI');

var port = (process.env.VMC_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

/* Express instantiation */
var app = express();
app.configure(function () 
{
    app.use(express.logger('dev'));    
    app.use(express.bodyParser());
});


/* linking methods to REST methods */

app.get('/users/getcurrentlocation/:email', followMeApi.FollowMeGetCurrentLocation);
app.post('/users/setpath/:email', followMeApi.FollowMeSetPath);
app.delete('/users/droppath/:email', followMeApi.FollowMeDropPath);
app.post('/users/sendpath', followMeApi.FollowMeSendPath);
app.post('/users/sendcurrentlocation', followMeApi.FollowMeSendLocation);
app.post('/events/createevent/:email', followMeApi.FollowMeCreateEvent);
app.delete('/events/dropevent/:email', followMeApi.FollowMeDropEvent);
app.post('/events/notifyemergency/:email', followMeApi.FollowMeNotifyEmergency);
app.post('/users/changeuserstate/:email', followMeApi.FollowMeChangeuserState);
app.post('/events/getnearbyevents/', followMeApi.FollowMeGetAllNearbyEvents);
app.post('/users/setcurrentlocation/:email', followMeApi.FollowMeSetCurrentLocation);

app.listen(port,host);
