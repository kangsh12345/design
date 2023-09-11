'use client';

import { Text } from '@/src/components/atoms/Typography';
import { Copyright } from '@phosphor-icons/react';

import { Box } from '../Box';
import { Stack } from '../Stack';

export interface CopyRightProps {
  size?: 'lg' | 'md';
}

export interface CopyRightSizeProps {
  textSize: 'body2' | 'caption';
  copyrightSize: 18 | 16;
}

export const CopyRight = ({ size = 'md' }: CopyRightProps) => {
  const copyRightSize: CopyRightSizeProps =
    size === 'lg'
      ? { textSize: 'body2', copyrightSize: 18 }
      : { textSize: 'caption', copyrightSize: 16 };

  return (
    <Box width="57" color="textDisabled">
      <Stack space="1" direction="horizontal" justify="center" align="center">
        <Copyright size={copyRightSize.copyrightSize} weight="bold" />
        <Text size={copyRightSize.textSize} weight="medium">
          Devote All Right Reserved
        </Text>
      </Stack>
    </Box>
  );
};