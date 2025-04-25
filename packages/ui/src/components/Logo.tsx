export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#8B5CF6"/>
        <text x="45" y="28" fill="currentColor" className="text-2xl font-bold">OPAVC</text>
      </svg>
    </div>
  );
}; 