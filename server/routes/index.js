const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // API routes
//   fs.readdirSync(__dirname + '/api/').forEach((file) => {
//     require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
//   });
// };

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })}}
