import { ShoppingOrder } from './shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
order.rejectPayment(); // Rejeitado

// o pagamento já foi recusado
order.approvePayment(); // Recusado
order.waitPayment(); // Recusado
order.shipOrder(); // Recusado
