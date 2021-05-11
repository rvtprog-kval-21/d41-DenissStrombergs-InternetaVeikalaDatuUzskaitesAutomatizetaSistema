import { DataTypes, Model } from 'sequelize'
import Category from './Category.model'
import Product from './Product.model'

export class CategoryProduct extends Model {
    static init(sequelize) {
        return super.init(
            {
                CategoryId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Category,
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
                modelName: 'CategoryProduct'
            }
        )
    }
    
    static associate(models) {
        models.Category.belongsToMany(
            models.Product,
            {
                through: this
            }
        )
        
        models.Product.belongsToMany(
            models.Category,
            {
                through: this
            }
        )
    }
}

export default CategoryProduct
