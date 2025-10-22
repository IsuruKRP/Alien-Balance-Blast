import { useState, useRef } from 'react';
import StartScreen from './components/StartScreen.jsx';
import GameScreen from './components/GameScreen.jsx';
import ScoreScreen from './components/ScoreScreen.jsx';
import RecordingControls from './components/RecordingControls.jsx';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [score, setScore] = useState(0);
  const [recordingState, setRecordingState] = useState('idle'); // 'idle', 'recording', 'paused'
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const startGame = () => {
    setCurrentScreen('game');
  };

  const endGame = (finalScore) => {
    setScore(finalScore);
    setCurrentScreen('score');
  };

  const restart = () => {
    setCurrentScreen('start');
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/mp4' });
        chunksRef.current = [];
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'recording.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        stream.getTracks().forEach((track) => track.stop());
      };
      recorder.start();
      setRecordingState('recording');
    } catch (err) {
      console.error('Error accessing webcam:', err);
      alert('Could not access webcam. Please allow camera permissions.');
    }
  };

  const pauseRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.pause();
      setRecordingState('paused');
    }
  };

  const resumeRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.resume();
      setRecordingState('recording');
    }
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stop();
      setRecordingState('idle');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#001d3d] to-[#003566] text-white font-sans overflow-hidden relative">
      {currentScreen === 'start' && (
        <StartScreen startGame={startGame} startRecording={startRecording} />
      )}
      {currentScreen === 'game' && (
        <GameScreen endGame={endGame} />
      )}
      {currentScreen === 'score' && (
        <ScoreScreen score={score} restart={restart} />
      )}
      {recordingState !== 'idle' && (
        <RecordingControls
          isPaused={recordingState === 'paused'}
          pause={pauseRecording}
          resume={resumeRecording}
          stop={stopRecording}
        />
      )}
    </div>
  );
}

export default App;