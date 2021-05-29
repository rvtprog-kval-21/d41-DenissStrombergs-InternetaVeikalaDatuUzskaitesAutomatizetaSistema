import { DataTypes, Model } from 'sequelize'

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
                totalTax: {
                    type: DataTypes.FLOAT
                },
                subtotal: {
                    type: DataTypes.FLOAT
                },
                total: {
                    type: DataTypes.FLOAT
                },
                cart_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Cart,
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
        this.belongsTo(models.Customer, { foreignKey: 'cart_id'})
        this.hasMany(models.CartItem, { foreignKey: 'cart_id' })
    }
}

export default Cart
