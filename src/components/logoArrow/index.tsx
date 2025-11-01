import A from "@/assets/arrow.svg?react"
interface ArrowProps {
  className?: string;
  w?: number;
  h?: number;
  angle?: number;
  style?: React.CSSProperties;
}

const Arrow: React.FC<ArrowProps> = ({ 
  className = '', 
  w = 77, 
  h = 45, 
  angle = -15,
  style = {}
}) => {
  return (
    <A 
      style={{ 
        transform: `rotate(${angle}deg)`,
        ...style 
      }} 
      className={className}
      width={w} 
      height={h} 
    />
  );
};

export default Arrow;