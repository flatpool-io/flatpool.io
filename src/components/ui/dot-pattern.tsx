interface DotPatternProps {
  className?: string;
  opacity?: number;
  size?: number;
  color?: string;
}

export function DotPattern({ 
  className = "", 
  opacity = 0.1, 
  size = 20, 
  color = "white" 
}: DotPatternProps) {
  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`
      }}
    />
  );
} 