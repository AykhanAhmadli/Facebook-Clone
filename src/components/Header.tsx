import React from 'react'
import Image from 'next/image'
import facebook from '../assets/facebook1.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="p-4 flex items-center justify-between border-b lg:px-10">
        {/* left  */}
        <div className="flex items-center mr-2">
            <div className="w-10 h-10">
                <Image src={facebook} alt={'facebook logo'} />
            </div>
            <div className="ml-2 ">
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4 hidden sm:block"
          />
        </div>
        </div>
    </div>
  )
}

export default Header