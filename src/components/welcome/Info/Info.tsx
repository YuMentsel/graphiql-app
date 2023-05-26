'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import styles from './Info.module.scss';
import { TECH_STACK_LINK } from '@/common';
import { RS_LINK } from '@/components/layout/Footer/FooterConst';

export const Info = (): JSX.Element => {
  const t = useTranslations('Info');
  return (
    <section className={styles.info}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>{t('title')}</h1>
        <Link href={'https://rickandmortyapi.com/'} target="blank" className={styles.api}>
          {t('api')}
        </Link>
        <p className={styles.descr}>
          {t.rich('descriptionShort', {
            strong: (chunks) => <strong className={styles.strong}>{chunks}</strong>,
            link: (chunk) => (
              <a className={styles.techStackLink} href={TECH_STACK_LINK}>
                {chunk}
              </a>
            ),
          })}
        </p>
        <p className={styles.descr}>
          {t.rich('descriptionAdditional', {
            strong: (chunks) => <strong className={styles.strong}>{chunks}</strong>,
            link: (chunk) => (
              <a className={styles.techStackLink} href={RS_LINK}>
                {chunk}
              </a>
            ),
          })}
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.blur} />
        <div className={styles.blur} />
        <div className={styles.blur} />
        <MouseParallaxContainer
          className={styles.parallax}
          containerStyle={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
          globalFactorX={0.25}
          globalFactorY={0.25}
          resetOnLeave
        >
          <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
            <Image
              className={styles.img}
              priority
              fill
              sizes="100%"
              src={'/img/bg.webp'}
              alt="rick and morty"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={-0.5}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/1.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild className={styles.animation} factorX={0.2} factorY={0.2}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/2.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={-0.7} factorY={-0.5}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/3.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild className={styles.animation} factorX={0.4} factorY={0.3}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/4.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={-0.2} factorY={0.6}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/5.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild className={styles.animation} factorX={-0.5} factorY={0.3}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/6.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={-0.5}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/7.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.6} factorY={-0.4}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/8.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild className={styles.animation} factorX={0.5} factorY={0.5}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/9.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.3} factorY={-0.5}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/10.webp'}
              alt=""
            />
          </MouseParallaxChild>
          <MouseParallaxChild className={styles.animation} factorX={-0.3} factorY={0.5}>
            <Image
              className={styles.gadget}
              fill
              sizes="100%"
              src={'/img/parallax/11.webp'}
              alt=""
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};
