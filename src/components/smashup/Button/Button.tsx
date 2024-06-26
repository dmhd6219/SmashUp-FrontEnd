import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    category?: 'fill' | 'stroke' | 'fill-default' | 'stroke-default';
    icon?: React.ReactNode;
}

export default function SmashUpButton({
    category,
    icon,
    children,
    disabled,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={twMerge(
                'rounded-2xl font-semibold text-xl',
                'flex flex-row justify-center items-center gap-2.5',
                category === undefined || category === 'fill'
                    ? `bg-primary hover:bg-primaryVariant text-onPrimary  ${disabled ? 'brightness-75' : ''}`
                    : '',
                category === 'fill-default'
                    ? `bg-surface text-white  ${disabled ? 'brightness-75' : ''}`
                    : '',
                category === 'stroke'
                    ? `bg-transparent text-onSurface border-2 border-primary hover:border-primaryVariant ${disabled ? 'brightness-75' : ''}`
                    : '',
                category === 'stroke-default'
                    ? `bg-transparent text-onSurface border-2 border-onPrimary ${disabled ? 'brightness-75' : ''}`
                    : '',
                className
            )}
        >
            {icon}
            {children}
        </button>
    );
}
