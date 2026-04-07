export default function Success() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div className="text-6xl mb-4">🥧</div>
      <h1 className="text-4xl font-bold text-green-600">Commande Confirmée !</h1>
      <p className="mt-4 text-gray-600">Préparez votre tablier, vos ustensiles arrivent bientôt.</p>
      <a href="/" className="mt-8 text-orange-600 font-bold underline">Retour à la boutique</a>
    </div>
  );
}
