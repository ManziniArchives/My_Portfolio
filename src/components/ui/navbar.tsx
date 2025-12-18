import Link from 'next/link';
import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import * as React from 'react'

export type IMenu = {
    id: number;
    title: string;
    url: string;
    dropdown?: boolean;
    items?: IMenu[];
};

type MenuProps = {
    list: IMenu[];
};

const Menu = ({ list }: MenuProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
            <nav className={'relative flex items-center justify-between'}>
                {/* Desktop Menu */}
                <ul className={'hidden md:flex items-center'}>
                    {list?.map((item) => {
                        return (
                            <li key={item.id} className={'relative'}>
                                <Link
                                    className={`
                    relative flex items-center justify-center rounded px-8 py-3 transition-all
                    hover:bg-foreground/10
                    ${hovered === item?.id ? 'bg-foreground/10' : ''}
                  `}
                                    onMouseEnter={() => setHovered(item.id)}
                                    onMouseLeave={() => setHovered(null)}
                                    href={item?.url}
                                >
                                    {item?.title}
                                </Link>
                                {hovered === item?.id && !item?.dropdown && (
                                    <motion.div
                                        layout
                                        layoutId={`cursor`}
                                        className={'absolute h-0.5 w-full bg-foreground'}
                                    />
                                )}
                                {item?.dropdown && hovered === item?.id && (
                                    <div
                                        className='absolute left-0 top-full'
                                        onMouseEnter={() => setHovered(item.id)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <motion.div
                                            layout
                                            transition={{ bounce: 0 }}
                                            initial={{ y: 10 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: 10 }}
                                            style={{
                                                borderRadius: '8px',
                                            }}
                                            className='mt-4 flex w-64 flex-col rounded bg-background border'
                                            layoutId={'cursor'}
                                        >
                                            {item?.items?.map((nav) => {
                                                return (
                                                    <Link
                                                        key={nav.id}
                                                        className='w-full px-4 py-3 text-sm hover:bg-foreground/5'
                                                        href={nav.url}
                                                    >
                                                        {nav.title}
                                                    </Link>
                                                );
                                            })}
                                        </motion.div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Dropdown */}
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-16 right-0 left-0 bg-background border rounded-lg shadow-lg md:hidden z-50 p-4 flex flex-col gap-2"
                    >
                        {list?.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                className="px-4 py-3 rounded hover:bg-foreground/5"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </nav>
        </MotionConfig>
    );
};

export { Menu };
