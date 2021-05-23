import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Box, Button, CardActions, Grid } from '@material-ui/core'

export function AddressItem(props) {
    const { address, address: { id } } = props

    const fields = [
        {
            label: 'First name',
            key: 'firstName'
        },
        {
            label: 'Last name',
            key: 'lastName'
        },
        {
            label: 'Phone number',
            key: 'phoneNumber'
        },
        {
            label: 'Country',
            key: 'country'
        },
        {
            label: 'City',
            key: 'city'
        },
        {
            label: 'Province',
            key: 'province'
        },
        {
            label: 'Street 1',
            key: 'street1'
        },
        {
            label: 'Street 2',
            key: 'street2'
        },
        {
            label: 'Postal code',
            key: 'postalCode'
        }
    ]

    const renderField = (field) => {
        const { label, key } = field
        const { [key]: value } = address

        return (
            <Grid container justify="space-between">
                <Typography variant="body" component="dt">
                    { label }
                </Typography>
                <Typography variant="body" component="dd">
                    { value }
                </Typography>
            </Grid>
        )
    }

    return (
        <Grid item xs={ 6 }>
            <Box>
                <Card>
                    <CardContent>
                        { fields.map(renderField) }
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" href={ 'addresses/edit/' + id }>Edit</Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}

export default AddressItem
