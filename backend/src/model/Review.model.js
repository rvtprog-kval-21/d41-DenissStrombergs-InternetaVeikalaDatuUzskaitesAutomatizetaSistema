import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'
import Product from './Product.model'

export class Review extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                status: {
                    type: DataTypes.STRING,
                },
                date: {
                    type: DataTypes.DATE
                },
                title: {
                    type: DataTypes.STRING
                },
                content: {
                    type: DataTypes.STRING
                },
                rating: {
                    type: DataTypes.INTEGER
                },
                customer_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Customer,
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
                modelName: 'Review',
                timestamps: false
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer, { foreignKey: 'customer_id' })
        this.belongsTo(models.Product, { foreignKey: 'product_id' })
    }
}

export default Review
