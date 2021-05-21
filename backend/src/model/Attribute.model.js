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
                code: {
                    type: DataTypes.STRING,
                    unique: true
                },
                isEnabled: {
                    type: DataTypes.BOOLEAN
                },
                label: {
                    type: DataTypes.STRING
                },
                type: {
                    type: DataTypes.STRING
                },
                attributeOptions: {
                    type: DataTypes.JSONB
                },
                isFilter: {
                    type: DataTypes.BOOLEAN
                }
            },
            {
                sequelize,
                modelName: 'Attribute',
                timestamps: false
            }
        )
    }
}

export default Attribute
