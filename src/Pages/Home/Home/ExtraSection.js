import React from 'react';
import img1 from '../../../assests/extraSectionImg/img1.png';
import img2 from '../../../assests/extraSectionImg/img2.png';
import img3 from '../../../assests/extraSectionImg/img3.png';
import img4 from '../../../assests/extraSectionImg/img4.jpg';

const ExtraSection = () => {
    return (
        <div>

            <section>
                <div className='grid grid-cols-2 gap-7 mt-32 mb-20 center ml-44 shadow-lg'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center mt-32">Fast Delivery!</h2>


                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center mt-32">Quality Food!</h2>


                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center mt-32">Well Service!</h2>


                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={img4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center mt-32">Various Menu!</h2>


                        </div>
                    </div>
                </div>
            </section>



            <section>

                <div>
                    <img className="mask mask-circle  m-auto  " src="https://i.ibb.co/BCJVnrk/images-1.jpg" />

                </div>
                <div>  <h1 className='text-3xl text-center mb-16 '>Amina Islam
                    <br />         <small className='text-xl'>Food Expert</small>
                    <br />
                    <p className='text-1xl text-center mb-16 '>Owner Of The Aahar</p></h1>

                </div>

            </section>
        </div>
    );
};

export default ExtraSection;