const ContactPage = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Une question sur un ustensile ?</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Nom" className="w-full p-3 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
      <textarea placeholder="Votre message..." className="w-full p-3 border rounded h-32"></textarea>
      <button className="w-full bg-gray-900 text-white py-3 rounded font-bold">Envoyer</button>
    </form>
  </div>
);
