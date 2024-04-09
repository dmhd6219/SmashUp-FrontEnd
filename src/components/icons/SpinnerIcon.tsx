import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function SpinnerIcon({ width, height, className }: IconComponentProps) {
    // w: 20, h: 20
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3934 3.07701C12.8942 2.12574 11.1268 1.68673 9.35684 1.82598C7.58683 1.96522 5.90983 2.67519 4.57789 3.84918C3.24595 5.02317 2.33103 6.59775 1.97064 8.33626C1.61025 10.0748 1.82386 11.8833 2.57937 13.49C2.67542 13.7051 2.68333 13.9492 2.60141 14.1701C2.51949 14.3909 2.35426 14.5708 2.14118 14.6712C1.9281 14.7716 1.68416 14.7844 1.46172 14.707C1.23927 14.6296 1.05604 14.468 0.951365 14.257C0.0295161 12.2975 -0.231361 10.0918 0.207953 7.97131C0.647266 5.85085 1.76303 3.93029 3.3875 2.49836C5.01198 1.06643 7.05738 0.200506 9.2162 0.0307739C11.375 -0.138958 13.5306 0.396671 15.3589 1.55714C17.1872 2.7176 18.5894 4.44019 19.3547 6.46594C20.12 8.4917 20.207 10.7111 19.6027 12.7906C18.9985 14.8701 17.7355 16.6972 16.0037 17.9973C14.2719 19.2973 12.1649 20.0001 9.99936 20C9.76067 20 9.53175 19.9052 9.36297 19.7364C9.19419 19.5676 9.09937 19.3387 9.09937 19.1C9.09937 18.8613 9.19419 18.6324 9.36297 18.4636C9.53175 18.2948 9.76067 18.2 9.99936 18.2C11.7749 18.1999 13.5025 17.6234 14.9224 16.5573C16.3423 15.4912 17.3778 13.993 17.8732 12.2879C18.3686 10.5828 18.2972 8.76303 17.6696 7.10203C17.0421 5.44102 15.8924 4.02858 14.3934 3.07701Z'
                fill='#EBEBEB'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3934 3.07701C12.8942 2.12574 11.1268 1.68673 9.35684 1.82598C7.58683 1.96522 5.90983 2.67519 4.57789 3.84918C3.24595 5.02317 2.33103 6.59775 1.97064 8.33626C1.61025 10.0748 1.82386 11.8833 2.57937 13.49C2.67542 13.7051 2.68333 13.9492 2.60141 14.1701C2.51949 14.3909 2.35426 14.5708 2.14118 14.6712C1.9281 14.7716 1.68416 14.7844 1.46172 14.707C1.23927 14.6296 1.05604 14.468 0.951365 14.257C0.0295161 12.2975 -0.231361 10.0918 0.207953 7.97131C0.647266 5.85085 1.76303 3.93029 3.3875 2.49836C5.01198 1.06643 7.05738 0.200506 9.2162 0.0307739C11.375 -0.138958 13.5306 0.396671 15.3589 1.55714C17.1872 2.7176 18.5894 4.44019 19.3547 6.46594C20.12 8.4917 20.207 10.7111 19.6027 12.7906C18.9985 14.8701 17.7355 16.6972 16.0037 17.9973C14.2719 19.2973 12.1649 20.0001 9.99936 20C9.76067 20 9.53175 19.9052 9.36297 19.7364C9.19419 19.5676 9.09937 19.3387 9.09937 19.1C9.09937 18.8613 9.19419 18.6324 9.36297 18.4636C9.53175 18.2948 9.76067 18.2 9.99936 18.2C11.7749 18.1999 13.5025 17.6234 14.9224 16.5573C16.3423 15.4912 17.3778 13.993 17.8732 12.2879C18.3686 10.5828 18.2972 8.76303 17.6696 7.10203C17.0421 5.44102 15.8924 4.02858 14.3934 3.07701Z'
                fill='#020202'
                fillOpacity='0.2'
            />
        </svg>
    );
}
