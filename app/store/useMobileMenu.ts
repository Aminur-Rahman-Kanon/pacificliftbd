import { create } from 'zustand';

type MobileMenuState = {
    isMobileMenuOpen: boolean,
    isProductMenuOpen: boolean,
    isToolsMenuOpen: boolean,
    isOurCompanyMenuOpen: boolean,
    openMobileMenu: () => void,
    closeMobileMenu: () => void,
    openProductMenu: () => void,
    closeProductMenu: () => void,
    openToolsMenu: () => void,
    closeToolsMenu: () => void,
    openOurCompanyMenu: () => void,
    closeOurCompanyMenu: () => void,
}

export const useMobileMenu = create<MobileMenuState>((set) => ({
    isMobileMenuOpen: false,
    isProductMenuOpen: false,
    isToolsMenuOpen: false,
    isOurCompanyMenuOpen: false,
    openMobileMenu: () => set({ isMobileMenuOpen: true, isProductMenuOpen: false, isToolsMenuOpen: false, isOurCompanyMenuOpen: false }),
    closeMobileMenu: () => set({ isMobileMenuOpen: false, isProductMenuOpen: false, isToolsMenuOpen: false, isOurCompanyMenuOpen: false }),
    openProductMenu: () => set({ isProductMenuOpen: true, isToolsMenuOpen: false, isOurCompanyMenuOpen: false }),
    closeProductMenu: () => set({ isProductMenuOpen: false, isToolsMenuOpen: false, isOurCompanyMenuOpen: false }),
    openToolsMenu: () => set({ isToolsMenuOpen: true, isProductMenuOpen: false, isOurCompanyMenuOpen: false }),
    closeToolsMenu: () => set({ isToolsMenuOpen: false, isProductMenuOpen: false, isOurCompanyMenuOpen: false }),
    openOurCompanyMenu: () => set({ isOurCompanyMenuOpen: true, isProductMenuOpen: false, isToolsMenuOpen: false }),
    closeOurCompanyMenu: () => set({ isOurCompanyMenuOpen: false, isProductMenuOpen: false, isToolsMenuOpen: false })
}));
