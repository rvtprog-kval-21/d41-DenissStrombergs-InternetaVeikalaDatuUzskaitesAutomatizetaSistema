import { DataTypes, Model } from 'sequelize'
import AttributeSet from './AttributeSet.model'

export class Product extends Model {
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
                urlKey: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: true
                },
                type: {
                    type: DataTypes.STRING
                },
                sku: {
                    type: DataTypes.STRING,
                    unique: true
                },
                name: {
                    type: DataTypes.STRING
                },
                price: {
                    type: DataTypes.FLOAT
                },
                shortDescription: {
                    type: DataTypes.STRING
                },
                longDescription: {
                    type: DataTypes.TEXT
                },
                media: {
                    type: DataTypes.JSONB
                },
                attributeValues: {
                    type: DataTypes.JSONB
                },
                AttributeSetId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: AttributeSet,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Product'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.AttributeSet)
    }
}

export default Product
