import React from 'react';
import { IconComponentProps } from '@/models/icons';

export default function HomeIcon({ width, height, color }: IconComponentProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 18 18'
            xmlns='http://www.w3.org/2000/svg'
            className={`text-${color} fill-current`}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.18708 1.841C9.06547 1.80176 8.93453 1.80176 8.81292 1.841C8.79876 1.84603 8.74214 1.86617 8.59146 1.99303C8.43371 2.12693 8.23753 2.32023 7.92708 2.62932L2.5018 8.03277C2.12056 8.41132 2.03966 8.50093 1.98404 8.59154C1.92295 8.69062 1.8779 8.79866 1.85056 8.9117C1.82629 9.01439 1.82022 9.1352 1.82022 9.67082V14.6776C1.82022 15.1155 1.82022 15.3894 1.83742 15.5958C1.8536 15.7911 1.87989 15.8455 1.88596 15.8575C1.9442 15.9716 2.03733 16.0643 2.15191 16.1223C2.16405 16.1284 2.21865 16.1546 2.41483 16.1707C2.62213 16.1868 2.89719 16.1878 3.33708 16.1878H6.06742V12.966C6.06742 12.1917 6.37638 11.4491 6.92635 10.9015C7.47632 10.354 8.22223 10.0463 9 10.0463C9.77777 10.0463 10.5237 10.354 11.0736 10.9015C11.6236 11.4491 11.9326 12.1917 11.9326 12.966V16.1878H14.6629C15.1028 16.1878 15.3779 16.1878 15.5852 16.1697C15.7813 16.1546 15.836 16.1284 15.8481 16.1223C15.9627 16.0643 16.0558 15.9716 16.114 15.8575C16.1201 15.8455 16.1464 15.7911 16.1616 15.5958C16.1788 15.3894 16.1798 15.1155 16.1798 14.6776V9.66981C16.1798 9.1342 16.1737 9.01338 16.1494 8.91069C16.1221 8.79765 16.0771 8.6896 16.016 8.59053C15.9603 8.49992 15.8784 8.41031 15.4982 8.03176L10.0729 2.62932C9.76146 2.32023 9.5673 2.12693 9.40753 1.99303C9.25786 1.86617 9.20124 1.84603 9.18708 1.84201V1.841ZM8.24966 0.11838C8.73733 -0.0394599 9.26267 -0.0394599 9.75034 0.11838C10.083 0.226106 10.349 0.411356 10.5856 0.611707C10.8081 0.798971 11.0558 1.04563 11.336 1.32452L16.7865 6.75112L16.8421 6.80649C17.1364 7.09947 17.3852 7.34613 17.5682 7.64314C17.7289 7.9043 17.8473 8.18902 17.9191 8.48683C18 8.82612 18 9.17547 18 9.58927V14.7108C18 15.1055 18 15.4538 17.9767 15.7428C17.9515 16.0509 17.8948 16.37 17.7351 16.6811C17.5025 17.1353 17.1315 17.5046 16.6753 17.7362C16.3628 17.8953 16.0422 17.9517 15.7338 17.9768C15.4426 18 15.0927 18 14.6963 18H11.2146C10.9225 18 10.6424 17.8845 10.4359 17.6789C10.2294 17.4733 10.1134 17.1944 10.1134 16.9036V12.966C10.1134 12.6723 9.99618 12.3906 9.78757 12.1829C9.57896 11.9753 9.29603 11.8586 9.00101 11.8586C8.706 11.8586 8.42306 11.9753 8.21445 12.1829C8.00585 12.3906 7.88865 12.6723 7.88865 12.966V16.9036C7.88865 17.5097 7.39618 18 6.78742 18H3.30371C2.9073 18 2.55742 18 2.26719 17.9768C1.95775 17.9517 1.63719 17.8953 1.32472 17.7362C0.8685 17.5046 0.497548 17.1353 0.264944 16.6811C0.122626 16.3874 0.0404675 16.0684 0.0232584 15.7428C1.88357e-09 15.4538 0 15.1055 0 14.7108V9.6688V9.58927C0 9.17547 1.65754e-07 8.82612 0.080899 8.48683C0.152697 8.18882 0.271011 7.9049 0.431798 7.64314C0.614832 7.34613 0.863595 7.09947 1.15787 6.8075L1.21449 6.75011L6.66506 1.32452C6.94416 1.04563 7.1909 0.798971 7.41337 0.611707C7.65101 0.411356 7.91697 0.226106 8.24966 0.11838Z'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.18708 1.841C9.06547 1.80176 8.93453 1.80176 8.81292 1.841C8.79876 1.84603 8.74214 1.86617 8.59146 1.99303C8.43371 2.12693 8.23753 2.32023 7.92708 2.62932L2.5018 8.03277C2.12056 8.41132 2.03966 8.50093 1.98404 8.59154C1.92295 8.69062 1.8779 8.79866 1.85056 8.9117C1.82629 9.01439 1.82022 9.1352 1.82022 9.67082V14.6776C1.82022 15.1155 1.82022 15.3894 1.83742 15.5958C1.8536 15.7911 1.87989 15.8455 1.88596 15.8575C1.9442 15.9716 2.03733 16.0643 2.15191 16.1223C2.16405 16.1284 2.21865 16.1546 2.41483 16.1707C2.62213 16.1868 2.89719 16.1878 3.33708 16.1878H6.06742V12.966C6.06742 12.1917 6.37638 11.4491 6.92635 10.9015C7.47632 10.354 8.22223 10.0463 9 10.0463C9.77777 10.0463 10.5237 10.354 11.0736 10.9015C11.6236 11.4491 11.9326 12.1917 11.9326 12.966V16.1878H14.6629C15.1028 16.1878 15.3779 16.1878 15.5852 16.1697C15.7813 16.1546 15.836 16.1284 15.8481 16.1223C15.9627 16.0643 16.0558 15.9716 16.114 15.8575C16.1201 15.8455 16.1464 15.7911 16.1616 15.5958C16.1788 15.3894 16.1798 15.1155 16.1798 14.6776V9.66981C16.1798 9.1342 16.1737 9.01338 16.1494 8.91069C16.1221 8.79765 16.0771 8.6896 16.016 8.59053C15.9603 8.49992 15.8784 8.41031 15.4982 8.03176L10.0729 2.62932C9.76146 2.32023 9.5673 2.12693 9.40753 1.99303C9.25786 1.86617 9.20124 1.84603 9.18708 1.84201V1.841ZM8.24966 0.11838C8.73733 -0.0394599 9.26267 -0.0394599 9.75034 0.11838C10.083 0.226106 10.349 0.411356 10.5856 0.611707C10.8081 0.798971 11.0558 1.04563 11.336 1.32452L16.7865 6.75112L16.8421 6.80649C17.1364 7.09947 17.3852 7.34613 17.5682 7.64314C17.7289 7.9043 17.8473 8.18902 17.9191 8.48683C18 8.82612 18 9.17547 18 9.58927V14.7108C18 15.1055 18 15.4538 17.9767 15.7428C17.9515 16.0509 17.8948 16.37 17.7351 16.6811C17.5025 17.1353 17.1315 17.5046 16.6753 17.7362C16.3628 17.8953 16.0422 17.9517 15.7338 17.9768C15.4426 18 15.0927 18 14.6963 18H11.2146C10.9225 18 10.6424 17.8845 10.4359 17.6789C10.2294 17.4733 10.1134 17.1944 10.1134 16.9036V12.966C10.1134 12.6723 9.99618 12.3906 9.78757 12.1829C9.57896 11.9753 9.29603 11.8586 9.00101 11.8586C8.706 11.8586 8.42306 11.9753 8.21445 12.1829C8.00585 12.3906 7.88865 12.6723 7.88865 12.966V16.9036C7.88865 17.5097 7.39618 18 6.78742 18H3.30371C2.9073 18 2.55742 18 2.26719 17.9768C1.95775 17.9517 1.63719 17.8953 1.32472 17.7362C0.8685 17.5046 0.497548 17.1353 0.264944 16.6811C0.122626 16.3874 0.0404675 16.0684 0.0232584 15.7428C1.88357e-09 15.4538 0 15.1055 0 14.7108V9.6688V9.58927C0 9.17547 1.65754e-07 8.82612 0.080899 8.48683C0.152697 8.18882 0.271011 7.9049 0.431798 7.64314C0.614832 7.34613 0.863595 7.09947 1.15787 6.8075L1.21449 6.75011L6.66506 1.32452C6.94416 1.04563 7.1909 0.798971 7.41337 0.611707C7.65101 0.411356 7.91697 0.226106 8.24966 0.11838Z'
                fillOpacity='0.2'
            />
        </svg>
    );
}
