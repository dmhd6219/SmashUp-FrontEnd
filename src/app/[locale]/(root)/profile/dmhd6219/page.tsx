import React from 'react';
import Image from 'next/image';
import profile from '/public/dev/profile.png';
import SettingsIcon from '@/components/icons/SettingsIcon';
import ShareIcon from '@/components/icons/ShareIcon';
import { profile_popular_playlists, profile_popular_tracks } from '@/utils/data';
import TrackItem from '@/components/TrackItem';
import Pin from '@/components/smashup/Pin/Pin';
import SmashUpButton from '@/components/smashup/Button/Button';
import Card from '@/components/Card';

export default function Profile() {
    return (
        <div className='flex flex-col gap-4'>
            {/* Профиль */}
            <div className='flex flex-row bg-surfaceVariant w-full p-4 px-6 py-6 gap-12 rounded-tl-[120px] rounded-bl-[120px] rounded-r-4xl'>
                <Image src={profile} alt='dmhd6219' className='w-[200px] h-[200px] rounded-full' />

                <div className='flex flex-col justify-center gap-4'>
                    <div>
                        <span className='font-medium text-lg text-onSurfaceVariant'>Профиль</span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-6'>
                                <h2 className='font-bold text-3xl'>LeonidM</h2>
                                <div className='flex flex-row gap-4 items-center'>
                                    <Pin>15 подписок</Pin>
                                    <Pin>5 подписчиков</Pin>
                                    <Pin>2 Плейлиста</Pin>
                                </div>
                            </div>

                            <div className='flex flex-row gap-4 items-center'>
                                <SmashUpButton className='w-[224px] h-[48px]'>
                                    Загрузить мэшап
                                </SmashUpButton>
                                <SettingsIcon width={28} height={28} color='onSurfaceVariant' />
                                <ShareIcon width={26} height={22} color='onSurfaceVariant' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Семые популярные мэшапы */}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-semibold text-2xl'>Популярные треки</h2>
                    <span className='font-bold text-base text-onSurfaceVariant text-opacity-50 uppercase'>
                        Показать все
                    </span>
                </div>
                <div className='flex flex-col'>
                    {profile_popular_tracks.map((item) => (
                        <TrackItem key={item.id} {...item} />
                    ))}
                </div>
            </div>

            {/* Плейлисты */}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-semibold text-2xl'>Плейлисты</h2>
                </div>
                <div className='overflow-visible flex flex-row gap-7'>
                    {profile_popular_playlists.map((item) => (
                        <Card key={item.id} showVisibleButton={item.visible} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}