import { useEffect, useState } from 'react';
// for work_images
import work1 from '../assets/images/work_images/1.png';
import work2 from '../assets/images/work_images/2.png';
import work3 from '../assets/images/work_images/3.png';
import work4 from '../assets/images/work_images/4.png';
import work5 from '../assets/images/work_images/5.jpg';
import work6 from '../assets/images/work_images/6.jpg';
// works small images
import workSmall1 from '../assets/images/work_images/small/1.png';
import workSmall2 from '../assets/images/work_images/small/2.png';
import workSmall3 from '../assets/images/work_images/small/3.png';
import workSmall4 from '../assets/images/work_images/small/4.png';
import workSmall5 from '../assets/images/work_images/small/5.jpg';
import workSmall6 from '../assets/images/work_images/small/6.jpg';
// blog post images
import blog6 from '../assets/images/blog_images/6.jpg';
import blog4 from '../assets/images/blog_images/4.jpg';
import blog2 from '../assets/images/blog_images/2.jpg';
import blog1 from '../assets/images/blog_images/1.jpg';
import blog3 from '../assets/images/blog_images/3.jpg';
import blog5 from '../assets/images/blog_images/5.jpg';
// blog image small
import blogSmall6 from '../assets/images/blog_images/small/6.jpg';
import blogSmall4 from '../assets/images/blog_images/small/4.jpg';
import blogSmall2 from '../assets/images/blog_images/small/2.jpg';
import blogSmall1 from '../assets/images/blog_images/small/1.jpg';
import blogSmall3 from '../assets/images/blog_images/small/3.jpg';
import blogSmall5 from '../assets/images/blog_images/small/5.jpg';
//  icon use as img here
import icon from '../assets/images/icons/nodeJs.png';
import icon1 from '../assets/images/icons/database.png';
import icon2 from '../assets/images/icons/atom.png';
import icon3 from '../assets/images/icons/code.png';
import icon4 from '../assets/images/icons/icon-5.svg';
import icon5 from '../assets/images/icons/drawing.png';
// contact image
import iconPhone from '../assets/images/contact/phone-call 1.png';
import iconEmail from '../assets/images/contact/email 1.png';
import iconMap from '../assets/images/contact/map 1.png';
import { CgNotes } from 'react-icons/cg';
import { FaBlogger, FaRegUser } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem('theme'));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem('theme');

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem('theme', 'light');
    } else {
      themeValue === 'dark' && setCheck(true);
      themeValue === 'light' && setCheck(false);
    }

    localStorage?.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === 'light') {
      setCheck(false);
      localStorage.setItem('theme', 'light');
      setLocal('light');
    } else {
      setCheck(true);
      localStorage.setItem('theme', 'dark');
      setLocal('dark');
    }
    localStorage?.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === 'All') {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: '1',
      tag: 'Full Stack',
      title: 'AlgoFork',
      img: work1,
      imgSmall: workSmall1,
      bg: '#FFF0F0',
      client: '-',
      langages: 'HTML, Tailwind CSS, RESTful API, Express.js, React.js',
      link: 'https://algo-fork.vercel.app/',
      linkText: 'algo-fork.vercel.app/',
      description:
        'AlgoFork is a full stack, free alternative to LeetCode, providing coding challenges focused on algorithms and problem-solving. It emphasizes understanding real-world scenarios, helping developers solve problems and grasp the reasoning behind them. The platform will offer a fun, interactive learning experience to improve coding skills',
    },
    {
      id: '2',
      tag: 'Frontend',
      title: 'React Game Store',
      img: work2,
      imgSmall: workSmall2,
      bg: '#FFF3FC',
      client: '-',
      langages: 'HTML, CSS, RESTful API, TypeScript, React.js, Git',
      link: 'https://react-game-store-flame.vercel.app/',
      linkText: 'react-game-store-flame.vercel.app',
      description:
        'React-Game-Store is a dynamic website built with React, designed to showcase a variety of games by fetching data from an external API. The project demonstrates modern web development practices, including state management, API integration, and responsive design, making it an ideal platform for exploring and discovering games.',
    },
    {
      id: '3',
      tag: 'Backend',
      title: 'VidRent',
      img: work3,
      imgSmall: workSmall3,
      bg: '#FFF0F0',
      client: '-',
      langages: 'Node, Express.js RESTfull API, MongoDB, Mongoose',
      link: 'https://github.com/EngenMe/VidRent',
      linkText: 'github.com/EngenMe/VidRent',
      description:
        'A RESTful API Backend application built with Node.js and Express for managing video rentals. It provides functionality to handle customers, movies, genres, rentals, and user authentication with full CRUD operations and role-based access control.',
    },
    {
      id: '4',
      tag: 'Frontend',
      title: 'Static Website',
      img: work4,
      imgSmall: workSmall4,
      bg: '#E9FAFF',
      client: '-',
      langages: 'HTML, CSS',
      link: 'https://main--engenme.netlify.app/',
      linkText: 'engenme.netlify.app',
      description: `Static Website This modern, responsive website was developed using HTML, CSS, and JavaScript. It showcases a clean design and impressive performance metrics, including: 
        
        99% Performance Score: Fast loading times and efficient code. 
        99% Accessibility Score: Ensuring an inclusive experience for all users.
        
        Built from scratch, this project highlights my skills in front-end development and web design. Special thanks to Mosh Hamedani for his invaluable courses that provided the knowledge and skills necessary to bring this website to life.`,
    },
    {
      id: '5',
      tag: 'Desktop',
      title: 'License Track System',
      img: work5,
      imgSmall: workSmall5,
      bg: '#FFFAE9',
      client: '-',
      langages: 'C#, SQL',
      link: 'https://github.com/EngenMe/LicenseTrack',
      linkText: 'github.com/EngenMe/LicenseTrack',
      description:
        'Developed a comprehensive system for managing driving licences, tests, and user data using C# with 3 tiers architecture and SQL Server. This project involved: Database Design: Created and implemented an ER diagram and SQL Server database from scratch to manage user and test data efficiently. User Management: Enabled functionalities for adding, updating, and suspending user accounts, with custom permissions and restrictions. Test Management: Facilitated vision, theory, and practical test bookings, with automated checks to enforce prerequisites and restrictions. Interface Development: Designed an intuitive user interface for managing people, tests, and licensing processes, including filtering and searching capabilities.',
    },
    {
      id: '6',
      tag: 'Desktop',
      title: 'POS Restaurant System',
      img: work6,
      imgSmall: workSmall6,
      bg: '#F4F4FF',
      client: 'Superette Elbaraka',
      langages: 'C#, SQL',
      link: 'https://github.com/EngenMe/RestaurantPOSSystem',
      linkText: 'github.com/EngenMe/RestaurantPOSSystem',
      description:
        'Point of Sales System for Restaurants Developed a full-featured POS system using C# and Windows Forms, including a loading and login screen, a sales dashboard, and user management functionalities. Designed the ER diagram and database from scratch, implementing CRUD operations using ADO.NET. Integrated features such as table reservations, sales reports, and customisable settings for restaurant management.',
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: '1',
      img: blog1,
      imgSmall: blogSmall1,
      date: '177 April',
      category: 'Inspiration',
      title: 'How to Own Your Audience by Creating an Email List.',
      bg: '#FCF4FF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '4',
      img: blog4,
      imgSmall: blogSmall4,
      date: '000 April',
      category: 'Inspiration',
      title: 'Everything You Need to Know About Web Accessibility.',
      bg: '#EEFBFF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '2',
      img: blog2,
      imgSmall: blogSmall2,
      date: '21 April',
      category: 'Web Design',
      title: 'The window know to say beside you',
      bg: '#FFF0F0',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '5',
      img: blog5,
      imgSmall: blogSmall5,
      date: '27 April',
      category: 'Inspiration',
      title: 'Top 10 Toolkits for Deep Learning in 2021.',
      bg: '#FCF4FF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '3',
      img: blog3,
      imgSmall: blogSmall3,
      date: '27 April',
      category: 'Inspiration',
      title: 'How to Own Your Audience by Creating an Email List.',
      bg: '#FCF4FF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '6',
      img: blog6,
      imgSmall: blogSmall6,
      date: '27 April',
      category: 'Inspiration',
      title: 'Everything You Need to Know About Web Accessibility.',
      bg: '#EEFBFF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: '01',
      name: 'Home',
      link: '/home/homePage',
      icon: <AiOutlineHome />,
    },
    {
      id: '02',
      name: 'About',
      link: '/home/about',
      icon: <FaRegUser />,
    },
    {
      id: '06',
      name: 'Resume',
      link: '/home/resume',
      icon: <CgNotes />,
    },
    {
      id: '03',
      name: 'Works',
      link: '/home/works',
      icon: <FiCodesandbox />,
    },
    {
      id: '04',
      name: 'Blogs',
      link: '/home/blogs',
      icon: <FaBlogger />,
    },
    {
      id: '05',
      name: 'Contact',
      link: '/home/contact',
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: '01',
      name: 'About',
      link: '/about',
      icon: <FaRegUser />,
    },
    {
      id: '02',
      name: 'Resume',
      link: '/resume',
      icon: <CgNotes />,
    },
    {
      id: '03',
      name: 'Works',
      link: '/works',
      icon: <FiCodesandbox />,
    },
    {
      id: '04',
      name: 'Blogs',
      link: '/blogs',
      icon: <FaBlogger />,
    },
    {
      id: '05',
      name: 'Contact',
      link: '/contact',
      icon: <RiContactsBookLine />,
    },
  ];

  const imgPlaceholder = (
    <svg
      width="40"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <rect width="100%" height="100%" fill="lightgray" />
      <line x1="10" y1="10" x2="30" y2="30" />
      <line x1="30" y1="10" x2="10" y2="30" />
    </svg>
  );

  // Slider image for Clients
  const sliderImg = [
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
    imgPlaceholder,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: '1',
      icon: icon,
      title: 'Backend Development',
      des: 'Building efficient, non-blocking services using Node.js and Express, with fully tested APIs.',
      color: '#6C63FF',
      bg: '#F0F4FF',
    },
    {
      id: '2',
      icon: icon1,
      title: 'Database Management',
      des: 'Expertise in MongoDB and SQL Server, ensuring data integrity and optimized performance.',
      color: '#FFB74D',
      bg: '#FFF5E6',
    },
    {
      id: '3',
      icon: icon2,
      title: 'Frontend Development',
      des: 'Creating responsive web applications with React, Tailwind CSS, and modern JavaScript.',
      color: '#42A5F5',
      bg: '#E3F2FD',
    },
    {
      id: '4',
      icon: icon3,
      title: 'Problem Solving & Algorithms',
      des: 'Delivering clean solutions with a strong focus on data structures and algorithms.',
      color: '#FF5252',
      bg: '#FFEBEE',
    },
    {
      id: '5',
      icon: icon4,
      title: 'Code Quality & Debugging',
      des: 'Applying OOP and SOLID principles to write clean, scalable, and maintainable code.',
      color: '#66BB6A',
      bg: '#E8F5E9',
    },
    {
      id: '6',
      icon: icon5,
      title: 'Design & Graphics',
      des: 'Creating vector designs and visuals using Inkscape for enhanced project presentations.',
      color: '#FFA726',
      bg: '#FFF3E0',
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: '2018-2020',
      title: "Master's in Mechanical Engineering",
      place: 'University of Biskra, Algeria',
      bg: '#FFF4F4',
    },

    {
      id: 2,
      date: 'Oct 2024',
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      place: 'Udemy',
      bg: '#FFF1FB',
    },

    {
      id: 3,
      date: 'Jan 2024 - Apr 2024',
      title: ' Problem Solving With C++, Backend with C#, and SQL',
      place: 'Programming Advices',
      bg: '#FFF4F4',
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: 'Jul 2022 - Sep 2022',
      title: 'ERASMUS+ Engineering Research Project',
      place: 'University of the West of Scotland - Paisley, Scotland, UK',
      bg: '#EEF5FA',
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: '2015-2017',
      title: '  Graphic Designer',
      place: 'Web Graphy, Los Angeles, CA',
      bg: '#FCF4FF',
    },

    {
      id: 2,
      date: '2014 - 2015',
      title: 'Jr. Web Developer',
      place: 'Creative Gigs.',
      bg: '#FCF9F2',
    },

    {
      id: 3,
      date: '2015-2017',
      title: 'Best Freelancer',
      place: 'Fiver & Upwork Level 2 & Top Rated',
      bg: '#FCF4FF',
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: '01',
      color: '#FF6464',
      name: 'Backend Development',
      number: '90',
    },
    {
      id: '02',
      color: '#9272D4',
      name: 'Database Management',
      number: '85',
    },
    {
      id: '03',
      color: '#5185D4',
      name: 'Frontend Development',
      number: '80',
    },
    {
      id: '03',
      color: '#CA56F2',
      name: 'Problem Solving & Algorithms',
      number: '95',
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: '01',
      icon: iconPhone,
      title: 'Phone ',
      item1: '+452 666 386',
      item2: '+452 666 386',
      bg: '#FCF4FF',
    },
    {
      id: '02',
      icon: iconEmail,
      title: 'Email ',
      item1: 'support@gmail.com',
      item2: 'example@gmail.com',
      bg: '#EEFBFF',
    },
    {
      id: '03',
      icon: iconMap,
      title: 'Address ',
      item1: 'Maount View, Oval',
      item2: 'Road, New York, USA',
      bg: '#F2F4FF',
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
