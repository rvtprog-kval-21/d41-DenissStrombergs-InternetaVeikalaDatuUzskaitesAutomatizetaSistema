import { Model, DataTypes } from 'sequelize'

export class Attribute extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                isEnabled: {
                    type: DataTypes.BOOLEAN
                },
                code: {
                    type: DataTypes.STRING,
                    unique: true
                },
                label: {
                    type: DataTypes.STRING
                },
                isFilter: {
                    type: DataTypes.BOOLEAN
                },
                attributeOptions: {
                    type: DataTypes.JSONB
                }
            },
            {
                sequelize,
                modelName: 'Attribute'
            }
        )
    }
}

export default Attribute
