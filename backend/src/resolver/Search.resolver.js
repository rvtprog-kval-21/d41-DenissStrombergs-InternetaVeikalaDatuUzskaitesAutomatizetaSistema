import { Op } from 'sequelize'

export const searchResolver = {
    Query: {
        search: async function(_, data, { models }) {
            const attributeValues = {}
            const values = data.attributeValues || []
            values.forEach((attributeValue) => { attributeValues[attributeValue.code] = attributeValue.value })

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
                    }
                })

                return {
                    Category: category,
                    Products: products,
                    Attributes: []
                }
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default searchResolver
