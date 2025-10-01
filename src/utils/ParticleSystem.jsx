export const ParticleSystem = () => {
    const particles = Array.from({ length: 30 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`
                    }}
                />
            ))}
        </div>
    );
};