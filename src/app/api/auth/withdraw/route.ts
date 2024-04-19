import { NextResponse } from 'next/server';
import { removeFile } from '@/src/utils/fs';
import { getSession } from '@/src/utils/getSession';
import { PrismaClient } from '@prisma/client';
import path from 'path';

const rootDirectory = path.join(process.cwd(), 'public/assets/blog');
const prisma = new PrismaClient();

async function withdrawAccount(id: string, dirName: string) {
  const fullPath = `${rootDirectory}/${dirName}`;

  try {
    const result = await prisma.$transaction(async prisma => {
      await prisma.user.delete({ where: { id } });
      await prisma.post.deleteMany({ where: { userId: id } });
      const account = await prisma.account.findFirst({
        where: { userId: id },
      });
      if (account) {
        await prisma.account.delete({ where: { id: account.id } });
      }

      await removeFile(fullPath, 'folder');

      return '회원 탈퇴 성공';
    });

    return result;
  } catch (error) {
    console.error(error);
    throw new Error('회원 탈퇴 실패');
  }
}

export async function GET() {
  const session = await getSession();

  if (!session || session.user.id !== String(process.env.NEXT_PUBLIC_USERID)) {
    return NextResponse.json(
      { message: `더이상 지나갈 수 없다만,,?` },
      { status: 400 },
    );
  }

  try {
    const message = await withdrawAccount(
      session.user.id,
      session.user.dirName,
    );

    return NextResponse.json({ message, success: true }, { status: 200 });
  } catch (error) {
    console.log('transaction failed:', error);
    return NextResponse.json({ message: `회원 탈퇴 실패` }, { status: 400 });
  }
}
