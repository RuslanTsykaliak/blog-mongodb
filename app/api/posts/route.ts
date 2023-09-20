import Post from '@/models/post'
import { connectToDB } from '@/utils/db'
import { NextResponse } from 'next/server'


export async function GET(req: Request): Promise<NextResponse> {
    const dbConnection = await connectToDB();
    try {
      const PostModel = await Post.find();
      if (!PostModel) {
        return NextResponse.error(new Error('No posts found'));
      }
      return NextResponse.json(PostModel);
    } catch (error) {
      return NextResponse.error(new Error('Error fetching posts'));
    }
  }