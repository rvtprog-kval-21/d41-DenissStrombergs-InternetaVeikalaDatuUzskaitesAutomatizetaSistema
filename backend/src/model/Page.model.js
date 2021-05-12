import { DataTypes, Model } from 'sequelize'

export class Page extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                urlKey: {
                    type: DataTypes.STRING,
                    unique: true
                },
                isEnabled: {
                    type: DataTypes.BOOLEAN
                },
                title: {
                    type: DataTypes.STRING
                },
                content: {
                    type: DataTypes.STRING
                }
            },
            {
                sequelize,
                modelName: 'Page'
            }
        )
    }
}

export default Page
