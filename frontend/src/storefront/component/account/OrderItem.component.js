import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Box, Button, CardActions, Grid } from '@material-ui/core'

export function OrderItem(props) {
    const { order, order: { id } } = props

    const fields = [
        {
            label: 'Reference',
            key: 'reference'
        },
        {
            label: 'Date',
            key: 'date'
        },
        {
            label: 'Status',
            key: 'status'
        },
        {
            label: 'Total delivery',
            key: 'totalDelivery'
        },
        {
            label: 'Total tax',
            key: 'totalTax'
        },
        {
            label: 'Subtotal',
            key: 'subtotal'
        },
        {
            label: 'Total',
            key: 'total'
        }
    ]

    const renderField = (field) => {
        const { label, key } = field
        const { [key]: value } = order

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
                        <Button variant="contained" color="primary" href={ 'orders/edit/' + id }>View</Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}

export default OrderItem
