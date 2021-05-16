import { DataTypes, Model } from 'sequelize'

export class Admin extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                username: {
                    type: DataTypes.STRING,
                    unique: true
                },
                email: {
                    type: DataTypes.STRING,
                    unique: true
                },
                password: {
                    type: DataTypes.STRING
                },
                firstName: {
                    type: DataTypes.STRING
                },
                lastName: {
                    type: DataTypes.STRING
                }
            },
            {
                sequelize,
                modelName: 'User'
            }
        )
    }
}

export default Admin
