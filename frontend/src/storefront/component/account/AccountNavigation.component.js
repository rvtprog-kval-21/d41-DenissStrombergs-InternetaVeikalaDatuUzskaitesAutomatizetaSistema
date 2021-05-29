import { useApolloClient } from '@apollo/client'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { singOut } from '../../query/Account.query'

export function AccountNavigation(props) {
    const dispatch = useDispatch()
    const client = useApolloClient()
    const history = useHistory()
    const account = useSelector((state) => state.AccountReducer)
    const { section } = props

    const onSignOutButtonClick = async () => {
        const data = await singOut(client)

        if (data) {
            dispatch({
                type: 'SIGN_OUT',
                payload: {
                    isSignedIn: data
                }
            })

            history.push('/')

            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    message: 'Successfully signed out.',
                    severity: 'success'
                }
            })
        } else {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    message: 'Failed to update account.',
                    severity: 'error'
                }
            })
        }
    }

    const sections = [
        {
            label: 'Settings',
            code: 'settings',
            url: '/account/settings'
        },
        {
            label: 'Addresses',
            code: 'addresses',
            url: '/account/addresses'
        },        {
            label: 'Orders',
            code: 'orders',
            url: '/account/orders'
        },
        {
            label: 'Reviews',
            code: 'reviews',
            url: '/account/reviews'
        }
    ]

    return (
        <List>
          {sections.map((text, index) => (
            <ListItem button component="a" href={ text.url } key={text.label } selected={ text.code == section }>
              <ListItemText primary={text.label } />
            </ListItem>
          ))}
            <ListItem button key="Sign out" onClick={ onSignOutButtonClick }>
              <ListItemText primary="Sign out" />
            </ListItem>
        </List>
    )
}

export default AccountNavigation
