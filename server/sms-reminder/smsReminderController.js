// handles get, post for 3rd-party services
var request = require('request');
var  API = require('../config/api-services.js');

// Twilio Credentials
var accountSid = API.twilioSid();
var authToken = API.twilioAuthToken();

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

module.exports = {
  sendSMS: function(req, res){
    client.messages.create({
      to: "+16022459516",
      from: "+16282222840",
      body: "Movie Catch: This movie showing starts in 2 days!",
      mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
    }, function(err, message) {
    console.log(message.sid);
    });
  }
};

// request({
//     url: "https://api.blockcypher.com/v1/btc/test3/addrs",
//     method: 'POST',
//     headers: {'content-type' : 'application/json'},
//     body: JSON.stringify(data),
//     mediaUrl:
//     }, function (error, response, body){
//       var finalMultiSigAddress = JSON.parse(body);
//       console.log('MultiSig Address Object');
//       console.log(finalMultiSigAddress);
//       console.log('New MultiSig Address Created');
//       console.log(finalMultiSigAddress.address);
//       callback(finalMultiSigAddress.address);
//     }

//   );

// console.log('In server upcoming movie GET');
//     request('https://api.themoviedb.org/3/movie/upcoming?api_key='
//                + API.movieDB() + '&language=en-US', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//           list = JSON.parse(body);
//           //console.log('list', list);
//           res.json(list);
//         };
//     });
