
var async = require('async')
// 串行无关联
// async.series({
//   one: function(callback) {
//     i = 0
//     setInterval(function(){
//       console.log('one' + new Date())
//       i++
//       if(i == 3) {
//         clearInterval(this)
//         callback(null, 'one完毕')
//       }
//     }, 1000);
//   },
//   two: function(callback) {
//     j = 0
//     setInterval(function(){
//       console.log('two' + new Date())
//       j++
//       if(j == 3) {
//         clearInterval(this)
//         callback(null, 'two完毕')
//       }
//     }, 1000);
//   }
// },function(err, result) {
//   console.log('result',result)
// })

// 并行无关联
// async.parallel({
//   one: function(callback) {
//     i = 0
//     setInterval(function(){
//       console.log('one' + new Date())
//       i++
//       if(i == 3) {
//         clearInterval(this)
//         callback('error', 'one完毕')
//       }
//     }, 1000);
//   },
//   two: function(callback) {
//     j = 0
//     setInterval(function(){
//       console.log('two' + new Date())
//       j++
//       if(j == 3) {
//         clearInterval(this)
//         callback(null, 'two完毕')
//       }
//     }, 1000);
//   }
// },function(err, result) {
//   console.log('result',result)
// })

// 串行有关联
async.waterfall([
  function(callback) {
    i = 0
    setInterval(function(){
      console.log('one' + i)
      i++
      if(i == 3) {
        clearInterval(this)
        callback(null, 'one完毕')
      }
    }, 1000);
  },
  function(prevalue, callback) {
    j = 0
    setInterval(function(){
      console.log(prevalue + ',two' + j)
      j++
      if(j == 3) {
        clearInterval(this)
        callback(null, prevalue + ',two完毕')
      }
    }, 1000);
  }
],function(err, result) {
  console.log('result',result)
})
