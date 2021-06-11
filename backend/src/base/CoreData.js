export const configs = [
    {
        currencySign: '€',
        currencySignPosition: 'right'
    }
]

export const shippingMethods = [
    {
        code: 'flat_rate',
        name: 'Flat rate'
    },
    {
        code: 'table_rate',
        name: 'Table rate'
    }
]

export const paymentMethods = [
    {
        code: 'payment_card',
        name: 'Payment card'
    },
    {
        code: 'bank_transfer',
        name: 'Bank transfer'
    }
]

export const customerGroups = [
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

export const pages = [
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

export const blocks = [
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

export const attributeSets = [
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

export const attributes = [
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
    },
    {
        code: 'has_eraser',
        isEnabled: true,
        label: 'Has eraser',
        type: 'boolean',
        attributeOptions: [],
        isFilter: true,
        attributeGroup: 'General'
    }
]

export const attributeSetAttributes = [
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
    },
    {
        attribute_set_id: 2,
        attribute_id: 7
    }
]

export const categories = [
    {
        urlKey: 'root',
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
        urlKey: 'drawing_accessories',
        isEnabled: true,
        name: 'Drawing accessories',
        isInMenu: true,
        content: ``,
        category_id: 2
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
    }
]
