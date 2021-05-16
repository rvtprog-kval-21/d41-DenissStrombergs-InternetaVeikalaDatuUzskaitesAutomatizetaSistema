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
                cart_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Cart,
                        key: 'id'
                    }
                },
                product_id: {
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
        models.Cart.belongsToMany(
            models.Product,
            {
                through: this,
                foreignKey: 'cart_id'
            }
        )

        models.Product.belongsToMany(
            models.Cart,
            {
                through: this,
                foreignKey: 'product_id'
            }
        )
    }
}

export default CartItem
