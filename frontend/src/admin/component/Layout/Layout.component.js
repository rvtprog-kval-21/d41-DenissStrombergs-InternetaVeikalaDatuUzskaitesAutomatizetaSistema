import { Layout, Sidebar } from 'react-admin'
import Menu from './Menu.component'

//const CustomSidebar = (props) => <Sidebar {...props} size={200} />

export default (props) => {
    return (
        <Layout
            {...props }
            menu={ Menu }
        />
    )
}
