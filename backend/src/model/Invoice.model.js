import { DataTypes, Model } from 'sequelize'

export class Invoice extends Model {
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
                }
            },
            {
                sequelize,
                modelName: 'Invoice'
            }
        )
    }
}

export default Invoice
