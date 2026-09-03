import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup/Signup";
import Subscription from "./pages/Subscription/Subscription";
import AdminRoute from "./admin/routes/AdminRoute";
import AdminLayout from "./admin/components/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Movies from "./admin/pages/Movies";
import AddMovie from "./admin/pages/AddMovie";
import EditMovie from "./admin/pages/EditMovie";
import Categories from "./admin/pages/Categories";
import HeroBannerAdmin from "./admin/pages/HeroBanner";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import AddHeroBanner from "./admin/pages/AddHeroBanner";
import Downloads from "./pages/Downloads/Downloads";
import Shorts from "./pages/Shorts/Shorts";
import Watchlist from "./pages/Watchlist/Watchlist";
import MoviePlayer from "./components/movie/MoviePlayer";
import Search from "./components/Search";
import LikedMovies from "./pages/LikedMovies/LikedMovies";
import Account from "./pages/AccountSetting/Account"

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/subscription" element={<Subscription/>}/>
      <Route path="/signin" element={<Login />}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/downloads" element={<Downloads />}/>
        <Route path="/shorts" element={<Shorts />}/>
        <Route path="/watchlist" element={<Watchlist />}/>
        <Route path="/liked-movies" element={<LikedMovies />}/>
        <Route path="/account" element={<Account />}/>
      </Route>
      <Route path="/movie/:id" element={<MoviePlayer/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/termsOfUse" element={<TermsOfUse/>}/>
      <Route path="/subscription" element={<Subscription />}/>
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/add" element={<AddMovie />} />
          <Route path="movies/edit/:id" element={<EditMovie />} />
          <Route path="categories" element={<Categories />} />
          <Route path="hero" element={<HeroBannerAdmin />} />
          <Route path="hero/addHero-banner" element={<AddHeroBanner />} />
        </Route>
      </Route>
    </Routes>
  )
}


export default App
