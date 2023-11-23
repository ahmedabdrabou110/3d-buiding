import { createContext, useState } from "react";

interface LevelCurrentProps {
  currentLevel: boolean;
  getCurrentLevel: (id: string) => void;
  id: string;
  getIconId: (id: string) => void;
  iconId: string;
  setIconId: (id: string) => void;
  setIdItem: (id: string) => void;
  getSelectedItem: (id: any) => void;
  openModal: () => void;
  closeModal: () => void;
  open: boolean;
  activeLinkSearch: () => void;
  searchLink: boolean;
  itemSelected: any;
  setSearchItem: (id: string) => void;
  search: string;
  prevWindow: (id: string) => void;
  nextWindow: (id: string) => void;
}

export const currentLevelContext = createContext<LevelCurrentProps | null>(
  null
);

const CurrentLevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLevel, setCurrentLevel] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [searchLink, setSearchLink] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [itemSelected, setItemSelected] = useState<any>();
  const [iconId, setIconId] = useState<string>("");

  const getCurrentLevel = (id: string) => {
    if (id) {
      setCurrentLevel(true);
    } else {
      setCurrentLevel(false);
    }
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const prevWindow = (id: string) => {
    setIdItem(String(Number(id) - 1));
  };
  const nextWindow = (id: string) => {
    setIdItem(String(Number(id) + 1));
  };

  const setSearchItem = (item: string) => {
    setSearch(item);
  };

  const getSelectedItem = (item: any) => {
    setItemSelected(item);
  };

  const activeLinkSearch = () => {
    setSearchLink(true);
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
    id,
    getIconId,
    iconId,
    setIconId,
    openModal,
    closeModal,
    setIdItem,
    open,
    activeLinkSearch,
    searchLink,
    getSelectedItem,
    itemSelected,
    nextWindow,
    search,
    prevWindow,
    setSearchItem,
  };
  return (
    <currentLevelContext.Provider value={value}>
      {children}
    </currentLevelContext.Provider>
  );
};

export default CurrentLevelProvider;
