import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router'
import AccountNavigation from '../component/account/AccountNavigation.component'
import AccountSettings from '../component/account/AccountSettings.component'
import AccountReviewList from '../component/account/AccountReviewList.component'
import AccountOrderList from '../component/account/AccountOrderList.component'
import AccountSign from '../component/account/AccountSign.component'
import AccountAddressList from '../component/account/AccountAddressList.component'
import { Grid } from '@material-ui/core'

export function Account() {
    const account = useSelector(state => state.AccountReducer)
    const { section, action, id } = useParams()

    const renderSection = () => {
        switch (section) {
            case 'addresses':
                return (
                    <AccountAddressList />
                )
            case 'settings':
                return (
                    <AccountSettings />
                )
            case 'orders':
                return (
                    <AccountOrderList />
                )
            case 'reviews':
                return (
                    <AccountReviewList />
                )
            default:
                return (
                    <Redirect to="/account/settings" />
                )
        }
    }

    const renderAccount = () => {
        return (
            <Grid container>
                <Grid item xs={ 2 }>
                    <AccountNavigation section={ section } />
                </Grid>
                <Grid items xs={ 10 }>
                    { renderSection() }
                </Grid>
            </Grid>
        )
    }

    const renderSign = () => {
        return (
            <AccountSign />
        )
    }

    return account ? renderAccount() : renderSign()
}

export default Account
