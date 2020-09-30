import axios from 'axios';

function UpdateCharList(
  event,
  prefectureList,
  selectedValue,
  chartList,
  setChartList,
  setPrefectureList
) {
  const tmpPrefectureList = [];
  let tmpChartList = [];
  prefectureList.map((prefecture, index) => {
    if (
      prefecture.PrefectureCode === event.target.name &&
      !prefecture.selected
    ) {
      prefecture.selected = true;
      const request = {
        OperationType: 'QUERY',
        Keys: {
          PrefectureCode: selectedValue + event.target.name,
        },
      };

      axios
        .post(process.env.NEXT_PUBLIC_API_GATEWAY_URL, request)
        .then((response) => {
          tmpChartList = [
            {
              month: chartList[0].month,
              data1: response.data.Items[0].January,
            },
            {
              month: chartList[1].month,
              data1: response.data.Items[0].February,
            },
            {
              month: chartList[2].month,
              data1: response.data.Items[0].March,
            },
            {
              month: chartList[3].month,
              data1: response.data.Items[0].April,
            },
            { month: chartList[4].month, data1: response.data.Items[0].May },
            {
              month: chartList[5].month,
              data1: response.data.Items[0].June,
            },
            {
              month: chartList[6].month,
              data1: response.data.Items[0].July,
            },
            {
              month: chartList[7].month,
              data1: response.data.Items[0].August,
            },
            {
              month: chartList[8].month,
              data1: response.data.Items[0].September,
            },
            {
              month: chartList[9].month,
              data1: response.data.Items[0].October,
            },
            {
              month: chartList[10].month,
              data1: response.data.Items[0].November,
            },
            {
              month: chartList[11].month,
              data1: response.data.Items[0].December,
            },
          ];
          setChartList(tmpChartList);
        });
    } else {
      prefecture.selected = false;
      tmpChartList = [
        { month: chartList[0].month, data1: null },
        { month: chartList[1].month, data1: null },
        { month: chartList[2].month, data1: null },
        { month: chartList[3].month, data1: null },
        { month: chartList[4].month, data1: null },
        { month: chartList[5].month, data1: null },
        { month: chartList[6].month, data1: null },
        { month: chartList[7].month, data1: null },
        { month: chartList[8].month, data1: null },
        { month: chartList[9].month, data1: null },
        { month: chartList[10].month, data1: null },
        { month: chartList[11].month, data1: null },
      ];
      setChartList(tmpChartList);
    }
    tmpPrefectureList[index] = prefecture;
  });
  setPrefectureList(tmpPrefectureList);
}

export default UpdateCharList;
