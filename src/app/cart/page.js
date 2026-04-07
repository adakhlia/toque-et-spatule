"use client";
import { useCartStore } from '../../store/useCartStore';

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();
  const total = cart.reduce((acc, item) => acc + (item.prix * item.quantity), 0);

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-10">Votre Panier</h1>
      {cart.length === 0 ? <p>Votre panier est vide.</p> : (
        <>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex gap-4">
                  <img src={item.image} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-bold">{item.nom}</h3>
                    <p className="text-gray-500">Qté: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">{item.prix * item.quantity}€</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Supprimer</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-gray-50 rounded-lg text-right">
            <p className="text-2xl font-bold mb-4 text-gray-900 text-right">Total : {total.toFixed(2)}€</p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-700">
              Payer avec Stripe
            </button>
          </div>
        </>
      )}
    </div>
  );
}
