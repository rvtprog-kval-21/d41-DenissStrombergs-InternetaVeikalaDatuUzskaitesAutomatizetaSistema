import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'

export class PaymentCard extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                cardholderName: {
                    type: DataTypes.STRING
                },
                number: {
                    type: DataTypes.STRING
                },
                cvcCode: {
                    type: DataTypes.STRING
                },
                expirationDate: {
                    type: DataTypes.DATE
                },
                customer_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Customer,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'PaymentCard'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer, { foreignKey: 'customer_id' })
    }
}

export default PaymentCard
