import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'

export class CustomerCard extends Model {
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
                modelName: 'CustomerCard'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer)
    }
}

export default CustomerCard
