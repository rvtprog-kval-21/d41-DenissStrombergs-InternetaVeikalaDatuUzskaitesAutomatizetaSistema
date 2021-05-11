import { DataTypes, Model } from 'sequelize'

export class Customer extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                email: {
                    type: DataTypes.STRING
                },
                firstName: {
                    type: DataTypes.STRING
                },
                lastName: {
                    type: DataTypes.STRING
                },
                password: {
                    type: DataTypes.STRING
                }
            },
            {
                sequelize,
                modelName: 'Customer'
            }
        )
    }

    static associate(models) {
        this.hasMany(models.CustomerAddress)
    }
}

export default Customer
