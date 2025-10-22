function RecordingControls({ isPaused, pause, resume, stop }) {
  return (
    <div className="absolute top-4 right-4 flex space-x-4 bg-black bg-opacity-50 p-4 rounded-xl">
      {isPaused ? (
        <button
          onClick={resume}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Resume
        </button>
      ) : (
        <button
          onClick={pause}
          className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
        >
          Pause
        </button>
      )}
      <button
        onClick={stop}
        className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        Stop & Download
      </button>
    </div>
  );
}

export default RecordingControls;