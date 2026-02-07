import {Search, 
        Users, 
        FileText,
     MessageSquare, BarChart3, Shield, Clock,
     Award, 
    Briefcase,
Building2, LayoutDashboard, Plus,} from 'lucide-react';

export const JobseekerFeatures = [
    {
        icon : Search,
        title: "Personalized Job Recommendations",
        description: "Receive tailored job suggestions based on your profile, skills, and preferences, ensuring you find the best opportunities that match your career goals."
    },
    {
        icon: FileText,
        title: "Resume Builder and Optimization",
        description: "Create and optimize your resume with our easy-to-use tools, ensuring it stands out to potential employers."
    },
    {
        icon: MessageSquare,
        title: "Direct communication",
        description: "Engage in direct conversations with employers, ask questions, and get real-time updates on your applications."
    },
    {
        icon: Award,
        title: "Skill Assessments and Certifications",
        description: "Showcase your skills and earn certifications to enhance your profile and increase your chances of landing your dream job."
    },
    
]
export const EmployerFeatures = [
    {
        icon: Users,
        title: "Access to a Vast Talent Pool",
        description: "Discover and connect with a diverse range of qualified candidates from various industries and backgrounds, ensuring you find the perfect fit for your team."
    },
    {
        icon: BarChart3,
        title: "Analytics and Insights",
        description: "Gain valuable insights into your hiring process, candidate performance, and overall recruitment success with our comprehensive analytics dashboard."
    },
    {
        icon: Shield,
        title: "Secure and Reliable Platform",
        description: "Rest assured that your data is protected with our robust security measures and reliable platform infrastructure."
    },
    {
        icon: Clock,
        title: "Time-Saving Features",
        description: "Streamline your hiring process with automated features that save you time and effort in managing job postings and candidate interactions."
    },
];

// Navigation data for the header component
export const NAVIGATION_MENU = [
    {Id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard,},
    {Id: "post-job", name: "Post a Job", icon: Plus,},
    {Id: "manage-jobs", name: "Manage Jobs", icon: Briefcase,},
    {Id: "company-profile", name: "Company Profile", icon: Building2,},

];

//Categories and Job types
export const JOB_CATEGORIES = [
    {value: "Engineering", label: "Engineering"},
    {value: "Design", label: "Design"},
    {value: "Sales", label: "Marketing"},
    {value: "IT & Software", label: "IT & Software"},
    {value: "Customer service", label: "Customer service"},
    {value: "Product", label:"Product"},
    {value: "Operations", label: "Operations"},
    {value: "Finance", label:"Finance"},
    {value: "HR", label: "Human Resources"},
    {value: "Other", label: "Other"},

];

export const JOB_TYPES = [
    {value: "Remote", label: "Remote"},
    {value: "Full time", label: "Full-Time"},
    {value: "Part-time", label: "Contract"},
    {value: "Internship", label: "Internship"},
];

export const SALARY_RANGES = [
    "Less than $1000",
    "$1000 - $15000",
    "More than $15000",
];
