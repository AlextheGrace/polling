const express = require('express');
const router = express.Router();


const   Pusher = require('pusher');

var pusher = new Pusher({
  appId: '624496',
  key: '2ff4a1fbbfcb98781826',
  secret: '947f936f3a1fd175182f',
  cluster: 'eu',
  encrypted: true
});


router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req,res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
      });

      return res.json({ success: true, message: "cheers for voting"  })
})

module.exports = router;