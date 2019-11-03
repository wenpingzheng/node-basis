// 读取文件
var fs = require('fs')
module.exports = {
  readfileSync: function(path, res) { // 同步读
    var data = fs.readFileSync(path, 'utf-8');
    console.log('同步方法执行')
    res.write(data)
  },
  readfile: function(path, callback) { // 异步读
    fs.readFile(path, function(err, data) {
      if(err) {
        console.log(err)
        callback(err.toString())
      } else{
        // console.log('readfile',data.toString())
        callback(data.toString())
      }
    })
  },
  writefile: function(path, data, callback) {
    fs.writeFile(path, data, function(err) {
      if(err) { throw err }
      callback('异步写入内容成功！')
    })
  },
  writeFileSync: function(path, data) {
    fs.writeFileSync(path, data)
    console.log('同步写入内容成功！')
  },
  readImg: function(path, res) {
    fs.readFile(path, 'binary', function(err, filedata) {
      if(err) {
        console.log(err)
        return
      } else {
        res.write(filedata, 'binary')
        res.end()
      }
    })
  }
}