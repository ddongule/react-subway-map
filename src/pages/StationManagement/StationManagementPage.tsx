import { Suspense } from 'react';
import Template from '../../components/@common/Template/Template';
import StationAddForm from '../../components/StationManagement/StationAddForm/StationAddForm';
import StationList from '../../components/StationManagement/StationList/StationList';
import useStation from '../../hooks/useStation';
import { Station } from '../../types';

const StationManagementPage = () => {
  const { stations, deleteStation } = useStation();

  return (
    <Template type="vertical">
      <StationAddForm />
      <Suspense fallback={true}>
        {
          <StationList
            stations={stations.data as Station[]}
            deleteStation={deleteStation}
          />
        }
      </Suspense>
    </Template>
  );
};

export default StationManagementPage;
