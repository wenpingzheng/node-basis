function User(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.go = function() {
    console.log(this.name + '去哪里！')
  }
}

module.exports = User;