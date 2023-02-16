var Category;
(function (Category) {
    Category["Electronic"] = "Electronic";
    Category["Accesories"] = "Accesories";
})(Category || (Category = {}));
var newProduct = {
    _id: 1,
    title: "RFL Vlander",
    price: 10,
    category: Category.Electronic,
    getOffers: function (category) {
        if (this.category === category) {
            return this.price - this.price * 0.1;
        }
        else {
            return "Not Allowed";
        }
    }
};
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["USER"] = "User";
})(Role || (Role = {}));
var user1 = {
    email: "a@gmail.com",
    password: "123",
    role: Role.USER
};
var student1 = {
    id: 1,
    email: "a@gmail.com",
    password: "123",
    role: Role.USER
};
