import React from 'react'
import gaming from "../aset/game.jpg"
import Card from './Card'
import one from "../aset/game4.jpg"
import two from "../aset/game5.jpg"

const SpecialOffer = () => {
    const cards = [
        { wallpaper: one, title: "gaming room" },
        { wallpaper: two, title: "gaming room" },
        { wallpaper: gaming, title: "gaming room" },
        { wallpaper: one, title: "gaming room" },
        { wallpaper: two, title: "gaming room" },
        { wallpaper: gaming, title: "gaming room" },
        { wallpaper: one, title: "gaming room" },
        { wallpaper: two, title: "gaming room" },
        { wallpaper: gaming, title: "gaming room" },
        { wallpaper: one, title: "gaming room" },


    ]

  return (
    <div className='mx-[2rem] lg:max-w-[70vw] lg:mx-auto'>
        <p className='text-white pt-4'>Games Discount</p>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3'>
            {cards.map((card) => (
                <Card wallpaper={card.wallpaper} title={card.title}/>
            ))}
        </div>

     </div>
  )
}

export default SpecialOffer