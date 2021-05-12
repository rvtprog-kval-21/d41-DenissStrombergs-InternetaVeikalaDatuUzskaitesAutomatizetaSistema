import { Model, DataTypes } from 'sequelize'

export class AttributeSet extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                code: {
                    type: DataTypes.STRING,
                    unique: true
                },
                isEnabled: {
                    type: DataTypes.BOOLEAN
                },
                name: {
                    type: DataTypes.STRING
                }
            },
            {
                sequelize,
                modelName: 'AttributeSet'
            }
        )
    }

    static associate(models) {
        this.hasMany(models.Product)
    }
}

export default AttributeSet
