import { DataTypes, Model } from 'sequelize'
import Order from './Order.model'
import Product from './Product.model'

export class OrderItem extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                quantity: {
                    type: DataTypes.INTEGER
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
                OrderId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Order,
                        key: 'id'
                    }
                },
                ProductId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'OrderItem'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Order)
        this.belongsTo(models.Product)
    }
}

export default OrderItem
