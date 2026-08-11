

import React, { Component } from 'react';
import { CounterProps, CounterState } from '../Types';


class Counter extends Component<CounterProps, CounterState> {

  state: Readonly<CounterState> = {
    count: this.props.initialCount ?? 0,
  };

  
  increment = (): void => {
    this.setState(
      (prevState: CounterState): CounterState => ({
        count: prevState.count + 1,
      }),
      // Callback optionnel pour notifier les parents
      () => {
        this.props.onCountChange?.(this.state.count);
      }
    );
  };

  
  reset = (): void => {
    this.setState({
      count: this.props.initialCount ?? 0,
    });
  };

 
  render(): React.ReactNode {
    const { count } = this.state;
    
    return (
      <div className="counter-container" style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginTop: '20px'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>🔢 Compteur</h3>
        
        <p style={{ 
          fontSize: '28px', 
          fontWeight: 'bold',
          margin: '10px 0'
        }}>
          Nombre : {count}
        </p>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            onClick={this.increment}
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ➕ Incrémenter
          </button>
          
          <button 
            onClick={this.reset}
            className="btn btn-secondary"
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            🔄 Réinitialiser
          </button>
        </div>
        
        {/* Affichage conditionnel avec TypeScript */}
        {count > 10 && (
          <p style={{ 
            color: 'orange', 
            marginTop: '15px',
            padding: '10px',
            backgroundColor: '#fff3cd',
            borderRadius: '4px',
            borderLeft: '4px solid #ffc107'
          }}>
            ⚠️ Le compteur est élevé ! ({count})
          </p>
        )}
        
        {count === 0 && (
          <p style={{ 
            color: '#666', 
            marginTop: '15px',
            fontStyle: 'italic'
          }}>
            Le compteur est à zéro. Cliquez sur "Incrémenter" pour commencer !
          </p>
        )}
      </div>
    );
  }
}

export default Counter;