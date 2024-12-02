import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MainLayout from "../layouts/MainLayout";

export function MainRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          {/* 
          
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="news/:id" element={<NewsItem/>}/>
                    <Route path="info" element={<Info/>}/>
                    <Route path="personalAccount" element={<AuthProtectedRoute><PersonalAccount/></AuthProtectedRoute>}/> */}
        </Route>
        {/* <Route path="*" element={<NotFoundPage/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
