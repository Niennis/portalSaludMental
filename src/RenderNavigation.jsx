import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "./components/pages/login/AuthWrapper";
import { nav } from "./components/navigation"
import BlogView from "./components/pages/Blog/BlogView";

export const RenderRoutes = () => {
  const { user } = AuthData();
  return (
    <Routes>
      {
        nav.map((route, i) => {
          if (route.isPrivate && user.isAuthenticated) {
            return <Route key={i} path={route.path} element={route.element} />
          } else if (!route.isPrivate) {
            return <Route key={i} path={route.path} element={route.element} />
          } else {
            return <Route key={i} path='/blogview' element={ <BlogView /> } />
          }
        })
      }
    </Routes>
  )
}