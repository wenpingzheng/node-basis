
var async = require('async')
async.series({
  one: function(callback) {
    i = 0
    setInterval(function(){
      console.log('one' + new Date())
      i++
      if(i == 3) {
        clearInterval(this)
        callback(null, 'one完毕')
      }
    }, 1000);
  },
  two: function(callback) {
    j = 0
    setInterval(function(){
      console.log('two' + new Date())
      j++
      if(j == 3) {
        clearInterval(this)
        callback(null, 'two完毕')
      }
    }, 1000);
  }
},function(err, result) {
  console.log('result',result)
})