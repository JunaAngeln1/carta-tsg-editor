import React, { useState } from 'react';
import { useCard } from '../contexts/CardContext';
import {
  Undo2,
  Redo2,
  Download,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Save,
  FileDown,
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// ============================================
// HERRAMIENTAS DEL EDITOR
// ============================================
// Incluye funcionalidad completa de guardado/exportación
// ============================================

export function EditorTools() {
  const { canUndo, canRedo, undo, redo, reset } = useCard();
  const [zoom, setZoom] = useState(100);
  const [isExporting, setIsExporting] = useState(false);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  // Función para capturar el canvas de la carta
  const captureCard = async (): Promise<HTMLCanvasElement | null> => {
    const cardElement = document.querySelector('[data-card-canvas]') as HTMLElement;
    if (!cardElement) {
      console.error('No se encontró el elemento de la carta');
      return null;
    }

    try {
      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 3, // Alta calidad para impresión
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      return canvas;
    } catch (error) {
      console.error('Error al capturar la carta:', error);
      return null;
    }
  };

  // Exportar como PNG
  const handleExportPNG = async () => {
    setIsExporting(true);
    const canvas = await captureCard();
    
    if (canvas) {
      const link = document.createElement('a');
      link.download = `carta-tsg-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
    
    setIsExporting(false);
  };

  // Exportar como WebP (mejor compresión)
  const handleExportWebP = async () => {
    setIsExporting(true);
    const canvas = await captureCard();
    
    if (canvas) {
      const link = document.createElement('a');
      link.download = `carta-tsg-${Date.now()}.webp`;
      link.href = canvas.toDataURL('image/webp', 0.95);
      link.click();
    }
    
    setIsExporting(false);
  };

  // Exportar como PDF
  const handleExportPDF = async () => {
    setIsExporting(true);
    const canvas = await captureCard();
    
    if (canvas) {
      // Dimensiones de la carta en mm (estándar poker: 63.5 x 88.9 mm)
      const cardWidthMM = 63.5;
      const cardHeightMM = 88.9;
      
      // Crear PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [cardWidthMM, cardHeightMM],
      });

      // Convertir canvas a imagen y agregar al PDF
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, cardWidthMM, cardHeightMM);
      
      // Descargar PDF
      pdf.save(`carta-tsg-${Date.now()}.pdf`);
    }
    
    setIsExporting(false);
  };

  // Menu de exportación
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-[#1e2238] border-t border-gray-700">
      {/* Controles de Zoom */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleZoomOut}
          disabled={zoom <= 50}
          className="p-2 rounded-lg bg-[#2a2d48] text-white hover:bg-[#3a3d58] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Alejar"
        >
          <ZoomOut size={18} />
        </button>
        <span className="text-white text-sm w-12 text-center">{zoom}%</span>
        <button
          onClick={handleZoomIn}
          disabled={zoom >= 200}
          className="p-2 rounded-lg bg-[#2a2d48] text-white hover:bg-[#3a3d58] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Acercar"
        >
          <ZoomIn size={18} />
        </button>
      </div>

      {/* Controles de Historial */}
      <div className="flex items-center gap-2">
        <button
          onClick={undo}
          disabled={!canUndo}
          className="p-2 rounded-lg bg-[#2a2d48] text-white hover:bg-[#3a3d58] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Deshacer"
        >
          <Undo2 size={18} />
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="p-2 rounded-lg bg-[#2a2d48] text-white hover:bg-[#3a3d58] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Rehacer"
        >
          <Redo2 size={18} />
        </button>
        <button
          onClick={reset}
          className="p-2 rounded-lg bg-[#2a2d48] text-white hover:bg-[#3a3d58] transition-colors"
          title="Reiniciar"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Botones de Guardado/Exportación */}
      <div className="flex items-center gap-2 relative">
        {/* Botón de exportación rápida (PNG por defecto) */}
        <button
          onClick={handleExportPNG}
          disabled={isExporting}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors disabled:opacity-50"
          title="Exportar como PNG"
        >
          <Download size={18} />
          {isExporting ? 'Exportando...' : 'Exportar PNG'}
        </button>

        {/* Botón de menú de exportación avanzada */}
        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            title="Más opciones de exportación"
          >
            <FileDown size={18} />
            Guardar
          </button>

          {/* Menú desplegable */}
          {showExportMenu && (
            <div className="absolute bottom-full right-0 mb-2 bg-[#1e2238] border border-gray-600 rounded-lg shadow-xl overflow-hidden min-w-[200px]">
              <button
                onClick={() => {
                  handleExportPNG();
                  setShowExportMenu(false);
                }}
                disabled={isExporting}
                className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2d48] transition-colors flex items-center gap-3 border-b border-gray-700"
              >
                <Download size={16} />
                <div>
                  <div className="text-sm font-semibold">Exportar PNG</div>
                  <div className="text-xs text-gray-400">Alta calidad, tamaño medio</div>
                </div>
              </button>

              <button
                onClick={() => {
                  handleExportWebP();
                  setShowExportMenu(false);
                }}
                disabled={isExporting}
                className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2d48] transition-colors flex items-center gap-3 border-b border-gray-700"
              >
                <Download size={16} />
                <div>
                  <div className="text-sm font-semibold">Exportar WebP</div>
                  <div className="text-xs text-gray-400">Mejor compresión</div>
                </div>
              </button>

              <button
                onClick={() => {
                  handleExportPDF();
                  setShowExportMenu(false);
                }}
                disabled={isExporting}
                className="w-full px-4 py-3 text-left text-white hover:bg-[#2a2d48] transition-colors flex items-center gap-3"
              >
                <FileDown size={16} />
                <div>
                  <div className="text-sm font-semibold">Exportar PDF</div>
                  <div className="text-xs text-gray-400">Para impresión (63.5 × 88.9 mm)</div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay de exportación */}
      {isExporting && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1e2238] px-8 py-6 rounded-lg border border-purple-500">
            <p className="text-white text-center">
              <span className="inline-block animate-spin mr-2">⚙️</span>
              Generando carta...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
