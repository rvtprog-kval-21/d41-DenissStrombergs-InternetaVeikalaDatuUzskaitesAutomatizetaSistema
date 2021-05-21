import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'

export class Cart extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
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
                modelName: 'Cart',
                timestamps: false
            }
        )
    }

    static associate(models) {
        this.hasMany(models.CartItem, { foreignKey: 'cart_id' })
        this.belongsTo(models.Customer, { foreignKey: 'customer_id' })
    }
}

export default Cart
