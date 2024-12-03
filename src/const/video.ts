export interface VideoDataType {
  id: number;
  video: string;
  image: string;
  alt: string;
}

export const data: VideoDataType[] = [
  {
    id: 1,
    video: '/images/editting/video-3.MP4',
    image: '/images/editting/picture-1.jpg',
    alt: 'video-1'
  },
  {
    id: 2,
    video: '/images/editting/video-4.MP4',
    image: '/images/editting/picture-2.jpg',
    alt: 'video-2'
  },
  {
    id: 3,
    video: '/images/editting/video-1.MP4',
    image: '/images/editting/picture-3.jpg',
    alt: 'video-3'
  },
  {
    id: 4,
    video: '/images/editting/video-6.MP4',
    image: '/images/editting/picture-4.jpg',
    alt: 'video-4'
  },
  {
    id: 5,
    video: '/images/editting/video-2.MP4',
    image: '/images/editting/picture-4.jpg',
    alt: 'video-5'
  },
  {
    id: 6,
    video: '/images/editting/video-5.MP4',
    image: '/images/editting/picture-6.jpg',
    alt: 'video-6'
  }
]