import CartList from "../../component/CartList/CartList.component"
import CartSummary from "../../component/CartSummary/CartSummary.component"

export function Cart() {
    return (
        <div>
            <div>
                <CartList />
            </div>
            <CartSummary />
        </div>
    )
}

export default Cart
