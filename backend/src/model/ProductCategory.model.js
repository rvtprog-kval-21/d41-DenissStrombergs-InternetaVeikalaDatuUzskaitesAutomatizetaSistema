import { DataTypes, Model } from 'sequelize'
import Product from './Product.model'
import Category from './Category.model'

export class ProductCategory extends Model {
    static init(sequelize) {
        return super.init(
            {
                ProductId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                },
                CategoryId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Category,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'ProductCategory'
            }
        )
    }
    
    static associate(models) {
        models.Product.belongsToMany(
            models.Category,
            {
                through: this
            }
        )

        models.Category.belongsToMany(
            models.Product,
            {
                through: this
            }
        )
    }
}

export default ProductCategory
