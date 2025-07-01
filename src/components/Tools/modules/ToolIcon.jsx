import Image from 'next/image';

const ToolIcon = ({ imgSrc, text }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imgSrc}
        alt={text}
        width={64}  // 16 * 4 (Tailwind w-16 = 4rem = 64px)
        height={64}
        className="mb-2"
        priority={false} // optional: set true if important for SEO/loading
      />
      <p className="text-center text-sm">{text}</p>
    </div>
  );
};

export default ToolIcon;
