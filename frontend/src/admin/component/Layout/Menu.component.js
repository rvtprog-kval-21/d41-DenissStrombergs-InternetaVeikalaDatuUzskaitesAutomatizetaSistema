import * as React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings'
import { useMediaQuery, Box } from '@material-ui/core'
import {
    DashboardMenuItem,
    MenuItemLink
} from 'react-admin'

import SubMenu from './SubMenu.component'
import ReviewResource from '../Review/ReviewResource.component'
import ProductResource from '../Product/ProductResource.component'
import CategoryResource from '../Category/CategoryResource.component'
import OrderResource from '../Order/OrderResource.component'
import InvoiceResource from '../Invoice/InvoiceResource.component'
import BlockResource from '../Block/BlockResource.component'
import PageResource from '../Page/PageResource.component'

const Menu = ({ onMenuClick, logout, dense = false }) => {
    const [state, setState] = useState({
        menuCatalog: false,
        menuSales: false,
        menuCustomers: false
    })
    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('xs')
    )
    const open = useSelector((state) => state.admin.ui.sidebarOpen)
    useSelector((state) => state.theme)

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }))
    }

    return (
        <Box mt={1}>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                sidebarIsOpen={open}
                name="Sales"
                icon={<OrderResource.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/Order`}
                    primaryText="Orders"
                    leftIcon={<OrderResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/Invoice`}
                    primaryText="Invoices"
                    leftIcon={<InvoiceResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                sidebarIsOpen={open}
                name="Catalog"
                icon={<ProductResource.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="Product"
                    primaryText="Products"
                    leftIcon={<ProductResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to="/Category"
                    primaryText="Categories"
                    leftIcon={<CategoryResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                sidebarIsOpen={open}
                name="Customers"
                icon={<OrderResource.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="Customer"
                    primaryText="Customers"
                    leftIcon={<InvoiceResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuMarketing')}
                isOpen={state.menuMarketing}
                sidebarIsOpen={open}
                name="Marketing"
                icon={<OrderResource.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/Review"
                    primaryText="Reviews"
                    leftIcon={<ReviewResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuContent')}
                isOpen={state.menuContent}
                sidebarIsOpen={open}
                name="Content"
                icon={<OrderResource.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/Page"
                    primaryText="Pages"
                    leftIcon={<PageResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to="/Block"
                    primaryText="Blocks"
                    leftIcon={<BlockResource.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText="Idk"
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </Box>
    )
}
/*


*/
/*
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                sidebarIsOpen={open}
                name="pos.menu.customers"
                icon={<visitors.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/customers`}
                    primaryText={translate(`resources.customers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/segments`}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            */

export default Menu
