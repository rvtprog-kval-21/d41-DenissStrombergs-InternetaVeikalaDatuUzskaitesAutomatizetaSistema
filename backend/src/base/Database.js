import { DataTypes, Sequelize } from 'sequelize'
import Attribute from '../model/Attribute.model'
import AttributeSet from '../model/AttributeSet.model'
import AttributeSetAttribute from '../model/AttributeSetAttribute.model'
import Block from '../model/Block.model'
import Category from '../model/Category.model'
import CategoryProduct from '../model/CategoryProduct.model'
import Customer from '../model/Customer.model'
import Address from '../model/Address.model'
import Invoice from '../model/Invoice.model'
import Order from '../model/Order.model'
import Page from '../model/Page.model'
import Product from '../model/Product.model'
import Review from '../model/Review.model'
import Variant from '../model/Variant.model'
import CONFIG from './Config'
import DATA from './Data'

class Database {
    constructor() {
        this.connect()
        this.init()
        this.associate()
        this.create()
    }

    connect() {
        this.sequelize = new Sequelize(...CONFIG.DATABASE)
    }

    init() {
        this.models = {
            Attribute: Attribute.init(this.sequelize),
            AttributeSet: AttributeSet.init(this.sequelize),
            AttributeSetAttribute: AttributeSetAttribute.init(this.sequelize),
            Block: Block.init(this.sequelize),
            Category: Category.init(this.sequelize),
            Customer: Customer.init(this.sequelize),
            Address: Address.init(this.sequelize),
            Invoice: Invoice.init(this.sequelize, DataTypes),
            Order: Order.init(this.sequelize, DataTypes),
            Page: Page.init(this.sequelize, DataTypes),
            Product: Product.init(this.sequelize, DataTypes),
            CategoryProduct: CategoryProduct.init(this.sequelize),
            Review: Review.init(this.sequelize),
            Variant: Variant.init(this.sequelize, DataTypes)
        }
    }

    associate() {
        Object.values(this.models).filter((model) => !!model.associate).forEach((model) => model.associate(this.models))
    }

    async create() {
        await this.sequelize.sync({
            force: true
        }).then(() => this.populate())
    }

    async populate() {
        for (const datum of DATA) {
            const { modelName, modelData } = datum

            for (const modelDatum of modelData) {
                if (this.models[modelName]) {
                    await this.models[modelName].create(modelDatum)
                }
            }
        }
    }
}

export default Database
