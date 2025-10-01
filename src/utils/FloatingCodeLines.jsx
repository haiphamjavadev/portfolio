export const FloatingCodeLines = () => {
    const codeLines = [
        "public class Developer {",
        "  private String name = 'Hai';",
        "  @Autowired",
        "  private SkillService skills;",
        "}",
        "// Building scalable systems",
        "SELECT * FROM experience",
        "docker-compose up -d"
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {codeLines.map((line, idx) => (
                <div
                    key={idx}
                    className="absolute text-blue-600 font-mono text-sm whitespace-nowrap animate-float"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${idx * 0.5}s`,
                        animationDuration: `${15 + idx * 2}s`
                    }}
                >
                    {line}
                </div>
            ))}
        </div>
    );
};