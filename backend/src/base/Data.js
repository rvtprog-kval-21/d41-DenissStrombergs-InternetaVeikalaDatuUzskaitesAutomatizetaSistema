export const DATA = [
    {
        modelName: 'User',
        modelData: [
            {
                username: 'deniss',
                email: 'test@test.com',
                password: 'Test12#$',
                firstName: 'Deniss',
                lastName: 'Strombergs'
            }
        ]
    },
    {
        modelName: 'Attribute',
        modelData: [
            {
                code: 'color',
                isEnabled: true,
                label: 'Color',
                type: 'select',
                attributeOptions: [
                    {
                        'label': 'Red'
                    },
                    {
                        'label': 'Green'
                    },
                    {
                        'label': 'Blue'
                    }
                ],
                isFilter: true
            },
            {
                code: 'pencil_hardness',
                isEnabled: true,
                label: 'Pencil hardness',
                type: 'number',
                attributeOptions: [],
                isFilter: true,
            },
            {
                code: 'nib_size',
                isEnabled: true,
                label: 'Nib size',
                type: 'number',
                attributeOptions: [],
                isFilter: true
            },
            {
                code: 'author',
                isEnabled: true,
                label: 'Author',
                type: 'string',
                attributeOptions: [],
                isFilter: true,
            },
            {
                code: 'publisher',
                isEnabled: true,
                label: 'Publisher',
                type: 'string',
                attributeOptions: [],
                isFilter: true,
            },
            {
                code: 'page_count',
                isEnabled: true,
                label: 'Page count',
                type: 'number',
                attributeOptions: [],
                isFilter: true
            }
        ]
    },
    {
        modelName: 'AttributeSet',
        modelData: [
            {
                code: 'default',
                isEnabled: true,
                name: 'Default'
            },
            {
                code: 'drawing',
                isEnabled: true,
                name: 'Drawing'
            },
            {
                code: 'reading',
                isEnabled: true,
                name: 'Reading'
            }
        ]
    },
    {
        modelName: 'AttributeSetAttribute',
        modelData: [
            {
                attribute_set_id: 1,
                attribute_id: 1
            },
            {
                attribute_set_id: 2,
                attribute_id: 1
            },
            {
                attribute_set_id: 2,
                attribute_id: 2
            },
            {
                attribute_set_id: 2,
                attribute_id: 3
            },
            {
                attribute_set_id: 3,
                attribute_id: 1
            },
            {
                attribute_set_id: 3,
                attribute_id: 4
            },
            {
                attribute_set_id: 3,
                attribute_id: 5
            },
            {
                attribute_set_id: 3,
                attribute_id: 6
            }
        ]
    },
    {
        modelName: 'Block',
        modelData: [
            {
                code: 'test_block',
                isEnabled: true,
                content: '<h2>Test Block</h2>'
            },
            {
                code: 'footer',
                isEnabled: true,
                content: '<h2>Footer</h2>'
            }
        ]
    },
    {
        modelName: 'Category',
        modelData: [
            {
                urlKey: null,
                isEnabled: true,
                name: 'Root',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: null
            },
            {
                urlKey: 'drawing',
                isEnabled: true,
                name: 'Drawing',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 1
            },
            {
                urlKey: 'reading',
                isEnabled: true,
                name: 'Reading',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 1
            },
            {
                urlKey: 'pencils',
                isEnabled: true,
                name: 'Pencils',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 2
            },
            {
                urlKey: 'pens',
                isEnabled: true,
                name: 'Pens',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 2
            },
            {
                urlKey: 'regular_pencils',
                isEnabled: true,
                name: 'Regular pencils',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 4
            },
            {
                urlKey: 'mechanical_pencils',
                isEnabled: true,
                name: 'Mechanical pencils',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 4
            },
            {
                urlKey: 'ballpoint_pens',
                isEnabled: true,
                name: 'Ballpoint pens',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 5
            },
            {
                urlKey: 'fountain_pens',
                isEnabled: true,
                name: 'Fountain pens',
                productCount: 0,
                isInMenu: true,
                content: '',
                category_id: 5
            }
        ]
    },
    {
        modelName: 'Customer',
        modelData: [
            {
                email: 'test@test.com',
                password: 'Test12#$',
                firstName: 'Deniss',
                lastName: 'Strombergs'
            }
        ]
    },
    {
        modelName: 'Address',
        modelData: [
            {
                firstName: 'Deniss',
                lastName: 'Strombergs',
                phoneNumber: '22034599',
                country: 'Latvia',
                city: 'Marupe',
                province: 'Marupes novads',
                street1: 'Tiraine, Viskalnu iela 13-8',
                street2: '',
                postalCode: 'LV-2167',
                customer_id: 1
            }
        ]
    },
    {
        modelName: 'Cart',
        modelData: [
            {
                customer_id: 1
            }
        ]
    },
    {
        modelName: 'CustomerGroup',
        modelData: [
            {
                code: 'new',
                name: 'New'
            },
            {
                code: 'loyal',
                name: 'Loyal'
            }
        ]
    },
    {
        modelName: 'CustomerCustomerGroup',
        modelData: [
            {
                customer_id: 1,
                customer_group_id: 1
            },
            {
                customer_id: 1,
                customer_group_id: 2
            }
        ]
    },
    {
        modelName: 'Order',
        modelData: [
            {
                reference: '4WGINO4G',
                date: '2021-04-20',
                status: 'ordered',
                isReturned: false,
                totalDelivery: 6.99,
                totalTax: 21.0,
                subtotal: 79.0,
                total: 100.0,
                customer_id: 1,
                address_id: 1
            }
        ]
    },
    {
        modelName: 'Invoice',
        modelData: [
            {
                date: '2021-04-20',
                totalDelivery: 6.99,
                totalTax: 21.0,
                subtotal: 79.0,
                total: 100.0,
                order_id: 1
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
            },
            {
                isEnabled: true,
                urlKey: 'homepage',
                title: 'Homepage',
                content: '<h1>Welcome to the store.</h1>'
            }
        ]
    },
    {
        modelName: 'Product',
        modelData: [
            {
                urlKey: 'mechanical_pencil_002mm',
                sku: 'mechanical_pencil_002mm',
                isEnabled: true,
                name: 'Mechanical pencil (0.02mm)',
                price: 20.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.02mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: {
                    'thumbnail': 'https://via.placeholder.com/240x180',
                    'small': 'https://via.placeholder.com/480x360',
                    'base': 'https://via.placeholder.com/1280x720',
                    'other': [
                        'https://via.placeholder.com/960x720'
                    ]
                },
                attributeValues: {
                    nib_size: 0.02
                },
                attribute_set_id: 2
            },
            {
                urlKey: 'mechanical_pencil_003mm',
                sku: 'mechanical_pencil_003mm',
                isEnabled: true,
                name: 'Mechanical pencil (0.03mm)',
                price: 15.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.03mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: {
                    'thumbnail': 'https://via.placeholder.com/240x180',
                    'small': 'https://via.placeholder.com/480x360',
                    'base': 'https://via.placeholder.com/1280x720',
                    'other': [
                        'https://via.placeholder.com/960x720'
                    ]
                },
                attributeValues: {
                    nib_size: 0.03
                },
                attribute_set_id: 2
            }
        ]
    },
    {
        modelName: 'CartItem',
        modelData: [
            {
                quantity: 5,
                cart_id: 1,
                product_id: 1
            },
            {
                quantity: 10,
                cart_id: 1,
                product_id: 2
            }
        ]
    },
    {
        modelName: 'OrderItem',
        modelData: [
            {
                quantity: 2,
                totalTax: 4.2,
                subtotal: 20 ,
                total: 24.2,
                order_id: 1,
                product_id: 1
            },
            {
                quantity: 2,
                totalTax: 31.5,
                subtotal: 15 ,
                total: 18.15,
                order_id: 1,
                product_id: 2
            }
        ]
    },
    {
        modelName: 'ProductCategory',
        modelData: [
            {
                product_id: 1,
                category_id: 7
            },
            {
                product_id: 2,
                category_id: 7
            },
            {
                product_id: 1,
                category_id: 2
            },
            {
                product_id: 2,
                category_id: 2
            }
        ]
    },
    {
        modelName: 'Review',
        modelData: [
            {
                status: 'accepted',
                date: '2021-05-05',
                title: 'Trash',
                content: 'Absolute garbage, does not work.',
                raiting: 1,
                customer_id: 1,
                product_id: 1
            }
        ]
    }
]

export default DATA
