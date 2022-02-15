const express = require("express")

const app = express();

const { sequelize } = require('./models')

sequelize
  .sync({ force: false })
  .then(()=> {
    console.log('데이터베이스 연결 성공')
  })
  .catch((err)=>{
    console.error(`데이터베이스 연결 에러 ${err}`)
  })

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.send('익스프뤠쓰!!!!')
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
})