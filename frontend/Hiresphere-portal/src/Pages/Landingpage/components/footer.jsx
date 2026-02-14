import { Briefcase } from "lucide-react";

const Footer = () => {
    return (
        <footer>
        <div className="relative bg-gray-50 text-gray-900 overflow-hidden">
            <div className="relative z-10 px-6 py-16">
                {/* Main footer content*/}
                <div className="text-center space-y-8">
                    {/*logo/Brand*/}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2 mb-6 ">
                        <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-10 h-10 text-white"/>
                            </div>
                        <h3 className="text-2xl font-bold text-gray-800">Hiresphere</h3>
                        </div>
                        
                        <p className={`text-sm text-gray-600 max-w-md mx-auto`}>
                            Connecting talented professionals with innovative 
                            companies worldwide. Your career success is our mission. join us 
                            </p> 
                    </div>
                    {/*Copyright*/}
                    <div className="space-y-2">
                        <p className={`text-sm text-gray-600 `}>
                            &copy; {new Date().getFullYear()}Gibson technologies
                        </p>
                        <p className={`text-xs text-gray-500`}>
                            Crafted with care by Gibson Technologies
                        </p>
                    </div>
                </div>      
            </div>
        </div>
        </footer>
    )
}

export default Footer;