import routesConfig from '~/config/routes';

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
    { path: routesConfig.home, comments: Home },
    { path: routesConfig.following, comments: Following },
    { path: routesConfig.profile, comments: Profile },
    { path: routesConfig.upload, comments: Upload, layout: HeaderOnly },
    { path: routesConfig.search, comments: Search, layout: null },
];

//Private Route
const privateRoutes = [];

export { privateRoutes, publicRoutes };
