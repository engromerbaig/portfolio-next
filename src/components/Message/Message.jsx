'use client';

import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';

const Message = () => {
  return (
    <div className="w-full bg-theme-blue text-center py-20 my-20 px-10">
      <Heading
        title="Send me a Message!"
        titleColor="text-white"
      />
      <Button
        text="Contact"
        to="/contact"
        textColor="text-white"
        hoverTextColor="#3B82F6"
        hoverBgColor="white"
        borderColor="border-white"
      />
    </div>
  );
};

export default Message;
