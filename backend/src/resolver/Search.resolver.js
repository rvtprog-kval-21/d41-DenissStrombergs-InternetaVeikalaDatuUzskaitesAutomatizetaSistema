import { Op } from 'sequelize'

export const searchResolver = {
    Query: {
        search: async function(_, data, { models }) {
            const attributeValues = {}
            const values = data.attributeValues || []
            values.forEach((attributeValue) => { attributeValues[attributeValue.code] = attributeValue.value })

            try {
                const category = await models.Category.findByPk(data.category_id)
                const products = await models.Product.findAll({
                    limit: data.perPage || 100000,
                    offset: data.page * data.perPage || 0,
                    order: data.sortField && data.sortOrder ? [[data.sortField, data.sortOrder]] : [],
                    include: {
                        all: true
                    },
                    where: {
                        name: {
                            [Op.iLike]: '%' + data.search + '%'
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
                    Products: products
                }
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default searchResolver
