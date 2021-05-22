import { Button, Link } from "@material-ui/core";

export function AccountNavigation() {
    const onSignOutButtonClick = () => {
        console.log('sign out')
    }

    return (
        <div>
            <Link href="/account/settings" color="inherit">
                Settings
            </Link>
            <Link href="/account/addresses" color="inherit">
                Addresses
            </Link>
            <Link href="/account/orders" color="inherit">
                Orders
            </Link>
            <Link href="/account/reviews" color="inherit">
                Reviews
            </Link>
            <Button onClick={ onSignOutButtonClick }>
                Sign out
            </Button>
        </div>
    )
}

export default AccountNavigation
