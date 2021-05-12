import { DataTypes, Model } from 'sequelize'
import Order from './Order.model'

export class Invoice extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                date: {
                    type: DataTypes.DATE,
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
                }
            },
            {
                sequelize,
                modelName: 'Invoice'
            }
        )
    }

    static associate(models) {
        this.hasOne(models.Invoice)
    }
}

export default Invoice
