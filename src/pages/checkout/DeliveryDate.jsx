import dayjs from "dayjs";

export function DeliveryDate({SelectedDeliveyOption}) {
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(SelectedDeliveyOption.
                estimatedDeliveryTimeMs).format("dddd, MMMM D")}
        </div>
    );
}