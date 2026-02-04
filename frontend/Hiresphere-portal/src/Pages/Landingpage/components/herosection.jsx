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
        <section className=''>
            <div className=''>
              <div className=''>
                <motion.h1
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{duration: 0.0}}
                className=''
                >
                 Find your Dream Job or <span className=''>
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
                    onClick={}

                   </motion.div>


            
    
    )
}
export default HeroSection;   
