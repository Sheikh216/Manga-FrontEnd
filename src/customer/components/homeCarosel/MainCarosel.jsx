

import React from 'react'

const MainCarosel = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBrvCd-SMwTw82ad5Gz48WZFlebPiR0gZe1ozrjnnfU7--PZcjVZtegVodI--JANasfo&usqp=CAU)' }}>
      <div className="flex justify-center items-center h-full">
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Button 2
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Button 3
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainCarosel