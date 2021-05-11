export const DATA = [
    {
        modelName: 'Attribute',
        modelData: [
            {
                isEnabled: true,
                code: 'color',
                label: 'Color',
                isFilter: true,
                attributeOptions: ''
            },

            {
                isEnabled: true,
                code: 'pencil_hardness',
                label: 'Pencil hardness',
                isFilter: true,
                attributeOptions: ''
            },
            {
                isEnabled: true,
                code: 'nib_size',
                label: 'Nib size',
                isFilter: true,
                attributeOptions: ''
            },

            {
                isEnabled: true,
                code: 'author',
                label: 'Author',
                isFilter: true,
                attributeOptions: ''
            },
            {
                isEnabled: true,
                code: 'publisher',
                label: 'Publisher',
                isFilter: true,
                attributeoptions: ''
            },
            {
                isEnabled: true,
                code: 'pageCount',
                label: 'Page count',
                isFilter: true,
                attributeOptions: ''
            }
        ]
    },
    {
        modelName: 'AttributeSet',
        modelData: [
            {
                isEnabled: true,
                code: 'default',
                name: 'Default'
            },
            {
                isEnabled: true,
                code: 'drawing',
                name: 'Drawing'
            },
            {
                isEnabled: true,
                code: 'reading',
                name: 'Reading'
            }
        ]
    },
    {
        modelName: 'AttributeSetAttribute',
        modelData: [
            {
                AttributeSetId: 1,
                AttributeId: 1
            },

        ]
    },
    {
        modelName: 'Customer',
        modelData: [
            {
                email: 'test@test.com',
                firstName: 'Deniss',
                lastName: 'Strombergs',
                password: 'Test12#$'
            }
        ]
    },
    {
        modelName: 'CustomerAddress',
        modelData: [
            {
                firstName: 'Deniss',
                lastName: 'Strombergs',
                phoneNumber: '23234234',
                country: 'Latvia',
                streetAddressLine1: 'Zeltritu iela 26',
                streetAddressLine2: '',
                streetAddressLine3: '',
                city: 'Marupes novads',
                postalCode: 'LV-2167',
                CustomerId: 1
            }
        ]
    },
    {
        modelName: 'Coupon',
        modelData: [
            {
                code: 'PERCENTAGE_20',
                discount: 20,
                type: 'percentage',
            },
            {
                code: 'AMOUNT_20',
                discount: 0.5,
                type: 'amount',
            }
        ]
    },
    {
        modelName: 'Product',
        modelData: [
            {
                isEnabled: true,
                urlKey: 'mechanical_pencil',
                type: 'configurable',
                sku: 'mechanical_pencil',
                name: 'Mechanical pencil (0.02mm, 0.03mm)',
                price: 0,
                shortDescription: 'Apple that comes in various colors: red, green, and blue.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: `
                    {
                        "thumbnail": "https://via.placeholder.com/240x180",
                        "small": https://via.placeholder.com/480x360",
                        "base": "https://via.placeholder.com/1280x720",
                        "other": [
                            https://via.placeholder.com/960x720
                        ]
                    }
                `,
                attributeValues: ``,
                AttributeSetId: 2
            },


            {
                isEnabled: true,
                urlKey: null,
                type: 'simple',
                sku: 'mechanical_pencil_002mm',
                name: 'Mechanical pencil (0.02mm)',
                price: 20,
                shortDescription: 'Mechanical pencil with 0.02mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: `
                    {
                        "thumbnail": "https://via.placeholder.com/240x180",
                        "small": https://via.placeholder.com/480x360",
                        "base": "https://via.placeholder.com/1280x720",
                        "other": [
                            https://via.placeholder.com/960x720
                        ]
                    }
                `,
                attributeValues: `
                    {
                        nibSize: 0
                    }
                `,
                AttributeSetId: 2
            },

            {
                isEnabled: true,
                urlKey: null,
                type: 'configurable',
                sku: 'mechanical_pencil_003mm',
                name: 'Mechanical pencil (0.03mm)',
                price: 15,
                shortDescription: 'Mechanical pencil with 0.03mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: `
                    {
                        "thumbnail": "https://via.placeholder.com/240x180",
                        "small": https://via.placeholder.com/480x360",
                        "base": "https://via.placeholder.com/1280x720",
                        "other": [
                            https://via.placeholder.com/960x720
                        ]
                    }
                `,
                attributeValues: `
                    {
                        nibSize: 1
                    }
                `,
                AttributeSetId: 2
            }
        ]
    },

    {
        modelName: 'Category',
        modelData: [
            {
                isEnabled: true,
                name: 'Root',
                urlKey: '',
                productCount: 0,
                isInMenu: true,
                CategoryId: 1
            },

            {
                isEnabled: true,
                name: 'Drawing',
                urlKey: 'drawing',
                productCount: 0,
                isInMenu: true,
                CategoryId: 1
            },
            {
                isEnabled: true,
                name: 'Reading',
                urlKey: 'reading',
                productCount: 0,
                isInMenu: true,
                CategoryId: 1
            },

            {
                isEnabled: true,
                name: 'Pencils',
                urlKey: 'pencils',
                productCount: 0,
                isInMenu: true,
                CategoryId: 2
            },
            {
                isEnabled: true,
                name: 'Pens',
                urlKey: 'pens',
                productCount: 0,
                isInMenu: true,
                CategoryId: 2
            },

            {
                isEnabled: true,
                name: 'Regular pencils',
                urlKey: 'regular_pencils',
                productCount: 0,
                isInMenu: true,
                CategoryId: 4
            },
            {
                isEnabled: true,
                name: 'Mechanical pencils',
                urlKey: 'mechanical_pencils',
                productCount: 0,
                isInMenu: true,
                CategoryId: 4
            },
            {
                isEnabled: true,
                name: 'Ballpoint pens',
                urlKey: 'ballpoint_pens',
                productCount: 0,
                isInMenu: true,
                CategoryId: 5
            },
            {
                isEnabled: true,
                name: 'Fountain pens',
                urlKey: 'fountain_pens',
                productCount: 0,
                isInMenu: true,
                CategoryId: 5
            }
        ]
    },
    {
        modelName: 'Block',
        modelData: [
            {
                isEnabled: true,
                code: 'test_block',
                content: '<h1>Test Block</h1>'
            }
        ]
    },
    {
        modelName: 'Page',
        modelData: [
            {
                isEnabled: true,
                urlKey: 'test_page',
                title: 'Test Page',
                content: '<h1>Test Page</h1>'
            }
        ]
    },
    {
        modelName: 'CategoryProduct',
        modelData: [
            {
                CategoryId: 7,
                ProductId: 1
            }
        ]
    }
]

export default DATA
