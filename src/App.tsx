import React, { useState } from 'react';
import { CardProvider } from './contexts/CardContext';
import { Sidebar } from './components/Sidebar';
import { EditorPanel } from './components/EditorPanel';
import { CardCanvas } from './components/CardCanvas';
import { EditorTools } from './components/EditorTools';

export default function App() {
  const [activeSection, setActiveSection] = useState('frames');

  return (
    <CardProvider>
      <div className="h-screen flex flex-col bg-[#151829]">
        <header className="bg-[#1e2238] border-b border-gray-700 px-6 py-4">
          <h1 className="text-white tracking-wider">Editor de Cartas TSG</h1>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <EditorPanel activeSection={activeSection} />

          <div className="flex-1 bg-gradient-to-br from-[#2a3d5f] to-[#1e2d47] relative">
            <div data-card-canvas className="absolute inset-0">
              <CardCanvas />
            </div>
          </div>
        </div>

        <EditorTools />
      </div>
    </CardProvider>
  );
}
