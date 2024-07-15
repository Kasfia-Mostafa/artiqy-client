declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}


// src/types/declarations.d.ts or src/types/postsData.d.ts
declare module '../../Data/PostsData' {
  import { PostProps } from './path/to/Post'; 
  const PostsData: PostProps[];
  export default PostsData;
}

declare module '@iconscout/react-unicons' {
  import { FC, SVGProps } from 'react';

  // Define the types for each icon component
  export const UilScenery: FC<SVGProps<SVGSVGElement>>;
  export const UilPlayCircle: FC<SVGProps<SVGSVGElement>>;
  export const UilLocationPoint: FC<SVGProps<SVGSVGElement>>;
  export const UilSchedule: FC<SVGProps<SVGSVGElement>>;

  // Export other icons or components if needed
}
