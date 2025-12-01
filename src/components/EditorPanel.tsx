import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FrameSelector } from './FrameSelector';
import { TextEditor } from './TextEditor';
import { ImageEditor } from './ImageEditor';

// ============================================
// PANEL DE EDITORES
// ============================================
// Muestra el editor correspondiente a la sección activa
// ============================================

interface EditorPanelProps {
  activeSection: string;
}

export function EditorPanel({ activeSection }: EditorPanelProps) {
  const [expandedSection, setExpandedSection] = React.useState('template');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'frames':
        return (
          <CollapsibleSection
            title="Marcos y Template"
            isExpanded={true}
          >
            <FrameSelector />
          </CollapsibleSection>
        );

      case 'text':
        return (
          <CollapsibleSection
            title="Información de la Carta"
            isExpanded={true}
          >
            <TextEditor />
          </CollapsibleSection>
        );

      case 'image':
        return (
          <CollapsibleSection
            title="Imagen del Personaje"
            isExpanded={true}
          >
            <ImageEditor />
          </CollapsibleSection>
        );

      default:
        return (
          <div className="text-center text-gray-400 py-12">
            <p>Sección en desarrollo</p>
            <p className="text-sm mt-2">Esta función estará disponible próximamente</p>
          </div>
        );
    }
  };

  return (
    <div className="w-[420px] bg-[#2a2d48] overflow-y-auto">
      <div className="p-6">{renderSectionContent()}</div>
    </div>
  );
}

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  children: React.ReactNode;
}

function CollapsibleSection({ title, isExpanded, children }: CollapsibleSectionProps) {
  return (
    <div className="bg-[#1e2238] rounded-lg overflow-hidden">
      <div className="w-full p-4 text-white bg-[#252842]">
        <span className="tracking-wider">{title}</span>
      </div>
      {isExpanded && <div className="p-4">{children}</div>}
    </div>
  );
}
