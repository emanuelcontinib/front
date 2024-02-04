import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
    {
        _id: "640b63243c6236ed8845b8d7",
        table: "3",
        status: "WAITING",
        products: [
            {
                product: {
                    name: "Coca-Cola",
                    imagePath: "1678467824776-coca-cola.png",
                    price: 5,
                },
                quantity: 1,
                _id: "640b62f03c6236ed8845b8d3",
            },
            {
                product: {
                    name: "Coca-Cola",
                    imagePath: "1678467824776-coca-cola.png",
                    price: 5,
                },
                quantity: 1,
                _id: "640b62f03c6236ed8845b8d3",
            },
        ],
    },
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard icon="🕒" title="Fila de espera" orders={orders} />
            <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
            <OrdersBoard icon="✔" title="Pronto" orders={[]} />
        </Container>
    );
}
