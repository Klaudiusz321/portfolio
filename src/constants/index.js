


export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Reno- wi',
      img: 'assets/reno-wi.svg',
      review:
        'Klaudiusz is a true master of his craft! I had a unique idea for our website and worried no one could bring it to life. Klaudiusz not only met but exceeded my expectations! The entire process was well-organized, and every change I requested was implemented swiftly. The final result is even better than I imagined!',
    },
    {
      id: 2,
      name: 'Martcom',
      review:
        'Fantastic collaboration! Klaudiusz built our online store from scratch, and the results surpassed my expectations. The site is intuitive, fast, and the design really attracts customers. Klaudiusz listened closely to my feedback and made adjustments quickly and effectively. Highly recommend.',
    },
    {
      id: 3,
      name: 'Osintownia',
      img: 'assets/osint.png',
      review:
        '"I couldn’t be happier with Klaudiusz’s work! He developed a professional website for my consulting business, and it looks incredible. Klaudiusz paid attention to every detail and went above and beyond to make sure everything was perfect. My clients have been complimenting the site since it launched. Outstanding experience!',
    },
    {
      id: 4,
      name: 'Ether Smith',
      
      img: 'assets/mw.svg',
      review:
        'Klaudiusz was a pleasure to work with. He took my rough ideas and turned them into a beautiful, functional website. Communication was easy, and Klaudiusz always kept me informed throughout the project. I’m thrilled with the result and already planning to work with him on future projects. Highly recommended',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Reno-wi website',
      desc: 'Bringing Your Home Improvement Dreams to Life.',
      subdesc:
        'Reno-Wi is your go-to destination for all things renovation. From expert home remodeling services to innovative design solutions, our team transforms your space with precision and care. Explore our website for inspiration, project galleries, and easy booking for a personalized renovation experience tailored to your vision.',
      href: 'https://reno-wi.de/',
      screenshot: '/assets/reno-wi.png',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/reno-wi.svg',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Wordpress',
          path: '/assets/Wordpress-Logo.svg',
        },
        {
          id: 2,
          name: 'Elementor',
          path: 'assets/Elementor-Logo-Symbol-Red.svg',
        },
      ],
    },
    {
      title: 'Mw-IT-solutions',
      desc: 'The Mw-IT-solutions project aimed to create a sleek, user-friendly website for an innovative internet services provider specializing in high-speed broadband, fiber optic installations, and customized internet solutions for both residential and business clients. Martcom needed a digital presence that reflects its commitment to advanced technology, reliable service, and customer satisfaction.',
      subdesc:
        'With Cost calculator customers can calculate the cost of their internet connection and services.',
      href: 'https://mw-it-solutions.pl/',
      screenshot: '/assets/mw.png',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/mw.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Wordpress',
          path: '/assets/Wordpress-Logo.svg',
        },
        {
          id: 2,
          name: 'Elementor',
          path: 'assets/Elementor-Logo-Symbol-Red.svg',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/3.svg',
        },
      
      ],
    },
   
    {
      title: 'OSINTOWNIA.pl',
      desc: 'OSINT.pl is a Polish platform dedicated to open-source intelligence (OSINT), focusing on gathering information from publicly accessible sources. The website offers unique services and training in information acquisition techniques, catering to both businesses and individuals.',
      subdesc:
        'Visitors to OSINT.pl can learn about various methods and tools used in OSINT, gaining insights into effectively collecting and analyzing data from sources such as the internet, social media, and public records. The platform emphasizes education and the development of analytical skills, providing training tailored to users needs.',
      href: 'https://osintownia.pl/en/home-eng/',
      screenshot: '/assets/osint.png',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/osint.svg',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Wordpress',
          path: '/assets/Wordpress-Logo.svg',
        },
        {
          id: 2,
          name: 'Elementor',
          path: 'assets/Elementor-Logo-Symbol-Red.svg',
        },
        {
          id: 3,
          name: 'Woocommerce',
          path: 'assets/woocommerce-original.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 2 : isMobile ? 3 : 4,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Wordpress',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "WordPress is my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/Wordpress-Logo.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
    
  ];