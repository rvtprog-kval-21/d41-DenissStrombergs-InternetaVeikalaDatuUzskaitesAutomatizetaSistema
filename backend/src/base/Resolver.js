import pascalcase from 'pascalcase'

export function generateResolver(model) {
    const singularName = pascalcase(model.name)
    const pluralName = pascalcase(model.tableName)

    return {
        Query: {
            [singularName]: async function(_, data, { models }) {
                try {
                    return await models[singularName].findByPk(data.id, { include: { all: true, nested: true } })
                } catch (error) {
                    console.error(error)

                    return null
                }
            },
            ['all' + pluralName]: async function(_, data, { models }) {
                const { ids, ...other } = data.filter || {}
                const filter = ids ? { id: ids, ...other } : filter
                
                try {
                    return await models[singularName].findAll({
                        limit: data.perPage || 100000,
                        offset: data.page * data.perPage || 0,
                        order: data.sortField && data.sortOrder ? [[data.sortField, data.sortOrder]] : [],
                        include: {
                            all: true,
                            nested: true
                        },
                        where: filter
                    })
                } catch (error) {
                    console.error(error)

                    return null
                }
            },
            ['_all' + pluralName + 'Meta']: async function(_, data, { models }) {
                try {
                    return {
                        count: await models[singularName].count({
                            limit: data.perPage || 100000,
                            offset: data.page * data.perPage || 0,
                            order: data.sortField && data.sortOrder ? [[data.sortField, data.sortOrder]] : [],
                            include: {
                                all: true,
                                nested: true
                            }
                        })
                    }
                } catch (error) {
                    console.error(error)

                    return null
                }
            }
        },
        Mutation: {
            ['create' + singularName]: async function(_, data, { models }) {
                try {
                    return await models[singularName].create(data)
                } catch (error) {
                    console.error(error)

                    return null
                }
            },
            ['update' + singularName]: async function(_, data, { models }) {
                try {
                    const entity = await models[singularName].findByPk(data.id)
                    Object.assign(entity, data)
                    await entity.save()

                    return entity
                } catch (error) {
                    console.error(error)

                    return false
                }
            },
            ['delete' + singularName]: async function(_, data, { models }) {
                try {
                    const entity = await models[singularName].findByPk(data.id)
                    await entity.destroy()

                    return entity
                } catch (error) {
                    console.error(error)

                    return false
                }
            }
        }
    }
}

export function generateResolvers(models) {
    return models.map(generateResolver)
}
