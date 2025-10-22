import bgScreen from '../assets/bg_screen.jpg';
import alienImg from '../assets/alien.png';

function StartScreen({ startGame, startRecording }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgScreen})` }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl">
        <img
          src={alienImg}
          alt="Alien"
          className="w-40 mx-auto rounded-xl mb-6 shadow-[0_0_20px_#00b4d8]"
        />
        <h1 className="text-5xl font-bold text-[#ffd60a] drop-shadow-[0_0_10px_#ffea00] mb-4">
          👾 Alien Focus Game 👾
        </h1>
        <p className="mb-6 text-lg">
          Press <strong>Spacebar</strong> to keep your alien steady and avoid obstacles!
        </p>
        <button
          onClick={startGame}
          className="px-6 py-3 text-lg font-semibold text-white bg-[#00b4d8] rounded-xl hover:bg-[#0077b6] transition mr-4"
        >
          Start Game
        </button>
        <button
          onClick={startRecording}
          className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-xl hover:bg-green-600 transition"
        >
          Start Recording
        </button>
      </div>
    </div>
  );
}

export default StartScreen;