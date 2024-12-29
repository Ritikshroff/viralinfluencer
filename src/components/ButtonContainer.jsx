import React from 'react';

function ButtonContainer({name = "Start Your Journey →"}) {
    return (
        <div className='justify-center flex flex-col md:flex-row items-center rounded-md'>
            <button className="mt-4 md:mt-0 px-4 py-2 text-white bg-[#2269a1] rounded-md">{name}</button>
        </div>
    );
}

export default ButtonContainer;
