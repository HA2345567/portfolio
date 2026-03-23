import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaDiscord, FaTelegram } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-8 items-center bg-white dark:bg-black border border-gray-100 dark:border-white/10 px-6 py-3 rounded-full shadow-lg transition-colors">
      <a href="https://github.com/HA2345567" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-120 transition-transform duration-300">
        <FaGithub className="w-5 h-5 text-[#181717] dark:text-white" />
      </a>
      <a href="https://www.linkedin.com/in/harsh-bhardwaj-0755192b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-120 transition-transform duration-300">
        <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
      </a>
      <a href="https://x.com/harshuu369" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-120 transition-transform duration-300">
        <FaXTwitter className="w-5 h-5 text-[#000000] dark:text-white" />
      </a>
      <a href="https://leetcode.com/u/Harsh_369/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:scale-120 transition-transform duration-300">
        <SiLeetcode className="w-5 h-5 text-[#FFA116]" />
      </a>
      <a href="https://www.instagram.com/hrx_dwj1729/" aria-label="Instagram" className="hover:scale-120 transition-transform duration-300">
        <FaInstagram className="w-5 h-5 text-[#E4405F]" />
      </a>
      <a href="https://discord.gg/hrx_dwj" aria-label="Discord" className="hover:scale-120 transition-transform duration-300"><FaDiscord className="w-5 h-5 text-[#7289DA]" /></a>
      <a href="https://t.me/Timnat369
" aria-label="Telegram" className="hover:scale-120 transition-transform duration-300"><FaTelegram className="w-5 h-5 text-[#2AABEE]" /></a>
    </div>
  );
};
