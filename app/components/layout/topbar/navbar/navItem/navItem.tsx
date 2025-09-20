'use client';

import React, { useEffect } from 'react';
import styles from './navItem.module.css';
import { ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';
import NavItemType from '@/app/types/navItem';
import { useMobileMenu } from '@/app/store/useMobileMenu';
import useScreenWidth from '@/app/hooks/useScreenWidth';
import { usePathname } from 'next/navigation';

type Props = {
    navItem: NavItemType
}

const NavItem:React.FC<Props> = ({ navItem }) => {

    const screenWidth = useScreenWidth();
    const pathname = usePathname();

    useEffect(() => {
        const el = document.getElementById(`nav-item-${navItem.heading}`);

        el?.addEventListener('mouseenter', () => (el.children[1] as HTMLElement).style.display = 'flex');
        el?.addEventListener('mouseleave', () => (el.children[1] as HTMLElement).style.display = 'none');
    }, [])

    useEffect(() => {
        const el = document.getElementById(`nav-item-${navItem.heading}`);

        (el?.children[1] as HTMLElement).style.display = 'none';
    }, [pathname])

    const {
        isMobileMenuOpen, isProductMenuOpen, isToolsMenuOpen, isOurCompanyMenuOpen,
        openProductMenu, closeProductMenu,
        openOurCompanyMenu, closeOurCompanyMenu,
        openToolsMenu, closeToolsMenu,
        closeMobileMenu
    } = useMobileMenu();

    // type CallbackFunctions = () => void;
    type ReturnType = 'open' | 'close';


    //this function takes a nav item name as an argument and return a pair of callaback function
    //so nested nav item can be toggled opened and closed
    function callbackHandler (navItm:string , returnType: ReturnType): void {
        if (isMobileMenuOpen && screenWidth <= 1100){
            if (navItm === 'products & services' && returnType === 'open'){
                openProductMenu();
            }
            if (navItm === 'products & services' && returnType === 'close'){
                closeProductMenu();
            }
            
            if (navItm === 'tools & resources' && returnType === 'open'){
                openToolsMenu();
            }
            if (navItm === 'tools & resources' && returnType === 'close'){
                closeToolsMenu();
            }

            if (navItm === 'our company' && returnType === 'open'){
                openOurCompanyMenu();
            }
            if (navItm === 'our company' && returnType === 'close'){
                closeOurCompanyMenu();
            }
        }
    }

    //this function decide which nested navItem to show
    function displayNestedNavItem(): string {
        if (isProductMenuOpen){
            return 'products & services'
        }
        if (isToolsMenuOpen){
            return 'tools & resources'
        }
        if (isOurCompanyMenuOpen){
            return 'our company'
        }
        
        return '';
    }

    const displayItem = displayNestedNavItem();

    return (
        <section className={styles.navItem} id={`nav-item-${navItem.heading}`}>
            <span className={styles.tag} onClick={() => callbackHandler(navItem.heading, 'open')}>{navItem.heading}</span>
            <div className={
                displayItem === navItem.heading ? `${styles.container} ${styles.open}`
                :
                styles.container
            }>
                <div className={styles.iconContainer}>
                    <ArrowLeft size={20}
                            color='white'
                            onClick={() => callbackHandler(navItem.heading, 'close')}
                            className={styles.icon}/>
                    <X size={20}
                       color='white'
                       onClick={closeMobileMenu}
                       className={styles.icon} />
                </div>
                
                <div className={styles.gridContainer}>
                    {
                        navItem.child.map(nestedItem => <div key={nestedItem.id} className={styles.gridItem}>
                            <h3 className={styles.headingSmall}>{nestedItem.heading}</h3>
                            <ul className={styles.content}>
                                {
                                    nestedItem.elements.map(itm => <li key={itm.id} className={styles.list}>
                                        <Link href={itm.href} className={styles.link}>{itm.tag}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default NavItem;
