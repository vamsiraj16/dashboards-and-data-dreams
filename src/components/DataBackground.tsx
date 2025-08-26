const DataBackground = () => {
  // Generate random positions for floating data points
  const dataPoints = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + 5, // 5% to 95%
    delay: Math.random() * 12, // 0 to 12s delay
    size: Math.random() * 6 + 4, // 4px to 10px
  }));

  // Generate network connection lines
  const networkLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: Math.random() * 80 + 10, // 10% to 90%
    width: Math.random() * 200 + 100, // 100px to 300px
    left: Math.random() * 70 + 15, // 15% to 85%
    delay: Math.random() * 6, // 0 to 6s delay
  }));

  // Mathematical symbols related to data analysis
  const mathSymbols = ['∑', '∫', 'μ', 'σ', 'χ²', 'λ', 'π', 'α', 'β', 'γ', '∆', '∇'];
  
  const floatingMath = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
    left: Math.random() * 90 + 5, // 5% to 95%
    delay: Math.random() * 20, // 0 to 20s delay
    fontSize: Math.random() * 6 + 12, // 12px to 18px
  }));

  // Floating data particles
  const dataParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // 0% to 100%
    delay: Math.random() * 15, // 0 to 15s delay
    duration: Math.random() * 10 + 15, // 15s to 25s
  }));

  return (
    <div className="data-background">
      {/* Vertical Data Streams */}
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>

      {/* Floating Data Points */}
      {dataPoints.map((point) => (
        <div
          key={point.id}
          className="floating-data-point"
          style={{
            left: `${point.left}%`,
            animationDelay: `${point.delay}s`,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
        />
      ))}

      {/* Network Connection Lines */}
      {networkLines.map((line) => (
        <div
          key={line.id}
          className="network-line"
          style={{
            top: `${line.top}%`,
            left: `${line.left}%`,
            width: `${line.width}px`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}

      {/* Floating Mathematical Symbols */}
      {floatingMath.map((math) => (
        <div
          key={math.id}
          className="math-symbol"
          style={{
            left: `${math.left}%`,
            animationDelay: `${math.delay}s`,
            fontSize: `${math.fontSize}px`,
          }}
        >
          {math.symbol}
        </div>
      ))}

      {/* Floating Data Particles */}
      {dataParticles.map((particle) => (
        <div
          key={particle.id}
          className="data-particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DataBackground;