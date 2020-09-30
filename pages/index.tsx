import React, { useState } from 'react';
import PrefectureCheckBox from 'components/PrefectureCheckBox';
import ChartLine from 'components/ChartLine';
import Box from '@material-ui/core/Box';
import RadioButtonList from 'components/RadioButtonList';
import InitPrefectureList from 'util/InitPrefectureList';
import InitChartList from 'util/InitChartList';
import UpdateCharList from 'util/UpdateChartList';

export default function Home() {
  const [prefectureList, setPrefectureList] = useState(InitPrefectureList());

  const [chartList, setChartList] = useState(InitChartList());

  const [selectedValue, setSelectedValue] = useState('1');
  const [radioButtonLabelList, setRadioButtonLabelList] = useState([
    { name: '平均気温', id: '1', selected: true },
    { name: '降水量', id: '2', selected: false },
  ]);

  const handleRadioButtonChange = (event) => {
    setSelectedValue(event.target.value);

    const tmpRadioButtonLabelList = [];
    radioButtonLabelList.map((radioButtonLabel, index) => {
      radioButtonLabel.selected = radioButtonLabel.id === event.target.value;
      tmpRadioButtonLabelList[index] = radioButtonLabel;
    });
    setRadioButtonLabelList(tmpRadioButtonLabelList);

    setPrefectureList(InitPrefectureList());

    setChartList(InitChartList());
  };

  const handleCheckBoxChange = (event) => {
    UpdateCharList(
      event,
      prefectureList,
      selectedValue,
      chartList,
      setChartList,
      setPrefectureList
    );
  };

  return (
    <>
      <h1>全国の平均気温、降水量</h1>
      <h3>グラフに表示する値</h3>
      <Box ml={2}>
        <RadioButtonList
          handleRadioButtonChange={handleRadioButtonChange}
          radioButtonLabelList={radioButtonLabelList}
        ></RadioButtonList>
      </Box>
      <h3>都道府県</h3>
      <Box ml={2}>
        <PrefectureCheckBox
          prefectureList={prefectureList}
          handleCheckBoxChange={handleCheckBoxChange}
        ></PrefectureCheckBox>
      </Box>
      <h3>グラフ</h3>
      <ChartLine chartList={chartList}></ChartLine>
    </>
  );
}
