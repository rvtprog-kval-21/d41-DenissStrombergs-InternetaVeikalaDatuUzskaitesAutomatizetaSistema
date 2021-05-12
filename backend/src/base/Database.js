import { DataTypes, Sequelize } from 'sequelize'
import Attribute from '../model/Attribute.model'
import AttributeSet from '../model/AttributeSet.model'
import AttributeSetAttribute from '../model/AttributeSetAttribute.model'
import Block from '../model/Block.model'
import Cart from '../model/Cart.model'
import CartItem from '../model/CartItem.model'
import Category from '../model/Category.model'
import ProductCategory from '../model/ProductCategory.model'
import Customer from '../model/Customer.model'
import CustomerCustomerGroup from '../model/CustomerCustomerGroup.model'
import CustomerGroup from '../model/CustomerGroup.model'
import Address from '../model/Address.model'
import Invoice from '../model/Invoice.model'
import Order from '../model/Order.model'
import OrderItem from '../model/OrderItem.model'
import Page from '../model/Page.model'
import Product from '../model/Product.model'
import Review from '../model/Review.model'
import PriceRule from '../model/PriceRule.model'
import Variant from '../model/Variant.model'
import CONFIG from './Config'
import DATA from './Data'
import PaymentCard from '../model/PaymentCard.model'
import Admin from '../model/Admin.model'

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
            Admin: Admin.init(this.sequelize),
            Attribute: Attribute.init(this.sequelize),
            AttributeSet: AttributeSet.init(this.sequelize),
            AttributeSetAttribute: AttributeSetAttribute.init(this.sequelize),
            Block: Block.init(this.sequelize),
            Category: Category.init(this.sequelize),
            Customer: Customer.init(this.sequelize),
            Address: Address.init(this.sequelize),
            Cart: Cart.init(this.sequelize),
            CustomerGroup: CustomerGroup.init(this.sequelize),
            CustomerCustomerGroup: CustomerCustomerGroup.init(this.sequelize),
            Order: Order.init(this.sequelize),
            Invoice: Invoice.init(this.sequelize),
            Page: Page.init(this.sequelize),
            PaymentCard: PaymentCard.init(this.sequelize),
            PriceRule: PriceRule.init(this.sequelize),
            Product: Product.init(this.sequelize),
            CartItem: CartItem.init(this.sequelize),
            OrderItem: OrderItem.init(this.sequelize),
            ProductCategory: ProductCategory.init(this.sequelize),
            Review: Review.init(this.sequelize),
            Variant: Variant.init(this.sequelize)
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
