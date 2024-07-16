import { PropsWithChildren } from 'react';

interface BadgeProps {
  role: 'neutral' | 'error' | 'warning' | 'success' | 'brand';
  size: 'small' | 'medium' | 'large';
}

const colors = {
  neutral: 'text-neutral-600 bg-gray-50 border-neutral-200',
  error: 'text-red-600 bg-red-50 border-red-200',
  warning: 'text-amber-700 bg-amber-50 border-amber-200',
  success: 'text-green-700 bg-green-50 border-green-200',
  brand: 'text-indigo-700 bg-indigo-50 border-indigo-200',
};

const sizes = {
  small: 'text-xs px-1.5 py-0.5',
  medium: 'text-sm px-2 py-0.5',
  large: 'text-sm px-2.5 py-1',
};

export default function BadgeComponent(props: PropsWithChildren<BadgeProps>) {
  const baseClasses = 'border rounded-full';
  const colorClasses = colors[props.role];
  const sizeClasses = sizes[props.size];

  return (
    <span className={`${baseClasses} ${sizeClasses} ${colorClasses}`}>
      {props.children}
    </span>
  );
}
