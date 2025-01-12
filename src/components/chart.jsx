import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const CryptoChart = () => {
  const chartRef = useRef(null);

  // Generate more realistic-looking price data
  const generateData = () => {
    const times = [];
    const prices = [];
    let price = 29750; // Starting price
    const volatility = 0.015; // 1.5% volatility
    
    for (let i = 0; i < 100; i++) {
      const change = price * volatility * (Math.random() - 0.5);
      price += change;
      
      // Create timestamp for each point (going backwards from now)
      const timestamp = new Date(Date.now() - (100 - i) * 15 * 60000); // 15 min intervals
      times.push(timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      prices.push(price);
    }
    return { times, prices };
  };

  const { times, prices } = generateData();

  const gradientBackground = (ctx) => {
    const chart = chartRef.current;
    if (!chart) return null;

    // Create a transparent gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    gradient.addColorStop(0, 'rgba(33, 243, 165, 0.2)');
    gradient.addColorStop(1, 'rgba(33, 243, 165, 0)');
    return gradient;
  };

  const data = {
    labels: times,
    datasets: [
      {
        label: 'BTC/USDT',
        data: prices,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          return gradientBackground(ctx);
        },
        borderColor: '#21F3A5',
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          color: '#666666',
          maxTicksLimit: 8,
          maxRotation: 0,
        },
      },
      y: {
        position: 'right',
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          display: false, // Hide y-axis numbers
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#1a1a1a',
        titleColor: '#666666',
        bodyColor: '#21F3A5',
        borderColor: '#333333',
        borderWidth: 1,
        padding: 8,
        callbacks: {
          label: (context) => '', // Remove price from tooltip
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '500px', // Increased height
      backgroundColor: 'transparent', 
      padding: '10px',
      borderRadius: '8px',
      marginTop: '20px', // Added margin to the top
    }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default CryptoChart;
