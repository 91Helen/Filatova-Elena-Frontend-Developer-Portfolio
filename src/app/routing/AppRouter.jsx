import { Suspense, lazy } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@/widgets/Loader';

const MainPage = lazy(() => import('@/pages/MainPage/ui/MainPage'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};