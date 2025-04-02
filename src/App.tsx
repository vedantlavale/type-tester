import { calculateAccuracyPercentage } from './utils/helpers';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserType';
import useEngine from './hooks/useEngine';

function App() {
  const { state, words, errors, timeLeft, totalTyped, typed, restart } = useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />

      <WordContainer>
        <div className="relative">
          <GeneratedWords words={words} />
          <UserTypings 
            className="absolute inset-0" 
            userInput={typed} 
            words={words} 
          />
        </div>
      </WordContainer>

      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        onRestart={restart}
      />

      {state === "finish" && (
        <Results
          className="mx-auto mt-10 text-slate-500"
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
        />
      )}
    </>
  );
}

const WordContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl mx-auto leading-relaxed break-all">
      {children}
    </div>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return (
    <div
      className="text-4xl text-slate-500 font-mono"
      style={{
        whiteSpace: "pre-wrap",
        fontSize: "2rem",
        lineHeight: "1.5",
        letterSpacing: "0.05em",
      }}
    >
      {words}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>
  );
};

export default App;
