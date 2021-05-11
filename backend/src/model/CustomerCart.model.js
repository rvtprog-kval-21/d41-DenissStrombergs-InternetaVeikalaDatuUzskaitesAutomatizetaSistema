import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'

export class CustomerCart extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
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
                modelName: 'CustomerCart'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer)
    }
}

export default CustomerCart
