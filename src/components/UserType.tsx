import Caret from "./Caret";

const UserTypings = ({
  userInput,
  className,
  words,
}: {
  userInput: string;
  className?: string;
  words: string;
}) => {
  const typedCharacters = userInput.split("");
  
  return (
    <div
      className={`${className} font-mono`}
      style={{
        whiteSpace: "pre-wrap",
        fontSize: "2rem",
        lineHeight: "1.5",
        letterSpacing: "0.05em",
      }}
    >
      {typedCharacters.map((char, index) => {
        const isCorrect = words[index] === char;
        return (
          <span
            key={`${char}_${index}`}
            className={isCorrect ? "text-yellow-400" : "text-red-500"}
          >
            {char}
          </span>
        );
      })}
      <Caret />
    </div>
  );
};

export default UserTypings;