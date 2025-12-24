import * as React from 'react';
// Changed from 'next/link' to 'react-router-dom'
// Or use standard 'a' tags if not using a router
import { Menu, Rocket } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // shadcn helper for classes

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">Antony.dev</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Use standard 'a' tag for Vite if not using react-router */}
                <a href="#start" className={navigationMenuTriggerStyle()}>
                  Inicio
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#stacks" className={navigationMenuTriggerStyle()}>
                  Stacks
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#projects" className={navigationMenuTriggerStyle()}>
                  Projetos
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#experience" className={navigationMenuTriggerStyle()}>
                  Profissional
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#academic" className={navigationMenuTriggerStyle()}>
                  Acadêmico
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
