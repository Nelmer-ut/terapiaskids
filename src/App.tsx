import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import { products, Product } from './data/product';
import './App.css';

interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, delta: number) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
          return prevCart.filter((item) => item.product.id !== product.id);
        }
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else if (delta > 0) {
        return [...prevCart, { product, quantity: delta }];
      }
      return prevCart;
    });
  };

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="app-container">
      <Header />

      <main className="main-layout">
        {/* Banner Hero Nube de Bienvenida */}
        <section className="hero-cloud-section">
          <div className="hero-cloud-card">
            <span className="cloud-icon">☁️</span>
            <h2>¡Bienvenidos a TerapiasKids! 🌸</h2>
            <p>
              Un espacio de construcción y aprendizaje de la salud mental y emocional de niños, niñas y familias.
              En la infancia temprana y la adolescencia, las emociones, hábitos y rutinas son la base de un desarrollo saludable.
            </p>
          </div>
        </section>

        {/* Controles de Búsqueda y Categorías */}
        <div className="controls-bar">
          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Buscar programa o taller..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {['Todos', 'Niños', 'Adolescentes', 'Adultos'].map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sección Principal con Catálogo y Carrito */}
        <div className="content-grid">
          <section id="catalog" className="catalog-section">
            <div className="catalog-header">
              <h2>Catálogo de Programas</h2>
              <p>Ordenados por nivel de atención y necesidades</p>
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>

          {/* Carrito de Compras / Matrícula */}
          <aside className="cart-sidebar">
            <h3>Mi Selección 🎒</h3>
            {cart.length === 0 ? (
              <p className="cart-empty">No has seleccionado ningún programa aún.</p>
            ) : (
              <div className="cart-content">
                <ul className="cart-list">
                  {cart.map((item) => (
                    <li key={item.product.id} className="cart-item">
                      <div>
                        <strong>{item.product.name}</strong>
                        <p>{item.quantity} x ${item.product.price.toLocaleString('es-CL')}</p>
                      </div>
                      <button
                        className="btn-remove-item"
                        onClick={() => handleAddToCart(item.product, -item.quantity)}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="cart-total-box">
                  <span>Total:</span>
                  <strong>${totalCartPrice.toLocaleString('es-CL')} CLP</strong>
                </div>

                <button
                  className="btn-checkout"
                  onClick={() => alert('¡Matrícula confirmada con éxito en TerapiasKids!')}
                >
                  Confirmar Inscripción
                </button>
              </div>
            )}
          </aside>
        </div>
      </main>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} TerapiasKids - Psicóloga Elizabeth Rivero Arias</p>
        <p>Juan José Latorre 461, Sector Puertas de Mar</p>
      </footer>
    </div>
  );
}

export default App;
