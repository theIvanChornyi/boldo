import { IPost } from './blog.types';
import blogItem1 from '../../assets/images/blog-item-1.jpg';
import blogItem2 from '../../assets/images/blog-item-2.jpg';
import blogItem3 from '../../assets/images/blog-item-3.jpg';
import blogAvatar1 from '../../assets/avatars/chandler-bing.jpg';
import blogAvatar2 from '../../assets/avatars/rachel-green.jpg';
import blogAvatar3 from '../../assets/avatars/monica-geller.jpg';

export const INITIAL_POSTS: Array<IPost> = [
  {
    id: 'def1',
    createdAt: '2021-11-22T12:16:42.179Z',
    name: 'Chandler Bing',
    avatar: blogAvatar1,
    picture: blogItem1,
    text: 'Pitch termsheet backing validation focus release.',
    title: 'Category',
  },
  {
    id: 'def2',
    createdAt: '2021-11-22T12:16:42.179Z',
    name: 'Rachel Green',
    avatar: blogAvatar2,
    picture: blogItem2,
    text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    title: 'Category',
  },
  {
    id: 'def3',
    createdAt: '2021-11-22T12:16:42.179Z',
    name: 'Rachel Green',
    avatar: blogAvatar3,
    picture: blogItem3,
    text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    title: 'Category',
  },
];
