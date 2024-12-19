export interface VideoDataType {
  id: number;
  video: string;
  image: string;
  alt: string;
}

export const data: VideoDataType[] = [
  {
    id: 1,
    video: 'https://www.youtube.com/embed/YAs0KHwz1SY',
    image: '/images/editting/video-1-1.jpg',
    alt: 'video-1'
  },
  {
    id: 2,
    video: 'https://www.youtube.com/embed/SrjiTovLIbE',
    image: '/images/editting/video-2-1.jpg',
    alt: 'video-2'
  },
  {
    id: 3,
    video: 'https://www.youtube.com/embed/zXYEYmQpyN4',
    image: '/images/editting/video-3-1.jpg',
    alt: 'video-3'
  },
  {
    id: 4,
    video: 'https://www.youtube.com/embed/cqZUFODjXIQ',
    image: '/images/editting/video-4-1.jpg',
    alt: 'video-4'
  },
  {
    id: 5,
    video: 'https://www.youtube.com/embed/MSURcRQIAUk',
    image: '/images/editting/video-5.jpg',
    alt: 'video-5'
  },
  {
    id: 6,
    video: 'https://www.youtube.com/embed/C-sXQxcPl_E',
    image: '/images/editting/video-6.jpg',
    alt: 'video-6'
  }
]