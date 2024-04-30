import React from 'react';
import styles from '../../styles/styles';
import CountDown from "../Events/CountDown"


const EventCard = ({active}) => {
    return (
        <div className={'w-full block bg-white rounded-lg ${active ? "unset":"mb-12"}lg:flex p-2'}>
            <div className='w-full lg:-w[50%] m-auto'>
                <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
            </div>
            <div className='w-full lg:[w-50%] flex flex-col  justify-center'>
                <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
                    exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur
                    aliquam deserunt officia. Dolorum saepe nulla provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
                    exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur
                    aliquam deserunt officia. Dolorum saepe nulla provident.
                </p>
                <div className='flex py-2 justify-between'>
                    <div className='flex'>
                        <h5 className='font-[500] text-[18px] text-green-600 pr-3 line-through'>
                            Ksh 115,000
                        </h5>
                        <h5 className='font-bold text-[20px] text-[#333] font-roboto'>
                            Ksh 100,000

                        </h5>
                    </div>
                    <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                        120 sold
                    </span>
                </div>
                <div>
                    <CountDown/>
                </div>
            </div>
        </div>
    )
}

export default EventCard