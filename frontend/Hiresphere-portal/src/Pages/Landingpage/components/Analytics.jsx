import React from "react";
import {motion} from "framer-motion";
import { TrendingUp, Users, Briefcase, Target } from "lucide-react";


const Analytics = () => {
    const stats = [
        {
          icon: Users,
          title: "2.4M+",
          value: "+15%",
          color: "blue"  
        },
        {
            icon: Briefcase,
            title: "Jobs posted",
            value: "1.2M+",
            color: "purple"
        },
        {
            icon: Target,
            title: "Successful placements",
            value: "500K+",
            color: "green"
        },
        {
            icon: TrendingUp,
            title: "Match rate",
            value: "92%",
            color: "orange"
        }

    ];
    return (
        <section className="py-20 bg-white overflow-hidden ">
         <div className="container mx-auto px-4">
            <motion.div
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Platform
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transperent">
                    Analytics
                    </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real-time insights and data-driven results 
                that showcase the power of our platform in connecting talents 
                with opportunities </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: index * 0.1, duration: 0.6}}
                    viewport={{once: true}}
                    className=""
                  >
                    <div className="">
                      <div className={`w-12 h-12 bg-${stat.color}-300 rounded-xl flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`}/>
                      </div>
                      <span className="">
                        {stat.growth}
                      </span>
                    </div>
                    <h3 className="">{stat.value}</h3>
                    <p className="">{stat.title}</p>
                  </motion.div>
                ))}
            </div>
        </div>
    </section>
    );
}

export default Analytics;
