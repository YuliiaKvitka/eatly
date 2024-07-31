'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/componentsStyles/Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split the pathname into individual segments
  const pathSegments = pathname.split('/').filter(segment => segment);

  // Convert each segment to have the first letter capitalized
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className='container'>
      <div className={styles.breadcrumbs}>
        <ul className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <Link href="/">
              Home
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            const isLast = index === pathSegments.length - 1;
            const capitalizedSegment = capitalize(segment);
  
            return (
              <li key={index} className={isLast ? styles.breadcrumbItemActive : styles.breadcrumbItem}>
                {isLast ? (
                  capitalizedSegment
                ) : (
                  <Link href={href}>
                    {capitalizedSegment}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;

