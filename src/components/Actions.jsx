import React from 'react'
import perso2 from '../assets/perso2.png'
import perso1 from '../assets/perso1.png'
import { ArrowUpRightFromSquareIcon } from 'lucide-react'

function Actions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
  {/* Card 1 */}
  <div className='relative text-white rounded-lg card-normal w-96 h-fit'>
    {/* Image */}
    <figure className='overflow-hidden bg-yellow-200 rounded-lg shadow-lg'>
      <img
        src={perso1}
        className='relative transition-all rounded-lg  h-[30rem] '
        alt='image'
      />
    </figure>
    {/* Overlay */}
    <div className='absolute inset-0 flex flex-row items-center justify-center gap-2 transition-opacity rounded-lg opacity-0 bg-black/50 hover:opacity-100 hover:cursor-pointer'>
      <p className='text-lg font-semibold text-white'>Submit your joke  </p>
      <ArrowUpRightFromSquareIcon/>
    </div>
  </div>

  {/* Card 2 */}
  <div className='relative text-white rounded-lg card-normal w-96 h-fit'>
    {/* Image */}
    <figure className='overflow-hidden bg-yellow-200 rounded-lg shadow-lg'>
      <img
        src={perso2}
        className='relative transition-all rounded-lg h-[30rem]'
        alt='image'
      />
    </figure>
    {/* Overlay */}
    <div className='absolute inset-0 flex flex-row items-center justify-center gap-2 transition-opacity rounded-lg opacity-0 bg-black/50 hover:opacity-100 hover:cursor-pointer'>
      <p className='text-lg font-semibold text-white'>See all jokes</p>
      <ArrowUpRightFromSquareIcon/>
    </div>
  </div>
</div>

  )
}

export default Actions