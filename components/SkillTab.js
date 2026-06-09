import { useState } from 'react';
import { tabs, skillContent } from '../data/skill';

export default function SkillTab() {
    const [activeTab, setActiveTab] = useState('webProgramming');

    return (
        <>
            <div className="w-full mx-auto py-12 px-6 sm:px-8 bg-white rounded-xl shadow-lg dark:bg-gray-900 dark:text-white">
                <div className="flex flex-wrap justify-center gap-4 border-b border-gray-300 pb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`pb-2 text-lg font-medium transition-all duration-300 ${activeTab === tab.key
                                    ? 'text-teal-500 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-blue-600'
                                }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {skillContent[activeTab].map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-12">
                            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
                                <span className="ml-4">{section.section}</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark:text-black">
                                {section.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-gray-50 p-6 rounded-lg flex items-center shadow-md transition-transform hover:scale-105"
                                    >
                                        <img src={skill.icon} alt={skill.title} className="h-10 w-auto mr-4" />
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {skill.title}
                                            </h3>
                                            <p className="text-gray-600">{skill.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
