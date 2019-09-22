var express = require('express');
var router = express.Router();

// 接收登录请求
router.post('/login', (req, res) => {
  // 接收参数
  console.log(req.body)
  let {username, password} = req.body;
  console.log(username, password)
  res.send('1eewew')
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
