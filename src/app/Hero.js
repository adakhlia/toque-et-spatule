import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Image de fond avec overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600" 
          alt="Cuisine de chef" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenu textuel */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          L'Art de la Pâtisserie, <br/> 
          <span className="text-orange-400">Qualité Professionnelle.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Équipez votre cuisine avec les meilleurs moules, couteaux et accessoires sélectionnés par nos chefs.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-bold transition-all transform hover:scale-105">
            Découvrir la Pâtisserie
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md font-bold transition-all">
            Nos Ustensiles de Cuisine
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
