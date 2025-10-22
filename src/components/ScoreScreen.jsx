function ScoreScreen({ score, restart }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#001d3d] text-center">
      <h1 className="text-5xl font-bold text-[#ffd60a] mb-4">Game Over 💫</h1>
      <p className="text-xl mb-6">
        Your Score: <span className="font-bold text-white">{score}</span>
      </p>
      <button
        onClick={restart}
        className="px-6 py-3 text-lg font-semibold text-white bg-[#00b4d8] rounded-xl hover:bg-[#0077b6] transition"
      >
        Play Again
      </button>
    </div>
  );
}

export default ScoreScreen;