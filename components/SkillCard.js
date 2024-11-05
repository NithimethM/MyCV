import Image from 'next/image';
import Link from 'next/link';

export default function SkillCard({ src, name, description, link }) {
  
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 relative">
        <Image src={src} layout="fill" objectFit="contain" alt={`${name} logo`} />
      </div>
      <div>
        <h4 className="text-xl font-semibold dark:text-white">{name}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{description}</p> {/* New description field */}
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <a className="text-teal-500 hover:underline">Visit my account</a>
        </Link>
      </div>
    </div>
  );
}
