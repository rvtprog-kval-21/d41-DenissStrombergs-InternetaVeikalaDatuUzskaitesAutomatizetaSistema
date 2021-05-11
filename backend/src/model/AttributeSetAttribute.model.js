import { Model, DataTypes } from 'sequelize'
import AttributeSet from './AttributeSet.model'
import Attribute from './AttributeSet.model'

export class AttributeSetAttribute extends Model {
    static init(sequelize) {
        return super.init(
            {
                AttributeSetId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Attribute,
                        key: 'id'
                    }
                },
                AttributeId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: AttributeSet,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'AttributeSetAttribute'
            }
        )
    }

    static associate(models) {
        models.AttributeSet.belongsToMany(
            models.Attribute,
            {
                through: this
            }
        )

        models.Attribute.belongsToMany(
            models.AttributeSet,
            {
                through: this
            }
        )
    }
}

export default AttributeSetAttribute
