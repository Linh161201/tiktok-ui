import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public Route
const publicRoutes = [
    { path: config.routes.home, comments: Home },
    { path: config.routes.following, comments: Following },
    { path: config.routes.profile, comments: Profile },
    { path: config.routes.upload, comments: Upload, layout: HeaderOnly },
    { path: config.routes.search, comments: Search, layout: null },
];

//Private Route
const privateRoutes = [];

export { privateRoutes, publicRoutes };
