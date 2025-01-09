import React from 'react'

function Header() {

    const headerItems = [
         {id: 1,name: 'Home', path: '/'},
         {id: 2, name: 'All jokes', path: '/jokes'},
         {id: 3,name: 'Submit your joke', path: '/services'},
    ]




  return (
    <div >

        <header>
            <nav>
            <ul className="flex gap-4">
                        {headerItems.map((headerItem) => (
                            <li key={headerItem.id} className="font-bold text-orange-600 hover:text-orange-800">
                                <a href={headerItem.path}>{headerItem.name}</a>
                            </li>
                        ))}
                    </ul>
                
            </nav>
        </header>

    
    </div>
    
  )
}

export default Header