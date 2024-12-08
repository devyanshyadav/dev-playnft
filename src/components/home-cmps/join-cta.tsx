import React from 'react'
import DevButton from '../dev-components/dev-button'
import BlurDiv from '../global-cmp/blur-div'

const JoinCta = () => {
  return (
   <section className='MaxWidth pb-10'>
   <div className='MinWidth !py-0'>
    <BlurDiv place='left' />
   <div className='w-full border border-accentGray rounded-3xl LightGradientBg md:rounded-tl-[200px] md:rounded-br-[200px] p-10 gap-5 grid place-items-center'>
        <h2 className='SecondaryTitle md:w-2/3'>Join us to create, sell and Collect NFT Digital Art </h2>
        <DevButton>Join Community</DevButton>
    </div>
   </div>
   </section>
  )
}

export default JoinCta