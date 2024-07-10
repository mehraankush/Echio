"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react';

const styleMap = {
  'Echio Privacy Policy': 'text-[2.3rem] font-semibold text-white mb-4 text-center',
  'Last updated: January 15, 2024': 'text-[18px] italic mb-3',
  '1. Interpretation and Definitions': 'text-[1.7rem] font-semibold my-4',
  '1.1 Interpretation': 'text-2xl font-semibold my-4',
  '1.2 Definitions': 'text-2xl font-semibold my-4',
  '2. Collecting and Using Your Personal Data': 'text-[1.7rem] font-semibold my-4',
  '2.1 Types of Data Collected': 'text-2xl font-semibold my-3',
  '2.1.1 Personal Data': 'text-xl font-semibold my-4',
  '2.1.2 Information from Third-Party Social Media Services': 'text-xl font-semibold my-4',
  '2.1.3 Information Collected while Using the Application': 'text-xl font-semibold my-4',
  '2.2 Use of Your Personal Data': 'text-2xl font-semibold my-4',
  '2.3 Retention of Your Personal Data': 'text-2xl font-semibold my-4',
  '2.4 Transfer of Your Personal Data': 'text-2xl font-semibold my-4',
  '2.5 Delete Your Personal Data': 'text-2xl font-semibold my-4',
  '2.6 Disclosure of Your Personal Data': 'text-2xl font-semibold my-4',
  '3. Children\'s Privacy': 'text-[1.7rem] font-semibold my-4',
  '4. Links to Other Websites': 'text-[1.7rem] font-semibold my-4',
  '5. Changes to this Privacy Policy': 'text-[1.7rem] font-semibold my-4',
  'Contact Us': 'text-[1.7rem] font-semibold mt-4',
  '© 2023 Copyright echio.in':'bg-gray-300 text-center text-gray-900 py-2 mx-[-20rem] text-[1.3rem] mt-8'

};

const defaultStyle = 'text-[18px] text-white';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/policy.txt');
      setContent(await response.text());
    };

    fetchContent();
  }, []);

  const replaceLinks = (line) => {
    const links = {
      'Google API Services User Data Policy': 'https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes',
      'https://echio.in/home.html': 'https://echio.in/home.html#Contact',
      'support@echio.in': 'mailto:support@echio.in',
    };

    let elements = [];
    let remainingText = line;

    Object.keys(links).forEach((text) => {
      const url = links[text];
      const parts = remainingText.split(text);
      if (parts.length > 1) {
        elements.push(parts.shift());
        elements.push(<a href={url} className="text-blue-500 underline" key={url}>{text}</a>);
        remainingText = parts.join(text);
      }
    });

    if (remainingText) {
      elements.push(remainingText);
    }

    return elements;
  };

  const parseContent = (text) => {
    if (!text) return null;

    return text.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      let styleClass = styleMap[trimmedLine] || defaultStyle;

      if (trimmedLine.includes('H. No. 1/2013-II; First Floor; Delhi Steel Rolling Mills; Shahdara; Delhi; North East; Delhi; 110032; India.')) {
        styleClass += ' italic';
      }

      return (
        <p key={index} className={styleClass}>
          {replaceLinks(trimmedLine)}
        </p>
      );
    });
  };

  return (
    <div className="px-[20rem] pt-8 bg-black text-white">
      <div className="max-w-full">
        {parseContent(content)}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
