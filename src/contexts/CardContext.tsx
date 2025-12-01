import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CardData, initialCardData } from '../types/card';

interface CardContextType {
  cardData: CardData;
  updateCardData: (updates: Partial<CardData>) => void;
  history: CardData[];
  historyIndex: number;
  undo: () => void;
  redo: () => void;
  reset: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<CardData[]>([initialCardData]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const cardData = history[historyIndex];

  const updateCardData = (updates: Partial<CardData>) => {
    const newCardData = { ...cardData, ...updates };
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newCardData);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
    }
  };

  const reset = () => {
    setHistory([initialCardData]);
    setHistoryIndex(0);
  };

  return (
    <CardContext.Provider
      value={{
        cardData,
        updateCardData,
        history,
        historyIndex,
        undo,
        redo,
        reset,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within CardProvider');
  }
  return context;
}
