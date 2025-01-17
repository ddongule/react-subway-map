import { StationForm } from './../types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import useLogin from './useLogin';
import {
  requestAddStation,
  requestDeleteStation,
  requestStations,
} from '../service/station';
import { requestLines } from '../service/line';
import { Line, StationId } from '../types';
import { QUERY } from '../constants/API';

const useStation = () => {
  const { accessToken } = useLogin();
  const queryClient = useQueryClient();
  const lines = useQuery('requestLines', () => requestLines(accessToken));

  const addMutation = useMutation(
    (form: StationForm) => requestAddStation(form, accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY.REQUEST_STATIONS);
      },
      onError: () => {
        alert('역을 추가하지 못했습니다!');
      },
    }
  );

  const deleteMutation = useMutation(
    (stationId: StationId) => requestDeleteStation(stationId, accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY.REQUEST_STATIONS);
      },
      onError: () => {
        alert('역을 삭제하지 못했습니다!');
      },
    }
  );

  const stations = useQuery(QUERY.REQUEST_STATIONS, () =>
    requestStations(accessToken)
  );

  const addStation = (form: StationForm) => {
    addMutation.mutate(form);
  };

  const isStationInLine = (lines: Line[], stationId: number) =>
    lines.some((line: Line) =>
      line.stations.some((station) => station.id === stationId)
    );

  const deleteStation = (stationId: StationId) => {
    if (isStationInLine(lines.data as Line[], stationId)) {
      alert('노선에 등록된 역은 삭제하실 수 없습니다.');
      return;
    }

    if (!window.confirm('정말로 삭제하시겠습니까?')) return;

    deleteMutation.mutate(stationId);
  };

  return {
    stations,
    addMutation,
    deleteMutation,
    addStation,
    deleteStation,
  };
};

export default useStation;
