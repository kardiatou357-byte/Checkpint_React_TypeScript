
import React, { useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';


interface AppState {
  username: string;
  showCounter: boolean;
}


function App() {
  const [state, setState] = useState<AppState>({
    username: 'Utilisateur',
    showCounter: true,
  });

  // Gestionnaire d'événement typé
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(prev => ({
      ...prev,
      username: e.target.value,
    }));
  };

  // Callback typé pour le composant Counter
  const handleCountChange = (newCount: number): void => {
    console.log(`Le compteur a changé : ${newCount}`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Application React TypeScript</h1>
        <p>Checkpoint - Conversion vers TypeScript</p>
      </header>

      <main className="app-main">
        <section className="user-section">
          <div className="input-group">
            <label htmlFor="username">Nom d'utilisateur :</label>
            <input
              id="username"
              type="text"
              value={state.username}
              onChange={handleNameChange}
              placeholder="Entrez votre nom"
              className="username-input"
            />
          </div>
        </section>

        <section className="greeting-section">
          <Greeting name={state.username} />
        </section>

        <section className="counter-section">
          <div className="counter-controls">
            <button 
              onClick={() => setState(prev => ({
                ...prev,
                showCounter: !prev.showCounter
              }))}
              className="toggle-counter-btn"
            >
              {state.showCounter ? ' Cacher le compteur' : ' Afficher le compteur'}
            </button>
          </div>

          {state.showCounter && (
            <Counter 
              initialCount={0}
              onCountChange={handleCountChange}
            />
          )}
        </section>

        <footer className="app-footer">
          <p>© 2026 - Checkpoint React TypeScript</p>
        </footer>
      </main>
    </div>
  );
}

export default App;