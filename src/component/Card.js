import React from 'react'


const Card = ({wallpaper, title}) => {
  return (
    <div className=''>
        <img src={wallpaper} alt="" />
        <div className="bg-blue-400 h-[8rem]">
            <p className='text-[18px] text-white pl-4 pt-3'>Ramadhan Deal</p>
            <p className='text-[12px] text-white pl-4 pt-2'>Berakhir 2 hari lagi</p>

            <div className="max-w-[4rem] pt-2">
                <p className='bg-[#5c7e10] ml-4 text=[30px] text-white pl-1 mt-2'>-50%</p>
            </div>
        </div>
    </div>
  )
}

export default Card