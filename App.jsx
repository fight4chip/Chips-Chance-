import './index.css';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Justice for Chip</h1>
        <nav className="space-x-6">
          <a href="#timeline" className="hover:underline">Timeline</a>
          <a href="#forensics" className="hover:underline">Forensics</a>
          <a href="#action" className="hover:underline">Take Action</a>
          <a href="#about" className="hover:underline">About</a>
        </nav>
      </header>
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-4">He was retreating when they shot him.</h2>
        <Button>Explore the Evidence</Button>
      </main>
    </div>
  );
}

export default App;