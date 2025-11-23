import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cart, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const SelectedDeliveyOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    })
                return (
                    <div key={cartItem.productId}
                        className="cart-item-container">
                        
                        <DeliveryDate SelectedDeliveyOption={SelectedDeliveyOption} />

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <CartItemDetails cartItem={cartItem}  />

                            <DeliveryOptions deliveryOptions={deliveryOptions} cartItem/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}