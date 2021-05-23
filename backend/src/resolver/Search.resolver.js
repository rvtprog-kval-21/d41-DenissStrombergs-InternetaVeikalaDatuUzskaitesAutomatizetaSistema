import { Op } from 'sequelize'

const orderMap = {
    NAME_ASC: ['name', 'ASC'],
    NAME_DESC: ['name', 'DESC'],
    PRICE_ASC: ['price', 'ASC'],
    PRICE_DESC: ['price', 'DESC'],
    SOLD_AMOUNT_ASC: ['soldAmount', 'ASC'],
    SOLD_AMOUNT_DESC: ['soldAmount', 'DESC']
}

export const searchResolver = {
    Query: {
        search: async function(_, data, { sequelize, models }) {
            const attributeValues = {}
            const values = data.attributeValues || []
            values.forEach((attributeValue) => { attributeValues[attributeValue.code] = attributeValue.value })
            const order = orderMap[data.sort]

            try {
                const category = await models.Category.findOne({
                    where: {
                        urlKey: data.categoryUrlKey || '',
                        isEnabled: true
                    }
                })
                const products = await models.Product.findAll({
                    include: [
                        {
                            model: models.Category,
                            where: {
                                id: category?.id || {
                                    [Op.ne]: null
                                }
                            }
                        }
                    ],
                    where: {
                        isEnabled: true,
                        name: {
                            [Op.iLike]: '%' + (data.search || '') + '%'
                        },
                        price: {
                            [Op.and]: {
                                [Op.gte]: data.priceMin || 0,
                                [Op.lte]: data.priceMax || 100000
                            }
                        },
                        attributeValues: attributeValues
                    },
                    order: order ? [order] : []
                })
                const minPrice = products.reduce((a, b) => (a.price < b.price ? a.price : b.price))
                const maxPrice = products.reduce((a, b) => (a.price > b.price ? a.price : b.price))
                const filterValues = {}
                products.forEach((product) => {
                    const { attributeValues } = product

                    for (const attributeCode in attributeValues) {
                        const attributeValue = attributeValues[attributeCode]

                        if (!filterValues[attributeCode]) {
                            filterValues[attributeCode] = {}
                        }

                        if (!filterValues[attributeCode][attributeValue]) {
                            filterValues[attributeCode][attributeValue] = 1
                        } else {
                            filterValues[attributeCode][attributeValues] += 1
                        }
                    }
                })
                const attributeCodes = Object.keys(filterValues)
                const attributes = models.Attribute.findAll({
                    where: {
                        code: attributeCodes
                    }
                })

                return {
                    Category: category,
                    Products: products,
                    Attributes: attributes,
                    Aggregations: {
                        minPrice,
                        maxPrice,
                        filterValues
                    }
                }
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default searchResolver
