import React from 'react'
import { EmployerFeatures, JobseekerFeatures } from '../../Utils/data'

const Feature = () => {
    return (
        <section className='py-20 bg-white relative overflow-hidden'>
            <div className='container mx-auto px-4 relative z-1'>
             <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-500'>
                    Everything you need to 
                    <span className='block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transperent'>
                      Succeed
                    </span>
                    </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                    Whether you're looking for your nect opportunity or the perfect 
                    candidate, we have the tools and features to makee it happen.   
                </p>
                </div>

                <div className='grid-md:grid-cols-2 gap-16 lg:gap-24'>
                {/*Job seekers section*/}
                <div>
                  <div className='text-center mb-12'>
                    <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                        For Job seeker
                    </h3>
                </div>

                <div className='w-24 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full'>
                  {JobseekerFeatures.map((feature, index) =>(
                    <div
                    key={index}
                    className=''
                    >
                        <div className=''>
                         <feature.icon className=''/>
                         </div>
                         <div>
                            <h4 className=''>
                                {feature.title}
                                </h4>
                                <p className=''>
                                  {feature.description}  
                                </p>
                                </div>
                                </div>
                  ))}
                  </div>
              </div>
           </div>
         </div>
      </section>
    )
}
export default Feature  