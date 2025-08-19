"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
  id: number;
  text: string;
  type: 'command' | 'output' | 'error' | 'success';
  timestamp: Date;
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: "Available commands: skills, projects, contact, quote, matrix, clear",
    skills: "TypeScript • React • Next.js • Node.js • Python • Solana • Web3 • Docker",
    projects: "🚀 Reminiscencefy • ConversaLink • PieCatcher • Watch This Sol • Speedsive",
    contact: "📧 hello@alexcraviotto.com • 🐦 @craviottoalex • 💼 linkedin.com/in/alexcraviotto",
    quote: '"The best way to predict the future is to invent it." - Alan Kay',
    matrix: "Wake up, Neo...",
    clear: "CLEAR_TERMINAL",
    whoami: "Alex Craviotto - Full Stack Developer from Spain 🇪🇸",
    status: "🟢 Available for new opportunities • 💻 Currently coding amazing things",
    location: "📍 Spain • 🌍 Working remotely worldwide",
    coffee: "☕ Coffee level: MAXIMUM • ⚡ Productivity: OPTIMAL",
  };

  const addLine = (text: string, type: TerminalLine['type'] = 'output') => {
    const newLine: TerminalLine = {
      id: Date.now(),
      text,
      type,
      timestamp: new Date()
    };
    setLines(prev => [...prev, newLine]);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    addLine(`$ ${cmd}`, 'command');
    
    if (trimmedCmd === 'clear') {
      setTimeout(() => setLines([]), 500);
      return;
    }

    if (trimmedCmd === 'matrix') {
      setIsTyping(true);
      const matrixChars = '01010101010101010101010101010101010101010101';
      let i = 0;
      const interval = setInterval(() => {
        if (i < matrixChars.length) {
          addLine(matrixChars.slice(0, i + 1), 'success');
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => addLine('The Matrix has you...', 'success'), 1000);
          setIsTyping(false);
        }
      }, 100);
      return;
    }

    if (commands[trimmedCmd as keyof typeof commands]) {
      setTimeout(() => {
        addLine(commands[trimmedCmd as keyof typeof commands], 'success');
      }, 200);
    } else {
      setTimeout(() => {
        addLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
      }, 200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  const autoExecuteCommands = () => {
    const autoCommands = ['whoami', 'status', 'skills'];
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < autoCommands.length) {
        executeCommand(autoCommands[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          addLine('Type "help" for more commands or click to interact! 🚀', 'output');
        }, 1000);
      }
    }, 2000);
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        addLine('Terminal initialized...', 'success');
        autoExecuteCommands();
      }, 500);
    }
  }, [isVisible]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 z-50 w-96 max-w-[90vw]"
    >
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setIsVisible(true)}
            className="bg-black dark:bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm border border-green-400/30 hover:border-green-400/60 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
          >
            $ open_terminal
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-black/95 dark:bg-gray-900/95 text-green-400 rounded-lg shadow-2xl border border-green-400/30 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between p-3 border-b border-green-400/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 font-mono text-xs">alex@craviotto:~$</span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-green-400/60 hover:text-green-400 transition-colors"
              >
                ✕
              </button>
            </div>

            <div
              ref={terminalRef}
              className="p-4 h-64 overflow-y-auto font-mono text-sm scrollbar-thin scrollbar-thumb-green-400/30"
            >
              <AnimatePresence>
                {lines.map((line) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-1 ${
                      line.type === 'command' 
                        ? 'text-blue-400' 
                        : line.type === 'error' 
                        ? 'text-red-400'
                        : line.type === 'success'
                        ? 'text-green-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-green-400"
                >
                  _
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-green-400/30">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-mono text-sm">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none placeholder-green-400/50"
                  placeholder="type 'help' for commands..."
                  autoFocus
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}