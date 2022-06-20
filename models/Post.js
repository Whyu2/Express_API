module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
          },
          nama: {
          type: DataTypes.STRING,
          allowNull :false,
          },
          jenis: {
            type: DataTypes.STRING,
            allowNull :false,
          },
          informasi: {
            type: DataTypes.TEXT,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull :false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull :false,
          }, 
    },{
        tableName: 'posts'
    } );
    return Post;
}