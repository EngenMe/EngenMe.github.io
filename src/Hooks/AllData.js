import { useEffect, useState } from 'react';
// for work_images
import work1 from '../assets/images/work_images/1.jpg';
import work2 from '../assets/images/work_images/2.jpg';
import work3 from '../assets/images/work_images/3.jpg';
import work4 from '../assets/images/work_images/4.jpg';
import work5 from '../assets/images/work_images/5.jpg';
import work6 from '../assets/images/work_images/6.jpg';
import work7 from '../assets/images/work_images/7.jpg';
import work8 from '../assets/images/work_images/8.jpg';
import work9 from '../assets/images/work_images/9.jpg';
// works small images
import workSmall1 from '../assets/images/work_images/small/1.jpg';
import workSmall2 from '../assets/images/work_images/small/2.jpg';
import workSmall3 from '../assets/images/work_images/small/3.jpg';
import workSmall4 from '../assets/images/work_images/small/4.jpg';
import workSmall5 from '../assets/images/work_images/small/5.jpg';
import workSmall6 from '../assets/images/work_images/small/6.jpg';
import workSmall7 from '../assets/images/work_images/small/7.jpg';
import workSmall8 from '../assets/images/work_images/small/8.jpg';
import workSmall9 from '../assets/images/work_images/small/9.jpg';
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

import img1 from '../assets/images/slider/brand-1.png';
import img2 from '../assets/images/slider/brand-2.png';
import img3 from '../assets/images/slider/brand-3.png';
import img4 from '../assets/images/slider/brand-4.png';
import img5 from '../assets/images/slider/brand-5.png';
//  icon use as img here
import icon from '../assets/images/icons/icon-1.svg';
import icon1 from '../assets/images/icons/icon-2.svg';
import icon2 from '../assets/images/icons/icon-3.svg';
import icon3 from '../assets/images/icons/icon-4.svg';
import icon4 from '../assets/images/icons/icon-5.svg';
import icon5 from '../assets/images/icons/icon-6.svg';
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
      tag: 'UI/UX',
      title: 'Chul urina',
      img: work1,
      imgSmall: workSmall1,
      bg: '#FFF0F0',
      client: 'Envato',
      langages: 'Photoshop, Figma',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!',
    },
    {
      id: '2',
      tag: 'Web Design',
      title: 'Aura Dione',
      img: work2,
      imgSmall: workSmall2,
      bg: '#FFF3FC',
      client: 'Themeforest',
      langages: 'HTML, CSS, Javascript',
      link: 'https://www.themeforest.net',
      linkText: 'themeforest.net',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '3',
      tag: 'Logo',
      title: 'Chul urina',
      img: work3,
      imgSmall: workSmall3,
      bg: '#FFF0F0',
      client: 'Freepik',
      langages: 'Illustrator',
      link: 'https://www.freepik.com/free-photos-vectors/market-logo',
      linkText: 'www.freepik.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '4',
      tag: 'Video',
      title: 'Chul urina',
      img: work4,
      imgSmall: workSmall4,
      bg: '#E9FAFF',
      client: 'Envato',
      langages: 'After Effect',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '5',
      tag: 'UI/UX',
      title: 'Chul urina',
      img: work5,
      imgSmall: workSmall5,
      bg: '#FFFAE9',
      client: 'Envato',
      langages: 'Photoshop',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '6',
      tag: 'Video',
      title: 'Chul urina',
      img: work6,
      imgSmall: workSmall6,
      bg: '#F4F4FF',
      client: 'Envato',
      langages: 'Vimeo',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '7',
      tag: 'UI/UX',
      title: 'Chul urina',
      img: work7,
      imgSmall: workSmall7,
      bg: '#FFF0F8',
      client: 'Envato',
      langages: 'Photoshop',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '8',
      tag: 'Web Design',
      title: 'Chul urina',
      img: work8,
      imgSmall: workSmall8,
      bg: '#FFF0F8',
      client: 'Envato',
      langages: 'HTML, CSS, Javascript',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '9',
      tag: 'Logo',
      title: 'Chul urina',
      img: work9,
      imgSmall: workSmall9,
      bg: '#FCF4FF',
      client: 'Feepik',
      langages: 'Figma',
      link: 'https://www.freepik.com/free-photos-vectors/market-logo',
      linkText: 'www.freepik.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
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

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: '1',
      icon: icon,
      title: 'Ui/Ux Design',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      color: '#D566FF',
      bg: '#FCF4FF',
    },
    {
      id: '2',
      icon: icon1,
      title: 'App Development',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      color: '#DDA10C',
      bg: '#FEFAF0',
    },
    {
      id: '3',
      icon: icon2,
      title: 'Photography',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      color: '#8774FF',
      bg: '#FCF4FF',
    },
    {
      id: '4',
      icon: icon3,
      title: 'Photography',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      color: '#FF6080',
      bg: '#FFF4F4',
    },
    {
      id: '5',
      icon: icon4,
      title: 'Managment',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      color: '#FF75D8',
      bg: '#FFF0F8',
    },
    {
      id: '6',
      icon: icon5,
      title: 'Web Development',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      color: '#269FFF',
      bg: '#F3FAFF',
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: '2021-2023',
      title: 'Ph.D in Horriblensess ',
      place: 'ABC University, Los Angeles, CA',
      bg: '#FFF4F4',
    },

    {
      id: 2,
      date: '2019 - Present',
      title: 'Sr. Software Tester',
      place: 'Google Inc.',
      bg: '#FFF1FB',
    },

    {
      id: 3,
      date: '2021',
      title: 'Best Developer ',
      place: 'University Of Melbourne, NA',
      bg: '#FFF4F4',
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: '2017-2021',
      title: 'Computer Science',
      place: 'Imperialize Technical Institute',
      bg: '#EEF5FA',
    },

    {
      id: 2,
      date: '2015-2017',
      title: 'Cr. Web Developer',
      place: 'ib-themes ltd.',
      bg: '#F2F4FF',
    },

    {
      id: 3,
      date: '2008',
      title: 'Best Writter',
      place: 'Online Typodev Soluation Ltd.',
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
      name: 'Web Design',
      number: '80',
    },
    {
      id: '02',
      color: '#9272D4',
      name: 'Mobile App ',
      number: '95',
    },
    {
      id: '03',
      color: '#5185D4',
      name: 'Illustrator',
      number: '65',
    },
    {
      id: '03',
      color: '#CA56F2',
      name: 'Photoshope',
      number: '75',
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
