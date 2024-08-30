import { CartType } from '../types/ContextType/CartType';

export function itemsQuantity(items: CartType[]) {
  return items.reduce((a, c) => a + c.quantity, 0);
}
