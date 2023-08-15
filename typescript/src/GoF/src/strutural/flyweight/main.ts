import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '2', 'Rua A', 'BH');
deliveryContext(factory, 'João', '501', 'Rua B', 'RJ');
console.log();
console.log(factory.getLocations());
