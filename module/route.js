// 根据pathname值 找到对应的处理函数
module.exports = {
  login: function(req, res) {
    res.write('我是登录函数')
  },
  demo: function(req, res) {
    res.write('我是DEMO')
  }
}