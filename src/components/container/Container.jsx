import React from 'react';
import Board from '../board/Board';


const Container = ()  =>{
  return (
    <div className="flex w-screen h-screen items-center flex-col p-4">
      <p className='font-mono text-5xl text-lime-600 font-extrabold py-12'>Jamboard</p>

     <Board/>
    </div>
  );
}

export default Container;
