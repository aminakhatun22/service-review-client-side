import React from 'react'
import useTitle from '../../Hooks/UseTitle'


const ErrorPage = () => {
    useTitle('ErrorPage')
    return (
        <>
            {/* <Header /> */}
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
            </div>
        </>
    )
}

export default ErrorPage
