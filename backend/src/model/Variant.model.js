import { DataTypes, Model } from 'sequelize'
import Product from './Product.model'

export class Variant extends Model {
    static init(sequelize) {
        return super.init(
            {
                ParentId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                },
                ChildId: {
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
                foreignKey: 'ParentId'
            }
        )

        models.Product.belongsToMany(
            models.Product,
            {
                through: this,
                as: 'Children',
                foreignKey: 'ChildId'
            }
        )
    }
}

export default Variant
