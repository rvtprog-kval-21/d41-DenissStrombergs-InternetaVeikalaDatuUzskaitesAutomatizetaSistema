import { Layout as ReactAdminLayout } from 'react-admin'
import Menu from './Menu.component'

export function Layout(props) {
    return (
        <ReactAdminLayout {...props } menu={ Menu } />
    )
}

export default Layout
