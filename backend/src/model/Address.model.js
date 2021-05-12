import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'

export class Address extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                firstName: {
                    type: DataTypes.STRING
                },
                lastName: {
                    type: DataTypes.STRING
                },
                phoneNumber: {
                    type: DataTypes.STRING
                },
                country: {
                    type: DataTypes.STRING
                },
                city: {
                    type: DataTypes.STRING
                },
                province: {
                    type: DataTypes.STRING
                },
                street1: {
                    type: DataTypes.STRING
                },
                street2: {
                    type: DataTypes.STRING
                },
                postalCode: {
                    type: DataTypes.STRING
                },
                CustomerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Customer,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Address'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer)
        this.hasMany(models.Order)
    }
}

export default Address
