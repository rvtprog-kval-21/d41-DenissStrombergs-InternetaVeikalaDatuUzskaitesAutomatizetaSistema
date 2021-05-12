import { DataTypes, Model } from 'sequelize'
import Address from './Address.model'
import Customer from './Customer.model'

export class Order extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                reference: {
                    type: DataTypes.STRING,
                    unique: true
                },
                date: {
                    type: DataTypes.DATE,
                },
                status: {
                    type: DataTypes.STRING
                },
                isReturned: {
                    type: DataTypes.BOOLEAN,
                },
                totalDelivery: {
                    type: DataTypes.FLOAT
                },
                totalTax: {
                    type: DataTypes.FLOAT
                },
                subtotal: {
                    type: DataTypes.FLOAT
                },
                total: {
                    type: DataTypes.FLOAT
                },
                CustomerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Customer,
                        key: 'id'
                    }
                },
                AddressId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Address,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Order'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Address)
        this.belongsTo(models.Customer)
        this.hasOne(models.Invoice)
        this.hasMany(models.OrderItem)
    }
}

export default Order
