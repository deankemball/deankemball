import { motion } from 'framer-motion';
import Image from 'next/image'
import Avatar from "/public/about/dean-kemball-avatar.png";
import Link from 'next/link';

function ServicesHero() {

  return (
    <div className=" text-xl md:text-2xl lg:text-3xl flex flex-col mx-auto select-none w-full max-w-md md:max-w-2xl leading-6 md:leading-7 lg:items-center gap-8 md:gap-8 z-50">
        <p>I offer end-to-end solutions for creating <Link className='underline decoration-red transition-colors hover:text-red' href={'/portfolio'}>modern, CMS-managed websites</Link> that blend sleek design with powerful functionality.</p>
        <p><Link className='underline decoration-red transition-colors hover:text-red' href={'/skills'}>I handle everything</Link>—including user-focused UI/UX design, information architecture, responsive front-end systems, and deployment.</p>
        <p>I can design and build your artist portfolio, business page, festival hub, or e-commerce platform. <Link className='underline decoration-red transition-colors hover:text-red' href={'/contact'}>Let&apos;s talk!</Link></p>
    </div>
  );
}

export default ServicesHero;