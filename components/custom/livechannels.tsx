import { cn } from '@/lib/utils'
import { livechannels } from '@/types'
import React from 'react'
import LiveChannelItem from './livechannelitem'
import live1 from '@/public/assets/live/live1.jpeg'
import live2 from '@/public/assets/live/live2.jpeg'
import live3 from '@/public/assets/live/live3.jpeg'
import live4 from '@/public/assets/live/live4.jpeg'
import live5 from '@/public/assets/live/live5.jpeg'
import live6 from '@/public/assets/live/live6.jpeg'
import live7 from '@/public/assets/live/live7.jpeg'
import live8 from '@/public/assets/live/live8.jpeg'
import live9 from '@/public/assets/live/live9.jpeg'
import live10 from '@/public/assets/live/live10.jpeg'
import live11 from '@/public/assets/live/live11.jpeg'
import live12 from '@/public/assets/live/live12.jpeg'



export default function LiveChannels({className}:livechannels) {
  return (
    <div  className={cn('',className)}>
      <LiveChannelItem
      game='valorant'
      imageurl={live1}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/0a502de2-7b1d-4282-823f-e96d16e65d03-profile_image-50x50.png"

      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
      <LiveChannelItem
      game='valorant'
      imageurl={live2}
      profileimg= "https://static-cdn.jtvnw.net/jtv_user_pictures/2206970a-a90d-43cc-a7c3-946a7e05d1a6-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
    
      <LiveChannelItem
      game='valorant'
      imageurl={live3}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/39da49ae-e57f-4fc2-b781-6371440847eb-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
     
  <LiveChannelItem
      game='valorant'
      imageurl={live4}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/9ec770a1-2a7c-4fa7-89e8-de502c526cef-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
    
        <LiveChannelItem
      game='valorant'
      imageurl={live5}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/be1714cd-36b3-4545-8006-15ed459151a0-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
 
        <LiveChannelItem
      game='valorant'
      imageurl={live6}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/b535be44-1af4-49b4-a3ae-20ebbb4990d9-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />

        <LiveChannelItem
      game='valorant'
      imageurl={live7}
      profileimg= "https://static-cdn.jtvnw.net/jtv_user_pictures/3fa14430-5ed1-4324-8076-d8f17c195d7f-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
 
        <LiveChannelItem
      game='valorant'
      imageurl={live8}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/026d0fa7-499b-4195-bfe3-919af1bc9b86-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
  
      <LiveChannelItem
      game='valorant'
      imageurl={live9}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/850d3d67-9451-4f46-b126-e846865d4ed0-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />


      <LiveChannelItem
      game='valorant'
      imageurl={live10}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/c58627ab-8cd3-48f5-9de9-dc646745e4cc-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
      <LiveChannelItem
      game='valorant'
      imageurl={live11}
      profileimg= "https://static-cdn.jtvnw.net/jtv_user_pictures/e28abf74-6b35-4952-ad1a-d014efee48bc-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
      
      <LiveChannelItem
      game='valorant'
      imageurl={live12}
      profileimg="https://static-cdn.jtvnw.net/jtv_user_pictures/730415ce-12c3-455f-8218-dfff65238c5b-profile_image-50x50.png"
      title='CHARITY STREAM!any support is an ap...'
      user='NATT'
      className='p-2'
      />
  
    </div>
  )
}
