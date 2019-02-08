const Counter = require('../../models/Pokemon');
const User = require('../../models/User');

module.exports = (app) => {
  app.get('/api/counters', (req, res, next) => {
    Counter.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.post('/api/users/:user_id', function (req, res) {
    User.update({"_id": req.params.user_id}, {$push: {pokemon: req.body}})
    // var user = User.findById(req.params.user_id);
    // user.save()
    .then((data) => res.json(data))
    .catch(err => res.json(err));
  });

  app.post('/api/users', function (req, res) {
    var user = new User(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch(err => res.json(err));
  });

  app.post('/api/counters', function (req, res, next) {
    counter = new Counter(req.body);
    console.log(req.body, counter);

    counter.save()
      .then((data) => res.json(data))
      .catch((err) => next(err));
  });

  app.delete('/api/counters/:id', function (req, res, next) {
    Counter.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/increment', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count++;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/decrement', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count--;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};


