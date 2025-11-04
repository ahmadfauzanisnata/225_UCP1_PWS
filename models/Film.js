module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define("Film", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nama_Film: { 
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        Sutradara: {
            type: DataTypes.STRING
        },
         Tahun_Terbit: {
            type: DataTypes.STRING
        },
         Genre: {
            type: DataTypes.STRING
        },
    });
    return Film;
}