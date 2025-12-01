import React from 'react';
import { Image, Palette, Type, Zap, Sword, Shield } from 'lucide-react';

// ============================================
// SIDEBAR - MENÚ DE NAVEGACIÓN
// ============================================
// Secciones simplificadas y modulares
// ============================================

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'frames', label: 'Marcos y Template', icon: Palette },
  { id: 'text', label: 'Información de Carta', icon: Type },
  { id: 'image', label: 'Imagen del Personaje', icon: Image },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-64 bg-[#1e2238] p-4 flex flex-col gap-2">
      <div className="mb-4 px-4 py-3">
        <h2 className="text-white tracking-wider">EDITOR DE CARTAS</h2>
        <p className="text-gray-400 text-xs mt-1">Sistema modular expandible</p>
      </div>
      
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
              activeSection === section.id
                ? 'bg-purple-500/20 text-white border-l-4 border-purple-500'
                : 'text-gray-400 hover:bg-[#2a2d48] hover:text-white'
            }`}
          >
            <Icon size={20} />
            <span className="text-sm">{section.label}</span>
          </button>
        );
      })}
      
      {/* Sección de ayuda */}
      <div className="mt-auto pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500 px-4">
          <strong className="text-gray-400">Sistema Modular</strong><br/>
          Fácil de expandir con nuevas clases, energías y módulos.
        </p>
      </div>
    </div>
  );
}
