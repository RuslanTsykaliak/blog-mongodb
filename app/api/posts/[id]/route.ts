import Post from '@/models/post';
import { connectToDB } from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params: { id } }: { params: { id: string } }): Promise<NextResponse> {
  try {
    const dbConnection = await connectToDB();
    const PostModel = await Post.findOne({
      number: id,
    });

    if (!PostModel) {
      return NextResponse.error(new Error('No post found'));
    }

    return NextResponse.json(PostModel);
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error('Error fetching post'));
  }
}
