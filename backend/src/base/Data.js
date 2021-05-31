export const DATA = [
    {
        modelName: 'User',
        modelData: [
            {
                username: 'deniss',
                email: 'deniss.strombergs@scandiweb.com',
                password: 'Test12#$',
                firstName: 'Deniss',
                lastName: 'Strombergs'
            },
            {
                username: 'nikolajs',
                email: 'nikolajs.lapins@gmail.com',
                password: 'Nikolajs1234',
                firstName: 'Nikolajs',
                lastName: 'Lapins'
            },
            {
                username: 'anna',
                email: 'anna.kaulina@gmail.com',
                password: 'Anna1234',
                firstName: 'Anna',
                lastName: 'Kaulina'
            },
            {
                username: 'daniela',
                email: 'daniela.salmina@gmail.com',
                password: 'Daniela1234',
                firstName: 'Daniela',
                lastName: 'Salmina'
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
                type: 'select_string',
                attributeOptions: [
                    {
                        value: 'Red'
                    },
                    {
                        value: 'Green'
                    },
                    {
                        value: 'Blue'
                    },
                    {
                        value: 'Yellow'
                    },
                    {
                        value: 'Magenta'
                    },
                    {
                        value: 'Cyan'
                    },
                    {
                        value: 'White'
                    },
                    {
                        value: 'Black'
                    }
                ],
                isFilter: true,
                attributeGroup: 'General'
            },
            {
                code: 'pencil_hardness',
                isEnabled: true,
                label: 'Pencil hardness',
                type: 'select_string',
                attributeOptions: [
                    {
                        value: 'B5'
                    },
                    {
                        value: 'B4'
                    },
                    {
                        value: 'B3'
                    },
                    {
                        value: 'B2'
                    },
                    {
                        value: 'B'
                    },
                    {
                        value: 'HB'
                    },
                    {
                        value: 'H'
                    },
                    {
                        value: 'H2'
                    },
                    {
                        value: 'H3'
                    },
                    {
                        value: 'H4'
                    },
                    {
                        value: 'H5'
                    }
                ],
                isFilter: true,
                attributeGroup: 'General'
            },
            {
                code: 'nib_size',
                isEnabled: true,
                label: 'Nib size',
                type: 'select_number',
                attributeOptions: [
                    {
                        value: 0.01
                    },
                    {
                        value: 0.02
                    },
                    {
                        value: 0.03
                    },
                    {
                        value: 0.04
                    },
                    {
                        value: 0.05
                    }
                ],
                isFilter: true,
                attributeGroup: 'General'
            },
            {
                code: 'author',
                isEnabled: true,
                label: 'Author',
                type: 'string',
                attributeOptions: [],
                isFilter: true,
                attributeGroup: 'General'
            },
            {
                code: 'publisher',
                isEnabled: true,
                label: 'Publisher',
                type: 'string',
                attributeOptions: [],
                isFilter: true,
                attributeGroup: 'General'
            },
            {
                code: 'page_count',
                isEnabled: true,
                label: 'Page count',
                type: 'number',
                attributeOptions: [],
                isFilter: true,
                attributeGroup: 'General'
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
                content: `
                    <footer>
                        <h2>Footer</h2>
                    </footer>
                `
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
                isInMenu: true,
                content: ``,
                category_id: null
            },
            {
                urlKey: 'drawing',
                isEnabled: true,
                name: 'Drawing',
                isInMenu: true,
                content: `
                    <h2>Drawing</h2>
                `,
                category_id: 1
            },
            {
                urlKey: 'reading',
                isEnabled: true,
                name: 'Reading',
                isInMenu: true,
                content: ``,
                category_id: 1
            },
            {
                urlKey: 'pencils',
                isEnabled: true,
                name: 'Pencils',
                isInMenu: true,
                content: ``,
                category_id: 2
            },
            {
                urlKey: 'pens',
                isEnabled: true,
                name: 'Pens',
                isInMenu: true,
                content: ``,
                category_id: 2
            },
            {
                urlKey: 'regular_pencils',
                isEnabled: true,
                name: 'Regular pencils',
                isInMenu: true,
                content: ``,
                category_id: 4
            },
            {
                urlKey: 'mechanical_pencils',
                isEnabled: true,
                name: 'Mechanical pencils',
                isInMenu: true,
                content: ``,
                category_id: 4
            },
            {
                urlKey: 'ballpoint_pens',
                isEnabled: true,
                name: 'Ballpoint pens',
                productCount: 0,
                isInMenu: true,
                content: ``,
                category_id: 5
            },
            {
                urlKey: 'fountain_pens',
                isEnabled: true,
                name: 'Fountain pens',
                productCount: 0,
                isInMenu: true,
                content: ``,
                category_id: 5
            },
            {
                urlKey: 'books',
                isEnabled: true,
                name: 'Books',
                productCount: 0,
                isInMenu: true,
                content: ``,
                category_id: 3
            },
            {
                urlKey: 'comics',
                isEnabled: true,
                name: 'Comics',
                productCount: 0,
                isInMenu: true,
                content: ``,
                category_id: 3
            },
            {
                urlKey: 'manga',
                isEnabled: true,
                name: 'Manga',
                productCount: 0,
                isInMenu: true,
                content: ``,
                category_id: 3
            }
        ]
    },
    {
        modelName: 'Cart',
        modelData: [
            {
                totalTax: 0,
                subtotal: 0,
                total: 0,
                customer_id: 1
            }
        ]
    },
    {
        modelName: 'Customer',
        modelData: [
            {
                email: 'deniss.strombergs@scandiweb.com',
                password: 'Test12#$',
                firstName: 'Deniss',
                lastName: 'Strombergs'
            },
            {
                email: 'nikolajs.lapins@gmail.com',
                password: 'Nikolajs1234',
                firstName: 'Nikolajs',
                lastName: 'Lapins'
            },
            {
                email: 'anna.kaulina@gmail.com',
                password: 'Anna1234',
                firstName: 'Anna',
                lastName: 'Kaulina'
            },
            {
                email: 'daniela.salmina@gmail.com',
                password: 'Daniela1234',
                firstName: 'Daniela',
                lastName: 'Salmina'
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
            },
            {
                firstName: 'Nikolajs',
                lastName: 'Lapins',
                phoneNumber: '22034599',
                country: 'Latvia',
                city: 'Marupe',
                province: 'Marupes novads',
                street1: 'Tiraine, Viskalnu iela 13-8',
                street2: '',
                postalCode: 'LV-2167',
                customer_id: 2
            },
            {
                firstName: 'Anna',
                lastName: 'Kaulina',
                phoneNumber: '22034599',
                country: 'Latvia',
                city: 'Marupe',
                province: 'Marupes novads',
                street1: 'Tiraine, Viskalnu iela 13-8',
                street2: '',
                postalCode: 'LV-2167',
                customer_id: 3
            },
            {
                firstName: 'Daniela',
                lastName: 'Salmina',
                phoneNumber: '22034599',
                country: 'Latvia',
                city: 'Marupe',
                province: 'Marupes novads',
                street1: 'Tiraine, Viskalnu iela 13-8',
                street2: '',
                postalCode: 'LV-2167',
                customer_id: 4
            }
        ]
    },
    {
        modelName: 'CustomerGroup',
        modelData: [
            {
                code: 'guest',
                name: 'Guest'
            },
            {
                code: 'new',
                name: 'New'
            },
            {
                code: 'loyal',
                name: 'Loyal'
            },
            {
                code: 'rich',
                name: 'Rich'
            },
            {
                code: 'poor',
                name: 'Poor'
            },
            {
                code: 'obsessed',
                name: 'Obsessed'
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
            },
            {
                isEnabled: true,
                urlKey: 'about-us',
                title: 'About Us',
                content: '<h1>About us.</h1>'
            },
            {
                isEnabled: true,
                urlKey: 'faq',
                title: 'FAQ',
                content: '<h1>FAQ.</h1>'
            },
            {
                isEnabled: true,
                urlKey: 'terms_and_conditions',
                title: 'Terms and conditions',
                content: '<h1>Terms and conditions.</h1>'
            },
            {
                isEnabled: true,
                urlKey: 'delivery',
                title: 'Delivery',
                content: '<h1>Delivery.</h1>'
            }
        ]
    },
    {
        modelName: 'Product',
        modelData: [
            {
                urlKey: 'mechanical_pencil_001mm',
                sku: 'mechanical_pencil_001mm',
                isEnabled: true,
                name: 'Mechanical pencil (0.01mm)',
                price: 30.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.01mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: {
                    'thumbnail': 'https://via.placeholder.com/240x180',
                    'small': 'https://via.placeholder.com/480x360',
                    'base': 'https://via.placeholder.com/1280x720',
                    'other': [
                        'https://via.placeholder.com/960x720'
                    ]
                },
                soldAmount: 10,
                attributeValues: {
                    nib_size: 0.01
                },
                attribute_set_id: 2
            },
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
                soldAmount: 20,
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
                soldAmount: 10,
                attributeValues: {
                    nib_size: 0.03
                },
                attribute_set_id: 2
            },
            {
                urlKey: 'mechanical_pencil_004mm',
                sku: 'mechanical_pencil_004mm',
                isEnabled: true,
                name: 'Mechanical pencil (0.04mm)',
                price: 30.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.04mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: {
                    'thumbnail': 'https://via.placeholder.com/240x180',
                    'small': 'https://via.placeholder.com/480x360',
                    'base': 'https://via.placeholder.com/1280x720',
                    'other': [
                        'https://via.placeholder.com/960x720'
                    ]
                },
                soldAmount: 10,
                attributeValues: {
                    nib_size: 0.04
                },
                attribute_set_id: 2
            },
            {
                urlKey: 'mechanical_pencil_005mm',
                sku: 'mechanical_pencil_005mm',
                isEnabled: true,
                name: 'Mechanical pencil (0.05mm)',
                price: 30.0,
                stockQuantity: 100,
                specialDiscountType: '',
                specialDiscountValue: 0.0,
                specialTaxRate: 0.0,
                shortDescription: 'Mechanical pencil with 0.05mm nib.',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                media: {
                    'thumbnail': 'https://via.placeholder.com/240x180',
                    'small': 'https://via.placeholder.com/480x360',
                    'base': 'https://via.placeholder.com/1280x720',
                    'other': [
                        'https://via.placeholder.com/960x720'
                    ]
                },
                soldAmount: 10,
                attributeValues: {
                    nib_size: 0.05
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
                product_id: 3,
                category_id: 7
            },
            {
                product_id: 4,
                category_id: 7
            },
            {
                product_id: 5,
                category_id: 7
            },
            {
                product_id: 1,
                category_id: 2
            },
            {
                product_id: 2,
                category_id: 2
            },
            {
                product_id: 3,
                category_id: 2
            },
            {
                product_id: 4,
                category_id: 2
            },
            {
                product_id: 5,
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
                rating: 1,
                customer_id: 1,
                product_id: 1
            }
        ]
    },
    {
        modelName: 'Config',
        modelData: [
            {
                currencySign: '€',
                currencySignPosition: 'right'
            }
        ]
    },
    {
        modelName: 'ShippingMethod',
        modelData: [
            {
                code: 'flat_rate',
                name: 'Flat rate'
            },
            {
                code: 'table_rate',
                name: 'Table rate'
            }
        ]
    },
    {
        modelName: 'PaymentMethod',
        modelData: [
            {
                code: 'bank_transfer',
                name: 'Bank transfer'
            },
            {
                code: 'payment_card',
                name: 'Payment card'
            }
        ]
    }
]

export default DATA
