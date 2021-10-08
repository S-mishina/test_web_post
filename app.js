```
モジュールを一つに固めてないので, 使う時はモジュールをインストールしてください.
npm install hogehoge

default port 8081
http://localhost:8081
```

//モジュール読み込み
//サーバ起動に必要なモジュール
var express = require('express');
var { connect } = require('http2');
var request = require('request');
var app = express();

//https://nodejs.keicode.com/nodejs/express-params-form.php
//この辺が参考になります.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//テンプレートエンジンを使えるようにする.
app.set('view engine', 'ejs');

// 8081番ポートで待ちうける
app.listen(8081, () => {
    console.log('start port 8081');
    console.log('http://localhost:8081')
  });

//index
app.get('/', (req, res) => {
    res.render("index");
  });

//index post
app.post('/post_task', function (req, res) {
  //postで受け取る.
  //タイトル
  title=req.body.title
  //コメント
  contents=req.body.contents
  //postの内容をreturnでviewに返してます.
  res.render("post_task",{title, contents});
  })
