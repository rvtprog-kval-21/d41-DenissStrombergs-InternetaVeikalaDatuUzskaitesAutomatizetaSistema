import { DataTypes, Model } from 'sequelize'
import Customer from './Customer.model'
import CustomerGroup from './CustomerGroup.model'

export class CustomerCustomerGroup extends Model {
    static init(sequelize) {
        return super.init(
            {
                CustomerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Customer,
                        key: 'id'
                    }
                },
                CustomerGroupId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: CustomerGroup,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'CustomerCustomerGroup'
            }
        )
    }

    static associate(models) {
        models.Customer.belongsToMany(
            models.CustomerGroup,
            {
                through: this
            }
        )

        models.CustomerGroup.belongsToMany(
            models.Customer,
            {
                through: this
            }
        )
    }
}

export default CustomerCustomerGroup
