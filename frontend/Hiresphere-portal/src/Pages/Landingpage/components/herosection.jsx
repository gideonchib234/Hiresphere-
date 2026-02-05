import {motion} from 'framer-motion'
import {Search, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import {useNavigate} from 'react-router-dom'; 

const HeroSection = () => {
    const isAuthenticated = true 
    const user = {fullName: "Alex", role: "employer"}

    const navigate = useNavigate()
    
    const stats = [
        { icon: Users, label: 'Active Users', value: '2.4M+' },
        { icon: Building2, label: 'Companies', value: '58k+'},
        { icon: TrendingUp, label: 'Jobs Posted', value: '150k+'},
    ];
    
    
    return (
        <section className='pt-24 pb-16 bg-white min-h-screen flex items-center'>
            <div className='container mx-auto px-4'>
              <div className='max-w-4xl mx-auto text-center'>
                <motion.h1
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{duration: 0.0}}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-0.52'
                >
                 Find your Dream Job or <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2.5'>
                    Perfect Hire
                 </span>
                 </motion.h1>

                 <motion.p
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0 }}
                  transition={{delay:0.2, duration:0.8}}
                  className='text-xl md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed'
                  >
                    Connect talented professionals with innovative companies, 
                    Your next career move or perfect candidate is just a click away 

                  </motion.p>

                  <motion.div
                   initial={{opacity: 0, y: 30}}
                   animate={{opacity: 1, y: 0}}
                   transition={{delay: 0.4, duration: 0.8 }}
                   className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
                   >
                    <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className='group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:to-purple-700 
                    transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-0.5 '
                    onClick={() => navigate('/savedjobs')}
                    >
                    <Search className='w-5 h-5'/>
                      <span>Explore Jobs</span>
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform '/>
                   </motion.button>
                    <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className='bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg
                     hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-lg'
                    onClick={() =>  {
                        navigate
                        isAuthenticated && user?.role === "employer"
                         ?"/employer-dashboard"
                         : "/login"
                    
                    
                    }  
                 }   >
                    Hire Talent
                 </motion.button>
                 </motion.div>

                 <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.6, duration: 0.8 }}
                    className=''
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6 + index * 0.2, duration: 0.8 }}
                            className=''
                            >
                                <div className=''>
                                    <stat.icon className=''/>
                                </div>
                                <div className=''>{stat.value}</div>
                                <div className=''>{stat.label}</div>
                            </motion.div>
                        ))}
                 </motion.div>
                </div>      
            </div>

            <div className=''>
             <div clas sName=''/>
            <div className=''/>
            </div>

        </section>
                    



            
    
    )
}
export default HeroSection;   
