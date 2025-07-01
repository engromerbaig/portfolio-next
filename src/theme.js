const sharedColors = {
  bgColor: 'bg-white-800',
  textColor: 'text-black',
};

export const theme = {
  sectionBg:{
    bgColor:'bg-theme-light dark:bg-theme-dark',
    textColor:'text-body-text-light dark:text-body-text-dark',
  },

  sectionPaddings:{
  horizontalPx:"px-10 lg:px-20 ",
  },

  navbar: {
    bgColor: 'sharedColors.bgColor',
    textColor: sharedColors.textColor,
  },


  hero: {
    // bgColor: sharedColors.bgColor,
    titleColor: 'text-black dark:text-white',
    textColor:'text-body-text-light dark:text-body-text-dark',
  },
  content: {
    bgColor: sharedColors.bgColor,
  },
};
