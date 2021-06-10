import { configureStore } from '@reduxjs/toolkit';
import ExpandedViewFeature from '../components/expandedView/ExpandedViewFeature';
import NavigationFeature from '../components/navigation/NavigationFeature';
import ResultsFeature from '../components/results/ResultsFeature';
import SideBarFeature from '../components/sideBar/SideBarFeature';

export const store = configureStore({
  reducer: {
    sideBarSlice: SideBarFeature,
    NavigationSlice: NavigationFeature,
    resultsSlice: ResultsFeature,
    expandedViewSlice: ExpandedViewFeature,
  },
});
