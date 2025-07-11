import { Code, Database, Cloud, Zap } from 'lucide-react';


export const technologies = [
    { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700', icon: '📘' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900', icon: '▲' },
  ];

export const developmentProcess = [
    { phase: 'Planning', description: 'Understand goals and create a roadmap', icon: <Code className="h-6 w-6" />, color: 'bg-blue-500' },
    { phase: 'Development', description: 'Build using agile methodologies', icon: <Zap className="h-6 w-6" />, color: 'bg-purple-500' },
    { phase: 'Testing', description: 'Ensure quality through multiple test phases', icon: <Database className="h-6 w-6" />, color: 'bg-green-500' },
    { phase: 'Deployment', description: 'Launch and monitor in real environments', icon: <Cloud className="h-6 w-6" />, color: 'bg-orange-500' }
  ];