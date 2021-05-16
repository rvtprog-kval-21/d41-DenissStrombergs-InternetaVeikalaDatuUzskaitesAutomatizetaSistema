import { DataTypes, Model } from 'sequelize'
import Product from './Product.model'

export class Variant extends Model {
    static init(sequelize) {
        return super.init(
            {
                parent_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                },
                child_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Variant'
            }
        )
    }

    static associate(models) {
        models.Product.belongsToMany(
            models.Product,
            {
                through: this,
                as: 'Parents',
                foreignKey: 'parent_id'
            }
        )

        models.Product.belongsToMany(
            models.Product,
            {
                through: this,
                as: 'Children',
                foreignKey: 'child_id'
            }
        )
    }
}

export default Variant
