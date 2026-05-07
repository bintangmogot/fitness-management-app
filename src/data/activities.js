/**
 * Activities Data Store
 * =====================
 * 
 * Recommended Cloudinary folder structure:
 * cloudinary://workstation-/gym-yohanes/
 *   activities/
 *     {event-slug}/
 *       cover.jpg
 *       photo-1.jpg
 *       photo-2.jpg
 *       video-1.mp4
 *       ...
 * 
 * Each photo/video `src` is the path AFTER "gym-yohanes/"
 * The page component builds full Cloudinary URLs automatically.
 * 
 * For videos, set type: 'video' — otherwise defaults to 'image'.
 * Caption is optional — leave as '' or omit for no caption.
 */

export const activities = [
  {
    id: 'sunday-run-club-apr-2026',
    title: 'Sunday Run Club',
    date: '2026-04-13',
    location: 'Canggu Beach',
    tag: 'Run Club',
    cover: 'images/yohanes/run-community',
    photos: [ 
      { src: 'images/yohanes/run-community2', caption: 'Starting line energy' },
      { src: 'images/yohanes/run-community3', caption: '' },
      { src: 'images/yohanes/yohanes3', caption: 'Coach Yohanes leading the pace' },
      { src: 'images/yohanes/yohanes4', caption: '' },
      { src: 'images/yohanes/yohanes6', caption: 'Cool down stretches after the run' },
    ]
  },
  {
    id: 'wednesday-fun-run',
    title: 'Wednesday Fun Run',
    date: '2026-05-06',
    location: 'Avenue Fitness',
    tag: 'Fun Run',
    cover: 'images/yohanes/wednesday-run',
    photos: [
      { src: 'images/yohanes/wednesday-run', caption: 'Start the run' },
      { src: 'images/yohanes/wednesday-run2', caption: 'Get to know each othe in So Munch Cafe' },
      { src: 'images/yohanes/run-yohanes', caption: 'Yohanes' },
    ]
  },
  {
    id: 'beach-pushup-challenge-apr-2026',
    title: 'Beach Push Up Challenge',
    date: '2026-04-05',
    location: 'Batu Bolong Beach',
    tag: 'Challenge',
    cover: 'images/yohanes/yohanes',
    photos: [
      { src: 'images/yohanes/yohanes', caption: 'Getting ready for the challenge' },
      { src: 'images/yohanes/yohanes2', caption: 'Full send mode' },
      { src: 'images/yohanes/yohanes3', caption: '' },
      { src: 'images/yohanes/yohanes4', caption: 'Post-challenge vibes' },
      { src: 'images/yohanes/yohanes6', caption: 'Team photo after 200 push ups' },
    ]
  },
  {
    id: 'clients-sessions-2026',
    title: 'Clients Sessions',
    date: '2026',
    location: 'Avenue Fitness',
    tag: 'Training',
    cover: 'images/clients/kenan-selfie',
    photos: [
      { src: 'videos/MICHELE', type: 'video', caption: 'Private PT Training Michele' },
      { src: 'videos/LUCAS', type: 'video', caption: 'Private PT Training Lucas' },
      { src: 'videos/MARIA', type: 'video', caption: 'Private PT Training Maria' },
      { src: 'videos/GRETA', type: 'video', caption: 'Private PT Training Greta' },
      { src: 'videos/KENAN', type: 'video', caption: 'Private PT Training Kenan' },
      { src: 'videos/MIRYAM', type: 'video', caption: 'Private PT Training Miryam' },
      { src: 'videos/CLAUDIA', type: 'video', caption: 'Private PT Training Claudia' },
      { src: 'videos/LAURA', type: 'video', caption: 'Private PT Training Laura' },
      { src: 'videos/CLAUDIA_', type: 'video', caption: 'Private PT Training Claudia_' },
    ]
  },
  {
    id: 'community-fun-run-mar-2026',
    title: 'Canggu Community Fun Run',
    date: '2026-03-22',
    location: 'Canggu',
    tag: 'Fun Run',
    cover: 'images/yohanes/run-community3',
    photos: [
      { src: 'images/yohanes/run-community3', caption: 'Race day atmosphere' },
      { src: 'images/yohanes/run-community', caption: '' },
    ]
  },
];
