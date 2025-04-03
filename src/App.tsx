import React, { useState } from 'react';
import { UserPlus, LogIn, FileText } from 'lucide-react';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateCV from './components/CreateCV';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup' | 'create-cv'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">CV Builder Pro</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentPage('login')}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'login'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </button>
              <button
                onClick={() => setCurrentPage('signup')}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'signup'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {currentPage === 'login' && <Login onSuccess={() => setCurrentPage('create-cv')} />}
        {currentPage === 'signup' && <Signup onSuccess={() => setCurrentPage('login')} />}
        {currentPage === 'create-cv' && <CreateCV />}
      </main>
    </div>
  );
}

export default App;