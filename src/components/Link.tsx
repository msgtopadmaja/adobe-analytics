import { ElementType } from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  icon: ElementType;
}

export function Link({ href, children, icon: Icon }: LinkProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
    >
      <Icon size={20} />
      <span>{children}</span>
    </a>
  );
}