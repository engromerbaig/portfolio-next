import { theme } from '../../theme';

const Heading = ({ title, text, titleColor = theme.hero.titleColor, textColor = theme.hero.textColor }) => {
  return (
    <div>
      <h1 className={`text-4xl md:text-6xl font-semibold mb-4 ${titleColor}`} style={{ lineHeight: '1.25' }}>
        {title}
      </h1>
      <p className={`text-lg md:text-xl mb-8 ${textColor}`}>
        {text}
      </p>
    </div>
  );
};

export default Heading;
