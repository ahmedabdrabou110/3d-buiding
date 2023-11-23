import { createContext, useState } from "react";

interface LevelCurrentProps {
  currentLevel: boolean;
  getCurrentLevel: (id: string) => void;
  getId: (id: string) => void;
  id: string;
  getIconId: (id: string) => void;
  iconId: string;
  setId: (id: string) => void;
  setIconId: (id: string) => void;
  nextLevel: (id: string) => void;
  hiddenBtn: boolean;
  setIdItem: (id: string) => void;
}

export const currentLevelContext = createContext<LevelCurrentProps | null>(
  null
);

const CurrentLevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLevel, setCurrentLevel] = useState<boolean>(false);
  const [hiddenBtn, setHiddenBtn] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [iconId, setIconId] = useState<string>("");

  const getCurrentLevel = (id: string) => {
    if (id) {
      setCurrentLevel(true);
    } else {
      setCurrentLevel(false);
    }
  };
  const nextLevel = (id: string) => {
    if (Number(id) === 7) return;
    setId(String(Number(id) + 1));
    setIdItem(String(Number(id) + 1));
  };

  const getId = () => {
    return Number(id);
  };
  const setIdItem = (id: string) => {
    setId(id);
  };
  const getIconId = (id: string) => {
    setIconId(id);
  };
  const value: LevelCurrentProps = {
    currentLevel,
    getCurrentLevel,
    getId,
    id,
    getIconId,
    iconId,
    setId,
    setIconId,
    nextLevel,
    hiddenBtn,
    setIdItem,
  };
  return (
    <currentLevelContext.Provider value={value}>
      {children}
    </currentLevelContext.Provider>
  );
};

export default CurrentLevelProvider;
