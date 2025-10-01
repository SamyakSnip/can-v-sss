'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaUsers, 
  FaLightbulb, 
  FaTasks 
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockGrowthData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 600 },
  { month: "Mar", value: 500 },
  { month: "Apr", value: 800 },
  { month: "May", value: 700 },
  { month: "Jun", value: 900 },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Can-v-sss
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Collaborate, Create, Innovate – Transform your ideas into reality with our all-in-one workspace platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/login"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Get Started</span>
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 dark:bg-gray-700/50 dark:hover:bg-gray-600/50 text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
              >
                Explore Dashboard
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features for Modern Teams</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover tools designed to boost productivity and foster creativity in your daily workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Collaborative Workspaces</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Join forces in dynamic environments where teams can share ideas, files, and progress in real-time.
              </p>
            </div>

            <div className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Whiteboard</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Visualize concepts and brainstorm with an infinite canvas that supports drawing, notes, and collaboration.
              </p>
            </div>

            <div className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${isVisible ? 'opacity-100 translate-y-0 delay-600' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaTasks className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Smart Task Management</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Organize projects with customizable Kanban boards, deadlines, and automated workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">See Your Growth</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track progress with intuitive visualizations right from your dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="url(#colorGradient)"
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-500 mt-4 text-center">Monthly growth trends</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-200/30">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">12,500+</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-200/30">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Workspaces Created</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">1,200+</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏢</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-200/30">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tasks Completed</p>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">45,000+</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-xl">✅</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Elevate Your Workflow?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of teams already transforming their collaboration experience.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
