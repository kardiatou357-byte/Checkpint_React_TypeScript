import React, { Component } from 'react';
import { CounterProps, CounterState } from '../Types';

// Icônes SVG personnalisées
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
    <path d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 2V6L10 4L8 2Z" fill="currentColor" />
    <path d="M8 14V10L6 12L8 14Z" fill="currentColor" />
  </svg>
);

const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
    <path d="M10 2L1 18H19L10 2Z" stroke="#ffc107" strokeWidth="2" strokeLinejoin="round" />
    <path d="M10 8V12" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="15" r="1" fill="#ffc107" />
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
    <circle cx="10" cy="10" r="9" stroke="#666" strokeWidth="2" />
    <path d="M10 6V10" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="13" r="1" fill="#666" />
  </svg>
);

const CounterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
    <rect x="2" y="6" width="20" height="12" rx="1" stroke="#333" strokeWidth="2" />
    <path d="M6 10H18" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 14H16" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 10L22 10" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 14L22 14" stroke="#333" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

class Counter extends Component<CounterProps, CounterState> {
  state: Readonly<CounterState> = {
    count: this.props.initialCount ?? 0,
  };

  increment = (): void => {
    this.setState(
      (prevState: CounterState): CounterState => ({
        count: prevState.count + 1,
      }),
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
      <div
        className="counter-container"
        style={{
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          marginTop: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <h3
          style={{
            margin: '0 0 10px 0',
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
            color: '#333',
          }}
        >
          <CounterIcon />
          Compteur
        </h3>

        <p
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            margin: '10px 0 20px 0',
            color: '#2c3e50',
            textAlign: 'center',
          }}
        >
          {count}
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={this.increment}
            className="btn btn-primary"
            style={{
              padding: '10px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#45a049';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(76, 175, 80, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4CAF50';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <PlusIcon />
            Incrémenter
          </button>

          <button
            onClick={this.reset}
            className="btn btn-secondary"
            style={{
              padding: '10px 24px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c0392b';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e74c3c';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ResetIcon />
            Réinitialiser
          </button>
        </div>

        {count > 10 && (
          <p
            style={{
              color: '#856404',
              marginTop: '15px',
              padding: '12px 16px',
              backgroundColor: '#fff3cd',
              borderRadius: '6px',
              borderLeft: '4px solid #ffc107',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
            }}
          >
            <WarningIcon />
            Le compteur est élevé ! ({count})
          </p>
        )}

        {count === 0 && (
          <p
            style={{
              color: '#666',
              marginTop: '15px',
              padding: '12px 16px',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              fontStyle: 'italic',
            }}
          >
            <InfoIcon />
            Le compteur est à zéro. Cliquez sur "Incrémenter" pour commencer !
          </p>
        )}
      </div>
    );
  }
}

export default Counter;