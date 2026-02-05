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
                 Find your Dream Job or <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                    Perfect Hire
                 </span>
                 </motion.h1>

                 <motion.p
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0 }}
                  transition={{delay:0.2, duration:0.8}}
                  className=''
                  >
                    Connect talented professionals with innovative companies, 
                    Your next career move or perfect candidate is just a click away 

                  </motion.p>

                  <motion.div
                   initial={{opacity: 0, y: 30}}
                   animate={{opacity: 1, y: 0}}
                   transition={{delay: 0.4, duration: 0.8 }}
                   className=''
                   >
                    <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className=''
                    onClick={() => navigate('/jobs')}
                    >
                      Explore Jobs <ArrowRight className='ml-2 w-4 h-4'/>
                   </motion.button>
                    <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className=''
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
