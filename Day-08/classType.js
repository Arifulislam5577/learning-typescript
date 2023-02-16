var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    User.prototype.displayUser = function () {
        console.log("UserName is : ".concat(this.userName, " and Password is : ").concat(this.password));
    };
    return User;
}());
var user1 = new User("Arif", "pass123");
user1.displayUser();
