import { DataTypes, Model } from 'sequelize'

export class PriceRule extends Model {
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
                type: {
                    type: DataTypes.STRING
                },
                discountValue: {
                    type: DataTypes.FLOAT
                },
                filter: {
                    type: DataTypes.JSONB
                }
            },
            {
                sequelize,
                modelName: 'PriceRule'
            }
        )
    }
}

export default PriceRule
