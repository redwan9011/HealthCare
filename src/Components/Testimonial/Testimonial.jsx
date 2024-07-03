
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import autho1 from "../../../src/assets/Ellipse 10.png"
import autho2 from "../../../src/assets/Ellipse 10 (1).png"
import autho3 from "../../../src/assets/Ellipse 10 (2).png"
import autho4 from "../../../src/assets/Ellipse 3.png"

const Testimonial = () => {
    return (
        <div className="lg:max-w-6xl 2xl:max-w-7xl mx-5 md:mx-8 lg:mx-8 xl:mx-auto my-12 " id='blog'>

            <div>
            <p className="border px-4 py-2 rounded-xl w-fit border-black">Testimonial</p>
            <h2 className="text-3xl text-[#1b1950] font-bold leading-9 mb-8 mt-3">What they say about us</h2>
            </div>
            <div className='block md:hidden'>
   <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
        <div className='bg-yellow-50 p-3 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Expertise and Compassion Combined</h1>
                <p className='text-sm'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho1} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Sarah D,</span>  IT Professional</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
            <div className='bg-yellow-50 p-3 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Life-Saving Care, Life-Changing Experience</h1>
                <p className='text-sm'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho2} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Michael R, </span>  Business Executive</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-yellow-50 p-3 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>A Partner in Health and
                Wellness</h1>
                <p className='text-sm'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho3} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>David S, </span>Lawyer</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>



            <SwiperSlide>
        <div className='bg-yellow-50 p-3 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Expertise and Compassion Combined</h1>
                <p className='text-sm'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho4} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Sarah D,</span>  IT Professional</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='bg-yellow-50 p-3 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Life-Saving Care, Life-Changing Experience</h1>
                <p className='text-sm'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho1} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Michael R, </span>  Business Executive</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>


      <SwiperSlide>
                <div className='bg-yellow-50 p-3 md:p-3 lg:p-6'>
                <h1 className='text-2xl font-semibold text-[#1b1950]'>A Partner in Health and
                Wellness</h1>
                <p className='text-sm'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho2} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>David S, </span>Lawyer</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
    
      </Swiper>
   </div>
        
   <div className='hidden md:block'>
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
        <div className='bg-yellow-50 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Expertise and Compassion Combined</h1>
                <p className='text-sm'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho1} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Sarah D,</span>  IT Professional</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
            <div className='bg-yellow-50 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Life-Saving Care, Life-Changing Experience</h1>
                <p className='text-sm'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho3} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Michael R, </span>  Business Executive</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-yellow-50 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>A Partner in Health and
                Wellness</h1>
                <p className='text-sm'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho3} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>David S, </span>Lawyer</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>



            <SwiperSlide>
        <div className='bg-yellow-50 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Expertise and Compassion Combined</h1>
                <p className='text-sm'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho4} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Sarah D,</span>  IT Professional</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className='bg-yellow-50 md:p-3 lg:p-6'>
                <h1 className='md:text-base lg:text-2xl mb-1 font-semibold text-[#1b1950]'>Life-Saving Care, Life-Changing Experience</h1>
                <p className='text-sm'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho2} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>Michael R, </span>  Business Executive</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>


      <SwiperSlide>
                <div className='bg-yellow-50 md:p-3 lg:p-6'>
                <h1 className='text-2xl font-semibold text-[#1b1950]'>A Partner in Health and
                Wellness</h1>
                <p className='text-sm'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                <div className='flex items-center gap-2 mt-2'>
                  <div > 
                  <img src={autho2} alt="author" />
                  </div >
                    <div >
                        <h5><span className='font-semibold'>David S, </span>Lawyer</h5>
                        <div className='flex text-yellow-400'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                       
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
    
      </Swiper>
   </div>


        </div>
    );
};

export default Testimonial;