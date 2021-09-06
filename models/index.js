const User = require("./user");
const Blog = require("./blog");
const Content = require("./content");


User.hasMany(Blog, {
    foreignKey: 'id'
});

User.hasMany(Content, {
    foreignKey: 'id',
    onDelete: 'cascade'
});

Blog.belongsTo(User, {
    foreignKey: 'id',
    onDelete: 'cascade'
});

Blog.hasMany(Content, {
    foreignKey: 'id',
    onDelete: 'cascade'
});


Content.belongsTo(User, {
    foreignKey: 'id',
    onDelete: 'cascade'
});

Content.belongsTo(Blog, {
    foreignKey: 'id',
    onDelete: 'cascade'
});



module.exports = {User, Blog, Content};