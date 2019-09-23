var express = require('express');
var router = express.Router();
var connection = require('./test');

// 连接数据库
connection.connect(() =>{
  console.log('数据库连接成了')
})

// 接收登录请求
router.post('/login', (req, res) => {
  // 接收参数
  console.log(req.body)
  let {username, password} = req.body;
  console.log(username, password)
  // 去数据库查询是否存在该用户,去查询sql
  const sqlCheck = `select * from users where username='${username}' and password='${password}'`;

  connection.query(sqlCheck, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
