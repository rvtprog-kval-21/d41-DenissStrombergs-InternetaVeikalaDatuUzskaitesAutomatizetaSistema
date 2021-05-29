import PaymentMethodIcon from '@material-ui/icons/SupervisorAccount'
import PaymentMethodList from './PaymentMethodList.component'
import PaymentMethodCreate from './PaymentMethodCreate.component'
import PaymentMethodEdit from './PaymentMethodEdit.component'

export const PaymentMethodResource = {
    name: 'PaymentMethod',
    icon: PaymentMethodIcon,
    list: PaymentMethodList,
    create: PaymentMethodCreate,
    edit: PaymentMethodEdit
}

export default PaymentMethodResource
