import React from 'react'
import perso2 from '../../public/assets/images/perso2.png'
import perso1 from '../../public/assets/images/perso1.png'
import { ArrowUpRightFromSquareIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'


function Actions() {

   

    


  return (
    <div className='container px-4 mx-auto'> {/* Remplace w-screen qui peut causer des problèmes de dépassement */}
          
          
          
          
          {/* Conteneur des cartes */}
        <div className='grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2'>


              {/* Card 1 */}
              <NavLink to='create'  className='relative p-2 mx-auto text-white rounded-lg card-normal w-fit md:w-96 h-fit'>
                {/* Image */}
                <figure className='flex overflow-hidden bg-yellow-200 rounded-lg shadow-lg'>
                  <img
                    src={perso1}
                    className='relative transition-all rounded-lg  h-[15rem] '
                    alt='image'
                  />
                  <p className='pt-20 -translate-x-2 text-[22px] font-bold -rotate-6 text-carambar-500 bubble'>Crée ta blague</p>
                </figure>
                {/* Overlay */}
                <div className='absolute inset-0 flex flex-row items-center justify-center gap-2 transition-opacity rounded-lg opacity-0 bg-black/50 hover:opacity-100 hover:cursor-pointer'>
                  <p className='p-2 text-sm font-semibold text-white'>Poste ta blague sur le Mur</p>
                  <ArrowUpRightFromSquareIcon/>
                </div>
              </NavLink>





              {/* Card 2 */}
              <NavLink to='jokes' >
              <div className='relative p-2 mx-auto text-white rounded-lg md:mx-0 card-normal w-fit md:w-96 h-fit'>
                {/* Image */}
                <figure className='flex overflow-hidden bg-yellow-200 rounded-lg shadow-lg'>
                  <img
                    src={perso2}
                    className='relative transition-all rounded-lg  h-[15rem] '
                    alt='image'
                  />
                  <p className='pt-20 -translate-x-2 text-[22px] font-bold -rotate-6 text-carambar-500 bubble'>Le mur de blagues</p>
                </figure>


                {/* Overlay */}
                <div className='absolute inset-0 flex flex-row items-center justify-center gap-2 transition-opacity rounded-lg opacity-0 bg-black/50 hover:opacity-100 hover:cursor-pointer'>
                  <p className='p-2 text-sm font-semibold text-white'>Visite notre mur de blagues</p>
                  <ArrowUpRightFromSquareIcon/>
                </div>



                
              </div>
                </NavLink>



        </div>




            
    </div>





  )
}

export default Actions