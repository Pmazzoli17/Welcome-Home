module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      isNumeric: true,
      validate: {
        len: [5]
      }
    }
    // body: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   len: [1]
    // }
  });
  return Post;
};