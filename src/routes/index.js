// Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public Route
const publicRoutes = [
    { path: '/', comments: Home },
    { path: '/following', comments: Following },
    { path: '/:nickname', comments: Profile },
    { path: '/upload', comments: Upload, layout: HeaderOnly },
    { path: '/search', comments: Search, layout: null },
];

//Private Route
const privateRoutes = [];

export { privateRoutes, publicRoutes };
