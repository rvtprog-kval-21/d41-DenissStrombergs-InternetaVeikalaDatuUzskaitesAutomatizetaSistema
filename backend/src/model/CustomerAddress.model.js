import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'

export class CustomerAddress extends Model {
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
                streetAddressLine1: {
                    type: DataTypes.STRING
                },
                streetAddressLine2: {
                    type: DataTypes.STRING
                },
                streetAddressLine3: {
                    type: DataTypes.STRING
                },
                city: {
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
                modelName: 'CustomerAddress'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer)
    }
}

export default CustomerAddress
