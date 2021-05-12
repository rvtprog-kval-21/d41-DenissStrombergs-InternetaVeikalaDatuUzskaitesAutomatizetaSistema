import { DataTypes, Model } from 'sequelize'
import Cart from './Cart.model'
import Product from './Product.model'

export class CartItem extends Model {
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
                CartId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Cart,
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
                modelName: 'CartItem'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Cart)
        this.belongsTo(models.Product)
    }
}

export default CartItem
