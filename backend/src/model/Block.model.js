import { DataTypes, Model } from 'sequelize'

export class Block extends Model {
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
                content: {
                    type: DataTypes.STRING
                }
            },
            {
                sequelize,
                modelName: 'Block'
            }
        )
    }
}

export default Block
