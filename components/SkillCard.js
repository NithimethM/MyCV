import Image from 'next/image';
import Link from 'next/link';

export default function SkillCard({ src, name, description, link }) {
  return (
    <div className="flex items-center gap-4 mb-6 bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 h-full">
      <div className="w-16 h-16 relative">
        <Image src={src} layout="fill" objectFit="contain" alt={`${name} logo`} />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <a className="text-teal-500 hover:underline">Visit my account</a>
        </Link>
      </div>
    </div>
  );
}