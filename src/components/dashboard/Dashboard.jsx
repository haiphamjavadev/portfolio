import React, { useState } from 'react';
import {
    User, Briefcase, Code, GraduationCap, Award, Heart,
    Save, Plus, Trash2, Edit, Eye, Settings, LogOut,
    Menu, X, ChevronRight, Upload, Search, Filter,
    BarChart3, Users, FileText, Calendar, Clock,
    CheckCircle, AlertCircle, TrendingUp, Download
} from 'lucide-react';

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
    const menuItems = [
        { id: 'dashboard', icon: <BarChart3 size={20} />, label: 'Dashboard', color: 'blue' },
        { id: 'profile', icon: <User size={20} />, label: 'Profile Info', color: 'purple' },
        { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience', color: 'green' },
        { id: 'projects', icon: <Code size={20} />, label: 'Projects', color: 'orange' },
        { id: 'skills', icon: <Award size={20} />, label: 'Skills', color: 'pink' },
        { id: 'education', icon: <GraduationCap size={20} />, label: 'Education', color: 'indigo' },
        { id: 'hobbies', icon: <Heart size={20} />, label: 'Hobbies', color: 'red' },
        { id: 'settings', icon: <Settings size={20} />, label: 'Settings', color: 'gray' }
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-black">
                                    PH
                                </div>
                                <div>
                                    <h2 className="text-xl font-black">Portfolio CMS</h2>
                                    <p className="text-xs text-gray-400">Admin Panel</p>
                                </div>
                            </div>
                            <button
                                className="lg:hidden"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {menuItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setIsMobileOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                                    activeTab === item.id
                                        ? `bg-${item.color}-600 shadow-lg`
                                        : 'hover:bg-gray-700'
                                }`}
                            >
                                <div className={activeTab === item.id ? '' : `text-${item.color}-400`}>
                                    {item.icon}
                                </div>
                                <span className="font-semibold">{item.label}</span>
                                {activeTab === item.id && (
                                    <ChevronRight size={16} className="ml-auto" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* User Info */}
                    <div className="p-4 border-t border-gray-700">
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src="https://ui-avatars.com/api/?name=Admin&size=40&background=3b82f6&color=fff"
                                className="w-10 h-10 rounded-full"
                                alt="Admin"
                            />
                            <div className="flex-1">
                                <p className="font-bold text-sm">Pham Quang Hai</p>
                                <p className="text-xs text-gray-400">Administrator</p>
                            </div>
                        </div>
                        <button className="w-full flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition font-semibold text-sm">
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

// Dashboard Component
const Dashboard = () => {
    const stats = [
        { label: 'Total Projects', value: '15', icon: <Code size={24} />, color: 'blue', trend: '+3 this month' },
        { label: 'Work Experience', value: '3+ Years', icon: <Briefcase size={24} />, color: 'green', trend: 'Current: Viettel' },
        { label: 'Skills Mastered', value: '25+', icon: <Award size={24} />, color: 'purple', trend: '5 categories' },
        { label: 'Profile Views', value: '1,234', icon: <Eye size={24} />, color: 'orange', trend: '+15% this week' }
    ];

    const recentActivities = [
        { action: 'Updated VNA-MO project', time: '2 hours ago', icon: <Code size={16} />, color: 'blue' },
        { action: 'Added new skill: Docker', time: '1 day ago', icon: <Award size={16} />, color: 'purple' },
        { action: 'Modified profile info', time: '3 days ago', icon: <User size={16} />, color: 'green' },
        { action: 'Published Mydio project', time: '1 week ago', icon: <CheckCircle size={16} />, color: 'orange' }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-4xl font-black text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's your portfolio overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="group relative">
                        <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>
                        <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-2 border-gray-100">
                            <div className={`inline-flex p-3 bg-${stat.color}-100 rounded-xl mb-4`}>
                                <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-1">{stat.value}</h3>
                            <p className="text-gray-600 font-semibold mb-2">{stat.label}</p>
                            <div className="flex items-center gap-2 text-sm">
                                <TrendingUp size={14} className={`text-${stat.color}-600`} />
                                <span className="text-gray-500">{stat.trend}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Recent Activities</h2>
                    <div className="space-y-4">
                        {recentActivities.map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <div className={`p-2 bg-${activity.color}-100 rounded-lg`}>
                                    <div className={`text-${activity.color}-600`}>{activity.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-900">{activity.action}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                        <Clock size={12} />
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                    <h2 className="text-2xl font-black mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 p-4 rounded-xl transition border border-white/30 text-left">
                            <Plus size={24} className="mb-2" />
                            <p className="font-bold">Add Project</p>
                        </button>
                        <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 p-4 rounded-xl transition border border-white/30 text-left">
                            <Edit size={24} className="mb-2" />
                            <p className="font-bold">Edit Profile</p>
                        </button>
                        <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 p-4 rounded-xl transition border border-white/30 text-left">
                            <Award size={24} className="mb-2" />
                            <p className="font-bold">Add Skill</p>
                        </button>
                        <button className="bg-white/20 backdrop-blur-lg hover:bg-white/30 p-4 rounded-xl transition border border-white/30 text-left">
                            <Download size={24} className="mb-2" />
                            <p className="font-bold">Export Data</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Profile Management Component
const ProfileManagement = () => {
    const [profile, setProfile] = useState({
        fullName: 'Pham Quang Hai',
        title: 'Software Development Engineer',
        email: 'haiphamjavadev@gmail.com',
        phone: '0979015430',
        location: 'Hanoi, Vietnam',
        github: 'https://github.com/haipham',
        linkedin: 'https://linkedin.com/in/haipham',
        bio: 'Passionate backend developer specializing in building scalable microservices...'
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Profile Information</h1>
                    <p className="text-gray-600">Manage your personal and contact information</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition shadow-lg">
                    <Save size={20} />
                    Save Changes
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Avatar Upload */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h3 className="text-xl font-black text-gray-900 mb-4">Profile Picture</h3>
                    <div className="flex flex-col items-center">
                        <div className="relative group mb-4">
                            <img
                                src="https://ui-avatars.com/api/?name=Pham+Quang+Hai&size=150&background=3b82f6&color=fff"
                                className="w-32 h-32 rounded-full border-4 border-blue-500"
                                alt="Profile"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer">
                                <Upload className="text-white" size={24} />
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 transition">
                            <Upload size={16} />
                            Upload New Photo
                        </button>
                        <p className="text-xs text-gray-500 mt-2">JPG, PNG max 2MB</p>
                    </div>
                </div>

                {/* Basic Info Form */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                    <h3 className="text-xl font-black text-gray-900 mb-6">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={profile.fullName}
                                onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Job Title</label>
                            <input
                                type="text"
                                value={profile.title}
                                onChange={(e) => setProfile({...profile, title: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({...profile, email: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                value={profile.phone}
                                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                            <input
                                type="text"
                                value={profile.location}
                                onChange={(e) => setProfile({...profile, location: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">GitHub URL</label>
                            <input
                                type="url"
                                value={profile.github}
                                onChange={(e) => setProfile({...profile, github: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">LinkedIn URL</label>
                            <input
                                type="url"
                                value={profile.linkedin}
                                onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Bio</label>
                            <textarea
                                value={profile.bio}
                                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition resize-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Projects Management Component
const ProjectsManagement = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'VNA-MO', company: 'Viettel Software', status: 'Active', tech: 'Java, Spring Boot, K8S' },
        { id: 2, name: 'Mydio', company: 'Viettel Software', status: 'Completed', tech: 'Java, Kafka, Redis' },
        { id: 3, name: 'Cardoctor', company: 'AC', status: 'Completed', tech: 'Java, PostgreSQL' }
    ]);

    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Projects</h1>
                    <p className="text-gray-600">Manage your portfolio projects</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold transition shadow-lg"
                >
                    <Plus size={20} />
                    Add New Project
                </button>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition">
                        <Filter size={20} />
                        Filter
                    </button>
                </div>
            </div>

            {/* Projects List */}
            <div className="grid gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-xl transition">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-black text-gray-900">{project.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                        project.status === 'Active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-700'
                                    }`}>
                    {project.status}
                  </span>
                                </div>
                                <p className="text-gray-600 font-semibold mb-2">{project.company}</p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Tech Stack:</span> {project.tech}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition">
                                    <Eye size={20} />
                                </button>
                                <button className="p-3 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition">
                                    <Edit size={20} />
                                </button>
                                <button className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Skills Management Component
const SkillsManagement = () => {
    const [skills, setSkills] = useState({
        backend: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices'],
        database: ['MariaDB', 'PostgreSQL', 'Oracle', 'Redis'],
        devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI'],
        frontend: ['React.js', 'Angular', 'TypeScript']
    });

    const [newSkill, setNewSkill] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('backend');

    const categories = [
        { id: 'backend', label: 'Backend', color: 'blue' },
        { id: 'database', label: 'Database', color: 'green' },
        { id: 'devops', label: 'DevOps', color: 'purple' },
        { id: 'frontend', label: 'Frontend', color: 'orange' }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-4xl font-black text-gray-900 mb-2">Skills Management</h1>
                <p className="text-gray-600">Organize and manage your technical skills</p>
            </div>

            {/* Add Skill Form */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-black mb-4">Add New Skill</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-white font-semibold"
                    >
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id} className="text-gray-900">{cat.label}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Enter skill name..."
                        className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 text-white"
                    />
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition">
                        <Plus size={20} className="inline mr-2" />
                        Add Skill
                    </button>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {categories.map(category => (
                    <div key={category.id} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <div className={`w-3 h-3 bg-${category.color}-500 rounded-full`}></div>
                            {category.label}
                        </h3>
                        <div className="space-y-2">
                            {skills[category.id]?.map((skill, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                                    <span className="font-semibold text-gray-900">{skill}</span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main CMS App
const DashboardCms = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <Dashboard />;
            case 'profile': return <ProfileManagement />;
            case 'projects': return <ProjectsManagement />;
            case 'skills': return <SkillsManagement />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top Header */}
                <header className="bg-white border-b-2 border-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                            onClick={() => setIsMobileOpen(true)}
                        >
                            <Menu size={24} />
                        </button>

                        <div className="flex items-center gap-4 ml-auto">
                            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                                <AlertCircle size={24} className="text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2">
                                <Eye size={18} />
                                Preview Site
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {renderContent()}
                </main>

                {/* Footer */}
                <footer className="bg-white border-t-2 border-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <p>© 2024 Portfolio CMS. All rights reserved.</p>
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default DashboardCms;