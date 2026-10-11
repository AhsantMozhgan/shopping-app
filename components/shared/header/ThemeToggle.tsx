'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Change theme"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    {theme === 'system' ? (
                        <SunMoon className="w-5 h-5" />
                    ) : theme === 'dark' ? (
                        <MoonIcon className="w-5 h-5" />
                    ) : (
                        <SunIcon className="w-5 h-5" />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem
                    checked={theme === 'system'}
                    onSelect={() => setTheme('system')}
                >
                    System
                </DropdownMenuCheckboxItem>

                <DropdownMenuItem onSelect={() => setTheme('light')}>
                    <SunIcon className="w-4 h-4 mr-2" />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem onSelect={() => setTheme('dark')}>
                    <MoonIcon className="w-4 h-4 mr-2" />
                    Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ThemeToggle;