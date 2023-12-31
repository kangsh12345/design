'use client';

import { Box } from '../../atoms/Box';
import { ListItem, Popover } from '../../atoms/Popover';
import { PostHeader } from '../../organisms/Header';
import { PostSubHeader } from '../../organisms/PostSubHeader';

export interface FilePostPageProps {
  title: string;
  own: boolean;
  path: string;
}

export const FilePostPage = ({ title, own, path }: FilePostPageProps) => {
  const popoverList: ListItem[] = [
    { value: '대제목1', heading: 1 },
    { value: '대제목2', heading: 1 },
    { value: '중제목1', heading: 2 },
    { value: '소제목1', heading: 3 },
    { value: '대제목3', heading: 1 },
  ];

  return (
    <Box
      position="relative"
      height="full"
      minHeight="viewHeight"
      backgroundColor="backgroundBase"
    >
      <PostHeader />
      {own && <PostSubHeader path={path} />}
      <Box
        display="flex"
        height="full"
        paddingY="6"
        paddingX="2"
        justifyContent="center"
      >
        <Popover size="md" list={popoverList} />
      </Box>
    </Box>
  );
};
