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
                title: {
                    type: DataTypes.STRING
                },
                content: {
                    type: DataTypes.STRING
                },
                rating: {
                    type: DataTypes.INTEGER
                },
                CustomerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Customer,
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
                modelName: 'Review'
            }
        )
    }
}

export default Review
