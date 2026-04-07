import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 1, nom: "Moule à Manqué Pro", prix: 24.90, image: "https://images.unsplash.com/photo-1590666580514-4366352981bc?q=80&w=500" },
  { id: 2, nom: "Fouet Inox Ballon", prix: 12.00, image: "https://images.unsplash.com/photo-1581339399838-2a120c18bca3?q=80&w=500" },
  { id: 3, nom: "Couteau de Chef 20cm", prix: 85.00, image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=500" }
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Incontournables</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
