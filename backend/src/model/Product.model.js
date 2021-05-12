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
                urlKey: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: true
                },
                sku: {
                    type: DataTypes.STRING,
                    unique: true
                },
                isEnabled: {
                    type: DataTypes.BOOLEAN
                },
                type: {
                    type: DataTypes.STRING
                },
                name: {
                    type: DataTypes.STRING
                },
                price: {
                    type: DataTypes.FLOAT
                },
                stockQuantity: {
                    type: DataTypes.INTEGER
                },
                specialDiscountType: {
                    type: DataTypes.STRING
                },
                specialDiscountValue: {
                    type: DataTypes.FLOAT
                },
                specialTaxRate: {
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
                attributeConfig: {
                    type: DataTypes.JSONB
                },
                cache: {
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
        this.hasMany(models.CartItem)
        this.hasMany(models.OrderItem)
        this.hasMany(models.Review)
    }
}

export default Product
