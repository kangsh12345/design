'use client';

import { useState } from 'react';
import Image from 'next/image';
import star from '@phosphor-icons/core/fill/star-fill.svg';

import { Avatars } from '../../atoms/Avatars';
import { Box } from '../../atoms/Box';
import { Stack } from '../../atoms/Stack';
import { IconText } from '../../atoms/Text';
import { ThemeSwitcher } from '../../atoms/ThemeSwitcher';
import { Drawer } from '../../moecules/Drawer';
import { HeaderLogo } from '../../moecules/HeaderLogo';
import * as styles from './postHeader.css';

export const PostHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className={styles.root}>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box className={styles.box}>
        <Box className={styles.breakpoint({ type: 'side' })}>
          <HeaderLogo isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
        <Box display="flex" flexShrink={0}>
          <Stack space="6" direction="horizontal">
            <Stack direction="horizontal" space="2" align="center">
              <Avatars size="md" text="김아무개" />
              <Box fontSize="1" fontWeight={700} color="textSecondary">
                / 프론트
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Stack space="3" direction="horizontal" align="center">
          <Stack direction="horizontal" space="6">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="textTertiary"
              paddingLeft="6"
              fontSize="1"
            >
              2023년 7월 9일
            </Box>
            <IconText
              type="cardhover"
              size="lg"
              leftIcon={<Image src={star} alt="icon" fill sizes="100%" />}
            >
              <Box color="textSecondary">20</Box>
            </IconText>
          </Stack>
        </Stack>
      </Box>
      <Box marginTop="-2" className={styles.switcher}>
        <ThemeSwitcher size="md" />
      </Box>
    </Box>
  );
};
