import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let id;
    if (isActive) {
      id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [isActive]);

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <p style={styles.timerText}>⏱ {count} sec</p>
      <div style={styles.buttonGroup}>
        <button onClick={handleStart} style={styles.button}>Start</button>
        <button onClick={handleStop} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    width: '300px',
    margin: '50px auto',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  timerText: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#333',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};

export default Stopwatch;
